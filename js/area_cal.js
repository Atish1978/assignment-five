function BackgroundRandomColor() {
    let BgColor = [];
    for (let i = 0; i < 3; i++) {
      BgColor.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + BgColor.join(', ') + ')';
  } 

document.getElementById('random-color-triangle').addEventListener('mouseover', function(){
    document.getElementById('random-color-triangle').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-rectangle').addEventListener('mouseover', function(){
    document.getElementById('random-color-rectangle').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-parallelogram').addEventListener('mouseover', function(){
    document.getElementById('random-color-parallelogram').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-rhombus').addEventListener('mouseover', function(){
    document.getElementById('random-color-rhombus').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-pentagon').addEventListener('mouseover', function(){
    document.getElementById('random-color-pentagon').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-ellipse').addEventListener('mouseover', function(){
    document.getElementById('random-color-ellipse').style.backgroundColor = BackgroundRandomColor();
})

document.getElementById('new-page').addEventListener('click', function(){
    window.location.href='question_answer.html';
})