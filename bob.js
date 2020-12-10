class Bob{
    constructor(x,y){
       var options= {
           'restitution':0.3,
        'friction':0.5,
        'density':0.5
       }
        this.body=circle(this.x,this.y,options)
    }

}