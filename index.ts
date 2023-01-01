import * as readline from 'readline';

class Location {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

let currentLocation: Location;

const locations: Location[] = [
  new Location('Home', 'You are in your home.'),
  new Location('Forest', 'You are in a dense forest.'),
  new Location('Cave', 'You are in a dark cave.'),
];

function moveToLocation(location: Location) {
  currentLocation = location;
  console.log(location.description);
}

function startGame() {
  console.log('Welcome to the adventure game!');
  moveToLocation(locations[0]);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function prompt() {
    console.log('What would you like to do?');
    rl.prompt();
  }

  rl.on('line', (input: string) => {
    switch (input.trim()) {
      case 'go to forest':
        moveToLocation(locations[1]);
        break;
      case 'go to cave':
        moveToLocation(locations[2]);
        break;
      case 'go home':
        moveToLocation(locations[0]);
        break;
      default:
        console.log("I don't understand that command.");
        break;
    }

    prompt();
  }).on('close', () => {
    console.log('Exiting the game.');
    process.exit(0);
  });

  prompt();
}

startGame();
