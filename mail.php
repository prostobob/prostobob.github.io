<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Сообщение от пользователя: $name";

 $result = mail('kostleand@gmail.com', 'Тема письма', $message);

echo json_encode(array(
	'status' => $result,
	'test' => 'test'
));