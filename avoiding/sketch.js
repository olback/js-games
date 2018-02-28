/*
 *       Simple-JS-game
 *       github.com/olback/simple-js-game
 * 
 *       TODO: Multiplayer (Maybe) Probably not
 */

let diff = 0; // Difficulty. Starts at Zero.
let gameEnded = true; // The game has ended when we load it.
const winAtDiff = 30; // The score required to win the game.
const frameWidth = window.innerWidth;
const frameHeight = window.innerHeight;

let particles = []; // Initialize particles array.

const player = { // Player properties.
  x: frameWidth / 2, // The player should alwas start in the middle (X-wise).
  y: frameHeight * 0.9, // The player should start close to the bottom but not at y = frameHeight.
  size: 30, // Player size.
  speed: 5 // Player X speed.
}

// Particle options
const particleProps = {
  speed: { // Max and min speed for every particle.
    max: -7, // Max speed for a single particle.
    min: -4 // Min speed for a single particle.
  },
  x: { // Particle X position.
    max: frameWidth, // Max X for a particle.
    min: 0 // Min X for a particle.
  },
  size: { // Particle size. 
    max: 60,
    min: 20
  } 
}

function setup() { // This function is only run once.
  createCanvas(frameWidth, frameHeight); // Create a canvas.
  background(0); // Black background
  frameRate(60) // Set the framerate target to 60.
}


function draw() {
  if(!gameEnded) {
    background(0); // Set the background to black.
    displayFrameRate(); // Show the framerate and score at the top left.

    fill(255, 0, 0); // Set the player color to red.
    noStroke(); // No stroke.
    ellipse(player.x, player.y, player.size); // Draw the player

    // If particles.length + the current difficulty is less than 30, add 5 new particle.
    if(particles.length <= 30 + diff) {
      // Push particle to the particles array.
      for(let i = 0; i < 5; i++) {
        particles.push(new Particle());
      }
    }

    // Itterate through the array backwards since we don't want to skip any particles in the array when we remove one.
    for(let i = particles.length - 1; i >= 0; i--) {
      particles[i].update(); // Update the position of the particle.
      particles[i].show(); // Draw the particle

      // If a partile is touching the player, end the game by calling the endGame function.
      if(particles[i].touching()) {
        endGame('fail');
      }

      // If a particle is outside the frame, remove it from the array.
      if (particles[i].outsideFrame()) {
        particles.splice(i, 1);
      }
    }

    // If the diff reaches winAtDiff end the game and display a "You won message".
    if (diff >= winAtDiff) {
      endGame('success');
    }

    // Check if the player is pressing the right arrow, move right.
    if (keyIsDown(RIGHT_ARROW) && player.x < frameWidth) {
      player.x += player.speed;
    }

    // Check if the player is pressing the left arrow, move left.
    if (keyIsDown(LEFT_ARROW) && player.x > 0) {
      player.x -= player.speed;
    }

  }
}

// Increase the difficulty by one every second. If the game is running that is.
setInterval(() => {
  if (!gameEnded) {
    diff += 1; // Make the game harder, aka increase the difficulty.
  }
}, 1000);

// displayFrameRate();
function displayFrameRate() {
  fill(255);
  textSize(12);
  text('FPS: ' + floor(frameRate()), 4, 12);
  text('Score: ' + diff, 4, 28);
}

// Called when user clicks on 'Start'
function startGame() {
  const a = document.getElementById('welcome'); // Get the DOM element with ID 'welcome'.
  a.style.display = 'none'; // Set the display property to 'none'.
  gameEnded = false; // Set gameEnded to false.
  noCursor(); // Hide the mouse cursor.
}

// End the game
function endGame(result) {
  noLoop(); // Stop the draw() loop
  textSize(32); // Set the text size to 32pt.
  textAlign(CENTER); // Align all text in the center.
  noStroke(); // No stroke.
  cursor(ARROW, frameWidth / 2, frameHeight / 2); // Show the cursor again.
  gameEnded = true; // Set gameEnded to true.

  if (result === 'fail') {
    fill(255, 0, 0); // Set the fill color to red.
    text('You crashed! :(', frameWidth / 2, frameHeight * 0.4); // Print text a little above the center.
    textSize(18); // Set the text size to 18.
    text('You scored ' + diff + ' points!', frameWidth / 2, frameHeight * 0.4 + 30); // Print text a little above the center but 30pt lower than before.
  } else if (result === 'success') {
    fill(0, 255, 0); // Set the fill color to red.
    text('You won! :D', frameWidth / 2, frameHeight * 0.4); // Print text a little above the center.
    textSize(18); // Set the text size to 18.
    text('You scored ' + diff + ' points!', frameWidth / 2, frameHeight * 0.4 + 30); // Print text a little above the center but 30pt lower than before.
  }
}

// Define what it means to be a particle.
class Particle {

  constructor() {
    this.x = random(particleProps.x.min, particleProps.x.max); // Set a random X position.
    this.y = 0; // Set the Y starting point for every particle.
    this.vy = random(particleProps.speed.max, particleProps.speed.min); // Set a random Y velocity for every particle
    this.size = random(particleProps.size.min, particleProps.size.max);
  }

  // If the particle is aoutside the frame, return true.
  outsideFrame() {
    return this.y > frameHeight;
  }

  touching() {
    // If the distance betwen the player and a particle is less or equal to (player.size + particleProps.size) / 2, return true
    return dist(this.x, this.y, player.x, player.y) <= (player.size + this.size) / 2;
  }

  // Update the position of a particle.
  update() {
    this.y -= this.vy;
  }

  // Show the particle.
  show() {
    fill(255, 50); // Set the fill color to white with 50 alpha.
    stroke(255); // Set the stroke color to 255 (white).
    ellipse(this.x, this.y, this.size); // Draw the particle.
  }
}
