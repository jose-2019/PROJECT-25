class Block1{

    constructor(x,y,width,height){
    
    var opt={
        isStatic:true
    }
    

    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.Bottombody=Bodies.rectangle(x,y,width,height,opt);

    this.image=loadImage("dustbingreen.png");

    }
    
    display(){
    
    var posit =this.Bottombody.position;
    rectMode(CENTER);
    fill("yellow");
    rect(posit.x, posit.y, this.width, this.height);

    imageMode(CENTER);
    image(this.image,1050,620)
    this.image.width=130;
    this.image.height=160;    
    push();
    translate(posit.x,posit.y)
    pop();



    }
    
    
    }