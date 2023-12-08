<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Ajoutez les liens Bootstrap et votre propre feuille de style -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/indicateur.js"></script>
</head>

<body>

   <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Nom du Site</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">

                        <button class="nav-link" onclick='changingColor("./img/mode_neige.jpg")'>Noël</button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sombre</a>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jeu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./card.php">Cartes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Information</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
