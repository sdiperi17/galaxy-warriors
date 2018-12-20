let ships = document.querySelectorAll(".ship");
let active = document.querySelector(".ship");
ships.forEach(ship => {
    ship.addEventListener("click", function() {
        console.log(this.src);
        window.localStorage.setItem("selectedShip", this.src);
        active.classList.remove("selected-ship");
        console.log(active);
        active = ship;
        active.classList.add("selected-ship");
        console.log(active);
    });
});
