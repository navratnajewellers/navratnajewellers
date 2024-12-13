<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require '../api/nav_db_connection.php';


// Check if the username exists in the database
$sql = "SELECT * FROM product";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$user = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($user) {
    // displat product
    echo json_encode(['status' => 'success', 'message' => 'product details fetch successfullly', 'productData' => $user ]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'product not found']);
}
?>
