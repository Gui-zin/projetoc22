var starImg,bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada,fadaImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada
    fadaImg = loadAnimation("images/fairyimage1.png","images/fairyimage2.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130,520);
    fada.addAnimation("fadavoando",fadaImg);
    fada.scale = 0.25;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
    background(bgImg);
    drawSprites();
    if(keyDown("LEFT_ARROW")) {
        fada.x -= 5;
    }
    if(keyDown("RIGHT_ARROW")) {
        fada.x += 5;
    }

    if(fada.x>=520 && fada.x<=550 && star.y>=470) {
        Matter.Body.setStatic(starBody,true);
    }
}