// function to get random color:
function BackgroundRandomColor() {
    let BgColor = [];
    for (let i = 0; i < 3; i++) {
      BgColor.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + BgColor.join(', ') + ')';
  } 
// function to get interger value of input data:
  function createValueInteger(idName){
    const givenNumber = document.getElementById(idName);
    const givenNumberString = givenNumber.innerText;
    const givenNumberValue = parseFloat(givenNumberString);
    return givenNumberValue;
}

