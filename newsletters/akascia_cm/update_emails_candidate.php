<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Update Candidate Email Addresses in Campaign Monitor.</title>
</head>
<style>

p {font-family:Tahoma, Geneva, sans-serif; font-size:14px}
pre {font-family:Tahoma, Geneva, sans-serif; font-size:12px}
.failed {color:#F00}

</style>
<body>

<?php

// Version from Campaign Monitor

echo '<p>Script for updating the Candidates list in Campaign Monitor with new email addresses.</p>';

require_once '/newsletters/akascia_cm/cm/csrest_subscribers.php';
$file = fopen('candidateupdates.csv', 'r');

// Imports the CSV in to an array with column 1 as the key and column 2 as the value
while (($line = fgetcsv($file)) !== false)
	{
		$updatelist[$line[0]] = $line[1];
	}
fclose($file);

//echo '<pre>';
//print_r($updatelist);
//echo '</pre>';

foreach( $updatelist as $oldemail => $newemail)
{
    $wrap = new CS_REST_Subscribers('69e70d4bd6996843efc5c3fa0a4b1550', '6adc11dcda662b3e020e156e7163da9c');
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