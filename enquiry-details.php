<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $location = $_POST['location'];
    $message = $_POST['message'];

    // Recipient email address
    $to = "enquiry@dermaclinix.in, deepakkumar.maurya@gmail.com";

    // Subject of the email
    $subject = "Recieved a new Appointment";

    // Email message content
    $email_content = "Name: $name\n";
    $email_content .= "Phone Number: $number\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Location: $location\n";
    $email_content .= "Message:\n$message\n";

    // Additional headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Redirect to a thank you page or display a success message
        header("Location: thank-you.html"); // Optional
        exit;
    } else {
        echo "There was a problem sending the email.";
    }
} else {
    echo "Invalid request.";
}
?>
