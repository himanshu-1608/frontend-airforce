var track = 1;

function flip() {
    track++;
    if (track == 1)
        document.body.style = "background-image:url(./img/image1.jpg)";
    if (track == 2)
        document.body.style = "background-image:url(./img/image2.jpg)";
    if (track == 3)
        document.body.style = "background-image:url(./img/image3.jpg)";
    if (track == 4)
        document.body.style = "background-image:url(./img/image4.jpg)";
    if (track == 5) {
        document.body.style = "background-image:url(./img/image5.jpg)";
        track = 0;
    }
}

function gotohome() {
    location.replace("./index.html");
}

function gotohistory() {
    location.replace("./html/project_air_force_history.html");
}

function gotomarshall() {
    location.replace("./html/project_air_force_marshall.html");
}

function gotodefence() {
    location.replace("./html/project_air_force_defend.html");
}

function gotovideo() {
    location.replace("./html/project_air_force_video.html");
}