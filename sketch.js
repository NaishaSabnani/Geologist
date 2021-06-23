const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
var stone
var rubber
var stone
var iron

var engine, world;
var hammer, hammer2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100)
    rubber = new Rubber1(30,100,50)
    stone = new Stone(50,100,50)
    stone2=new Stone(150,100,50)
    iron = new Iron(70, 100)
    




}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    stone2.display();
    
 
}