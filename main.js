function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230,150,220,200);

    fill(145,0,0);
    stroke(212, 5, 73);
    circle(50, 50, 80);

    fill(145,57,244);
    stroke(72, 1, 26);
    rect(90, 40, 460, 20);

    fill(125,110,20);
    stroke(1, 215, 21);
    circle(550, 50, 80);

    fill(198,110,210);
    stroke(131, 225, 255);
    rect(40, 40, 20, 460);

    fill(215,21,16);
    stroke(212, 15, 173);
    circle(550, 450, 80);

    fill(145,0,0);
    stroke(212, 5, 73);
    rect(60, 450, 500, 20);

    fill(255,121,124);
    stroke(202, 125, 173);
    circle(50, 450, 80);

    rect(540, 40, 20, 460);
}
function take_snapshot() {
    save('student_name.png');
}