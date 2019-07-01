"use strict";

function main() {
  var mainElement = document.querySelector("#site-main");

  function buildDOM(html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  function createSplashScreen() {
    var splashScreen = buildDOM(`
      <section>
        <h1>Eternal Enemies<h1>
        <button>Start</button>
      </section>
    `);
    var startButton = splashScreen.querySelector("button");
    startButton.addEventListener("click", createGameScreen);
  }

  function createGameScreen() {
    var gameScreen = buildDOM(`
      <section>
        <canvas width="300" height="300">
        </canvas>
      </section>
    `);
    var canvasElement = document.querySelector('canvas');
    var gameInstance = new Game(canvasElement);
    gameInstance.gameOverCallback(createGameOverScreen);
    gameInstance.startGame();
    document.addEventListener('keydown', function(event){
      if (event.key === 'ArrowDown'){
        //ir hacia abajo
        gameInstance.player.setDirection(1);
      }
      if (event.key === 'ArrowUp'){
        //ir hacia arriba
        gameInstance.player.setDirection(-1);
      }
      console.log(event);
    });
    
    /* setTimeout(createGameOverScreen, 3000); */
  }

  function createGameOverScreen() {
    var gameOverScreen = buildDOM(`
      <section>
        <h1>GAME OVER<h1>
        <button>Restart</button>
      </section>
    `);
    var restartButton = gameOverScreen.querySelector("button");
    restartButton.addEventListener("click", createSplashScreen);
  }

  createSplashScreen();
}

window.addEventListener("load", main);
