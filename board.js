class Board{
    constructor(x,y,width,height){
        var options={
            'restitution':0,
            'friction':0,
            'density':0.3
        }
        this.body=rectangle(this.width,this.height,options)
        this.width=width
        this.height=height
    }

}