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

var top10_2021 = [
    "10. Tokoyo Revengers",
    "9. Sk∞",
    "8. Horimiya",
    "7. Demon Slayer Mugen Train",
    "6. Vivy",
    "5. 86 EIGHTY SIX",
    "4. Jujutsu Kaisen",
    "3. Odd Taxi",
    "2. AOT (Attack on Titans)",
    "1. Mushoku Tensei"
];

var top10_2021Images = [
    "tokoyo revengers.jpg",
    "sk∞.jpg",
    "horimiya.jpg",
    "demon slayer.jpg",
    "vivy.jpg",
    "86.jpg",
    "jujutsu kaisen.jpg",
    "odd taxi.jpg",
    "aot.jpg",
    "mushoku tensei.jpg"
];

var top10_2020 = [
    "10. Fire Force Season 2", 
    "9. Rent-a-Girlfriend",
    "8. My Teen Romantic Comedy SNAFU Climax!",
    "7. Toilet-bound Hanako-kun",
    "6. A Certain Scientific Railgun T",
    "5. Haikyuu!!: To the Top 2nd Season",
    "4. Re:ZERO -Starting Life in Another World- Season 2",
    "3. Kaguya-sama: Love is War Season 2",
    "2. Violet Evergarden the Movie",
    "1. Jujutsu Kaisen"
];

var top10_2020Images = [
    "fire force2.jpg",
    "rent-a-girlfriend.jpg",
    "My Teen Romantic Comedy SNAFU Climax!.jpg",
    "toilet-bound.jpg",
    "railgun t.jpg",
    "Haikyuu!! To the Top 2nd Season.jpg",
    "reZERO season 2.jpg",
    "Kaguya-sama Love is War Season 2.jpg",
    "Violet Evergarden the Movie.jpg",
    "jujutsu kaisen.jpg"
];

index = 0;

function change_text(direction, year){
    if (direction == 'Back' && index != 0) index--;
    else if (direction == 'Next') index++;
    if (year == '2021'){
        document.getElementById("2021Text").innerHTML = top10_2021[index];
        document.getElementById("2021Image").setAttribute('src', `images/2021/${top10_2021Images[index]}`);
    }else if (year == '2020'){
        document.getElementById("2020Text").innerHTML = top10_2020[index];
        document.getElementById("2020Image").setAttribute('src', `images/2020/${top10_2020Images[index]}`);
    }
    if (index == 9) index = -1;
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
