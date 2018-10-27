<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sub Sub Marino.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- URL FRIEND -->
    <base href="http://localhost/pwa_alfa/">
    
    <!-- CSS -->
    <link rel="stylesheet" type="text/css" href="css/materialize.min.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <!-- JS/SCRIPT -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.cycle2.min.js"></script>
    <script src="js/materialize.min.js"></script>
    <script src="js/functions.js"></script>

</head>
    <body>

        <!-- Load - Image -->
        <div class="load">
            <img src="imagens/load.gif">
        </div>

        <!-- Menu -->
        <nav>
            <div class="nav-wrapper">
                <a href="index.php" class="brand-logo">
                    <img class="img" src="imagens/logo.png">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                    <i class="material-icons">menu</i>

                </a>
                <ul class="right hide-on-med-and-down" id="menu">
                    <li>
                        <a href="carrinho" class="btn red darken-4">
                            <i class="material-icons">shopping_cart</i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Menu Mobile -->
        <ul class="sidenav" id="mobile-demo">
        </ul>

        <main class="container">
            <div id="msg">  </div>
        </main>

    </body>
</html>