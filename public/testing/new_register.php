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

    if (!empty($data->username) && !empty($data->password)) {
        $username = htmlspecialchars(strip_tags($data->username));
	$email = htmlspecialchars(strip_tags($data->email));
        $password = htmlspecialchars(strip_tags($data->password));

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert into the database
        $sql = "INSERT INTO users (username, password, email) VALUES (:username, :password, :email)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $hashedPassword);
	$stmt->bindParam(':email', $email);

        if ($stmt->execute()) {
            echo json_encode(["message" => "User registered successfully."]);
        } else {
            echo json_encode(["message" => "Failed to register user."]);
        }
    } else {
        echo json_encode(["message" => "Invalid input."]);
    }
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
