<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php'

    $mail = new PHPMailer (true);
    $mail->Charset = 'UTF-8';
    $mail->setLanguage ('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //0m кого письмо 
    $mail->setFrom('PS-Vnukovo@yandex.ru', "Фрилансер по жизни");
    //Кому - отправить
    $mail->addAddress('PS-Vnukovo@yandex.ru');
    //Тема-письма
    $mail->Subject = 'Привет! Это "Фрилансер по жизни"';

    //Тело письма
    $body = '<h1>Встречайте супер письмо!</h1>';

    if(trim(!empty ($_POST['username']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['username'].'</p>';
    }

    if(trim(!empty ($_POST['usernumber']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['usernumber'].'</p>';
    }

    if(trim(!empty ($_POST['usermail']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['usermail'].'</p>';
    }

    if(trim(!empty ($_POST['question']))){
        $body.='<p><strong>Сообщение:</strong> '.$_POST['question'].'</p>';
    }

    $mail->Body = $body;

    //Отправляем
    if ($mail->send ()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>