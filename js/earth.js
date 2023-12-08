// Création de la scène
const scene = new THREE.Scene();

// Création de la sphère (planète)
const planetGeometry = new THREE.SphereGeometry(15, 32, 16);
const planetTextureLoader = new THREE.TextureLoader();
let planetTexture = planetTextureLoader.load("./img/earthmap1k_1.jpg");
const planetMaterial = new THREE.MeshBasicMaterial({ map: planetTexture });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Création de la sphère des nuages
const cloudGeometry = new THREE.SphereGeometry(15.2, 32, 16);
const cloudTextureLoader = new THREE.TextureLoader();
const cloudTexture = cloudTextureLoader.load("./img/earthcloudmapthumb.jpg");
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
document.body.appendChild(renderer.domElement);

// Obtenez l'élément HTML avec l'ID "earth"
const earthContainer = document.getElementById("earth");

// Ajustez la largeur du rendu sur 100vw
renderer.domElement.style.width = "98vw"; // Réglage de la largeur sur 100vw
renderer.domElement.style.height = "auto"; // Réglage de la hauteur sur "auto" pour conserver les proportions

// Ajoutez le canevas de rendu à l'élément avec l'ID "earth"
earthContainer.appendChild(renderer.domElement);

// Création d'un matériau pour les bâtiments
const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0xff0033 });

// Création d'un groupe pour les bâtiments
const buildingsGroup = new THREE.Group();
scene.add(buildingsGroup);

// Fonction pour créer un bâtiment et l'ajouter au groupe
function createBuilding(position, angle, width, height, texturePath) {
  const buildingGeometry = new THREE.BoxGeometry(width, height, width);
  const buildingTexture = new THREE.TextureLoader().load(texturePath);
  const buildingMaterialWithTexture = new THREE.MeshBasicMaterial({
    map: buildingTexture,
  });
  const building = new THREE.Mesh(
    buildingGeometry,
    buildingMaterialWithTexture
  );
  building.position.copy(position);

  const radians = angle * (Math.PI / 180);

  building.position.x = 15 * Math.cos(radians);
  building.position.y = 0;
  building.position.z = 15.8 * Math.sin(radians);

  building.lookAt(planet.position);
  buildingsGroup.add(building);
}
// Fonction pour changer de couleur
function changingColor(texture) {
  const newTexture = planetTextureLoader.load(texture);
  planet.material.map = newTexture;
}

function createRandomBuilding() {
  const position = new THREE.Vector3();
  const angle = Math.random() * 360;
  const height = Math.random() * 0.5 + 0.1; // Hauteur du bâtiment entre 0.1 et 0.6
  const radius = 15; // Rayon de la sphère
  const radians = angle * (Math.PI / 180);
  position.x = radius * Math.cos(radians);
  position.y = Math.random() * 2 - 1; // Position en hauteur entre -1 et 1
  position.z = radius * Math.sin(radians);
  const scaleFactor = 1.01; // Ajustez ce facteur selon vos besoins
  position.multiplyScalar(scaleFactor);
  const width = Math.random() * 0.2 + 0.1; // Largeur du bâtiment entre 0.1 et 0.3
  const texturePath = "./img/icons8-usine-94.png"; // Chemin de la texture
  createBuilding(position, angle, width, height, texturePath);
}

// Animation
function animate() {
  requestAnimationFrame(animate);

  planet.rotation.y += 0.003;
  clouds.rotation.y += 0.002;
  buildingsGroup.rotation.y += 0.003;

  renderer.render(scene, camera);
}

// Appel de la fonction animate() pour démarrer l'animation
animate();
