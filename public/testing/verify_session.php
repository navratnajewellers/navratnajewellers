<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'api/nav_db_connection.php';

// Get data from React frontend
$data = json_decode(file_get_contents('php://input'), true);
$inputSessionId = $data['sessionId'];

// Check if the username exists in the database
$sql = "SELECT * FROM users WHERE session_id = :sessionid";
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
