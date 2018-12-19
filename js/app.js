document.addEventListener("DOMContentLoaded", function(event) {
    class Bullet {
        constructor(x, y, num) {
            this.x = x;
            this.y = y;
            let bullet = document.createElement("img");
            bullet.src = "/images/bullet.png";
            bullet.id = `bullet${num}`;
            bullet.className = "bullets";
            document.querySelector("#play-background").appendChild(bullet);
            this.element = bullet;
            this.init(x, y);
        }
        init(x, y) {
            this.element.style.left = `${x}%`;
            this.element.style.top = `${y}%`;
        }

        move() {
            this.element.style.top = `${this.y}%`;
            if (this.y < 20) {
                this.element.remove();
            }
        }
    }

    class Character {
        constructor(id, x, y) {
            this.element = document.querySelector(`#${id}`);
            this.x = x;
            this.y = y;
            this.init();
        }

        // Initializing the starting position of the character on DOM
        init() {
            this.element.style.left = `${this.x}%`;
            this.element.style.top = `${this.y}%`;
        }
    }

    class SpaceShip extends Character {
        constructor(id, x, y) {
            super(id, x, y);
        }

        moveRight() {
            if (this.x < 95) {
                this.x += 5;
                this.element.style.left = `${this.x}%`;
            }
        }

        moveLeft() {
            if (this.x > 5) {
                this.x -= 5;
                this.element.style.left = `${this.x}%`;
            }
        }

        fireBullet() {
            let bullet1 = new Bullet(this.x, this.y, 1);
            setInterval(() => {
                bullet1.y -= 1;
                bullet1.move();
            }, 30);
            if (this.x === bullet1.x && this.y === bullet1.y) {
            }
        }
    }

    class Enemy extends Character {
        constructor(id, x, y) {
            super(id, x, y);
            this.moveAcrossX();
        }
        moveAcrossX() {
            setInterval(() => {
                this.element.style.left = `${Math.floor(Math.random() * 100)}%`;
            }, 2000);
        }
    }

    // created a ship object
    let ship = new SpaceShip("ship", 50, 85);
    let monster = new Enemy("monster", 50, 17);

    document.addEventListener("keydown", e => {
        let { keyCode } = e;
        if (keyCode == "38") {
            // up arrow
            console.log("Saida");
        } else if (keyCode == "40") {
            // down arrow
            console.log("Joey");
        } else if (keyCode == "37") {
            // left arrow
            ship.moveLeft();
        } else if (keyCode == "39") {
            // right arrow
            ship.moveRight();
        } else if (keyCode == "32") {
            ship.fireBullet();
        }
    });
});
