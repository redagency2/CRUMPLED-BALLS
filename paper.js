class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.8,
            friction:0,
            density:1.2	
	    }
        this.r = r 
        this.image = loadImage("paper.png")
		this.body=Bodies.circle(x, y,r/2, options);
 		World.add(world, this.body);
        
	}
	display()
	{
			
			var pos =this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER)
            angleMode(RADIANS)
            rotate(this.body.angle)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}