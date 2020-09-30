class box
{
    constructor(x,y,width,height)
    {
        var option=
        {
            restitution:0.8
        }
        this.boxobject=Bodies.rectangle(x,y,width,height)
        World.add(world,this.boxobject)
        this.width=width;
        this.height=height;
        
    }

    display()
    {

        rectMode(CENTER)
        rect(this.boxobject.position.x,this.boxobject.position.y,this.width,this.height)
    }
    

}