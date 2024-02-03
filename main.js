canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=100;
rover_y=100;
rover_image="rover.png";
NASA=["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg", "img_5.jpg"];
r = Math.floor(Math.random() * 4);
background_image= NASA[r];
console.log("background_image = " + background_image);

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener ("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up();
        console.log("up arrow key is pressed");
    }

    if(keyPressed == '40') {
        down();
        console.log("down arrow key is pressed");
    }

    if(keyPressed == '37') {
        left();
        console.log("left arrow key is pressed");
    }
    
    if(keyPressed == '39') {
        right();
        console.log("right arrow key is pressed");
    }
}

function up()
{
    if(rover_y>=0)
    {
    rover_y=rover_y-10;
    console.log("When up arrow is pressed, x = " + rover_x + "| y = " + rover_y);
    uploadBackground();
    uploadrover();
    }
}

function down()
{
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("When left arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("When right arrow is pressed, x = " + rover_x + "| y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}