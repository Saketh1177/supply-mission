const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world, engine , object
var helicopter , package , packagebody
function setup (){
createCanvas(400, 400);
engine = Engine.create()
world = engine.world
helicopter = createSprite (200,100,60,20)
package = createSprite (200,200,20,20)
var opt = {
isStatic:true
}
var options={
restitution:2.0
}
object = Bodies.rectangle(200,390,400,20,opt)
packagebody = Bodies.rectangle(200,200,20,20,options)

World.add(world,object)
World.add(world,packagebody)
Engine.run(engine)

}
function draw (){

background(0,0,0); 
Engine.update(engine) 
rectMode(CENTER)
 package.x = packagebody.position.x
 package.y = packagebody.position.y
 drop ();
drawSprites();
}
function drop (){
if(keyCode===DOWN_ARROW){
Matter.Body.setStatic(packagebody,false)



}
}