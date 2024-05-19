var videoFileNames = [
    "A Chan's IRL (Face Reveal)", "A Smole Suisei Singing", "Aloe's IRL (Face Reveal)", "Aqua and Mea's IRL (Face Reveal)  Kinda", 
    "Ayame's Finger Reveal", "Best Girl's IRL (Face Reveal)", "Botan's IRL (Face Reveal)", "Calliope's IRL (Face Reveal) Part 2", 
    "Calliope's IRL (Face Reveal)", "Choco's IRL (Face Reveal)  Legit Legit Version", "Choco's IRL (Face Reveal)  Legit Version", "Choco's IRL (Face Reveal)", 
    "Chocos Top Tier ASMR 🎧", "Coco's IRL (Face Reveal)", "Fauna's IRL (Face Reveal)", "Finanas IRL (Face Reveal)", "Fubuki's IRL (Face Reveal)", 
    "Haachama's IRL (Face Reveal)", "Hololive Past Life Song Covers", "Hololive Past Vtuber Avatars", "Inas IRL (Face Reveal)", 
    "IRL Amelia looking at Lewd Vtuber's stuff", "IRL Korone moving her eyebrows", "IRL Laplus Dancing", "IRL Laplus shows off her Oppai", 
    "IRL Laplus Simping", "IRL Marine Singing", "IRL Mio and Ars Cooking (Face Reveal)", "IRL Moona Dancing (Face Reveal)", 
    "IRL Noel Stretching", "IRL Towa Dancing (Face Reveal)", "IRL Watame Dancing", "IRYS FACE REVEAL", 
    "Korone's IRL (Face Reveal) Part 2", "Korone's IRL (Face Reveal)", "Kronii's IRL (Face Reveal)", "Lamy's IRL (Oppai Reveal)", "Laplus",
    "Lui's IRL (Face Reveal)", "Lulus IRL (Face Reveal)", "Luna's IRL (Face Reveal) Part 2", "Luna's IRL (Face Reveal)", 
    "Marine's IRL (Face Reveal)", "Matsuri....Messed Up", "Miko's IRL (Face Reveal) Part 2", "Miko's IRL (Face Reveal)", 
    "Miko's Top Tier Ecchi Roleplay (Onee-san Loli)", "Mio's Glowup (Face Reveal)", "Mio's IRL (Face Reveal)", "MOMOSUZU NENE FACE REVEAL",
    "Moona's IRL (Face Reveal)", "MURASAKI SHION AND MINATO AQUA CHEST REVEAL", "Nanashi Mumei's IRL (Face Reveal)", "NATSUIRO MATSURI FACE REVEAL",
    "Nene And Mama's IRL (Face Reveal)", "Nene's IRL (Face Reveal) Part 2", "Nene's IRL (Face Reveal) Part 3", "Noel....Messed Up",
    "Noel's IRL (Face Reveal)", "Okayu's IRL (Face Reveal)", "Pekora's IRL (Face Reveal)", "Pekora's IRL JK Ver.",
    "Plastic Love Matsuri IRL Ver.", "Polka's IRL (Face Reveal)", "Reine's IRL (Face Reveal)", "Roboco's IRL (Face Reveal)",
    "Rushia reveals her cat (Face Reveal)", "Rushia reveals her cat Part 2 (Face Reveal)", "Rushia's IRL (Face Reveal)  Video Edition", "Rushia's IRL (Face Reveal) Part 2",
    "Selens IRL (Face Reveal)", "Sana's IRL (Face Reveal)", "Shion's IRL (Face Reveal)", "Shylily", "Some Pekora Boing Boing", "Subaru IRL",
    "Subaru's IRL (Face Reveal) Part 2", "Subaru's IRL (Face Reveal)", "Suisei's IRL (Face Reveal)", "THAT TIME I GOT REINCARNATED AS HIMEMORI LUNA",
    "THAT TIME I GOT REINCARNATED AS HOUSHOU MARINE", "tokino-sora-godess", "Towa's Face Reveal", "Towa's IRL (Face Reveal) Part 2",
    "Tribute 🦋❤️", "URUHA RUSHIA FACE REVEAL", "Watame's IRL (Face Reveal)", "YOZORA MEL FACE REVEAL",
    "Yozora Mel's Dance"
];

var pictureFileName = [
    "AkumaNihmune", "Amalee", "Artia", "Bae", "Bao", "Bao 1", "Bao 2", "Bao 3", "Bao 4",  
    "BotanAyameNeneMama", "Buffpup", "Choco", "Choco 2", "Coco", "Elira", "Enna", "Enna 1", "Enna 2",
    "Enna 3", "Fauna", "Finana Ryugu Face", "Froot", "Froot 2", "Gura", "IDK", "Korone", "Korone 2", "Korone 3",
    "Koyori", "Laplus", "Laplus 2", "Laplus 3", "Laplus 4", "Laplus 5", "Laplus 6", 
    "Laplus 7", "Laplus 8", "Laplus 9", "Lofi", "Luca", "Lui", "Lui 2", "Lui 3", "Luna", "Masturi", "Masturi 1", "Masturi 2", 
    "Mel", "Mel 2", "MelRushia", "Miko", "Millie", "Millie 1", "Minami", "Mysta Rias", "Nene", "Nina", "Nina 1", "Noel",
    "Noel 2", "Noel 3", "Noel 4", "Noel 5", "Noel 6", "Nyanners", "Nyanners 1", "Pomu", "Pomu 1", "Pomu 2", "Reimu",
    "Rushia", "Rushia 2", "Rushia 3", "Rushia 4", "Rushia 5", "Rushia 6", "Rushia 7", "Rushia 8", "Saki", "Shoto",
    "Towa", "Towa 2", "Towa 3", "Towa 4","Towa 5", "Towa 6", "Towa 7", "Tricky", "Tricky 1", "veibae", "veibae 2", "veibae 3", 
    "veibae 4", "Vox", "Vox 1", "Watame", "Yuzu", "Yuzu1", "Yuzu2"
];

var index = 0;

function changeVideo(direction){
    if (direction == 'Back' && index != 0) index--;
    else if (direction == 'Back') index = videoFileNames.length-1;
    else if (direction == 'Next' && index != videoFileNames.length-1) index++;
    else if (direction == 'Next') index = 0;

    document.getElementById("videoFileName").innerHTML = `${videoFileNames[index]}`;
    document.getElementById("videoFile").setAttribute('src', `Vtuber Stuff/videos/${videoFileNames[index]}.mkv`);
} 

function changePicture(direction){
    if (direction == 'Back' && indexPicture != 0) indexPicture--;
    else if (direction == 'Back') indexPicture = pictureFileName.length-1;
    else if (direction == 'Next' && indexPicture != pictureFileName.length-1) indexPicture++;
    else if (direction == 'Next') indexPicture = 0;
    
    document.getElementById("pictureFileName").innerHTML = `${pictureFileName[indexPicture]}`;
    document.getElementById("pictureFile").setAttribute('src', `Vtuber Stuff/Pictures/${pictureFileName[indexPicture]}.jpg`);
}

var imgArray = [
                "images/ganyu.jpg", 
                "images/miku.png", 
                "images/ganyu1.jpg", 
                "images/ayaka.jpg",
                "images/Kei Karuizawa.jpg"
                ];
indexImage = 0;

var indexPicture = 0;

function myFunction() {
    indexImage++;
    document.getElementById("myImg").src = imgArray[indexImage];
    if (indexImage == imgArray.length - 1) {
        indexImage = -1;
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
        this.canvas.setAttribute("id", "myCanvas");
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

var top10_2019 = [
    "10. The Quintessential Quintuplets",
    "9. One Punch Man 2nd Season",
    "8. Fire Force",
    "7. Dr. Stone", 
    "6. Kaguya-sama: Love is War",
    "5. Demon Slayer: Kimetsu no Yaiba",
    "4. The Rising of the Shield Hero",
    "3. Vinland Saga",
    "2. Mob Psycho 100 II",
    "1. Attack on Titan Season 3 Part 2"
];

var top10_2019Images = [
    "quintessential quintuplets.jpg",
    "one punch man 2nd season.jpg",
    "fire force.jpg",
    "dr stone.jpg",
    "love is war.jpg",
    "demon slayer.jpg",
    "shield hero.jpg",
    "vinland saga.jpg",
    "mob psycho 100 2.jpg",
    "aotp2.jpg"
];

var top10_2018 = [
    "10. Tada Never Falls in Love",
    "9. Wotakoi: Love is Hard for Otaku",
    "8. That Time I Got Reincarnated as a Slime",
    "7. Banana Fish",
    "6. Asobi Asobase: Workshop of Fun",
    "5. Rascal Does Not Dream of Bunny Girl Senpai",
    "4. My Hero Academia 3",
    "3. JoJo's Bizarre Adventure: Golden Wind",
    "2. Violet Evergarden",
    "1. Attack on Titan Season 3"
];

var top10_2018Images = [
    "tada never falls in love.jpg",
    "love is hard for otaku.jpg",
    "slime.jpg",
    "banana fish.jpg",
    "asobi asobase.jpg",
    "bunny girl.jpg",
    "mha 3.jpg",
    "jojo.jpg",
    "violet evergarden.jpg",
    "aot s3.jpg"
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
    }else if (year == '2019'){
        document.getElementById("2019Text").innerHTML = top10_2019[index];
        document.getElementById("2019Image").setAttribute('src', `images/2019/${top10_2019Images[index]}`);
    }else if (year == '2018'){
        document.getElementById("2018Text").innerHTML = top10_2018[index];
        document.getElementById("2018Image").setAttribute('src', `images/2018/${top10_2018Images[index]}`);
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

var icon = document.getElementById("icon");

// if (localStorage.getItem("theme") == null){
//     localStorage.setItem("theme", "light");
// }

// let localData = localStorage.getItem("theme");

// if (localData == "light"){
//     icon.src = "icons/moon.png";
//     document.body.classList.remove("dark-theme");
// }else if(localData == "dark"){
//     icon.src ="icons/sun.png";
//     document.body.classList.add("dark-theme");
// }

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src ="icons/sun.png";
        localStorage.setItem("theme", "dark");
    }else{
        icon.src = "icons/moon.png";
        localStorage.setItem("theme", "light");
    }
}
