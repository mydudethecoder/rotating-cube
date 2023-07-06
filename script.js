// scene
const scene = new THREE.Scene();
// mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:"blue"});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// camera
const aspect ={
    width:window.innerWidth,
    height:window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height, 1, 2000);
camera.position.z = 3;
scene.add(camera);
// renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);
// animation
const animate =()=>{
    mesh.rotation.x += 0.01;
    renderer.render(scene,camera);
    window.requestAnimationFrame(animate)
};
animate()
