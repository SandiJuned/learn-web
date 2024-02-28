import * as THREE from '../../node-modules/three/build/three.module.js'

let scane = new THREE.Scane(); //variable scane
let cam = new THREE.PerspectiveCamera(45,innerWidth/innerHeight, 1 , 100 ); //variabel kamera
let renderer = new THREE.WEBGLRenderer(); //variabel renderer

renderer.setSize(innerWidth, innerHeight );
document.body.appenChild(renderer.domElement);
renderer.render(scane , cam);