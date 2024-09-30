import * as THREE from "three";


// 1. Create a scene

const scene = new THREE.Scene();
scene.background = new THREE.Color('#FFFF');

// 2. Add the camera

const camera = new THREE.PerspectiveCamera(
  75, // Field of view (in degrees)
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near plane
  1000 // Far plane
);

camera.position.z = 5;

// 3. Create and add a capsule object

//const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
//const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//const capsule = new THREE.Mesh(geometry, material);
//scene.add(capsule);

// circle object

const geometry = new THREE.CircleGeometry( 1, 32 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const circle = new THREE.Mesh( geometry, material ); scene.add( circle );

// 4. Add lighting

const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up the renderer

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// 6. Animate the scene

function animate() {
    requestAnimationFrame(animate);

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;


renderer.render(scene, camera);
}

animate();