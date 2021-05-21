const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newString = '';
for(i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random() * alphabet.length);
    newString += alphabet[randomNumber];
    
    if (newString.length === 5){
        console.log(newString);
    }
}