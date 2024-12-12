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
$inputPassword = $data['password'];

try{

$hashedPassword = password_hash($inputPassword, PASSWORD_DEFAULT);

// Update Session id
$sql = "UPDATE users SET password = :password WHERE email = :email";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':password', $hashedPassword);
$stmt->bindParam(':email', $inputEmail);
//$stmt->execute();
//$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($stmt->execute()) {
    // display message
	echo json_encode(['status' => true, 'message' => 'Password updated successfully']);
    } else {
    echo json_encode(['status' => false, 'message' => 'Failed to update']);
}


} catch (PDOException $e){
	echo json_encode(['status' => false, 'message' => 'Error: '. $e->getMessage()]);
}

?>
