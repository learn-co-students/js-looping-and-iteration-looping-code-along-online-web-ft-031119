// Code your solutions in this file
function writeCards(names){
  let gifters = [];
  for (let i = 0; i < names.length; i++){
    gifters.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  };
  return gifters;
}

function countdown(start){
  while (start >= 0){
    console.log(start--);
  }
}
