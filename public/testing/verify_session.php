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
$inputSessionId = $data['sessionId'];

// Check if the username exists in the database
$sql = "SELECT * FROM test WHERE session_id = :sessionid";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':sessionid', $inputSessionId);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode(['status' => 'success', 'message' => 'user found successfullly', 'username' => $user['username'], 'id' => $user['id'], 'sessionId' => $user['session_id'] ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Username not found']);
}
?>