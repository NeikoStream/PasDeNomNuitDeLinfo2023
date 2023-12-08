<?php include 'header.php';?>

<!-- Contenu de votre page -->
<main>
<script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    ></script>

<div id="indicateur" class="card">
    <h1 id="indicateur_titre">Indicateur</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolorem. Labore, illum.</p>
</div>

<div id="cadrage_image">
<img id="taille_planète" src="./image/icon.png" alt="La planète">

</div>
<div id="carte_choix">
  <div class="cartes" id="carte1">
    <h2>Usine Nucléaire</h2>
    <img src="image/usine_nucléaire.png" alt="image">
    <p>Cette Usine a pour objectif de remplacer les usines à charbon pour une énergie plus verte mais cette énergie pollue aussi la planète </p>
    <div>
      <p>&#2622; +100CO2/s  &#9889;</p>
    </div>
  </div>
  <div class="cartes cartes_identité" id="carte2">
    <h2>Usine Nucléaire</h2>
    <img src="image/usine_nucléaire.png" alt="image">
    <p>Cette Usine a pour objectif de remplacer les usines à charbon pour une énergie plus verte mais cette énergie pollue aussi la planète </p>
    <div>
      <p>+100CO2/s</p>
    </div>
  </div>
</div>

<div id="earth"></div>
<script src="./js/earth.js"></script>

</main>

<?php include 'footer.php';?>



