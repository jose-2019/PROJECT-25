class block{

constructor(x,y,width,height){

var opt={
    isStatic:true
}

this.Leftbody=Bodies.rectangle(x,y,width,height,opt);
this.width=width;
this.height=height;
World.add(world,this.Leftbody)

this.Rightbody=Bodies.rectangle(x+100,y,width,height,opt);
this.width=width;
this.height=height;
World.add(world,this.Rightbody)

}

display(){

var po =this.Leftbody.position;
rectMode(CENTER);
fill("yellow");
rect(po.x, po.y, this.width, this.height);


var pos =this.Rightbody.position;
rectMode(CENTER);
fill("yellow");
rect(pos.x, pos.y, this.width, this.height);


}


}

