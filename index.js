// Code your solutions in this file
function writeCards(names){
  let output = [];
  for (let i = 0; i < names.length; i++){
    output.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  };
  return output;
}

function countdown(start){
  while (start >= 0){
    console.log(start--);
  }
}
