var stage, w, h, loader, pipe1height, pipe2height, pipe3height, startX, startY, wiggleDelta;
            var background, bird, ground, pipe, bottomPipe, pipes, rotationDelta, counter, counterOutline;
            var started = false; 
            var startJump = false; // Has the jump started?

            var jumpAmount = 120; // How high is the jump?
            var jumpTime = 266;

            var dead = false; // is the bird dead?
            var KEYCODE_SPACE = 32;     //usefull keycode
            var gap = 250;
            var masterPipeDelay = 78; // delay between pipes
            var pipeDelay = masterPipeDelay; //counter used to monitor delay

            var counterShow = false;

            document.onkeydown = handleKeyDown;

            function init() {
                if (window.top != window) {
                    //document.getElementById("header").style.display = "none";
                }


                // createjs.MotionGuidePlugin.install();

                stage = new createjs.Stage("testCanvas");

                createjs.Touch.enable(stage);
                // stage.canvas.width = document.body.clientWidth; //document.width is obsolete
                // stage.canvas.height = document.body.clientHeight; //document.height is obsolete
                
                // grab canvas width and height for later calculations:
                w = stage.canvas.width;
                h = stage.canvas.height;

                manifest = [
                    {src:"http://www.appcycle.me/flappy/img/bird.png", id:"bird"},
                    {src:"http://www.appcycle.me/flappy/img/background.png", id:"background"},
                    {src:"http://www.appcycle.me/flappy/img/ground.png", id:"ground"},
                    {src:"http://www.appcycle.me/flappy/img/pipe.png", id:"pipe"},
                    {src:"http://www.appcycle.me/flappy/img/restart.png", id:"start"},
                    {src:"http://www.appcycle.me/flappy/img/share.png", id:"share"},
                    {src:"http://www.appcycle.me/flappy/fonts/FB.eot"},
                    {src:"http://www.appcycle.me/flappy/fonts/FB.svg"},
                    {src:"http://www.appcycle.me/flappy/fonts/FB.ttf"},
                    {src:"http://www.appcycle.me/flappy/fonts/FB.woff"}
                ];

                loader = new createjs.LoadQueue(false);
                loader.addEventListener("complete", handleComplete);
                loader.loadManifest(manifest);
            }

            function handleComplete() {
                
                background = new createjs.Shape();
                background.graphics.beginBitmapFill(loader.getResult("background")).drawRect(0,0,w,h);
                
                var groundImg = loader.getResult("ground");
                ground = new createjs.Shape();
                ground.graphics.beginBitmapFill(groundImg).drawRect(0, 0, w+groundImg.width, groundImg.height);
                ground.tileW = groundImg.width;
                ground.y = h-groundImg.height;
                
            
                var data = new createjs.SpriteSheet({
                    "images": [loader.getResult("bird")],
                    //set center and size of frames, center is important for later bird roation
                    "frames": {"width": 92, "height": 64, "regX": 46, "regY": 32, "count": 3}, 
                    // define two animations, run (loops, 0.21x speed) and dive (returns to dive and holds frame one static):
                    "animations": {"fly": [0, 2, "fly", 0.21], "dive": [1, 1, "dive", 1]}
                });
                bird = new createjs.Sprite(data, "fly");

                startX = (w/2) - (92/2)
                startY = 512
                wiggleDelta = 18

                // Set initial position and scale 1 to 1
                bird.setTransform(startX, startY, 1, 1);
                // Set framerate
                bird.framerate = 30;

                //338, 512
                // Use a tween to wiggle the bird up and down using a sineInOut Ease
                createjs.Tween.get(bird, {loop:true}).to({y:startY + wiggleDelta}, 380, createjs.Ease.sineInOut).to({y:startY}, 380, createjs.Ease.sineInOut);

                stage.addChild(background);

                pipes = new createjs.Container(); 
                stage.addChild(pipes)

                stage.addChild(bird, ground);
                stage.addEventListener("stagemousedown", handleJumpStart);
                
                counter = new createjs.Text(0, "86px 'Flappy Bird'", "#ffffff");
                counterOutline = new createjs.Text(0, "86px 'Flappy Bird'", "#000000");
                counterOutline.outline = 5
                counterOutline.textAlign = 'center'
                counter.textAlign = 'center'
                counterOutline.x = w/2
                counterOutline.y = 150
                counter.x = w/2
                counter.y = 150
                counter.alpha = 1
                counterOutline.alpha = 1
                stage.addChild(counter, counterOutline)

                createjs.Ticker.timingMode = createjs.Ticker.RAF;
                createjs.Ticker.addEventListener("tick", tick);


            }

            function handleKeyDown(e) {
                //cross browser issues exist
                if(!e){ var e = window.event; }
                switch(e.keyCode) {
                    case KEYCODE_SPACE: handleJumpStart();
                }
            }

            function handleJumpStart() {
                if (!dead) {
                    createjs.Tween.removeTweens ( bird )
                    bird.gotoAndPlay("jump");
                    startJump = true
                    if (!started) {
                        started = true
                        counterShow = true                        
                    }
                }
            }

            function diveBird() {
                bird.gotoAndPlay("dive");
            }

            function restart() {
                //hide anything on stage and show the score
                pipes.removeAllChildren();
                createjs.Tween.get(start).to({y:start.y + 10}, 50).call(removeStart)
                counter.text = 0
                counterOutline.text = 0
                counterOutline.alpha = 0
                counter.alpha = 0
                counterShow = false
                pipeDelay = masterPipeDelay
                dead = false
                started = false
                startJump = false
                createjs.Tween.removeTweens ( bird )
                bird.x = startX
                bird.y = startY
                bird.rotation = 0
                createjs.Tween.get(bird, {loop:true}).to({y:startY + wiggleDelta}, 380, createjs.Ease.sineInOut).to({y:startY}, 380, createjs.Ease.sineInOut);
            }

            function die() {
                dead = true
                bird.gotoAndPlay("dive");
                createjs.Tween.removeTweens ( bird )
                createjs.Tween.get(bird).wait(0).to({y:bird.y + 200, rotation: 90}, (380)/1.5, createjs.Ease.linear) //rotate back
                        .call(diveBird) // change bird to diving position
                        .to({y:ground.y - 30}, (h - (bird.y+200))/1.5, createjs.Ease.linear); //drop to the bedrock
                createjs.Tween.get(stage).to({alpha:0}, 100).to({alpha:1}, 100)
                start = new createjs.Bitmap(loader.getResult("start"));
                start.alpha = 0
                start.x = w/2 - start.image.width/2
                start.y = h/2 - start.image.height/2 - 150
                share = new createjs.Bitmap(loader.getResult("share"));
                share.alpha = 0
                share.x = w/2 - share.image.width/2
                share.y = h/2 - share.image.height/2 - 50

                stage.addChild(start)
                stage.addChild(share)
                createjs.Tween.get(start).to({alpha:1, y: start.y + 50}, 400, createjs.Ease.sineIn).call(addClickToStart)
                createjs.Tween.get(share).to({alpha:1, y: share.y + 50}, 400, createjs.Ease.sineIn).call(addClickToStart)
                
            }
            function removeStart() {
                stage.removeChild(start)
                stage.removeChild(share)
            }
            function addClickToStart() {
                start.addEventListener("click", restart);
                share.addEventListener("click", goShare);
            }

            function goShare() {
                var countText
                if (counter.text == 1) {
                    countText = "1 point"
                } else {
                    countText = counter.text + " points"
                }
                window.open("https://twitter.com/share?url=http%3A%2F%2Fappcycle.me/flappy&text=I scored " + countText +  " on HTML5 Flappy Bird.");
            }

            function tick(event) {
                var deltaS = event.delta/1000;

                var l = pipes.getNumChildren();

                if (bird.y > (ground.y - 40)) {
                    if (!dead) {
                        die()
                    }
                    if (bird.y > (ground.y - 30)) {
                        createjs.Tween.removeTweens ( bird )
                    }
                }
                
                if (!dead) {
                    ground.x = (ground.x-deltaS*300) % ground.tileW;
                }
            

                if (started && !dead) {
                    if (pipeDelay == 0) {

                        pipe = new createjs.Bitmap(loader.getResult("pipe"));
                        pipe.x = w+600
                        pipe.y = (ground.y - gap*2) * Math.random() + gap*1.5
                        pipes.addChild(pipe);
                        // createjs.Tween.get(pipe).to({x:0 - pipe.image.width}, 5100)

                        pipe2 = new createjs.Bitmap(loader.getResult("pipe"));
                        pipe2.scaleX = -1
                        pipe2.rotation = 180
                        pipe2.x = pipe.x //+ pipe.image.width
                        pipe2.y = pipe.y - gap
                        // createjs.Tween.get(pipe2).to({x:0 - pipe.image.width}, 5100)

                        pipes.addChild(pipe2);

                        pipeDelay = masterPipeDelay

                    } else {
                        pipeDelay = pipeDelay - 1
                    }
                    for(var i = 0; i < l; i++) {
                        pipe = pipes.getChildAt(i);
                        if (pipe) {
                            if (true) { // tried replacing true with this, but it's off: pipe.x < bird.x + 92 && pipe.x > bird.x 
                                var collision = ndgmr.checkRectCollision(pipe,bird,1,true)
                                if (collision) {
                                    if (collision.width > 8 && collision.height > 8) {
                                        die()
                                    }
                                }
                            }
                            pipe.x = (pipe.x - deltaS*300);
                            if (pipe.x <= 338 && pipe.rotation == 0 && pipe.name != "counted") {
                                pipe.name = "counted" //using the pipe name to count pipes
                                counter.text = counter.text + 1
                                counterOutline.text = counterOutline.text + 1
                            }
                            if (pipe.x + pipe.image.width <= -pipe.w) { 
                                pipes.removeChild(pipe)
                            }
                        }
                    }
                    if (counterShow) {
                        counter.alpha = 1
                        counterOutline.alpha = 1
                        counterShow = false
                    }

                }



                if (startJump == true) {
                    startJump = false
                    bird.framerate = 60;
                    bird.gotoAndPlay("fly");
                    if (bird.roation < 0) {
                        rotationDelta = (-bird.rotation - 20)/5
                    } else {
                        rotationDelta = (bird.rotation + 20)/5
                    }
                    if (bird.y < -200) {
                        bird.y = -200
                    }
                    createjs
                        .Tween
                        .get(bird)
                        .to({y:bird.y - rotationDelta, rotation: -20}, rotationDelta, createjs.Ease.linear) //rotate to jump position and jump bird
                        .to({y:bird.y - jumpAmount, rotation: -20}, jumpTime - rotationDelta, createjs.Ease.quadOut) //rotate to jump position and jump bird
                        .to({y:bird.y}, jumpTime, createjs.Ease.quadIn) //reverse jump for smooth arch
                        .to({y:bird.y + 200, rotation: 90}, (380)/1.5, createjs.Ease.linear) //rotate back
                        .call(diveBird) // change bird to diving position
                        .to({y:ground.y - 30}, (h - (bird.y+200))/1.5, createjs.Ease.linear); //drop to the bedrock
                }

                
                stage.update(event);
            }