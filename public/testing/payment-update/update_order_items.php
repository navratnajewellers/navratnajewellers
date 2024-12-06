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

    $userId = $data['user_id'];
    $orderId = $data['orderId'];
    $goldPrice = $data['goldPrice'];

    if (!empty($data['status']) && $data['status'] == 'success') {

// Move Cart Items to Order Items
// Fetch items from cart

$cartItemsQuery = "SELECT * FROM cart WHERE user_id = ?";
$cartItemsStmt = $pdo->prepare($cartItemsQuery);
$cartItemsStmt->execute([$userId]);
$cartItems = $cartItemsStmt->fetchAll();

foreach ($cartItems as $item) {
    $orderItemQuery = "INSERT INTO order_items (order_id_oi, product_id_oi, quantity_oi, price_oi) VALUES (?, ?, ?, ?)";
    $orderItemStmt = $pdo->prepare($orderItemQuery);
    $orderItemStmt->execute([$orderId, $item['product_id'], $item['quantity'], $goldPrice * $item['quantity'] ]);
}

// Clear the Cart

$clearCartQuery = "DELETE FROM cart WHERE user_id = ?";
$clearCartStmt = $pdo->prepare($clearCartQuery);
$clearCartStmt->execute([$userId]);


	echo json_encode(["message" => "Order has been placed successfuly"]);
    } else {
        echo json_encode(["message" => "Invalid input."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
