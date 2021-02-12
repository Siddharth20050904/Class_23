/*
1. CREATE A PHY ENGINE
2.  create a world
3. crate an object
4. add the object to the world
var x;//varies from time to time

const---it will not vary and it is con
giving nick name is called name spacing
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEng;
var myWorld;
var box1,box2;
var ground;

function setup(){
    createCanvas(600,600);

    myEng=Engine.create();
    myWorld = myEng.world;

    box1 = new Box(200,520,80,80);
    box2 = new Box(400,520,80,80);

    ground = new Ground(300,580,600,10);
    console.log(box1)
}


function draw(){
    background("pink")
    box1.display();
    box2.display();
    ground.display();
}