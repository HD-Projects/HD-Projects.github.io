<?php
  require_once 'login.php';
  $connection = new mysqli($db_hostname, $db_username, $db_password, $db_database);

  $query = 'SELECT * FROM peps';
  $result = $connection->query($query);

  $rows = $result->num_rows;

  for ($j = 0; $j < $rows ; ++$j){
    $result->data_seek($j);
    echo 'First Name: '.$result->fetch_assoc()['fname'].'<br>';
    $result->data_seek($j);
    echo 'Last Name: '.$result->fetch_assoc()['lname'].'<br>';
    $result->data_seek($j);
    echo 'Age: '.$result->fetch_assoc()['age'].'<br><br>';
  }

  $result->close();
  $connection->close();

?>
