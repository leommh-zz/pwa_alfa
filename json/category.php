<?php
    header("Content-Type:application/json");

    // Include database
    include "connect.php";

    // All category select
    $consult = $pdo->prepare("select * from categoria");
    $consult->execute();

    while ( $data = $consult->fetch(PDO::FETCH_OBJ) ){
        $category[] = array(
            "id"=>$data->id,
            "category"=>$data->categoria
        );
    }

    // JSON transform
    echo json_encode($category);