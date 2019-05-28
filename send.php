<?php
require_once "./phpmailer/src/PHPMailer.php";
require_once "./phpmailer/src/SMTP.php";
require_once "./phpmailer/src/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")) {
        $descr = '';
        if(isset($_POST['descr'])){
            $descr = $_POST['descr'];
        }
        
        $to_1 = "synergy.pro@siegeniasynergy.ru";
        $to_2 = "ahohlov@mahuru.ru";
        $subject = 'Email from Siegeniasynergy.ru'; //Загаловок сообщения
        
        $message = '


		    <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.htmlentities($_POST['name']).'</p>
                        <p>Фамилия: '.htmlentities($_POST['surname']).'</p>  
                        <p>Мэйл: '.htmlentities($_POST['email']).'</p>     
                        <p>Регион: '.htmlentities($_POST['region']).'</p>   
                        <p>Наименование компании: '.htmlentities($_POST['company-name']).'</p>
                        <p>Должность: '.htmlentities($_POST['position']).'</p>
                        <p>Тип компании: '.htmlentities($_POST['type']).'</p> 
                        <p>Уточнение к типу компании: '.htmlentities($_POST['clarification']).'</p> 
                        <p>Тип бизнес-модели: '.htmlentities($_POST['busines-model']).'</p>                            
                        <p>Уточнение типа бизнес-модели: '.htmlentities($_POST['ytochnenie']).'</p>
                        <p>Я работаю с продуктами SIEGENIA: '.htmlentities($_POST['product']).'</p> 
                        <p>Фурнитура: '.htmlentities($_POST['brand-furniture']).'</p>     
                        <p>Профильные системы: '.htmlentities($_POST['brand-profSystems']).'</p> 
                        <p>Стекло: '.htmlentities($_POST['brand-glass']).'</p>
                        <p>Иное: '.htmlentities($_POST['complex-product']).'</p>                 
                        <p>Уточнение к иное: '.htmlentities($_POST['clarification2']).'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги


	$mail = new PHPMailer(); // create a new object
	$mail->CharSet = 'UTF-8';
        
	$mail->IsSMTP(); // enable SMTP
        $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
        $mail->SMTPAuth = true; // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
        $mail->Host = "ssl://smtp.mail.ru";
        $mail->Port = 465; // or 587
        $mail->IsHTML(true);
        $mail->Username = "landing@siegeniasynergy.ru";
        $mail->Password = "SiLanding1";
        $mail->SetFrom("landing@siegeniasynergy.ru");
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->AddAddress($to_1);
        $mail->AddAddress($to_2);

    if(!$mail->Send()) {
        echo "ERROR";
    } else {
        echo "OK";
    }

}



/*

$config['smtp_username'] = "landing@siegeniasynergy.ru";  //Смените на адрес своего почтового ящика.
$config['smtp_port'] = '465'; // Порт работы.
$config['smtp_host'] =  'ssl://smtp.mail.ru';  //сервер для отправки почты
$config['smtp_password'] = "SiLanding1";  //Измените пароль
$config['smtp_debug'] = true;  //Если Вы хотите видеть сообщения ошибок, укажите true вместо false
$config['smtp_charset'] = 'utf-8';	//кодировка сообщений. (windows-1251 или utf-8, итд)
$config['smtp_from'] = 'Synergy'; //Ваше имя - или имя Вашего сайта. Будет показывать при прочтении в поле "От кого"

function smtpmail($to='', $mail_to, $subject, $message, $headers='') {
	global $config;
	$SEND =	"Date: ".date("D, d M Y H:i:s") . " UT\r\n";
	$SEND .= 'Subject: =?'.$config['smtp_charset'].'?B?'.base64_encode($subject)."=?=\r\n";
	if ($headers) $SEND .= $headers."\r\n\r\n";
	else
	{
			$SEND .= "Reply-To: ".$config['smtp_username']."\r\n";
			$SEND .= "To: \"=?".$config['smtp_charset']."?B?".base64_encode($to)."=?=\" <$mail_to>\r\n";
			$SEND .= "MIME-Version: 1.0\r\n";
			$SEND .= "Content-Type: text/html; charset=\"".$config['smtp_charset']."\"\r\n";
			$SEND .= "Content-Transfer-Encoding: 8bit\r\n";
			$SEND .= "From: \"=?".$config['smtp_charset']."?B?".base64_encode($config['smtp_from'])."=?=\" <".$config['smtp_username'].">\r\n";
			$SEND .= "X-Priority: 3\r\n\r\n";
	}
	$SEND .=  $message."\r\n";
	 if( !$socket = fsockopen($config['smtp_host'], $config['smtp_port'], $errno, $errstr, 30) ) {
		if ($config['smtp_debug']) echo $errno."<br>".$errstr;
		return false;
	 }
 
	if (!server_parse($socket, "220", __LINE__)) return false;
 
	fputs($socket, "HELO " . $config['smtp_host'] . "\r\n");
	if (!server_parse($socket, "250", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить HELO!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "AUTH LOGIN\r\n");
	if (!server_parse($socket, "334", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Не могу найти ответ на запрос авторизаци.</p>';
		fclose($socket);
		return false;
	}

//	echo $config['smtp_username'];

	fputs($socket, base64_encode($config['smtp_username']) . "\r\n");
	if (!server_parse($socket, "334", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Логин авторизации не был принят сервером!</p>';
		fclose($socket);
		return false;
	}

	echo $config['smtp_password'];

	fputs($socket, base64_encode($config['smtp_password']) . "\r\n");
	if (!server_parse($socket, "235", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Пароль не был принят сервером как верный! Ошибка авторизации!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "MAIL FROM: <".$config['smtp_username'].">\r\n");
	if (!server_parse($socket, "250", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить комманду MAIL FROM: </p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "RCPT TO: <" . $mail_to . ">\r\n");
 
	if (!server_parse($socket, "250", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить комманду RCPT TO: </p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "DATA\r\n");
 
	if (!server_parse($socket, "354", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Не могу отправить комманду DATA</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, $SEND."\r\n.\r\n");
 
	if (!server_parse($socket, "250", __LINE__)) {
		if ($config['smtp_debug']) echo '<p>Не смог отправить тело письма. Письмо не было отправленно!</p>';
		fclose($socket);
		return false;
	}
	fputs($socket, "QUIT\r\n");
	fclose($socket);
	echo "Mail sent:" . $message;
	return TRUE;
}

function server_parse($socket, $response, $line = __LINE__) {
	global $config;
	while (@substr($server_response, 3, 1) != ' ') {
		if (!($server_response = fgets($socket, 256))) {
			if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
 			return false;
 		}
	}
	if (!(substr($server_response, 0, 3) == $response)) {
		if ($config['smtp_debug']) echo "<p>Проблемы с отправкой почты!</p>$response<br>$line<br>";
		return false;
	}
	return true;
}

if(true) {//(isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        //$to = 'mail@forsite.su, fabula-design@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        //$to = 'truhanovg@yandex.ru';
        $subject = 'Письмо из формы обратной связи'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.htmlentities($_POST['name']).'</p>
                        <p>Фамилия: '.htmlentities($_POST['surname']).'</p>  
                        <p>Мэйл: '.htmlentities($_POST['email']).'</p>     
                        <p>Регион: '.htmlentities($_POST['region']).'</p>   
                        <p>Наименование компании: '.htmlentities($_POST['company-name']).'</p>
                        <p>Должность: '.htmlentities($_POST['position']).'</p> 
                        <p>Тип: '.htmlentities($_POST['busines-model']).'</p> 
                        <p>ТИП БИЗНЕС-МОДЕЛИ: '.htmlentities($_POST['name']).'</p>
                        <p>Уточнение типа бизнес-модели: '.htmlentities($_POST['ytochnenie']).'</p>  
                        <p>Фурнитура: '.htmlentities($_POST['brand-furniture']).'</p>     
                        <p>Профильные системы: '.htmlentities($_POST['brand-profSystems']).'</p>   
                        <p>Стекло: '.htmlentities($_POST['brand-glass']).'</p>
                        <p>Иное: '.htmlentities($_POST['complex-product']).'</p> 
                        <p>Уточнение к иное: '.htmlentities($_POST['clarification']).'</p>                
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = 'Content-type: text/html; charset="utf-8" \r\n'; //Кодировка письма
        $headers .= "From: Отправитель <landing@siegeniasynergy.ru>\r\n"; //Наименование и почта отправителя
        smtpmail('', 'dev@mahuru.ru', $subject, $message, $headers); //Отправка письма с помощью функции mail
        smtpmail('', 'alex@ahohlov.name', $subject, $message, $headers);
    }
*/

?>