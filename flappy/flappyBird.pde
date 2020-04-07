/* @pjs preload="bird.png"; */

float pos = 0;
float pillarDistance = 200;
float pillarDistanceTwo = 350;
float pillarDistanceThree = 500;
float pillarMid = random(30, 130);
float pillarMidTwo = random(30, 130);
float pillarMidThree = random(30, 130);
float birdH = 100;
float startTime = (millis()/990)-0.2-30;
float play = 0;
int score = 0;
float gameOver = 0;
float gameScreen = 1;
float frameNums =0;
PImage img;

void setup() {
    frameRate(70);
    background(255);
    size(300, 400);
    background(0, 163, 255);
    pillarDistance += -1;
    pillarDistanceTwo += -1;
    pillarDistanceThree += -1;
    fill(0, 189, 0);
    rect(pillarDistanceThree, pillarMidThree+50, 30, 300,3, 3, 3, 3);
    fill(0, 189, 0);
    rect(pillarDistanceThree, pillarMidThree-210, 30, 200,3, 3, 3, 3);
    fill(0, 189, 0);
    rect(pillarDistanceTwo, pillarMidTwo+50, 30, 300,3, 3, 3, 3);
    fill(0, 189, 0);
    rect(pillarDistanceTwo, pillarMidTwo-210, 30, 200,3, 3, 3, 3);
    fill(0, 189, 0);
    rect(pillarDistance, pillarMid+50, 30, 300,3, 3, 3, 3);
    fill(0, 189, 0);
    rect(pillarDistance, pillarMid-210, 30, 200,3, 3, 3, 3);
    fill(0, 189, 0);
    fill(0, 170, 0);
    rect(pillarDistanceThree-10, pillarMidThree+50, 50,20, 2);
    rect(pillarDistanceThree-10, pillarMidThree-20, 50,20, 2);
    rect(pillarDistanceTwo-10, pillarMidTwo+50, 50, 20,2);
    rect(pillarDistanceTwo-10, pillarMidTwo-20, 50, 20,2);
    rect(pillarDistance-10, pillarMid+50, 50, 20,2);
    rect(pillarDistance-10, pillarMid-20, 50, 20,2);
    rect(0,250,500,400);
    img = loadImage("images/bird.png");
    image(img, 0, birdH, 50,45);
    startTime = (millis()/990)-0.2;
    delay(2000);
    gameScreen = 1;
}

void draw(){
    if(( gameScreen == 0) && (gameOver  == 0)){
        background(0, 163, 255);
        pillarDistance += -1;
        pillarDistanceTwo += -1;
        pillarDistanceThree += -1;
        fill(0, 189, 0);
        rect(pillarDistanceThree, pillarMidThree+50, 30, 300,3, 3, 3, 3);
        fill(0, 189, 0);
        rect(pillarDistanceThree, pillarMidThree-210, 30, 200,3, 3, 3, 3);
        fill(0, 189, 0);
        rect(pillarDistanceTwo, pillarMidTwo+50, 30, 300,3, 3, 3, 3);
        fill(0, 189, 0);
        rect(pillarDistanceTwo, pillarMidTwo-210, 30, 200,3, 3, 3, 3);
        fill(0, 189, 0);
        rect(pillarDistance, pillarMid+50, 30, 300,3, 3, 3, 3);
        fill(0, 189, 0);
        rect(pillarDistance, pillarMid-210, 30, 200,3, 3, 3, 3);
        fill(0, 189, 0);
        fill(0, 170, 0);
        rect(pillarDistanceThree-10, pillarMidThree+50, 50,20, 2);
        rect(pillarDistanceThree-10, pillarMidThree-20, 50,20, 2);
        rect(pillarDistanceTwo-10, pillarMidTwo+50, 50, 20,2);
        rect(pillarDistanceTwo-10, pillarMidTwo-20, 50, 20,2);
        rect(pillarDistance-10, pillarMid+50, 50, 20,2);
        rect(pillarDistance-10, pillarMid-20, 50, 20,2);
        rect(0,275,500,400);
        fill(0);
        textSize(15);
        text(str(score), 10, 15);
        fill(0);
        textSize(15);
        img = loadImage("images/bird.png");
        image(img, 0, birdH, 50,45);
        birdH += -((startTime-((millis()/990)-0.2))+0.4)*2;
        if(birdH > 250){
            gameOver = 1;
        }
        if(pillarDistance == -50){
            pillarDistance = 400;
            print(pillarDistance);
            pillarMid = random(30, 160);
            score += 1;
            print(score);
        }
        if(pillarDistanceTwo == -50){
            pillarDistanceTwo = 400;
            print(pillarDistanceTwo);
            pillarMidTwo = random(30, 160);
            score +=1;
            print(score);
        }
        if(pillarDistanceThree == -50){
            pillarDistanceThree = 400;
            print(pillarDistanceThree);
            pillarMidThree = random(30, 160);
            score +=1;
            print(score);
        }
        if(pillarDistance < 30 && (pillarMid+24<birdH || pillarMid-10>birdH) && pillarDistance > -15){
            gameOver = 1;
            delay(1000);
        }
        if(pillarDistanceTwo < 30 && (pillarMidTwo+24<birdH || pillarMidTwo-10>birdH)&& pillarDistanceTwo > -15){
            gameOver = 1;
            delay(1000);
        }
        if(pillarDistanceThree < 30 && (pillarMidThree+24<birdH || pillarMidThree-10>birdH)&& pillarDistanceThree > -15){
            gameOver  = 1;
            delay(1000) ;
        }
    }
    if(gameScreen == 1){
        background(0, 163, 255);
        fill(0);
        circle(90, 200, 100);
        fill(255);
        textSize(15);
        text("  Press\nTo Start", 60, 190);
        img = loadImage("images/bird.png");
        image(img, 0, 0);
        image(img, 125, 50, 100,90);
        fill(0);
        circle(210, 200, 100);
        fill(255);
        textSize(15);
        text("  Press\nTo Close", 180, 190);
    }
    else if (gameOver == 1){
        background(0, 163, 255);
        textSize(30);
        text("Gameover\n  score:"+str(score), 70, 50);
        fill(0);
        pillarDistance = 200;
        pillarDistanceTwo = 350;
        pillarDistanceThree = 500;
        birdH = 100;
        frameNums += 1;
        if (frameNums == 120){
            frameNums = 0;
            gameOver = 0;
            score = 0;
         }
        startTime = (millis()/990)-0.2;
}
}

void mousePressed(){
    if(gameScreen == 1){
        if (dist(mouseX,mouseY,90, 200)<50){
            gameScreen = 0;
            startTime = (millis()/990)-0.2;
        }
        if(dist(mouseX,mouseY,210, 200)<50){
            exit();
        }
    }
    else if (gameScreen == 0){
        startTime = (millis()/1000)-0.12;
    }
}
void keyPressed(){
    if(key == CODED){
        if(keyCode == UP){
            startTime = (millis()/1000)-0.12;
        }
    }
    if(key == ' '){
        startTime = (millis()/1000)-0.15;
    }
}