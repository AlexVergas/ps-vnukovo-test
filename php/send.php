<?php

    //Данные с элементов формы
    $name = $_POST['username'];
    $number = $_POST['usernumber'];
    $mail = $_POST['usermail'];
    $question = $_POST['question'];

    //Обработаем полученные данные 
    $name = htmlspecialchars ($name);
    $number = htmlspecialchars ($number);
    $mail = htmlspecialchars ($mail);
    $question = htmlspecialchars ($question);

    $name = urldecode ($name);
    $number = urldecode ($number);
    $mail = urldecode ($mail);
    $question = urldecode ($question);

    $name = trim ($name);
    $number = trim ($number);
    $mail = trim ($mail);
    $question = trim ($question);

    //Отправляем данные на почту
    if (mail ("admin@mail.ru",
              "Новое письмо с сайта",
              "Имя: ".$name."\n".
              "Телефон: ".$number."\n".
              "E-mail: ".$mail."\n".
              "Информация о кандидате: ".$question,
              "From: no-reply@mydomain.ru \r\n")
    ){
        echo ("Письмо успешно отправлено!");
    }
    else {
        echo ("Есть ошибки! Проверьте данные. .. ");
    }

?>