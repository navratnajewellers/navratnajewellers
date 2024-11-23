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
$inputUsername = $data['username'];
$inputPassword = $data['password'];

// Check if the username exists in the database
$sql = "SELECT password FROM test WHERE username = :username";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':username', $inputUsername);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    // Verify the password
    if (password_verify($inputPassword, $user['password'])) {
        echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid password']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Username not found']);
}
?>
