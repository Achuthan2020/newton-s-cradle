class Rope{
    constructor(x,y,width,height){
        var options={
            'restitution':0.3,
            'friction':0.3,
            'density':0.3
        } 
        this.body=rectangle(this.width,this.height,options);
    }
}