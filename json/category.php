<?php
    // Include database
    include "connect.php";

    // All category select
    $fetch = $pdo->prepare("select * from categoria");