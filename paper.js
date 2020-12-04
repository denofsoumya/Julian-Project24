class Paper{
constructor(x,y,r)
{
    var options={
        isStatic:false,
        restitution:0.8
    }

    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(x,y,r)
    World.add(world,this.body)
}
display()
{
    var paperpos=this.body.position;
    push()
    translate(paperpos.x,paperpos.y);
   
    strokeWeight(3);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r, this.r)
    pop()
}
}
