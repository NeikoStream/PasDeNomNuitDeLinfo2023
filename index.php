<?php include 'header.php';?>

<!-- Contenu de votre page -->
<main>
    <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    ></script>

    <div id="earth"></div>

    <div id="indicateur" class="card">
        <div>
      <h2>Indicateurs</h2>

      <div>
        <strong>CO2 (en ppm):</strong>
        <br>

        <span id="valeurCO2">400</span>
        <progress id="barreCO2" max="10000" value="400"></progress>
      </div>

      <div>
        <strong>Température (en °C):</strong>
        <br>

        <span id="valeurTemperature">20</span>
        <progress id="barreTemperature" max="40" value="20"></progress>
      </div>

      <div>
        <strong>Population (en millions):</strong>
        <br>

        <span id="valeurPopulation">500</span>
        <progress id="barrePopulation" max="10000" value="500"></progress>
      </div>

      <div>
        <strong>Budget (en millions d'euros):</strong>
        <br>

        <span id="valeurBudget">200</span>
        <progress id="barreBudget" max="10000" value="200"></progress>
      </div>

      <div>
        <strong>Electricité (en MW/h):</strong>
        <br>

        <span id="valeurElectricité">0</span>
        <progress id="barreElectricite" max="100000" value="0"></progress>
      </div>

      <div>
        <strong>Radioactivité (en Sievert):</strong>
        <br>

        <span id="valeurRadioactivite">0</span>
        <progress id="barreRadioactivite" max="10000" value="0"></progress>
      </div>

      <div>
        <strong>Ressource fossile (en Tonne Equivalent Pétrole):</strong>
        <br>

        <span id="valeurFossile">10000</span>
        <progress id="barreFossile" max="10000" value="10000"></progress>
      </div>
    </div>
    </div>
    <div id="chose" class="d-flex justify-content-center"></div>
    <!--
    <div class="chose-card">
        <div id="card1" class="carte">
            <img src="./image/cards/1.png" alt="">
        </div>
        <div id="card2" class="carte">
            <img src="./image/cards/1.png" alt="">
        </div>
    </div>
-->


    <script src="./js/earth.js"></script>
</main>

<?php include 'footer.php';?>

