var imgArray = [
                "images/ganyu.jpg", 
                "images/miku.png", 
                "images/ganyu1.jpg", 
                "images/ayaka.jpg"
                ];
i = 0;

function myFunction() {
    i++;
    document.getElementById("myImg").src = imgArray[i];
    if (i == imgArray.length - 1) {
        i = -1;
    }
}

var possibleResponses = [
                        "That is a no",
                        "It is not looking likely",
                        "Too hard to tell",
                        "It is quite possible",
                        "Definitely"
                        ];

function response() {
    document.getElementById("test").innerHTML = possibleResponses[(Math.floor(Math.random() * 5))];
}
