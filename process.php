<?php

  require_once 'login.php';
  $connection = new mysqli($db_hostname, $db_username, $db_password, $db_database);

  function remove_danger($var){
    return htmlentities($var);
  }

  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $subject = $_POST['subject'];
  $content = $_POST['content'];

  $safeSubject = $connection->real_escape_string(remove_danger($subject));
  $safeContent = $connection->real_escape_string(remove_danger($content));
  $safefName = $connection->real_escape_string(remove_danger($fname));
  $safelName = $connection->real_escape_string(remove_danger($lname));


  $query = "INSERT INTO blog(fname, lname, subject, content)VALUES('$safefName', '$safelName', '$safeSubject', '$safeContent');";
  $result = $connection->query($query);

  echo "You Posted '$safeSubject<br>$safeContent' as '$fname $lname'";
?>
