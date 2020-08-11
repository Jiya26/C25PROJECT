class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          isStatic:true
      }
     this.left = Bodies rectangle(200,200,)
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("red")
      rectMode(CENTER);
      fill(250);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }