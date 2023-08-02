noseX=0
noseY=0
function preload() {

    clown_nose = loadImage('https://i.postimg.cc/DywsxTjd/png-clipart-rudolph-clown-nose-drawing-clown-nose-s-face-cartoon-removebg-preview.png');
    



}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoad);//ml5 satnds for mechgh learninglear
    poseNet.on('pose', gotPoses);
}

function modelLoad() {
    console.log('poseNet is Initialized');

}

function gotPoses(results) {

    if (results.length > 0) {

        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }



}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
   
    image(clown_nose, noseX, noseY, 30,30);
    }
    
function take_snapshot() {
    save('handsome_clowny.png');

}




