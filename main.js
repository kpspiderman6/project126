song = "";

left_wrist_y=0;
left_wrist_x=0;

right_wrist_x=0;
right_wrist_y=0;

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(500,250);

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialised");
}

function draw(){
    image(video,0,0,600,600);
}
function preload(){
    song=loadSound("https://kpspiderman6.github.io/MUSIC/Muqabla%20-%20Street%20Dancer%203D%20128%20Kbps.mp3");
    
}
function play_sound(){
    song.play();
    song.setVolume(1);
    song.rate(2.5);
}
function stop_sound(){
    song.stop();
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wrist_x= results[0].pose.leftWrist.x;
        left_wrist_y= results[0].pose.leftWrist.y;
        console.log("left wrist x ="+left_wrist_x+"left wrist y="+left_wrist_y);

        right_wrist_x= results[0].pose.rightWrist.x;
        right_wrist_y= results[0].pose.rightWrist.y;
        console.log("right wrist x ="+right_wrist_x+"right wrist y="+right_wrist_y);
    }
}
