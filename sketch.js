const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;
    
    var dustbinObj, paperObject,groundObject	
    var world;
    
    
    function setup() {
        createCanvas(1200, 400);
        rectMode(CENTER);
    
    
        engine = Engine.create();
        world = engine.world;
        
        paperObject=new Paper(200,250,70);
        groundObject=new Ground(width/2,370,width,20);
        dustbinObj=new Dustbin(1000,350);
        
        
    
        
        Engine.run(engine);
     
      
    }
    
    
    function draw() {
      rectMode(CENTER);
      background(230);
     
      
      dustbinObj.display();
      groundObject.display();
      
      paperObject.display();
    
      
      
     
      
      
     
    }
    
    function keyPressed() {
          if (keyCode === UP_ARROW) {
    
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
        
          }
    }