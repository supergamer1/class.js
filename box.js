class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var ang = this.body.angle;
    push();
    console.log("Line 18 box.js: ",this.body);
    translate(pos.x,pos.y);
    rotate(ang);
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x,pos.y ,this.width, this.height);
    pop();
  
  }
};