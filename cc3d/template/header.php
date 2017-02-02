<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>
    <?php echo (is_null($title) ? 'CreateCafe 3D Printing' : $title) ?>
  </title>
  <meta name="viewport" content="width=device-width, initial-scale=0.5">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" href="favicon.ico" type="image/x-icon" />
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
  <link rel="manifest" href="/manifest.json">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="./css/main.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://use.fontawesome.com/ca541d05e8.js"></script>
  <script type="text/javascript">
  $( document ).ready(function() {
    $('a[href*="#"]').click(function(event) {
      event.preventDefault();
    });
  });
  </script>
</head>
<body>

<?php include 'template/header_bar.php' ?>
