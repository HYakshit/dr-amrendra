<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $grade = isset($_POST['grade']) ? htmlspecialchars($_POST['grade']) : '';
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $mobile = isset($_POST['mobile']) ? htmlspecialchars($_POST['mobile']) : '';

    // Email recipient
    $to = "deepakkumar.maurya@gmail.com"; // Replace with your email address

    // Email subject
    $subject = "New Boldness Grade Selection";

    // Email message body
    $message = "
    <html>
    <head>
        <title>New Boldness Grade Selection</title>
    </head>
    <body>
        <h2>Grade Selection Details</h2>
        <p><strong>Grade:</strong> $grade</p>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Mobile Number:</strong> $mobile</p>
    </body>
    </html>
    ";

    // Headers for HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply@example.com" . "\r\n"; // Replace with the sender's email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        header("Location: thank-you.html"); // Optional
        exit;
    } else {
        echo "Failed to send email.";
    }
} else {
    // Redirect if accessed directly
    header("Location: index.html");
    exit();
}
?>
