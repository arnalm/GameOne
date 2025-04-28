import * as THREE from '../jsm/three.module.js';
import { OrbitControls }from './jsm/OrbitControls.js';
import * as CANNON from '../jsm/cannon-es.js';
import CannonDebugRenderer from "./jsm/CannonDebugRenderer.js";
//import { GLTFLoader } from "./jsm/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50000);
const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor('gray');
//===================================
var light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

var light1 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light1);
//======================================
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});
const cannonDebugRenderer = new CannonDebugRenderer(scene, world);


const p = new CANNON.Body({
  mass:0,
  shape:new CANNON.Box(new CANNON.Vec3(100,1,100))
});

world.addBody(p)
//_______

const s = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(0.8)
});

world.addBody(s)
//_______________
var geometry = new THREE.BoxGeometry(4, 1, 2); 
 
  var material = new THREE.MeshLambertMaterial( 
  { 
   color: 0xF3FFE2 
  }); 
 
  var mesh = new THREE.Mesh(geometry, material); 
  
  scene.add(mesh); 
 


//_______________
const chassisShape = new CANNON.Box(new CANNON.Vec3(2, 0.5, 1))
const chassisBody = new CANNON.Body({ mass: 150 })

chassisBody.addShape(chassisShape)
chassisBody.position.set(0, 4, 0)
chassisBody.angularVelocity.set(0, 0.5, 0)





world.addBody(chassisBody)


  const vehicle = new CANNON.RaycastVehicle({
    chassisBody,
  })





//_______
const wheelOptions = {
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.4,
  dampingRelaxation: 2.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}


wheelOptions.chassisConnectionPointLocal.set(-1, 0, 1)
vehicle.addWheel(wheelOptions)


wheelOptions.chassisConnectionPointLocal.set(-1, 0, -1)
vehicle.addWheel(wheelOptions)

wheelOptions.chassisConnectionPointLocal.set(1, 0, 1)
vehicle.addWheel(wheelOptions)

wheelOptions.chassisConnectionPointLocal.set(1, 0, -1)

vehicle.addWheel(wheelOptions)
vehicle.addToWorld(world)



      // Add the wheel bodies
  
  
  var geometry = new THREE.SphereGeometry(0.6);
  var material = new THREE.MeshLambertMaterial(
  {
    color:'red'
  });
  var mesh1 = new THREE.Mesh(geometry, material);
  scene.add(mesh1);
  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh2 = new THREE.Mesh(geometry, material);
scene.add(mesh2);  

  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh3 = new THREE.Mesh(geometry, material);
scene.add(mesh3);  

  //==========
var geometry = new THREE.SphereGeometry(0.6);
var material = new THREE.MeshLambertMaterial(
{
  color: 'red'
});
var mesh4 = new THREE.Mesh(geometry, material);
scene.add(mesh4);  


  
  
  
  //******************************
  const wheelBodies = []
  
  
  let wi;
   wi = new CANNON.Sphere(0.6)
   
  
   
   
  const wheelMaterial = new CANNON.Material('wheel')
        
  vehicle.wheelInfos.forEach((wheel)=>{
  const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20)
  //wheel.radius, wheel.radius, wheel.radius / 2, 20
  
  
  const wheelBody = new CANNON.Body({
    mass: 0,
    material: wheelMaterial,
  })
  wheelBody.type = CANNON.Body.KINEMATIC
  wheelBody.collisionFilterGroup = 0
  
  
  
  
  
  
  
  
  
  const quaternion = new CANNON.Quaternion().setFromEuler(-Math.PI / 2, 0, 0)
  
  
  
   
  
  
  
  wheelBody.addShape(wi, new CANNON.Vec3(), quaternion)
  wheelBodies.push(wheelBody)
  world.addBody(wheelBody)
 
    
  })







        // Update the wheel bodies
  world.addEventListener('postStep',() =>{
  for (let i = 0; i < vehicle.wheelInfos.length; i++){
    
    
  vehicle.updateWheelTransform(i)
  
  const transform = vehicle.wheelInfos[0].worldTransform
 
  const wheelBody = wheelBodies[0]
  wheelBody.position.copy(transform.position)
  wheelBody.quaternion.copy(transform.quaternion)
  //-----------
 mesh1.position.copy(transform.position)
 mesh1.quaternion.copy(transform.quaternion)
 
 
   //-----1
   const transform1 = vehicle.wheelInfos[1].worldTransform
  
  const wheelBody1 = wheelBodies[1]
  wheelBody1.position.copy(transform1.position)
  wheelBody1.quaternion.copy(transform1.quaternion)
 
 mesh2.position.copy(transform1.position)
 mesh2.quaternion.copy(transform1.quaternion)
 
 
 
    //-----2
   const transform2 = vehicle.wheelInfos[2].worldTransform
  
  const wheelBody2 = wheelBodies[2]
  wheelBody2.position.copy(transform2.position)
  wheelBody2.quaternion.copy(transform2.quaternion)
 
 mesh3.position.copy(transform2.position)
 mesh3.quaternion.copy(transform2.quaternion)
 
 
     //-----3
const transform3 = vehicle.wheelInfos[3].worldTransform
 
const wheelBody3 = wheelBodies[3]
wheelBody3.position.copy(transform3.position)
wheelBody3.quaternion.copy(transform3.quaternion)
 
mesh4.position.copy(transform3.position)
mesh4.quaternion.copy(transform3.quaternion)
 
 
 
 
 
 
 
  
 }

 
 
})
//______________________________________

const move1=document.getElementById('m1');
const move2=document.getElementById('m2');     
const move3=document.getElementById('m3');     

const move4=document.getElementById('m4');   
const move5=document.getElementById('m5');   

move1.addEventListener('click',function(){
  
  const maxForce = 300
  
  
  vehicle.applyEngineForce(-maxForce, 2)
  vehicle.applyEngineForce(-maxForce, 3)
});        


move2.addEventListener('touchstart',function(){
const maxSteerVal = 0.5  
vehicle.setSteeringValue(maxSteerVal, 0)
vehicle.setSteeringValue(maxSteerVal, 1)
});
move2.addEventListener('touchend',function(){
  const maxSteerVal1 = 0
  vehicle.setSteeringValue(maxSteerVal1, 0)
  vehicle.setSteeringValue(maxSteerVal1, 1)
  
  
});


move3.addEventListener('touchstart', function() {
  const maxSteerVal = 0.5
  vehicle.setSteeringValue(-maxSteerVal, 0)
  vehicle.setSteeringValue(-maxSteerVal, 1)
});

move3.addEventListener('touchend', function() {
  const maxSteerVal2 = 0
  vehicle.setSteeringValue(maxSteerVal2, 0)
  vehicle.setSteeringValue(maxSteerVal2, 1)
});



move4.addEventListener('touchstart', function() {
  const brakeForce =13
    vehicle.setBrake(brakeForce, 0)
    vehicle.setBrake(brakeForce, 1)
    vehicle.setBrake(brakeForce, 2)
    vehicle.setBrake(brakeForce, 3)
    
    
    
  });
  
move4.addEventListener('touchend',function(){
  vehicle.setBrake(0, 0)
  vehicle.setBrake(0, 1)
  vehicle.setBrake(0, 2)
  vehicle.setBrake(0, 3)
})

move5.addEventListener('touchstart', function() {
  const maxForce1 = 100
  vehicle.applyEngineForce(maxForce1, 2)
  vehicle.applyEngineForce(maxForce1, 3)
})

 





document.addEventListener('keydown', (event) => {
    const maxSteerVal = 0.5
           const maxForce = 300
           const brakeForce = 10
  
           switch (event.key) {
             case 'w':
             case 'ArrowUp':
               vehicle.applyEngineForce(-maxForce, 2)
               vehicle.applyEngineForce(-maxForce, 3)
               break
  
             case 's':
             case 'ArrowDown':
               vehicle.applyEngineForce(maxForce, 2)
               vehicle.applyEngineForce(maxForce, 3)
               break
  
             case 'a':
             case 'ArrowLeft':
               vehicle.setSteeringValue(maxSteerVal, 0)
               vehicle.setSteeringValue(maxSteerVal, 1)
               break
               case 'd':
                case 'ArrowRight':
                  vehicle.setSteeringValue(-maxSteerVal, 0)
                  vehicle.setSteeringValue(-maxSteerVal, 1)
                  break
    
                case 'b':
                  vehicle.setBrake(brakeForce, 0)
                  vehicle.setBrake(brakeForce, 1)
                  vehicle.setBrake(brakeForce, 2)
                  vehicle.setBrake(brakeForce, 3)
                  break
  
                  case 'r':
                    restartCurrentScene()
                    break
              }
            })
  
            // restartCurrentScene
  
    // Reset force on keyup
    document.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'w':
        case 'ArrowUp':
          vehicle.applyEngineForce(0, 2)
          vehicle.applyEngineForce(0, 3)
          break
  
        case 's':
        case 'ArrowDown':
          vehicle.applyEngineForce(0, 2)
          vehicle.applyEngineForce(0, 3)
          break
  
        case 'a':
        case 'ArrowLeft':
          vehicle.setSteeringValue(0, 0)
          vehicle.setSteeringValue(0, 1)
          break
          case 'd':
            case 'ArrowRight':
              vehicle.setSteeringValue(0, 0)
              vehicle.setSteeringValue(0, 1)
              break
  
            case 'b':
              vehicle.setBrake(0, 0)
              vehicle.setBrake(0, 1)
              vehicle.setBrake(0, 2)
              vehicle.setBrake(0, 3)
              break
  }
  })   
              
                          
  













 
 
 
 const controls = new OrbitControls(camera, renderer.domElement);
 mesh.add(camera);
 camera.position.set(0,0,10);
//=================================== 
function animate(){
  requestAnimationFrame(animate);
  camera.lookAt(mesh.position);
  world.fixedStep();
  cannonDebugRenderer.update();
  world.broadphase = new CANNON.SAPBroadphase(world);
  world.defaultContactMaterial.friction = 0;
  
  
  mesh.position.copy(chassisBody.position)
  mesh.quaternion.copy(chassisBody.quaternion)
  
  

  
  
  renderer.render(scene,camera);
}
animate();
 
 
 
 