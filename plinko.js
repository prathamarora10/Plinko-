class Plinko
{
    constructor(x,y){

        var option = {
            isStatic : true,
            density:3
        }

        this.body = Bodies.circle(x,y,10,option)

        World.add(world,this.body)
    }

    display(){

        var pos = this.body.position

        fill("white")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,10)
    }
}