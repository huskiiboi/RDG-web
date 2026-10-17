<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    exit('Invalid request');
}

// anti spam
if (!empty($_POST['website'])) {
    exit
}

$name = trim(strip_tags($_POST['name'] ?? ''));
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = trim(strip_tags($_POST['message'] ?? ''));

$name = str_replace(["\r", "\n"])

if ($name === '' || !$email || $message === '') {
    exit('Please fill out all fields with a vlid email');
}

$to = 'info@integritytaxdefense.com';
$subject = "ITD web msg from $name";
$body = "Name: $name\nEmail:$email\n\n$message";
$headers = "From: info@integritytaxdefense.com\r\nReply-to: $email";

if (mail($to, $subject, $body, $headers)) {
    header('Location: thank-you.html')
}