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


     // Insert into the database
        //$sql = "INSERT INTO test (username, password, email) VALUES (:username, :password, :email)";
	$sql = "SELECT * FROM gold_price";
        $stmt = $pdo->prepare($sql);
	$stmt->execute();
	$user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            echo json_encode(["status" => "success","message" => "Price Data retrive successfuly.", "record" => $user ]);
        } else {
            echo json_encode(["message" => "Failed to retrive price data."]);
        }

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
