<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);
if (mail("sverona432@yandex.ru", "Заявка с сайта",  "Имя: " .$name.",  E-mail: " .$email.  ",  Сообщение: ".$text.""))
{     echo "Спасибо, Ваше сообщение успешно отправлено!" ;
} else {
    echo "При отправке сообщения возникли ошибки :(";
}?>





