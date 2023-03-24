const DEFAULT_SPEED = 0;
const BOOST_PERCENT = 20;
const DEFAULT_HEIGHT = 100;
const DEFAULT_WIDTH = 100;
const SCREEN = document.getElementById("game");

function SpaceShip(type, coordx, coordY) {
    this.type = type;
    this.speed = DEFAULT_SPEED;
    this.isBosted = false;

    this.canvas = SCREEN.createElement("canvas");
    this.canvas.width = DEFAULT_WIDTH;
    this.canvas.height = DEFAULT_HEIGHT;
    this.ctx = this.canvas.getContext("2d");

    SCREEN.appendChild(this.canvas);


    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}
  
SpaceShip.prototype.setType = function(type) {
    this.type = type;
};
  
SpaceShip.prototype.setSpeed = function(speed) {
    this.speed = speed;
};
  
SpaceShip.prototype.boost = function(time, percent) {
    let oldSpeed = this.speed;
    this.isBosted = true;
    this.setSpeed(oldSpeed + ((oldSpeed / 100) * BOOST_PERCENT));
    setTimeout(
      () => {
        this.setSpeed(oldSpeed);
        this.isBosted = false;
      },
      time
    );
  };
  
SpaceShip.prototype.setCoords = function(x, y) {
    // implementieren Sie hier die Koordinatenlogik
};