const givenText = 'some random text';
let changedText = '';

for(i = 0; i < givenText.length; i++) {

    switch(givenText[i]) {
        case 'a':
            changedText += '4';
          break;
        case 'e':
            changedText += '3';
          break;
        case 'i':
            changedText += '1';
          break;
        case 'o':
            changedText += '0';
          break;
        default:
            changedText += givenText[i];
      }

    if(changedText.length === givenText.length) {
        console.log(changedText);
     }    
}
