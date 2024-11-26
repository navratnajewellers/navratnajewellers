<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Database connection
$dsn = 'mysql:host=127.0.0.1;dbname=navratna';
$username = 'root'; // Change to your database username
$password = '';     // Change to your database password
try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}

// Get data from React frontend
$data = json_decode(file_get_contents('php://input'), true);
$inputWeight = $data['weight'];

// Check if the username exists in the database
$sql = "SELECT * FROM product WHERE weight = :weight";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':weight', $inputWeight);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    // displat product
    echo json_encode(['status' => 'success', 'message' => 'product details fetch successfullly', 'productData' => $user ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'product not found']);
}
?>
