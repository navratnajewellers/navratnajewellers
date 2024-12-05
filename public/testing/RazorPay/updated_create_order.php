<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'vendor/autoload.php';

use Razorpay\Api\Api;

// Database connection using PDO
$host = '127.0.0.1';
$dbname = 'navratna';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Razorpay API credentials
    // $api_key = 'YOUR_RAZORPAY_KEY_ID';
    // $api_secret = 'YOUR_RAZORPAY_SECRET';

    $api = new Api($api_key, $api_secret);

    // Create Razorpay order
    $input = json_decode(file_get_contents('php://input'), true);

    // Amount in paise
    $amount = $input['amount']; 
    $userId = $input['user_id'];

    $orderData = [
        'receipt' => uniqid(),
        'amount' => $amount,
        'currency' => 'INR',
    ];

    $razorpayOrder = $api->order->create($orderData);

    // Save order details to the database
    $stmt = $pdo->prepare("INSERT INTO orders (order_id, user_id, total_amount, status) VALUES (?, ?, ?, ?)");
    $stmt->execute([$razorpayOrder['id'], $userId, $amount/100, 'created']);

    echo json_encode(['order_id' => $razorpayOrder['id'], 'amount' => $amount]);
    //echo json_encode(['user_id' => $userId, 'amount' => $amount]);
} catch (Exception $e) {
    //http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>