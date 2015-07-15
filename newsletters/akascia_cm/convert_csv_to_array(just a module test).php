<html>
<body>
<?php

$file = fopen('addresses.csv', 'r');
$header = array("oldemail","newemail");
$data = array();

while (($line = fgetcsv($file)) !== false)
{
    $updatelist[$line[0]] = $line[1];
}

fclose($file);

echo '<pre>';
print_r($updatelist);
echo '</pre>';


?>
</body>
</html>
