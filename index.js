const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// STRINGS

// 1. Destructure animal sounds based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. With the horse gone, assign four animals: bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. With the chicken gone, assign three variables: blackAndWhite, black, and pink.
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// ARRAYS

// 4. Destructure the colors array into variables for each color.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Destructure to assign first letter variables, leaving out indigo.
const [r, o, y, g, b, , v] = colors;

// 6. Destructure to assign indigo using 'indg'.
const [, , , , , indg] = colors;

// OBJECTS

// 7. Destructure the muppet object using its keys.
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nestedMuppet to assign songs 2 and 4, and Kermit's job and partner.
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedJob, nestedPartner } = nestedMuppet;

// BONUS: Using destructuring to assign animal names
const animalNames = ['cat', 'dog', 'cow', 'pig', 'duck'];
const [cat, dog, cow, pig, duck] = animalNames;

console.log(muppetName, color, song, job, partner);
console.log(nestedMuppet.nestedName, nestedMuppet.nestedColor, nestedMuppet.album);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(cat, dog, cow, pig, duck);

