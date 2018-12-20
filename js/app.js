document.addEventListener("DOMContentLoaded", function() {
    let shipSrc = window.localStorage.getItem("selectedShip");
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

        move(timeOutId) {
            this.element.style.top = `${this.y}%`;
            if (this.y < 0) {
                this.element.remove();
                clearInterval(timeOutId);
            }
        }
    }

    class Character {
        constructor(id, x, y) {
            this.element = document.querySelector(`#${id}`);
            this.x = x;
            this.y = y;
            this.health = 100;
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

        fireBullet(monster) {
            let bullet1 = new Bullet(this.x, this.y, 1);
            let shoot = setInterval(() => {
                bullet1.y -= 1;
                bullet1.move(shoot);
                console.log(monster.x);
                console.log("bullet" + bullet1.x);
                if (monster.x + 10 > bullet1.x && monster.x - 10 < bullet1.x) {
                    let monsterLifeBar = document.querySelector("#life-bar");
                    monster.health -= 50;
                    monsterLifeBar.style.width = `${monster.health}%`;
                    bullet1.element.remove();
                    if (monster.health === 0) {
                        monster.element.src = "../images/explode-kill.gif";
                        setTimeout(() => {
                            monster.element.style.opacity = "0";
                        }, 2000);
                        let modalBox = document.querySelector(".modal-box");
                        modalBox.style.display = "block";
                    }
                    clearInterval(shoot);
                    console.log("shot");
                }
            });
        }
    }

    class Enemy extends Character {
        constructor(id, x, y) {
            super(id, x, y);
            this.moveAcrossX();
        }
        moveAcrossX() {
            setInterval(() => {
                let randomPostion = Math.floor(Math.random() * 100);
                this.element.style.left = `${randomPostion}%`;
                this.x = randomPostion;
            }, 2000);
        }
    }

    // created a ship object
    let ship = new SpaceShip("ship", 50, 90);
    ship.element.src = shipSrc;
    let monster = new Enemy("monster", 50, 25);
    console.log(monster);

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
            ship.fireBullet(monster);
        }
    });
});
