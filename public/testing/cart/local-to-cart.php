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

    $movedQuantity = 0;


    if (!empty($data['user_id']) && !empty($data['hashedId'])) {


// getting the price of the gold
$priceQuery = "SELECT * FROM gold_price";
$priceStmt = $pdo->prepare($priceQuery);
$priceStmt->execute();
$priceItems = $priceStmt->fetch();



// assigning values
    $userId = $data['user_id'];
    $localUserId = $data['hashedId'];
    // $goldPrice = $priceItems['price_1_gram_24K'];

    // calculating the price of the gold with making charge and gst
    $makingCharge = $priceItems['price_1_gram_24K'] * $priceItems['making_charge_gold'];
    $gst = ($priceItems['price_1_gram_24K'] + $makingCharge) * $priceItems['gst_gold'];
    $goldPrice = round($priceItems['price_1_gram_24K'] + $makingCharge + $gst);


// Move Cart Items to Order Items
// Fetch items from cart

$cartItemsQuery = "SELECT * FROM offline_cart WHERE local_user_id = ?";
$cartItemsStmt = $pdo->prepare($cartItemsQuery);
$cartItemsStmt->execute([$localUserId]);
$cartItems = $cartItemsStmt->fetchAll();

foreach ($cartItems as $item) {


	//check product already add to cart with user and product ID
	$sql = "SELECT * FROM cart WHERE user_id = :user_id AND product_id = :product_id";
	$stmt = $pdo->prepare($sql);
	$stmt->bindParam(':user_id', $userId);
	$stmt->bindParam(':product_id', $item['product_id'] );
	$stmt->execute();
	$user = $stmt->fetch(PDO::FETCH_ASSOC);


	if ($user) {
	    // update the price and quantity
		$quantity = $user['quantity'] + $item['quantity'];
		$price = $goldPrice * $quantity;

		// Update Session id
		$updateCartQuery = "UPDATE cart SET quantity = :quantity, price = :price WHERE user_id = :user_id AND product_id = :product_id";
		$updateCartStmt = $pdo->prepare($updateCartQuery);
		$updateCartStmt->bindParam(':user_id', $userId, PDO::PARAM_INT);
		$updateCartStmt->bindParam(':product_id', $item['product_id'], PDO::PARAM_INT);
		$updateCartStmt->bindParam(':quantity', $quantity);
		$updateCartStmt->bindParam(':price', $price);
		$updateCartStmt->execute();

    
	} else {

		// update the quantity and price
		$quantity = $item['quantity'];
		$price = $goldPrice * $quantity;

		    // Insert into the database
	        $insertCartQuery = "INSERT INTO cart (user_id, product_id, quantity, price) VALUES (:user_id, :product_id, :quantity, :price)";
	        $insertCartStmt = $pdo->prepare($insertCartQuery);
	        $insertCartStmt->bindParam(':user_id', $userId);
	        $insertCartStmt->bindParam(':product_id', $item['product_id']);
		$insertCartStmt->bindParam(':quantity', $quantity);
		$insertCartStmt->bindParam(':price', $price);
		$insertCartStmt->execute();

	        
	}

	// updated the total moved Quantity
	$movedQuantity = $movedQuantity + $item['quantity'];


}

// Clear the Cart

$clearCartQuery = "DELETE FROM offline_cart WHERE local_user_id = ?";
$clearCartStmt = $pdo->prepare($clearCartQuery);
$clearCartStmt->execute([$localUserId]);


	echo json_encode(["status" => "success", "message" => "Items moved from local cart to user cart successfully", "movedQuantity" => $movedQuantity]);
    } else {
        echo json_encode(["message" => "Invalid input."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>