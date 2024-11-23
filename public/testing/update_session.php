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
$inputUserId = $data['id'];

try{


// Upadte Session id
$sql = "UPDATE test SET session_id = :sessionid WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':sessionid', $inputSessionId);
$stmt->bindParam(':id', $inputUserId, PDO::PARAM_INT);
$stmt->execute();
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($stmt->execute()) {
    // display message
	echo json_encode(['status' => true, 'message' => 'Record updated successfully']);
    } else {
    echo json_encode(['status' => false, 'message' => 'Failed to update']);
}


} catch (PDOException $e){
	echo json_encode(['status' => false, 'message' => 'Error: '. $e->getMessage()]);
}

?>
