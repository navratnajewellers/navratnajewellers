<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$dsn = "mysql:host=127.0.0.1;dbname=navratna";
$username = "root";
$password = "";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Get JSON data from request body
    $data = json_decode(file_get_contents('php://input'), true);


    if (!empty($data['order_id'])) {



// assigning values
    $orderId = $data['order_id'];
    $updatedStatus = $data['updated_status'];


// Move Cart Items to Order Items
// Fetch items from cart

$orderItemsQuery = "SELECT * FROM order_items WHERE order_id_oi = ?";
$orderItemsStmt = $pdo->prepare($orderItemsQuery);
$orderItemsStmt->execute([$orderId]);
$orderItems = $orderItemsStmt->fetchAll();

foreach ($orderItems as $item) {


		// Update Session id
		$updateOrderItemQuery = "UPDATE order_items SET delivery_status = :updated_status WHERE order_id_oi = :order_id";
		$updateOrderItemStmt = $pdo->prepare($updateOrderItemQuery);
		$updateOrderItemStmt->bindParam(':updated_status', $updatedStatus);
		$updateOrderItemStmt->bindParam(':order_id', $orderId);
		$updateOrderItemStmt->execute();



}



	echo json_encode(["status" => "success", "message" => "Order has cancel successfully"]);
    } else {
        echo json_encode(["message" => "Invalid input."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
