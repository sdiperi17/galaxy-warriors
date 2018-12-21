Link to the game: https://pages.git.generalassemb.ly/sdiperi17/galaxy-warriors/pages/play.html

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day      | Deliverable                                          | Status   |
| -------- | ---------------------------------------------------- | -------- |
| Dec 17th | Project Description                                  | Complete |
| Dec 17th | Wireframes / Priority Matrix / Functional Components | Complete |
| Dec 18th | Core Application Structure (HTML, CSS, etc.)         | Complete |
| Dec 18th | Pseudocode / actual code                             | Complete |
| Dec 19th | Initial Clickable Model                              | Complete |
| Dec 20th | MVP                                                  | Complete |
| Dec 21th | Present                                              | Complete |

## Project Description

Spaceship shooting Game. Protect Earth from Aliens. There will be a large number of enemies invading planet and player has to shoot and destroy them. As game progress the player can upgrade his/her spacecraft and become more powerful.

https://play.google.com/store/apps/details?id=com.alien.shooter.galaxy.attack&hl=en_US

How to Play:

-   Use arrow keys to move left, right, up and down.
-   Collect items to upgrade or change your weapons.

// Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Wireframes

https://drive.google.com/drive/u/0/folders/1Nb7FXmeqbVB5pHhH6wZQZ_qG5o-ecZza?ths=true

//Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.

https://drive.google.com/drive/u/0/folders/1kCLuJbV2SMbQ9MBm6gwvfAvCzSQmxSga

1. Set up a game board.
2. Render a spaceship on gameboard.
3. Render enemy on the page.
4. Make spaceship move left & right.
5. Make enemy move left & right.
6. Add shooting feature to spaceship.
7. After the shooting create a colission detection.
8. Set up a life bar to enemy and decrease life percentage accordingly.
9. After life bar is 0 alert user win.

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

1. Set up a game board.
2. Render a spaceship on gameboard.
3. Render enemy on the page.
4. Make spaceship move left & right.
5. Make enemy move left & right.
6. Add shooting feature to spaceship.
7. After the shooting create a colission detection.
8. Alert user about win.

#### PostMVP

9. Set up a life bar to enemy and decrease life percentage accordingly.
10. After life bar is 0 alert user win.
11. Allow user to choose spaceship
12. Add modal box for user to play again or to direct user to main menu buttons.

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions. Try and capture what logic would need to be defined if the game was broken down into the following categories.

### Landing Page - The player enters name and chooses the spaceshift.

### Playing The Game - The player can move left and right on gameboard. Shoot the enemy.

### Winning The Game. When the life of enemy ends, the player gets alert about winning.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component                                                                    | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------------------------------------------------------------------- | :------: | :------------: | :------------: | :---------: |
| Set up a game board                                                          |   MVP    |      1hr       |      1hr       |
| Render a spaceship on gameboard                                              |   MVP    |     30 min     |      1hr       |
| Render enemy on the page                                                     |   MVP    |     30 min     |     20min      |
| Make spaceship move left & right.                                            |   MVP    |    3.5 hrs     |      3hrs      |
| Make enemy move left & right                                                 |   MVP    |    3.5 hrs     |      3hrs      |
| Add shooting feature to spaceship                                            |   MVP    |     4 hrs      |      5hrs      |
| After the shooting create a colission detection                              |   MVP    |     4 hrs      |      5hrs      |
| Alert user about win                                                         |   MVP    |      1 hr      |      2hrs      |
| Set up a life bar to enemy and decrease life percentage accordingly          | Post MVP |      3hrs      |     3.5hrs     |
| Allow user to choose spaceship                                               | Post MVP |     2 hrs      |      3hrs      |
| Add modal box for user to play again or to direct user to main menu buttons. | Post MVP |     3 hrs      |     3.5hrs     |

---

| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

---

## Helper Functions

init()
moveRight()
moveLeft()

Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function      |                        Description                        |
| ------------- | :-------------------------------------------------------: |
| Capitalize    | This will capitalize the first letter in a string of text |
| forEach       |    This method loops through each element of an array     |
| init()        |                  initialize object state                  |
| setInterval() |      repeatedly calls a function or executes a code       |
| Math.random() |         generates random numbers in the range 0–1         |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

1. This function uses js classes to generate bullet and increments its y coordinate to move it along the page.
   The function also has if condition where collision of bullet and enemy is detected to decrement the life bar of the enemy

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
}
}, 10);
}
}

2. Used the setItem() method of the Storage to set the value of the specified Storage Object item.

window.localStorage.setItem("selectedShip", this.src);

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.

## Issues and Resolutions

Issue: repeating code while creating objects for game characters.
Resolution: As the enemy and spaceship had a lot of properties in common, using js classes with consructor helped to dry the code and make the code more organized

Issue: To add feature for user to be able to select spaceship on landing page and to play with selected ship on play page.
Resolution: local storage - web storage to store data.

Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
