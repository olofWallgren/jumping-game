class Character extends MovableEntity {
  public isAlive: boolean;
  public size: p5.Vector;
  // private prevKeyIsPressed: boolean;
  private liftForce: number;
  public canJump: boolean;

  constructor(
    isAlive: boolean,
    size: p5.Vector,
    position: p5.Vector,
    isVisible: boolean,
    velocity: p5.Vector,
    applyGravity: number
  ) {
    super(createVector(), true, createVector(), 0.4);
    this.isAlive = true;
    this.size = createVector(50, 80);
    this.position = createVector(100, 320);
    // this.prevKeyIsPressed = false;
    this.velocity = createVector(0, 0);
    this.liftForce = -30;
    this.canJump = true;
  }

  // private handleUserInput() {
  //   if (key === " ") {
  //     console.log("jump");
  //     this.jump();
  //   }
  // }

  public jump() {
    if (this.canJump) {
      console.log("jump");
      character.velocity.y += this.liftForce;
      this.applyGravity = 0.4;
      this.canJump = false;
    } else {
      console.log("jumping");
    }
  }

  public collide() {}

  public update() {
    this.velocity.y += this.applyGravity;
    this.velocity.y *= 0.9;
    this.position.y += this.velocity.y;

    if (this.position.y > 320) {
      this.position.y = 320;
      this.velocity.y = 0;
      this.canJump = true;
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y = 0;
    }
  }

  public show() {
    fill(255);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }

  public draw() {
    this.update();
    this.show();
  }
}
