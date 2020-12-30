class Paper {
    constructor(x, y,radius) {
      var options = {
        restitution: 0.8,
        density : 1.2,
        friction : 1,  
        isStatic : false
          
      }
      this.body = Matter.Bodies.circle(x, y, radius/2,options);
      this.radius = radius;
      this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  };