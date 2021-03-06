const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];


const capitalize = (str) => {
  let first_character = str.charAt(0);
  first_character.toUpperCase();
  return first_character.toUpperCase() + str.slice(1)

}

const searchCandies = (str, price) => {
  let arr = [];
  candies.filter(candy => {
    if (candy['name'].includes(capitalize(str)) && candy['price'] < price) {
      arr.push(candy['name'])
    };
   } );
   return arr;
};

  

module.exports = searchCandies;