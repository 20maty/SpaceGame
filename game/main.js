var boostPercent = 10;

const spaceShip = {
    type: 1,
    speed: 0,
    isBosted: false,

    setType(type) {
      this.type = type;
    },

    setSpeed(speed) {
        this.speed = speed;
    },

    boost(time, percent) {
        //bug wenn gerade im boost und main speed sich verändert dass dan wider aufs alte zurückgesetzt wird
        let oldSpeed = this.speed;
        this.isBosted = true,
        this.setSpeed(oldSpeed +  ((oldSpeed/100) * percent));
        setTimeout(time, function() {this.setSpeed(oldSpeed), isBosted = false});
    },

    setCoords(x, y) {
        
    }
};

function startGame() {

}

function drawSpaceship() { //returns space ship handle
//get start poition
}



function setSpaceshipspeed(spaeship) {

}