var img_array = ["images/ganyu.jpg", "images/miku.png"];
i = 0;

function myFunction() {
    i++;
    document.getElementById("myImg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;

    }

}