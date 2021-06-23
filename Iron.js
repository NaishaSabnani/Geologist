class Iron{
	constructor(x,y)
	{
	var options=
	{
	restitution:0.8,
	friction:0.9,
	density:12
	}
	
	this.body = Bodies.rectangle(x, y, 100, 100, options);
		this.x=x;
		this.y=y;
		this.width= 100;
        this.height=100
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("white");
            rect(0, 0, this.width, this.height);
			pop()
	}

}