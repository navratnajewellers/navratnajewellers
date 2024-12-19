<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


require '../api/nav_db_connection.php';

try {

    // Get JSON data from request body
    $data = json_decode(file_get_contents("php://input"));

    if (!empty($data->goldRate) && !empty($data->silverRate) ) {
        $goldRate = htmlspecialchars(strip_tags($data->goldRate));
	$silverRate = htmlspecialchars(strip_tags($data->silverRate));

// Update Address into the database
	$sql = "UPDATE gold_price SET price_1_gram_24K = :gold_rate, price_1_gram_24K_s = :silver_price WHERE id = 1";
        $stmt = $pdo->prepare($sql);
	$stmt->bindParam(':gold_rate', $goldRate);
        $stmt->bindParam(':silver_price', $silverRate);
        


        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Rate updated successfully."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to update rate."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>