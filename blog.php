<?php
  require_once 'login.php';

  function remove_danger($var){
    return htmlentities($var);
  }

  $connection = new mysqli($db_hostname, $db_username, $db_password, $db_database);

  $query = 'SELECT * FROM blog';
  $result = $connection->query($query);

  $rows = $result->num_rows;

  $post = '';

  if (isset($_POST['fname']))
  {
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

    $post =  "You Posted '$safeSubject<br>$safeContent' as '$fname $lname'";
  }

  $home = fopen("index0.html", "r") or die("Unable to open file!");
  $homeHTML = fread($home, "100000");
  $header = fopen("nav.html", "r") or die("Unable to open file!");
  $headerHTML = fread($header, "10000000");
  $footer = fopen("footer.html", "r") or die("Unable to open file!");
  $footerHTML = fread($footer, "100000000");
  $style = fopen("style.css", "r") or die("Unable to open file!");
  $styleHTML = fread($style, "10000000");

  $blogHTML = '';

  for ($j = 0; $j < $rows ; ++$j){
    $result->data_seek($j);
    $blogHTML = $blogHTML.''.$result->fetch_assoc()['fname'];
    $result->data_seek($j);
    $blogHTML = $blogHTML.' '.$result->fetch_assoc()['lname'];
    $result->data_seek($j);
    $blogHTML = $blogHTML.' Subject: '.$result->fetch_assoc()['subject'].'<br><br>';
    $result->data_seek($j);
    $blogHTML = $blogHTML.''.$result->fetch_assoc()['content'].'<br><br>';
  }

  $result->close();
  $connection->close();

  $site = str_replace("%%header%%", $headerHTML, str_replace("%%css%%", $styleHTML, str_replace("%%footer%%", $footerHTML, str_replace("%%posts%%", $blogHTML, str_replace("%%post%%", $post, $homeHTML)))));

  echo $site;
?>
