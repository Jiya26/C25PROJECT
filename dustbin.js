class Dustbin {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          isStatic:true
      }
      this.left = Bodies.rectangle(600,600,10,100);
      this.center = Bodies.rectangle(630,600,50,10);
      this.right = Bodies.rectangle(600,650,10,100);
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.left);
      World.add(world,this.right);
      World.add(world,this.center);
    }
    display(){
      push();
      imageMode(CENTER);
      image(this.image,630,600,50,100);
      pop();
    }
  }