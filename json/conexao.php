<?php

	// criar conexao com o banco

	$servidor 	= "localhost";
	$usuario 	= "root";
	$senha 		= "";
	$banco 		= "pwa";

	try {
		$pdo = new PDO("mysql:host=$servidor;dbname=$banco;charset=utf8", $usuario, $senha);
	} catch(PDOException $erro){
		echo "Erro ao conectar: ", $erro->getMessage();
		exit;
	}