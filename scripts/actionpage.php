<!-- contact form -->

<!-- error reporting -->
<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');


// contact page 

// if the form has been submitted, send the email to admin
if (isset($_POST['submit'])) {
    // get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // check for errors
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        $error = 'All fields are required.';
    } else {
        // send the email
        $to = 'bullyproofhockey@foundation.com'; 
        $subject = 'Contact Form Submission';
        $body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";
        $headers = "From: $email\r;


";

        // check if the email was sent
        if (mail($to, $subject, $body, $headers)) {
            $result = 'Thank you for contacting us. We will be in touch with you very soon.';
        } else {
            $error = 'Sorry, there was an error sending your message. Please try again later.';
        }
    }
}

?>

