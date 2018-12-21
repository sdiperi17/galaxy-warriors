document.addEventListener("DOMContentLoaded", function() {
    let shipSrc = window.localStorage.getItem("selectedShip");

    class Bomb {
        constructor(x, y, num) {
            this.x = x;
            this.y = y;
            let bomb = document.createElement("img");
            bomb.src = "../images/bomb3.gif";
            bomb.id = `bomb${num}`;
            bomb.className = "bombs";
            document.querySelector("#play-background").appendChild(bomb);
            this.element = bomb;
            this.init(x, y);
        }
        init(x, y) {
            this.element.style.left = `${x}%`;
            this.element.style.top = `${y}%`;
        }
        move(timeOutId) {
            this.element.style.top = `${this.y}%`;
            if (this.y > 180) {
                this.element.remove();
                // clearInterval(timeOutId);
            }
        }
    }

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
                if (monster.x + 5 > bullet1.x && monster.x - 5 < bullet1.x) {
                    let monsterLifeBar = document.querySelector("#life-bar");
                    monster.health -= 10;
                    monsterLifeBar.style.width = `${monster.health}%`;
                    bullet1.element.remove();
                    if (monster.health === 0) {
                        monster.element.src = "../images/explode-kill.gif";
                        setTimeout(() => {
                            monster.element.style.opacity = "0";
                        }, 2000);
                        let modalBox = document.querySelector(".modal-box");
                        modalBox.style.display = "block";
                        let modalImg = document.querySelector(".modal-img");
                        modalImg.src = "/images/You-Win.png";
                    }
                    clearInterval(shoot);
                    console.log("shot");
                }
            }, 10);
        }
    }

    class Enemy extends Character {
        constructor(id, x, y) {
            super(id, x, y);
            this.moveAcrossX();
            this.throwBomb();
        }
        moveAcrossX() {
            setInterval(() => {
                let randomPostion = Math.floor(Math.random() * 100);
                this.element.style.left = `${randomPostion}%`;
                this.x = randomPostion;
            }, 2000);
        }

        throwBomb() {
            setInterval(() => {
                let bomb1 = new Bomb(this.x, this.y, 1);
                let attackShip = setInterval(() => {
                    bomb1.y += 5;
                    bomb1.move(attackShip);
                    if (
                        ship.x + 5 > bomb1.x &&
                        ship.x - 5 < bomb1.x &&
                        ship.y === bomb1.y
                    ) {
                        let shipLife = document.querySelector("#life-bar-ship");
                        ship.health -= 10;
                        shipLife.style.width = `${ship.health}%`;
                        bomb1.element.remove();
                        let modalImg = document.querySelector(".modal-img");
                        if (ship.health === 0) {
                            setTimeout(() => {}, 2000);
                            let modalBox = document.querySelector(".modal-box");
                            modalBox.style.display = "block";
                            modalImg.src = "/images/GameOver.jpg";
                        }
                    }
                }, 50);
            }, 1000);
        }
    }

    // created a ship object
    let ship = new SpaceShip("ship", 50, 90);
    ship.element.src = shipSrc;
    let monster = new Enemy("monster", 50, 25);
    console.log(monster);

    monster.throwBomb();

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
