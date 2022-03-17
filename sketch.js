var bg,bgImg;
var player;
var personagemPrincipal;
var monstro1,monstro2,monstro3,monstro4,monstro5,monstro6;


function preload(){

  personagemPrincipal=loadImage("png-transparent-woman-girl-shabby-chic-child-people-toddler-thumbnail.png")
  monstro1=loadImage("8-monster-octopus-zombie-cartoon-clipart.jpg")
  monstro2=loadImage("Monstro-Png-1024x1024.png")
  monstro3=loadImage("images (1).jpg")
  monstro4=loadImage("images (2).jpg")
  monstro5=loadImage("images.jpg")
  monstro6=loadImage("kisspng-cartoon-monster-illustration-vector-painted-weird-gorilla-5a7c6b2b887399.3393749715181033395589.jpg")
  

  bgImg = loadImage("download.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 4.8
  

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(personagemPrincipal)
   player.scale = 0.1;
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   //monstro1
   monster1= createSprite(50,50,30,30)
monster1.addImage(monstro1)
monster1.scale = 0.3

 //monstro2
 monster2= createSprite(100,100,30,30)
 monster2.addImage(monstro2)
 monster2.scale = 0.3

  //monstro3
  monster3= createSprite(150,150,30,30)
  monster3.addImage(monstro3)
  monster3.scale = 0.3

   //monstro4
   monster4= createSprite(200,200,30,30)
monster4.addImage(monstro4)
monster4.scale = 0.3

 //monstro5
 monster5= createSprite(250,250,30,30)
 monster5.addImage(monstro5)
 monster5.scale = 0.3

  //monstro6
  monster6= createSprite(300,300,30,30)
  monster6.addImage(monstro6)
  monster6.scale = 0.3

}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}

//monstro correrem atras da personagemPrincipal
monster1.x=personagemPrincipal.x
monster1.velocity=-3



//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
/*if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if(keyWentUp("space")){
  player.addImage(shooterImg
}*/

drawSprites();

}
