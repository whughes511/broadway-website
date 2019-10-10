<?php
session_start();
if(!$_SESSION['broadwn6_logins'])
{
    header('location:login.php');
}
?>


<h1>Welcome! You are authenticated.....!</h1>

<a href="logout.php">Logout!</a>
