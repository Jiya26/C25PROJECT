class Dustbin {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          isStatic:true
      }
      this.left = Bodies.rectangle(600,600,10,100,options);
      this.center = Bodies.rectangle(650,650,50,10,options);
      this.right = Bodies.rectangle(700,600,10,100,options);
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.left);
      World.add(world,this.right);
      World.add(world,this.center);
    }
    display(){
      push();
      imageMode(CENTER);
      image(this.image,650,600,100,100);
      pop();
    }
  }