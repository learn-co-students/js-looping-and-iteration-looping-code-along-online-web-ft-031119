function writeCards(names){
  let thank_yous = []
  for(let i = 0; i<names.length; i++){
    thank_yous.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
  return thank_yous
}
function countdown(number){
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
