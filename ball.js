class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.1,
          'density':1
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.radius = 20;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,50,50);
      pop();
    }
  }