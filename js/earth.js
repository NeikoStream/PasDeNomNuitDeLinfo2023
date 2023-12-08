// Création de la scène
const scene = new THREE.Scene();

// Création de la sphère (planète)
const planetGeometry = new THREE.SphereGeometry(15, 32, 16);
const planetTextureLoader = new THREE.TextureLoader();
const planetTexture = planetTextureLoader.load("./img/earthmap1k_1.jpg");
const planetMaterial = new THREE.MeshBasicMaterial({
  map: planetTexture,
});
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Création de la sphère des nuages
const cloudGeometry = new THREE.SphereGeometry(15.2, 32, 16); // Légèrement plus grande que la sphère de la planète
const cloudTextureLoader = new THREE.TextureLoader();
const cloudTexture = cloudTextureLoader.load("./img/earthcloudmapthumb.jpg"); // Ajoutez le chemin de votre texture nuageuse
const cloudMaterial = new THREE.MeshBasicMaterial({
  map: cloudTexture,
  transparent: true,
  opacity: 0.2,
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds);

// Création de la caméra
const camera = new THREE.PerspectiveCamera(
  130,
  window.innerWidth / window.innerHeight,
  1,
  100
);
camera.position.z = 25;

// Création du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Obtenez l'élément HTML avec l'ID "earth"
const earthContainer = document.getElementById("earth");

// Ajustez la largeur du rendu sur 100vw
renderer.domElement.style.width = '98vw'; // Réglage de la largeur sur 100vw
renderer.domElement.style.height = 'auto'; // Réglage de la hauteur sur "auto" pour conserver les proportions

// Ajoutez le canevas de rendu à l'élément avec l'ID "earth"
earthContainer.appendChild(renderer.domElement);



// Création d'un matériau pour les bâtiments
const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 }); // Couleur grise pour les bâtiments

// Fonction pour créer un bâtiment et l'ajouter au groupe
function createBuilding(position, angle) {
  const buildingGeometry = new THREE.BoxGeometry(2, 1, 3); // Taille du bâtiment
  const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
  building.position.copy(position);

  // Conversion de l'angle en radians
  const radians = angle * (Math.PI / 180);

  // Placement du bâtiment sur le périmètre de la sphère
  building.position.x = 15 * Math.cos(radians);
  building.position.z = 15 * Math.sin(radians);

  building.lookAt(planet.position); // Aligner le building avec la position de la sphère
  scene.add(building);
}

// Création d'un groupe pour les bâtiments
const buildingsGroup = new THREE.Group();
scene.add(buildingsGroup);

// Création de quelques bâtiments
createBuilding(new THREE.Vector3(), 90); // Création d'un bâtiment à un angle de 45 degrés
createBuilding(new THREE.Vector3(), 135); // Création d'un bâtiment à un angle de 135 degrés

// Animation
function animate() {
  requestAnimationFrame(animate);

  // Rotation sur l'axe Y
  planet.rotation.y += 0.012;
  clouds.rotation.y += 0.002;

  // Rotation du groupe des bâtiments
  buildingsGroup.rotation.y += 0.011;

  renderer.render(scene, camera);
}

// Appel de la fonction animate() pour démarrer l'animation
animate();
