<?php
  $home = fopen("index.html", "r") or die("Unable to open file!");
  $homeHTML = fread($home, "100000");
  $header = fopen("nav.html", "r") or die("Unable to open file!");
  $headerHTML = fread($header, "10000000");
  $footer = fopen("footer.html", "r") or die("Unable to open file!");
  $footerHTML = fread($footer, "100000000");
  $style = fopen("style.css", "r") or die("Unable to open file!");
  $styleHTML = fread($style, "10000000");

  $site = str_replace("%%header%%", $headerHTML, str_replace("%%css%%", $styleHTML, str_replace("%%footer%%", $footerHTML, $homeHTML)));

  echo $site;
?>
