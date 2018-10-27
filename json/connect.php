<?php

    // Create connection database
    $server = "172.16.1.215";
    $user = "1234";
    $password = "1234";
    $database = "1234_pwa";

    try {
        $pdo = new PDO(
            "mysql:host=$servidor;
            dbname=$database;
            charset=utf8", 
            $user,
            $password
        );
    } catch (PDOException $erro) {
        echo "Erro connection database: ".$erro->getMessage();
        exit;
    }