<?php
echo file_get_contents("./layout_open.html");
require_once("./head.php");
echo file_get_contents("./layout_body.html");
require_once("./tail.php");
echo file_get_contents("./layout_close.html");
?>