// Code your solutions in this file
const names = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function writeCards(names) {
  let output = [];
  for (let i = 0; i < names.length; i++){
    output.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  };
  return output;
}

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
