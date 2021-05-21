const givenText = 'some random text';
let changedText = '';

for(i = 0; i < givenText.length; i++) {

    if (givenText[i] === 'a') {
        changedText += '4';
    } else if (givenText[i] === 'e'){
        changedText += '3';
    } else if (givenText[i] === 'i'){
        changedText += '1';
    } else if (givenText[i] === 'o'){
        changedText += '0';
    } else {
        changedText += givenText[i];
    }  
    
    if(changedText.length === givenText.length) {
        console.log(changedText);
    }    
}


//2 versija su switch