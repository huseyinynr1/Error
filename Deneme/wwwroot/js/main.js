import * as THREE from '/lib/Threelibrary/three.module.js'
import { OrbitControls } from '/lib/Threelibrary/OrbitControls.js'
import { GLTFLoader } from '/lib/Threelibrary/GLTFLoader.js'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    .01,
    1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var loader = new GLTFLoader();

var obj;
loader.load("/carmodel/mercedes_glb_amg.glb", function (gltf) {
    obj = gltf.scene;
    scene.add(gltf.scene);
});


scene.background = new THREE.Color(0xFFFFFF)
var light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(light);
camera.position.set(0, 0, 10);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();