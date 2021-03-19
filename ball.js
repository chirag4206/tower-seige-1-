class Ball {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:0.3,
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image = loadImage("polygon.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  }