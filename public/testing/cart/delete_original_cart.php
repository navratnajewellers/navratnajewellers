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
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->cart_id) && !empty($data->action_type)) {
	$cartId = htmlspecialchars(strip_tags($data->cart_id));
	$actionType = htmlspecialchars(strip_tags($data->action_type));

    // price of single product include with making charge and gst
    $productPrice = htmlspecialchars(strip_tags($data->product_price));

	$quantity = htmlspecialchars(strip_tags($data->quantity));

    // set the price of product
    $price = $productPrice * $quantity;

    
	if ($actionType == 'remove') {

        //delete the cart item where cart id match
        $sql = "DELETE FROM cart WHERE id = :cart_id";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':cart_id', $cartId, PDO::PARAM_INT);

		if ($stmt->execute()) {
		    // display message
			echo json_encode(['status' => true, 'message' => 'Cart deleted successfully']);
		    } else {
		    echo json_encode(['status' => false, 'message' => 'Failed to delete cart']);
		}

    
	} else if($actionType == 'increaseDecreaseQuantity') {

		    // Update Session id
		$sql = "UPDATE cart SET quantity = :quantity, price = :price WHERE id = :cart_id";
		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(':cart_id', $cartId, PDO::PARAM_INT);
		$stmt->bindParam(':quantity', $quantity);
		$stmt->bindParam(':price', $price);

		if ($stmt->execute()) {
		    // display message
			echo json_encode(['status' => true, 'message' => 'Cart quantity updated successfully']);
		    } else {
		    echo json_encode(['status' => false, 'message' => 'Failed to quantity updated cart']);
		}

	} 

        
    } else {
        echo json_encode(["message" => "Invalid input."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
