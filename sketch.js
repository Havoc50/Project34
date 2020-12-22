const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){

    createCanvas(1600, 800);
    engine = Engine.create();
    world = engine.world;
    
    pendulum1 = new Pendulum(600, 200, 100, 100);
    pendulum2 = new Pendulum(700, 200, 100, 100);
    pendulum3 = new Pendulum(800, 200, 100, 100);
    pendulum4 = new Pendulum(900, 200, 100, 100);
    pendulum5 = new Pendulum(1000, 200, 100, 100);

    sling1 = new Sling(pendulum1.body, {x: 600, y: 150});
    sling2 = new Sling(pendulum2.body, {x: 700, y: 150});
    sling3 = new Sling(pendulum3.body, {x: 800, y: 150});
    sling4 = new Sling(pendulum4.body, {x: 900, y: 150});
    sling5 = new Sling(pendulum5.body, {x: 1000, y: 150});


}

function draw(){

    background("lightblue");
    Engine.update(engine);
    
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
    
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged(){

    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});

}