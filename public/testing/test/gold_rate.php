<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require '../api/nav_db_connection.php';

try {


     // Insert into the database
        //$sql = "INSERT INTO users (username, password, email) VALUES (:username, :password, :email)";
	$sql = "SELECT * FROM gold_price";
        $stmt = $pdo->prepare($sql);
	$stmt->execute();
	$user = $stmt->fetch(PDO::FETCH_ASSOC);

// calculating the price of the gold with making charge and gst included

    $goldMakingCharge = $user['price_1_gram_24K'] * $user['making_charge_gold'];
    $goldGst = ($user['price_1_gram_24K'] + $goldMakingCharge) * $user['gst_gold'];
    $goldPrice = round($user['price_1_gram_24K'] + $goldMakingCharge + $goldGst);

// calculating the price of the silver with making charge and gst included

    $silverGst = ($user['price_1_gram_24K_s'] + $user['making_charge_silver']) * $user['gst_gold'];
    $silverPrice = round($user['price_1_gram_24K_s'] + $user['making_charge_silver'] + $silverGst);

// adding two data to user

$user["g"] = $goldPrice;
$user["s"] = $silverPrice;

        if ($user) {
            echo json_encode(["status" => "success","message" => "Price Data retrive successfuly.", "record" => $user, "g" => $goldPrice, "s" => $silverPrice ]);
        } else {
            echo json_encode(["message" => "Failed to retrive price data."]);
        }

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
