canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_images=["mars.jpg","mars1.jpg","mars2.jpg"];
random=Math.floor(Math.random()*3);
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;
bg_image=mars_images[random];
rover_image="rover.png";

function add(){
    background=new Image();
    background.onload=upload_background;
    background.src=bg_image;
    rover=new Image();
    rover.onload=upload_rover;
    rover.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=="38"){
        up();
    }
    if(keypressed=="40"){
        down();
    }
    if(keypressed=="37"){
        left();
    }
    if(keypressed=="39"){
        right();
    }
    
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        upload_background();
        upload_rover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        upload_background();
        upload_rover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        upload_background();
        upload_rover();
    }
}