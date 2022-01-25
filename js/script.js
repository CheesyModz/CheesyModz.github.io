var imgArray = [
                "images/ganyu.jpg", 
                "images/miku.png", 
                "images/ganyu1.jpg", 
                "images/ayaka.jpg",
                "images/Kei Karuizawa.jpg"
                ];
i = 0;

function myFunction() {
    i++;
    document.getElementById("myImg").src = imgArray[i];
    if (i == imgArray.length - 1) {
        i = -1;
    }
}


function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

var possibleResponses = [
                        "That is a no",
                        "It is not looking likely",
                        "Too hard to tell",
                        "It is quite possible",
                        "Definitely"
                        ];

function response() {
    document.getElementById("output").innerHTML = possibleResponses[(Math.floor(Math.random() * 5))];
}

function openNav() {
    document.getElementById("mySidenav").style.width= "250px";
}

function closeNav () {
    document.getElementById("mySidenav").style.width = "0";
}


function startGame() {
    box = new component();
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component() {
    this.width = 30;
    this.height = 30;
    this.speedX = 0;
    this.speedY = 0;
    this.x = 10;
    this.y = 120;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
}

function updateGameArea() {
    myGameArea.clear();
    box.newPos();    
    box.update();
}

function moveup() {
    box.speedY -= 1; 
}

function movedown() {
    box.speedY += 1; 
}

function moveleft() {
    box.speedX -= 1; 
}

function moveright() {
    box.speedX += 1; 
}

function changeName(){
    var name = document.getElementById("name").value;
    if (name == "") document.getElementById("demo").innerHTML = "Try again!";
    else document.getElementById("demo").innerHTML = `Hello ${name}. Welcome to my Website!`;
}
