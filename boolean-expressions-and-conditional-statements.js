/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

let hasSword = false;
let hasCompass = false;
let isAlive = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");

  const river = readline.question("You reach a rushing river. Do you 'swim' or look for a 'bridge'?");

  if (river === "bridge") {
    console.log("You find an old rope bridge and cross safely.");

    const cave = readline.question("Past the bridge, you spot a cave. Do you 'enter' or 'ignore' it?");

    if (cave === "enter") {
      console.log("Inside the cave, you find an old sword resting on a rock.");
      const takeSword = readline.question("Do you take the sword? (yes/no)");
      hasSword = takeSword === "yes";

    
      if (hasSword && hasTorch) {
        console.log("With the torch lighting your way, you also spot a compass hidden in the dirt!");
        hasCompass = true;
      } else if (hasSword) {
        console.log("You grab the sword, but it's too dark to see anything else.");
      } else {
        console.log("You leave the cave empty-handed.");
      }
    } else {
      console.log("You decide not to risk it and continue on.");
    }
  } else if (river === "swim") {
    
    if (hasCompass || hasMap) {
      console.log("You use your sense of direction to swim safely across.");
    } else {
      console.log("The current sweeps you off course. You barely make it out, exhausted.");
      isAlive = readline.question("Type 'alive' to keep going: ") === "alive";
    }
  } else {
    console.log("You hesitate too long at the riverbank and lose your nerve.");
  }
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
}
/*

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/