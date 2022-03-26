let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight
let c = canvas.getContext("2d");

/*
c.fillStyle = "#def123"
c.fillRect(250, 90,10,10);
c.fillStyle = "#fed321"
c.fillRect(240, 100,10,10);

c.beginPath();
c.moveTo(50, 50);
c.lineTo(100, 100);
c.lineTo(50, 100);
c.lineTo(50, 50)
c.strokeStyle = "#def123";
c.stroke();


let letters = ["a", 'b', 'c','d', 'e', 'f'];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//let lettersRandom = Math.round(Math.random() * (letters.length -1));
//let numbersRandom = Math.random() * (numbers.length - 1);
*/

/*
for(let i = 0; i < 100; i++){

    let randHeight = Math.random() * window.innerHeight;
    let randWidth = Math.random() * window.innerWidth;
    let colorChar = "1234567890ABCDEF";
    let color = "#";
    let radius = Math.floor(Math.random() * 55);
    for(let r = 0; r < 6; r++){
        let tempVar = Math.floor(Math.random() * 16)
        color += tempVar;
    }
    c.lineWidth = radius
    c.beginPath();
    c.arc(randWidth, randHeight, radius, 0, Math.PI * 2, false);
    c.strokeStyle = color;
    c.stroke()
}*/

let mouse = {
     x: undefined,
     y: undefined
}
let maxRadius = 55;
let minRadius = 4;
let quantity = 250;
let colorArray = [
    "#025E73",
    "#011F26",
    "#A5A692",
    "#BFB78F",
    "#F2A71B"
]
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y)
});

window.addEventListener("resize",
function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight

    init();
})
//oop
function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy=dy;
    this.randColor = Math.floor(Math.random() * colorArray.length);
    this.radius = radius;
    this.minRadius = radius;

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.fillStyle = colorArray[this.randColor];
        //c.fillStyle = color;
        //c.fill();

        
    }

    this.square = function(){
        c.beginPath();
        c.fillStyle = "white";
        c.fillRect(this.x, this.y, this.radius, this.radius);
        c.stroke();

    }

    this.update = function(){

            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.dx = -this.dx;
        }
    
            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
       //interactivity
       if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && 
        mouse.y - this.y > -50){
            if(this.radius < 100){
                this.radius += 5;
            }
        }
        else if(this.radius > this.minRadius){
            this.radius -=3;
        }
        this.draw()
    }
}

let cirArr = []

for(let i = 0; i < quantity; i++){
    let color = "#"
    let colorChar = "1234567890ABCDEF";
    for(let r = 0; r < 6; r++){
        color += colorChar[Math.floor(Math.random() * 16)]
    }
    let radius = (Math.random() * 5) + 5;
    let x = Math.random() * (window.innerWidth - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 3;
    let y = Math.random() * (window.innerHeight - radius * 2) + radius;
    let dy = (Math.random() - 0.5) * 3;
    cirArr.push(new Circle(x, y, dx, dy, radius, color));
}

function init(){
    cirArr = [];
    for(let i = 0; i < quantity; i++){
        let color = "#"
        let colorChar = "1234567890ABCDEF";
        for(let r = 0; r < 6; r++){
            color += colorChar[Math.floor(Math.random() * 16)]
        }
        let radius = (Math.random() * 5) + 5;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 1;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dy = (Math.random() - 0.5) * 1;
        cirArr.push(new Circle(x, y, dx, dy, radius, color));
    }
}
/*
if(randDirX == 0){
    dx = -1 * Math.floor(Math.random() * 5);
}
else if(randDirX == 1){
    dx = 1 * Math.floor(Math.random() * 5);
}
if(randDirY == 0){
    dy = -1 * Math.floor(Math.random() * 5);
}
else if(randDirY == 1){
    dy = 1 * Math.floor(Math.random() * 5);
}*/
function animate(){
    c.clearRect(0, 0, innerWidth, innerHeight)
    requestAnimationFrame(animate);
    //console.log(cirArr);
    for(let i = 0; i < cirArr.length; i++){
        cirArr[i].update()
    }
   /* c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.stroke();
    circle.update();

    if(x + radius > innerWidth || x - radius < 0){
        dx = -dx;
}

if(y + radius > innerHeight || y - radius < 0){
    dy = -dy;
}
 

x += dx;
y += dy;*/
}

animate()