<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'api/nav_db_connection.php';

// Get data from React frontend
$data = json_decode(file_get_contents('php://input'), true);
$inputSessionId = $data['sessionId'];
$inputUserId = $data['id'];

try{


// Update Session id
$sql = "UPDATE users SET session_id = :sessionid WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':sessionid', $inputSessionId);
$stmt->bindParam(':id', $inputUserId);
//$stmt->execute();
//$user = $stmt->fetch(PDO::FETCH_ASSOC);

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
