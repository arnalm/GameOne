import * as THREE from '../jsm/three.module.js';
import { OrbitControls }from './jsm/OrbitControls.js';
import * as CANNON from '../jsm/cannon-es.js';
import CannonDebugRenderer from "./jsm/CannonDebugRenderer.js";
import { GLTFLoader } from "./jsm/GLTFLoader.js";



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1,1000 );

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );









const ambientLight = new THREE.AmbientLight(0xffffff,3)
scene.add(ambientLight)


// const pointLight = new THREE.PointLight( 0xff0000, 10, 10 );
// //pointLight.position.set( 10, 10, 10 );
// scene.add( pointLight );

const directionalLight = new THREE.DirectionalLight(0xffffff,3)
// directionalLight.position.set(0, 40, 0)
// directionalLight.target.position.set(0, 0, 0)
scene.add(directionalLight)






//--------------------------------------------------------------




const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.82, 0),
});

const world1 = new CANNON.World({
  gravity: new CANNON.Vec3(0, 9.82, 0),
});

const  CannonD = new CannonDebugRenderer(scene, world,world1);



//_______

const s = new CANNON.Body({
  mass: 0,
  shape: new CANNON.Sphere(0.8)
});

world.addBody(s)
//_______________
var geometry = new THREE.BoxGeometry(6, 1, 2); 
var material = new THREE.MeshBasicMaterial({ 
   color: 'red'
}); 
  var mesh = new THREE.Mesh(geometry, material); 
 scene.add(mesh);
 
 

  var geometry = new THREE.BoxGeometry(2, 1, 2); 
var material = new THREE.MeshLambertMaterial({ 
   color: 0xF3FFE2 
}); 
  var meshCamera = new THREE.Mesh(geometry, material); 
  scene.add(meshCamera); 
 
 
 
 
 
 
var geometryx = new THREE.BoxGeometry(1,1,2);
var materialx = new THREE.MeshBasicMaterial({ color:0xF3FFE2});

var geometryx1 = new THREE.BoxGeometry(6, 1, 1);
var materialx1 = new THREE.MeshBasicMaterial({ color: 0xF3FFE2 });

var geometryx2 = new THREE.BoxGeometry(2, 2, 2);
var materialx2 = new THREE.MeshBasicMaterial({ color: 0xF3FFE2 });



const cubeA = new THREE.Mesh(geometryx, materialx);
cubeA.position.set(-4, 0, 0);

const cubeB = new THREE.Mesh(geometryx1, materialx1);
cubeB.position.set(0, 0, 0);

const cubeC = new THREE.Mesh(geometryx2, materialx2);
cubeC.position.set(-2.3, 1.3, 0);


//create a group and add the two cubes
//These cubes can now be rotated / scaled etc as a group
const group = new THREE.Group();
group.add(cubeA);
group.add(cubeB);
group.add(cubeC);

scene.add(group);
 
 
 
 
 
 
 
 

//_______________

const chassisShape1 = new CANNON.Box(new CANNON.Vec3(3, 0.5, 1));
let chassisBody,chassisShape;
 chassisShape = new CANNON.Box(new CANNON.Vec3(2.7, 0.5, 1))
 chassisBody = new CANNON.Body({ mass: 150 })



chassisBody.addShape(chassisShape)
chassisBody.addShape(chassisShape1)

chassisBody.position.set(24, 4, 7)
chassisBody.angularVelocity.set(0, 0, 0)
world.addBody(chassisBody)

//______________________________
const vehicle = new CANNON.RaycastVehicle({
  chassisBody,
})


const vehicle1 = new CANNON.RigidVehicle({
  chassisBody:chassisBody,
})
      

const mass =1;
const mass1 = 0;
const axixWhidth = 5;
const wheelA =new CANNON.Box(new CANNON.Vec3(2.3,0.6,1));
const wheelB =new CANNON.Sphere(0.6);
const wheelC =new CANNON.Box(new CANNON.Vec3(2,0.6,0.1));



const wheelMaterial1 = new CANNON.Material('ground');
const wheelMaterial2 = new CANNON.Material('wheel');
const down = new CANNON.Vec3(0,-0.1,0);
const down1 = new CANNON.Vec3(0.1,0,0);


let wheelBodyA1,wheelBodyA2,wheelBodyA3,wheelBodyA4,wheelBodyA5;
  
wheelBodyA1 = new CANNON.Body({
  mass,
  wheelMaterial1,
});

wheelBodyA1 = new CANNON.Body({ 
  mass: 80
  
})

wheelBodyA1.addShape(wheelA);




vehicle1.addWheel({
  body:wheelBodyA1,
  position:new CANNON.Vec3(1.2,1.3,0),
  axis: new CANNON.Vec3(0,0,1),
  direction:down
})



//________


wheelBodyA2 = new CANNON.Body({
 mass,
   wheelMaterial2,
 });
 wheelBodyA2.addShape(wheelB);
 

 
 
 
 vehicle1.addWheel({
  body:wheelBodyA2,
  position:new CANNON.Vec3(-1.7,2.2,0),
  axis: new CANNON.Vec3(0,0,1),
  direction:down
})


wheelBodyA3 = new CANNON.Body({
 mass,
  wheelMaterial1,
});
 wheelBodyA3.addShape(wheelB);
vehicle1.addWheel({
  body:wheelBodyA3,
  position:new CANNON.Vec3(0.5,0,0),
   axis: new CANNON.Vec3(0,1,1),
  direction:down
})


  

 







//_____
wheelBodyA4 = new CANNON.Body({
  mass,
  wheelMaterial1,
});
wheelBodyA4.addShape(wheelB);
vehicle1.addWheel({
  body: wheelBodyA4,
  position: new CANNON.Vec3(-0.5, 0, 0),
  axis: new CANNON.Vec3(0, 1, 1),
  direction: down
})
//_____
wheelBodyA5 = new CANNON.Body({
  mass:1,
 position:new CANNON.Vec3(-0,0,0),
 wheelMaterial2,
});
wheelBodyA5.addShape(wheelB);
world.addBody(wheelBodyA5);


vehicle1.addWheel({
  body: wheelBodyA5,
  position: new CANNON.Vec3(2.1, -0.2, 0),
  axis: new CANNON.Vec3(0, 1, 1),
  direction: down
})



//____________________________

const bolder = new CANNON.Body({
  mass:10,
  shape:new CANNON.Box(new CANNON.Vec3(1,1,1)),
  position:new CANNON.Vec3(24,6.7,7)
});
world.addBody(bolder)

var anload = document.getElementById('dump');
anload.addEventListener('click', function() {
  
  //______
  
  
//wheelBodyA3.position.set(0.1, 1,0)
   wheelBodyA1.quaternion.setFromEuler(0, 0, 0.2)
    
   
  
  
});















vehicle1.addToWorld(world)

//_______________________________

 

 
 











//_______
const wheelOptions = {
  radius: 0.5,
  directionLocal: new CANNON.Vec3(0, -1, 0),
  suspensionStiffness: 30,
  suspensionRestLength: 0.3,
  frictionSlip: 1.4,
  dampingRelaxation: 0.9,
  dampingCompression: 0.9,
  maxSuspensionForce: 100000,
  rollInfluence: 0.01,
  axleLocal: new CANNON.Vec3(0, 0, 1),
  chassisConnectionPointLocal: new CANNON.Vec3(-1, 0, 1),
  maxSuspensionTravel: 0.3,
  customSlidingRotationalSpeed: -30,
  useCustomSlidingRotationalSpeed: true,
}


wheelOptions.chassisConnectionPointLocal.set(-2.9, -0.3, 1)
vehicle.addWheel(wheelOptions)


wheelOptions.chassisConnectionPointLocal.set(-2.9, -0.3, -1)
vehicle.addWheel(wheelOptions)

wheelOptions.chassisConnectionPointLocal.set(2.3, -0.3, 1)
vehicle.addWheel(wheelOptions)

wheelOptions.chassisConnectionPointLocal.set(2.3, -0.3, -1)

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
  // const cylinderShape = new CANNON.Cylinder(wheel.radius, wheel.radius, wheel.radius / 2, 20)
  // //wheel.radius, wheel.radius, wheel.radius / 2, 20
  
  
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
//_____________________________________

const move1=document.getElementById('m1');
const move2=document.getElementById('m2');     
 const move3=document.getElementById('m3');     

 const move4=document.getElementById('m4');   
const move5=document.getElementById('m5');   

 move1.addEventListener('touchstart',function(){
  
  const maxForce = 500
  
  
   vehicle.applyEngineForce(-maxForce, 2)
   vehicle.applyEngineForce(-maxForce, 3)
 });        

move1.addEventListener('touchend',function(){
  
  const maxForce = 0
  
  
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
              
                       
  




























//______________________carBody End..______________________________

const mauntanTexture =new THREE.TextureLoader().load('./img/grass.png' );

const geometry1 = new THREE.BoxGeometry(350,2,350);
const material1 =new THREE.MeshLambertMaterial({
map:mauntanTexture
});
const mPlas =new THREE.Mesh(geometry1,material1);
scene.add(mPlas);


const plas = new CANNON.Body({
  mass:0,
  shape:new CANNON.Box(new CANNON.Vec3(175,1,175))
});
world.addBody(plas)







































//_______________________gltfloader__________________
//          village1
const loader = new GLTFLoader();
/*
loader.load("./house/Donut Store.glb",function(gltf){
const houseM1=gltf.scene;
houseM1.position.set(0,2.8,0);
houseM1.scale.set(2,2,2)
scene.add(houseM1);
});


loader.load("./house/Simple house.glb",function(gltf){
    const houseM2=gltf.scene;
    houseM2.position.set(10,3.9,0);
    houseM2.scale.set(2,2,2)
    scene.add(houseM2);
});
    */

loader.load("./house/Church.glb",function(gltf){
    const houseM3=gltf.scene;
    houseM3.scale.set(20,20,20);
    houseM3.position.set(-5,2,-50);
    scene.add(houseM3);
});
    
/*
loader.load("./villageMarket/Market Stalls.glb",function(gltf){
    const houseM4=gltf.scene;
    houseM4.scale.set(2,2,2);
    houseM4.position.set(-0.1,1,-4);
    scene.add(houseM4);
});
*/
    

loader.load("./villageMarket/House (1).glb",function(gltf){
    const houseM5=gltf.scene;
    houseM5.scale.set(5,4,5);
    houseM5.position.set(20,1,-35);
    scene.add(houseM5);
});
    


  










//_____________tree____________

loader.load("./tree/Oak Tree.glb",function(gltf){
    const tree1 =gltf.scene;
    tree1.scale.set(3.8,5,3.8);
    tree1.position.set(4,-0.8,10);
    scene.add(tree1);
});
    

loader.load("./tree/Oak Tree.glb",function(gltf){
    const tree2 =gltf.scene;
    tree2.scale.set(3,4,3);
    tree2.position.set(5,-1.2,25);
    tree2.rotation.set(0,5,0);
    scene.add(tree2);
});
    

loader.load("./tree/Oak Tree.glb",function(gltf){
    const tree3 =gltf.scene;
    tree3.scale.set(3,3,3);
    tree3.position.set(20,0.2,-50);
    tree3.rotation.set(0,80,0);
    scene.add(tree3);
});
    
loader.load("./tree/Oak Tree.glb",function(gltf){
    const tree4 =gltf.scene;
    tree4.scale.set(4,4,4);
    tree4.position.set(20,-0.8,-8);
    tree4.rotation.set(0,80,0);
    scene.add(tree4);
});
    

loader.load("./tree/Oak Tree.glb",function(gltf){
    const tree5 =gltf.scene;
    tree5.scale.set(5,5,5);
    tree5.position.set(-16,2,13);
    tree5.rotation.set(0,80,0);
    scene.add(tree5);
});
    


loader.load("./tree/Oak Tree.glb",function(gltf){
    const tree6 =gltf.scene;
    tree6.scale.set(2,3,2);
    tree6.position.set(-14,0.3,0);
    scene.add(tree6);
});

//-----------grass-----------
loader.load("./villageMarket/Grass Patch.glb",function(gltf){
    const grass =gltf.scene;
    grass.scale.set(2.5,3,2.5);
    grass.position.set(-2,1.8,-3);
    grass.rotation.set(0,80,0);
    scene.add(grass);
});
    

loader.load("./villageMarket/Grass Patch.glb",function(gltf){
    const grass1 =gltf.scene;
    grass1.scale.set(2.5,3,2.5);
    grass1.position.set(5,-1.8,6);
    grass1.rotation.set(0,8,0);
    scene.add(grass1);
});
    
loader.load("./villageMarket/Grass Patch.glb",function(gltf){
    const grass2 =gltf.scene;
    grass2.scale.set(2.5,3,2.5);
    grass2.position.set(8,-1.8,6);
    grass2.rotation.set(0,8,0);
    scene.add(grass2);
});

loader.load("./villageMarket/Grass Patch.glb",function(gltf){
    const grass3 =gltf.scene;
    grass3.scale.set(2.5,3,2.5);
    grass3.position.set(12,-1.8,6);
    grass3.rotation.set(0,8,0);
    scene.add(grass3);
});

loader.load("./villageMarket/Grass Patch.glb",function(gltf){
    const grass4 =gltf.scene;
    grass4.scale.set(2.5,4,2.5);
    grass4.position.set(1,-1.8,5);
    grass4.rotation.set(0,80,0);
    scene.add(grass4);
});

loader.load("./villageMarket/Grass Patch.glb",function(gltf){
    const grass5 =gltf.scene;
    grass5.scale.set(5,5,5);
    grass5.position.set(4,1.8,-55);
    grass5.rotation.set(0,80,0);
    scene.add(grass5);
});

let model;
loader.load("./BasicTruck.glb",function(gltf){
    model =gltf.scene;
    model.scale.set(1,1,0.8);
    model.position.set(40, 4, -12);
    scene.add(model);
    animate();
});




//==========cannone es code start...===========================

const texture = new THREE.TextureLoader().load('./img/grass_dirt.png' );
var geometry = new THREE.SphereGeometry(20);
var material = new THREE.MeshBasicMaterial({ 
  map:texture,
 } );
const m_1 = new THREE.Mesh( geometry, material );
scene.add( m_1 );

const m = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(4,-15,35),
shape:new CANNON.Sphere(20),
});

m.quaternion.setFromEuler(0,0,1.5)
world.addBody(m);

//-----
//const texture = new THREE.TextureLoader().load('./img/grass_dirt.png' );
var geometry = new THREE.SphereGeometry(20);
var material = new THREE.MeshBasicMaterial({ 
  map:texture,
 } );
const m_2 = new THREE.Mesh( geometry, material );
scene.add( m_2 );


const m1 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(22,-17,20),
shape:new CANNON.Sphere(20),
});

m1.quaternion.setFromEuler(0,0,1.5)
world.addBody(m1);
//-----


var geometry = new THREE.SphereGeometry(20);
var material = new THREE.MeshBasicMaterial({ 
  map:texture,
 } );
const m_3 = new THREE.Mesh( geometry, material );
scene.add( m_3 );


const m2 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(5,-12,-15),
shape:new CANNON.Sphere(20),
});

m2.quaternion.setFromEuler(0,0,1.5)
world.addBody(m2);



//-----


var geometry = new THREE.SphereGeometry(20);
var material = new THREE.MeshBasicMaterial({ 
  map:texture,
 } );
const m_4 = new THREE.Mesh( geometry, material );
scene.add( m_4 );


const m3 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(-18,-12,15),
shape:new CANNON.Sphere(20),
});

m3.quaternion.setFromEuler(0,0,1.5)
world.addBody(m3);



//-----


var geometry = new THREE.SphereGeometry(20);
var material = new THREE.MeshBasicMaterial({ 
  map:texture,
 } );
const m_5 = new THREE.Mesh( geometry, material );
scene.add( m_5 );


const m4 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(-15,-16.5,31),
shape:new CANNON.Sphere(20),
});

m4.quaternion.setFromEuler(0,0,1.5)
world.addBody(m4);






















//__________ grass img place__________

const texture1 = new THREE.TextureLoader().load('./img/grass_dirt.png' );
var geometry = new THREE.BoxGeometry(50,1,50);
var material = new THREE.MeshBasicMaterial({ 
  map:texture1,
 } );
var m_p = new THREE.Mesh( geometry, material );
scene.add(m_p );




const rOne = new CANNON.Box(new CANNON.Vec3(25,0.6,25) );
const m_P = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(10,0.7,-48),
});
m_P.addShape(rOne);
m_P.quaternion.setFromEuler(0,0,0)
world.addBody(m_P);







//const texture1 = new THREE.TextureLoader().load('./img/grass_dirt.png' );
var geometry = new THREE.BoxGeometry(50,1,50);
var material = new THREE.MeshBasicMaterial({ 
  map:texture1,
 } );
var m_p1 = new THREE.Mesh( geometry, material );
scene.add( m_p1);


const rOne1 = new CANNON.Box(new CANNON.Vec3(25,0.6,25) );
const m_P1 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(10,0.7,20),
});
m_P1.addShape(rOne1)
m_P1.quaternion.setFromEuler(0,3.15,0)
world.addBody(m_P1);







const texture2 = new THREE.TextureLoader().load('./img/grass_dirt.png' );
var geometry = new THREE.BoxGeometry(50,4,50);
var material = new THREE.MeshBasicMaterial({ 
  map:texture2,
 } );
var m_p2 = new THREE.Mesh( geometry, material );
scene.add( m_p2);


const rOne2 = new CANNON.Box(new CANNON.Vec3(25,2.3,25) );
const m_P2 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(-40,0.7,20),
});
m_P2.addShape(rOne2)
m_P2.quaternion.setFromEuler(0,3.15,0)
world.addBody(m_P2);


//======
var geometry = new THREE.BoxGeometry(50,1,50);
var material = new THREE.MeshBasicMaterial({ 
  map:texture2,
 } );
var m_p3 = new THREE.Mesh( geometry, material );
scene.add( m_p3);


const rOne3 = new CANNON.Box(new CANNON.Vec3(25,0.6,25) );
const m_P3 = new CANNON.Body({
mass:0,
position:new CANNON.Vec3(-90,0.7,20),
});
m_P3.addShape(rOne3)
m_P3.quaternion.setFromEuler(0,0,0)
world.addBody(m_P3);




//======
var geometry = new THREE.BoxGeometry(50, 1, 50);
var material = new THREE.MeshBasicMaterial({
  map: texture2,
});
var m_p4 = new THREE.Mesh(geometry, material);
scene.add(m_p4);


const rOne4 = new CANNON.Box(new CANNON.Vec3(25, 0.6, 25));
const m_P4 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(-140, 0.7, 20),
});
m_P4.addShape(rOne4)
m_P4.quaternion.setFromEuler(0,3.15, 0)
world.addBody(m_P4);



//======
var geometry = new THREE.BoxGeometry(50, 12, 50);
var material = new THREE.MeshBasicMaterial({
 // map:mauntanTexture,
 map: texture2,
});
var m_p5 = new THREE.Mesh(geometry, material);
scene.add(m_p5);


const rOne5 = new CANNON.Box(new CANNON.Vec3(25, 6.1, 25));
const m_P5 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(30, -1.3, 40),
});
m_P5.addShape(rOne5)
m_P5.quaternion.setFromEuler(3,-3.15,0)
world.addBody(m_P5);




//======
var geometry = new THREE.BoxGeometry(50, 12, 50);
var material = new THREE.MeshBasicMaterial({
 // map:mauntanTexture,
 map: texture2,
});
var m_p6 = new THREE.Mesh(geometry, material);
scene.add(m_p6);


const rOne6 = new CANNON.Box(new CANNON.Vec3(25, 6.1, 25));
const m_P6 = new CANNON.Body({
  mass: 0,
  position: new CANNON.Vec3(-15,-4, 30),
});
m_P6.addShape(rOne6)
m_P6.quaternion.setFromEuler(0,-3.15,0)
world.addBody(m_P6);










//                     village1 code end...
//__________________________________________________________

















//---------------------------------------------------------------
const fullscreenIcon = document.getElementById('fullscreenIcon');

fullscreenIcon.addEventListener('pointerup', () => {

      if (renderer.domElement.requestFullscreen) {
        renderer.domElement.requestFullscreen();

      } else if (renderer.domElement.webkitRequestFullscreen) {
        renderer.domElement.webkitRequestFullscreen();
      } else if (renderer.domElement.msRequestFullscreen) {
        renderer.domElement.msRequestFullscreen();

      }

});






camera.position.set(0,0,100);

group.add(camera)
renderer.setClearColor("lightcyan");
 const controls = new OrbitControls( camera, renderer.domElement );
// controls.maxPolarAngle = Math.PI * 0.495;
// //controls.target.set( 0, 2, 0 );
// controls.minDistance = 10.0;
// controls.maxDistance = 20.0;
// controls.update();





window.onresize = function () {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

};

function animate() {
    requestAnimationFrame(animate);
 world.fixedStep();
 CannonD.update();
 controls.update();
camera.lookAt(group.position)
group.position.copy(chassisBody.position)
group.quaternion.copy(chassisBody.quaternion)
/*
meshCamera.position.copy(wheelBodyA3.position)
meshCamera.quaternion.copy(wheelBodyA3.quaternion)

*/

/*
model.position.copy(meshCamera.position)
model.quaternion.copy(meshCamera.quaternion)
model.rotation.set(0,-Math.PI / 2,0)
*/







m_1.position.copy(m.position);
m_1.quaternion.copy(m.quaternion);

m_2.position.copy(m1.position);
m_2.quaternion.copy(m1.quaternion);

m_3.position.copy(m2.position);
m_3.quaternion.copy(m2.quaternion);
m_4.position.copy(m3.position);
m_4.quaternion.copy(m3.quaternion);

m_5.position.copy(m4.position);
m_5.quaternion.copy(m4.quaternion);




//_________box________
m_p.position.copy(m_P.position);
m_p.quaternion.copy(m_P.quaternion);

m_p1.position.copy(m_P1.position);
m_p1.quaternion.copy(m_P1.quaternion);

m_p2.position.copy(m_P2.position);
m_p2.quaternion.copy(m_P2.quaternion);

m_p3.position.copy(m_P3.position);
m_p3.quaternion.copy(m_P3.quaternion);

m_p4.position.copy(m_P4.position);
m_p4.quaternion.copy(m_P4.quaternion);

m_p5.position.copy(m_P5.position);
m_p5.quaternion.copy(m_P5.quaternion);

m_p6.position.copy(m_P6.position);
m_p6.quaternion.copy(m_P6.quaternion);




mPlas.position.copy(plas.position);
mPlas.quaternion.copy(plas.quaternion);
















//world.broadphase = new CANNON.SAPBroadphase(world);
//world.defaultContactMaterial.friction = 0;
renderer.render( scene, camera );
}

//animate();