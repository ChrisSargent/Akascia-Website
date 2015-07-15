<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Update Contact Email Addresses in Campaign Monitor.</title>
</head>
<style>

p {font-family:Tahoma, Geneva, sans-serif; font-size:14px}
pre {font-family:Tahoma, Geneva, sans-serif; font-size:12px}
.failed {color:#F00}

</style>
<body>

<?php
// Version from Campaign Monitor

echo '<p>Script for updating the Contacts list in Campaign Monitor with new email addresses.</p>';

require_once 'cm/csrest_general.php';
require_once 'cm/csrest_subscribers.php';
$auth = array('api_key' => '6a4df041c27e1831af70db29b07642425d16cba58e18b0dd');

$file = fopen('contactupdates.csv', 'r');

// Imports the CSV in to an array with column 1 as the key and column 2 as the value
while (($line = fgetcsv($file)) !== false)
	{
		$updatelist[$line[0]] = $line[1];
	}
fclose($file);


//Testpoint
echo '<pre>';
print_r($updatelist);
echo '</pre>';


foreach( $updatelist as $oldemail => $newemail)
{
    $wrap = new CS_REST_Subscribers('a7e1242dbabfd47feadd02c73b17ba6d', '6adc11dcda662b3e020e156e7163da9c');
    $result = $wrap->update($oldemail, array('EmailAddress' => $newemail,));
    echo "<p>Trying to replace <strong>$oldemail</strong>, with <strong>$newemail</strong>... </p>";
    if($result->was_successful())
        {
            echo "<p>Subscribed with code ".$result->http_status_code."\n</p>";
        }
    else
        {
            echo '<p class="failed">Failed with code '.$result->http_status_code."\n</p><pre>";
            var_dump($result->response);
            echo '</pre>';
        }
}
?>
</body>
</html>