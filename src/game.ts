class Game {
  // private menu: Menu;
  public gamePlay: GamePlay;
  public menu: Menu;
  public gameAudio: GameAudio;
  public finalScore: number;

  constructor() {
    this.gamePlay = new GamePlay();
    this.finalScore = 0;
    
    //change boolean value to false to run game without menu
    this.menu = new Menu("title");
    this.gameAudio = new GameAudio(this.menu);
  }

  update() {
     this.gameAudio.draw();

    if (keyIsPressed && this.menu.menuState === "close") {
      if (keyCode === 27) {
        this.menu.menuState = "pause"
      }
    }
    if (this.menu.menuState !== "close") {
      this.menu.update();
    } else if (this.menu.menuState === "close") {
      this.gamePlay.update();
      this.finalScore = this.gamePlay.score.score; 
    }

    if (this.gamePlay.isGameOver === true) {
      this.menu.menuState = "gameOver"
      this.gamePlay = new GamePlay();
      this.gamePlay.isGameOver = false;
    } else if (this.menu.menuState === "restart") {
      this.gamePlay = new GamePlay();
      this.gamePlay.isGameOver = false;
      this.menu.menuState = "close"
    }
  }





  draw() {
       
    if (this.menu.menuState !== "close" && this.menu.menuState !== "pause") {
      this.menu.draw();
    } else if (this.menu.menuState === "pause") {
      this.gamePlay.draw();
      this.menu.draw();
    } else if (this.menu.menuState === "close") {
      this.gamePlay.draw();
    }
  }
}
