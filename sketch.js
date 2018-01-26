let x = 400;
let y = 400;
let size=300;
let opacity =255;
let angle = 0;
let inc = 0.01;
let circlesLeft = [];
let circlesRight = [];
let numCircles = 400;
let osc=1;
// let scroll=0.1;

function setup() {
    createCanvas(1000,800);
    frameRate(4);
 
        for(let i = 0; i < numCircles; i++) {
        circlesLeft[i] = new Circle( i*10 +50 + i*random(60),400,random(size));
        circlesRight[i] = new Circle( i*10 +550 + i*random(60),400,random(size));
    }


setInterval(initCircles,3000);


}

function draw() {
  
    background(random(130));
  
    
        for(let i = 0; i < numCircles; i++) {
     
        osc1 = map(sin(angle),-3,3,0,height/8);  
        osc2 = map(cos(angle),-3,3,0,height/8);  
//            console.log(mult);
        circlesLeft[i%6].update(osc1, i*osc1); 
        circlesRight[i%6].update(osc2, i*osc2);  
            
        circlesLeft[i%6].display();
        circlesRight[i%6].display();

        angle+=inc;
    }
    

   // scroll+=0.01; 
    

    
 
   
}



let Circle = function(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = [random(255),random(255),random(255)];
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size); 
    }
    
    this.update = function(osc, scroll) {
//        console.log(mult);
        console.log(this.y);
         // this.x = this.x+0.1;
        this.y = osc+scroll/400+300;

        this.y = this.y/8+osc+scroll/400+300;
  
    }

    
}



function initCircles() {
        for(let i = 0; i < numCircles; i++) {
        circlesLeft[i] = new Circle( i*10 +200 + i*random(20),0,random(size));
        circlesRight[i] = new Circle( i*10 +600 + i*random(20),0,random(size));
    }
}

