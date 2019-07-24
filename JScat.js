//Author: Daniel Whiteman

//Function to reset the cat
function initial(ctx){
	sleeping = false;
	standing = true;
	sitting = false;
	eyesOpen = true;
	yarning = false;
	tailUpright = true;
	headPos = [350, 350];
	earsPos = [headPos[0] - 37, headPos[1] - 25];
	eyesPos = [headPos[0] - 20, headPos[1]];
	nosePos = [headPos[0], headPos[1] + 13];
	mouthPos = [headPos[0], headPos[1] + 33];
	bodyPos = [headPos[0] + 100, headPos[1] + 50];
	legsPos = [headPos[0] + 65, headPos[1] + 90];
	tailPos = [headPos[0] + 200, headPos[1]];
	zsPos = [headPos[0] - 60, headPos[1] + 50];
	
	ctx.clearRect(0, 0, 800, 500);
	drawLegs(ctx);
	drawTail(ctx);
	drawBody(ctx, Math.PI/2);
	drawHead(ctx);
	drawEars(ctx);
	drawEyes(ctx);
	drawNose(ctx);
	drawWhiskers(ctx);
	drawMouth(ctx);
}

//Function to draw cat's the legs
function drawLegs(ctx){
    ctx.fillStyle = 'orange'
    ctx.beginPath();
    ctx.rect(legsPos[0], legsPos[1] - 20, 10, 75);
    ctx.fill();
    ctx.rect(legsPos[0] - 15, legsPos[1] + 45, 20, 10);
    ctx.fill();
    ctx.rect(legsPos[0] - 20, legsPos[1] - 30, 10, 85);
    ctx.fill();
    ctx.rect(legsPos[0] - 30, legsPos[1] + 45, 20, 10);
    ctx.fill();
    ctx.rect(legsPos[0] + 85, legsPos[1], 10, 55);
    ctx.fill();
    ctx.rect(legsPos[0] + 70, legsPos[1] + 45, 20, 10);
    ctx.fill();
    ctx.rect(legsPos[0] + 65, legsPos[1], 10, 55);
    ctx.fill();
    ctx.rect(legsPos[0] + 55, legsPos[1] + 45, 20, 10);
    ctx.fill()
}

//Function to draw the Zs when sleeping or yawning
function drawZs(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(zsPos[0], zsPos[1]);
    ctx.lineTo(zsPos[0] - 20, zsPos[1]);
    ctx.lineTo(zsPos[0], zsPos[1] - 20);
    ctx.lineTo(zsPos[0] - 20, zsPos[1] - 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(zsPos[0] - 25, zsPos[1] - 25);
    ctx.lineTo(zsPos[0] - 45, zsPos[1] - 25);
    ctx.lineTo(zsPos[0] - 25, zsPos[1] - 45);
    ctx.lineTo(zsPos[0] - 45, zsPos[1] - 45);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(zsPos[0] - 60, zsPos[1] - 50);
    ctx.lineTo(zsPos[0] - 80, zsPos[1] - 50);
    ctx.lineTo(zsPos[0] - 60, zsPos[1] - 70);
    ctx.lineTo(zsPos[0] - 80, zsPos[1] - 70);
    ctx.stroke();
}

//Function to toggle the tail
function drawToggleTail(ctx){
    if (tailUpright){
        ctx.clearRect(0, 0, 800, 500);
        drawLegs(ctx);
        drawBody(ctx, Math.PI / 2);
        drawHead(ctx);
        drawEars(ctx);
		if (eyesOpen){
			drawEyes(ctx);
			eyesOpen = true;
		} else {
			drawClosedEyes(ctx);
			eyesOpen = false;
		}
        drawNose(ctx);
        drawWhiskers(ctx);
		if (yarning) {
			drawWhiskers(ctx);
			drawBigMouth(ctx);
			drawClosedEyes(ctx);
			drawZs(ctx);
			yarning = true;
		} else {
			drawMouth(ctx);
			yarning = false;
		}
        ctx.strokeStyle = 'orange'
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(tailPos[0], tailPos[1] + 100, 50, 270 * (Math.PI / 180), 360 * (Math.PI / 180));
        ctx.stroke();
        tailUpright = false;
    } else {
        ctx.clearRect(0, 0, 800, 500);
        drawLegs(ctx);
        drawTail(ctx);
        drawBody(ctx, Math.PI/2);
        drawHead(ctx);
        drawEars(ctx);
        if (eyesOpen){
			drawEyes(ctx);
			eyesOpen = true;
		} else {
			drawClosedEyes(ctx);
			eyesOpen = false;
		}
        drawNose(ctx);
        drawWhiskers(ctx);
		if (yarning) {
			drawWhiskers(ctx);
			drawBigMouth(ctx);
			drawClosedEyes(ctx);
			drawZs(ctx);
			yarning = true;
		} else {
			drawMouth(ctx);
			yarning = false;
		}
        tailUpright = true;
    }
}

//Function to draw the tail when the cat is sitting
function drawSittingTail(ctx){
    ctx.strokeStyle = 'orange'
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(tailPos[0] - 25, tailPos[1] + 48, 50, 0, 90 * (Math.PI / 180));
    ctx.stroke();
}

//Function to draw the tail
function drawTail(ctx){
    ctx.strokeStyle = 'orange'
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(tailPos[0], tailPos[1], 50, 0, 90 * (Math.PI / 180));
    ctx.stroke();
}

//Function to draw the torso
function drawBody(ctx, rot){
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'orange'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(bodyPos[0], bodyPos[1], 50, 100, rot, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

//Function to draw a larger mouth when yawning
function drawBigMouth(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.fillStyle = 'maroon'
    ctx.beginPath();
    ctx.ellipse(headPos[0], headPos[1] + 33, 10, 8, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

//Function to draw the mouth
function drawMouth(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.fillStyle = 'maroon'
    ctx.beginPath();
    ctx.ellipse(headPos[0], headPos[1] + 33, 6, 8, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

//Function to draw the cat's whiskers
function drawWhiskers(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(headPos[0], headPos[1] + 13);
    ctx.lineTo(headPos[0] + 40, headPos[1] + 10);
    ctx.stroke();
    ctx.moveTo(headPos[0], headPos[1] + 13);
    ctx.lineTo(headPos[0] + 40, headPos[1] + 20);
    ctx.stroke();
    ctx.moveTo(headPos[0], headPos[1] + 13);
    ctx.lineTo(headPos[0] - 40, headPos[1] + 10);
    ctx.stroke();
    ctx.moveTo(headPos[0], headPos[1] + 13);
    ctx.lineTo(headPos[0] - 40, headPos[1] + 20);
    ctx.stroke();
}

//Function to draw the nose
function drawNose(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.ellipse(headPos[0], headPos[1] + 13, 4, 6, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.ellipse(headPos[0], headPos[1] + 16, 4, 4, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

//Function to draw closed eyes
function drawClosedEyes(ctx){
    ctx.fillStyle = 'orange'
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(headPos[0] - 20, headPos[1], 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headPos[0] + 20, headPos[1], 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}

//Function to draw open eyes
function drawEyes(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.fillStyle = 'white'
    ctx.beginPath();
    ctx.arc(headPos[0] - 20, headPos[1], 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headPos[0] + 20, headPos[1], 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'DeepSkyBlue'
    ctx.beginPath();
    ctx.arc(headPos[0] - 23, headPos[1] + 2, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headPos[0] + 17, headPos[1] + 2, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'black'
    ctx.beginPath();
    ctx.ellipse(headPos[0] - 23, headPos[1] + 3, 4, 2, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(headPos[0] + 17, headPos[1] + 3, 4, 2, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

//Function to draw the ears
function drawEars(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(headPos[0] - 37, headPos[1] - 25);
    ctx.lineTo(headPos[0] - 30, headPos[1] - 60);
    ctx.lineTo(headPos[0] - 10, headPos[1] - 37);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(headPos[0] + 37, headPos[1] - 25);
    ctx.lineTo(headPos[0] + 30, headPos[1] - 60);
    ctx.lineTo(headPos[0] + 10, headPos[1] - 37);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'maroon'
    ctx.beginPath();
    ctx.moveTo(headPos[0] - 30, headPos[1] - 28);
    ctx.lineTo(headPos[0] - 26, headPos[1] - 45);
    ctx.lineTo(headPos[0] - 13, headPos[1] - 32);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(headPos[0] + 30, headPos[1] - 28);
    ctx.lineTo(headPos[0] + 24, headPos[1] - 45);
    ctx.lineTo(headPos[0] + 13, headPos[1] - 32);
    ctx.stroke();
    ctx.fill();
}

//Function to draw the head
function drawHead(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(headPos[0], headPos[1], 50, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
}

//Function to move the cat in the horizontal plane
function moveCat(ctx, newX){
	//updating cat's position with the x coordinate of the mouse click
    headPos[0] = newX;
    earsPos = [headPos[0] - 37, headPos[1] - 25];
    eyesPos = [headPos[0] - 20, headPos[1]];
    nosePos = [headPos[0], headPos[1] + 13];
    mouthPos = [headPos[0], headPos[1] + 33];
    bodyPos = [headPos[0] + 100, headPos[1] + 50];
    legsPos = [headPos[0] + 65, headPos[1] + 90];
    tailPos = [headPos[0] + 200, headPos[1]];
    zsPos = [headPos[0] - 60, headPos[1] + 50];
    
	ctx.clearRect(0, 0, 800, 500);
    drawLegs(ctx);
    drawBody(ctx, Math.PI/2);
	drawTail(ctx);
    drawHead(ctx);
    drawEars(ctx);
	drawEyes(ctx);
    drawNose(ctx);
    drawWhiskers(ctx);
	drawMouth(ctx);
	
	sleeping = false;
	standing = true;
	sitting = false;
	eyesOpen = true;
	yarning = false;
	tailUpright = true;
}

//Function to make the cat sit down
function sit(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
	//If the cat isn't sitting then make it sit, If the cat is sitting then make it stand up
    if (!(sitting)) {
        ctx.clearRect(0, 0, 800, 500);
        drawLegs(ctx);
        drawSittingTail(ctx);
        drawBody(ctx, -1*(45 * (Math.PI/180)));
        drawHead(ctx);
        drawEars(ctx);
		drawEyes(ctx);
        drawNose(ctx);
        drawWhiskers(ctx);
		drawMouth(ctx);
        sitting = true;
        sleeping = false;
    } else {
        sitting = false;
		standing = true;
        ctx.clearRect(0, 0, 800, 500);
        drawLegs(ctx);
        drawTail(ctx);
        drawBody(ctx, Math.PI/2);
        drawHead(ctx);
        drawEars(ctx);
		drawEyes(ctx);
        drawNose(ctx);
        drawWhiskers(ctx);
		drawMouth(ctx);
    }
	//Updating boolean variables
	eyesOpen = true;
	yarning = false;
	tailUpright = true;
}

//Function to make the cat sleep
function sleep(ctx){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
	//If the cat isn't sleeping then make it sleep, if the cat is sleeping then wake it up
    if (!(sleeping)) {
        ctx.clearRect(0, 0, 800, 500);
        //Body
        ctx.strokeStyle = 'black'
        ctx.fillStyle = 'orange'
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(bodyPos[0], bodyPos[1] + 50, 50, 100, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        //Head
        ctx.beginPath();
        ctx.arc(headPos[0], headPos[1] + 95, 50, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();

        //Ears
        ctx.beginPath();
        ctx.moveTo(earsPos[0], earsPos[1] + 95);
        ctx.lineTo(earsPos[0] + 7, earsPos[1] + 60);
        ctx.lineTo(earsPos[0] + 27, earsPos[1] + 83);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(earsPos[0] + 74, earsPos[1] + 107);
        ctx.lineTo(earsPos[0] + 67, earsPos[1] + 60);
        ctx.lineTo(earsPos[0] + 47, earsPos[1] + 83);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = 'maroon'
        ctx.beginPath();
        ctx.moveTo(earsPos[0] + 7, earsPos[1] + 92);
        ctx.lineTo(earsPos[0] + 11, earsPos[1] + 75);
        ctx.lineTo(earsPos[0] + 24, earsPos[1] + 88);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(earsPos[0] + 67, earsPos[1] + 92);
        ctx.lineTo(earsPos[0] + 61, earsPos[1] + 75);
        ctx.lineTo(earsPos[0] + 50, earsPos[1] + 88);
        ctx.stroke();
        ctx.fill();

        //Eyes
        ctx.fillStyle = 'orange'
        ctx.beginPath();
        ctx.arc(eyesPos[0], eyesPos[1] + 95, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(eyesPos[0] + 40, eyesPos[1] + 95, 10, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();

        //Nose
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.ellipse(nosePos[0], nosePos[1] + 95, 4, 6, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = 'black'
        ctx.beginPath();
        ctx.ellipse(nosePos[0], nosePos[1] + 98, 4, 4, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();

        //Whiskers
        ctx.beginPath();
        ctx.moveTo(nosePos[0], nosePos[1] + 95);
        ctx.lineTo(nosePos[0] + 40, nosePos[1] + 102);
        ctx.stroke();
        ctx.moveTo(nosePos[0], nosePos[1] + 95);
        ctx.lineTo(nosePos[0] + 40, nosePos[1] + 92);
        ctx.stroke();
        ctx.moveTo(nosePos[0], nosePos[1] + 95);
        ctx.lineTo(nosePos[0] - 40, nosePos[1] + 102);
        ctx.stroke();
        ctx.moveTo(nosePos[0], nosePos[1] + 95);
        ctx.lineTo(nosePos[0] - 40, nosePos[1] + 92);
        ctx.stroke();

        //Mouth
        ctx.fillStyle = 'maroon'
        ctx.strokeStyle = 'black'
        ctx.beginPath();
        ctx.ellipse(mouthPos[0], mouthPos[1] + 95, 4, 6, Math.PI / 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        drawZs(ctx);
        sleeping = true;;
    } else {
        ctx.clearRect(0, 0, 800, 500);
        drawLegs(ctx);
        drawTail(ctx);
        drawBody(ctx, Math.PI/2);
        drawHead(ctx);
        drawEars(ctx);
        drawEyes(ctx);
        drawNose(ctx);
        drawWhiskers(ctx);
        drawMouth(ctx);
        sleeping = false;
    }
	//updating the boolean variables
	eyesOpen = true;
	yarning = false;
	standing = false;
	sitting = false;
	tailUpright = true;
}

//Function to decide what to do with a canvas click event
function decide(e){
	
	//Calculating the canvas coordinates of the mouse click
	var boundingRect = canvas.getBoundingClientRect();
    var offsetX = boundingRect.left;
	var offsetY = boundingRect.top;
	var w = (boundingRect.width-canvas.width)/2;
	var h = (boundingRect.height-canvas.height)/2;
	offsetX += w;
	offsetY += h;
	var mx = Math.round(e.clientX - offsetX);
	var my = Math.round(e.clientY - offsetY);
	
	//If the left eye was clicked
	if ( (mx < headPos[0] - 5) && (mx > headPos[0] - 35) ) {
		if ((my < headPos[1] + 15) && (my > headPos[1] - 15)) {
			if (eyesOpen) {
				drawClosedEyes(ctx);
				eyesOpen = false
			} else {
				drawEyes(ctx);
				eyesOpen = true;
			}
		}
		
	//If the right eye was clicked
	} else if ( (mx < headPos[0] + 35) && (mx > headPos[0] + 5) ){
		if ( (my < headPos[1] + 15) && (my > headPos[1] - 15) ) {
			if (eyesOpen) {
				drawClosedEyes(ctx);
				eyesOpen = false;
			} else {
				drawEyes(ctx);
				eyesOpen = true;
			}
		}
		
	//If the mouth was clicked
	} else if ((mx < headPos[0] + 8)&&(mx > headPos[0] - 8)){
		if ((my < headPos[1] + 41)&&(my > headPos[1] + 25)){
			//If the cat isn't yawning then make it yawn, if the cat is yawning then make it stop
			if (!(yarning)) {
				ctx.clearRect(0, 0, 800, 500);
				drawLegs(ctx);
				if (sitting){
					drawBody(ctx, -1*(45 * (Math.PI/180)));
					drawSittingTail(ctx);
				} else {
					drawBody(ctx, Math.PI/2);
					drawTail(ctx);
				}
				drawHead(ctx);
				drawEars(ctx);
				drawEyes(ctx);
				drawNose(ctx);
				drawWhiskers(ctx);
				drawBigMouth(ctx);
				drawClosedEyes(ctx);
				drawZs(ctx);
				yarning = true;
			} else {
				ctx.clearRect(0, 0, 800, 500);
				drawLegs(ctx);
				if (sitting){
					drawBody(ctx, -1*(45 * (Math.PI/180)));
					drawSittingTail(ctx);
				} else {
					drawBody(ctx, Math.PI/2);
					drawTail(ctx);
				}
				drawHead(ctx);
				drawEars(ctx);
				drawEyes(ctx);
				drawNose(ctx);
				drawWhiskers(ctx);
				drawMouth(ctx);
				yarning = false;
			}
		}
	//The user didn't click anywhere on the cat so moveCat is called.
	} else {
		moveCat(ctx, mx);
	}
}


//Declaring variables
//Variables are global so they can be accessed by all the functions
var sleeping = false;
var standing = true;
var sitting = false;
var eyesOpen = true;
var yarning = false;
var tailUpright = true;

//Declaring arrays to store the cat's position
//The arrays are global to they can be accessed by all the functions
//Every array other than headPos is dependant on headPos so the cats body is drawn the same way relative to the head everytime it is drawn
var headPos = [350, 350];
var earsPos = [headPos[0] - 37, headPos[1] - 25];
var eyesPos = [headPos[0] - 20, headPos[1]];
var nosePos = [headPos[0], headPos[1] + 13];
var mouthPos = [headPos[0], headPos[1] + 33];
var bodyPos = [headPos[0] + 100, headPos[1] + 50];
var legsPos = [headPos[0] + 65, headPos[1] + 90];
var tailPos = [headPos[0] + 200, headPos[1]];
var zsPos = [headPos[0] - 60, headPos[1] + 50];

//Getting the canvas from the html file and adding the event listener
//creating the context
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
canvas.addEventListener('click', decide);
//Calling initial function to start the application
initial(ctx);