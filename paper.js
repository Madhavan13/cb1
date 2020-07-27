class paper {
    constructor(x, y,radius,maxSides) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius,options,maxSides);
        this.radius = radius;
        
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.radius);
        pop();
    }
};