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
$inputEmail = $data['email'];
$inputMobileNo = $data['phone_no'];

// Check if the username exists in the database
// $sql = "SELECT * FROM users WHERE email = :email";
$sql = "SELECT * FROM users INNER JOIN addresses ON users.id = addresses.user_id WHERE users.email = :email AND addresses.phone_number = :mobile_no";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':email', $inputEmail);
$stmt->bindParam(':mobile_no', $inputMobileNo);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode(['status' => 'success', 'message' => 'Data matched' ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Data did not matched']);
}
?>
