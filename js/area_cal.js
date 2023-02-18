// random background color
document.getElementById('random-color-triangle').addEventListener('mouseover', function () {
    document.getElementById('random-color-triangle').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-rectangle').addEventListener('mouseover', function () {
    document.getElementById('random-color-rectangle').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-parallelogram').addEventListener('mouseover', function () {
    document.getElementById('random-color-parallelogram').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-rhombus').addEventListener('mouseover', function () {
    document.getElementById('random-color-rhombus').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-pentagon').addEventListener('mouseover', function () {
    document.getElementById('random-color-pentagon').style.backgroundColor = BackgroundRandomColor();
})
document.getElementById('random-color-ellipse').addEventListener('mouseover', function () {
    document.getElementById('random-color-ellipse').style.backgroundColor = BackgroundRandomColor();
})

document.getElementById('new-page').addEventListener('click', function () {
    window.location.href = 'question_answer.html';
})


// Area of Triangle
document.getElementById('btn-triangle-area').addEventListener('click', function () {
    const triangleBaseField = document.getElementById('input-base-triangle');
    const inputBaseTriangleSting = triangleBaseField.value;
    const inputBaseTriangle = parseFloat(inputBaseTriangleSting);

    const triangleHeightField = document.getElementById('input-height-triangle');
    const inputHeightTriangleString = triangleHeightField.value;
    const inputHeightTriangle = parseFloat(inputHeightTriangleString);
  
    let triagleArea;

    if (!isNaN(inputBaseTriangle) && !isNaN(inputHeightTriangle) && inputBaseTriangle > 0 && inputHeightTriangle > 0) {
        document.getElementById('area-triangle-section').style.display='block';
        triagleArea = 0.5 * inputBaseTriangle * inputHeightTriangle;

    } else {

        alert('Please input positive numbers');
    }

   const areaTriangleField=document.getElementById('area-triangle');
   
   if (!isNaN(triagleArea)){
   areaTriangleField.innerText= triagleArea;
   
   }

    triangleBaseField.value = '';
    triangleHeightField.value = '';
})
// area of Rectangle

document.getElementById('btn-rectangle-area').addEventListener('click', function () {
    const rectangleWidthField = document.getElementById('input-width-rectangle');
    const inputWidthRectangleSting = rectangleWidthField.value;
    const inputWidthRectangle = parseFloat(inputWidthRectangleSting);

    const rectangleLengthField = document.getElementById('input-length-rectangle');
    const inputLengthRectangleString = rectangleLengthField.value;
    const inputLengthRectangle = parseFloat(inputLengthRectangleString);

    let rectangleArea;

    if (!isNaN(inputWidthRectangle) && !isNaN(inputLengthRectangle) && inputWidthRectangle > 0 && inputLengthRectangle > 0) {
        rectangleArea = inputWidthRectangle * inputLengthRectangle;

    } else {

        alert('Please input positive numbers');
    }

   const areaRectangleField=document.getElementById('area-rectangle');
   
   if (!isNaN(rectangleArea)){
    document.getElementById('area-rectangle-section').style.display='block';
    areaRectangleField.innerText= rectangleArea;
   }

   rectangleWidthField.value = '';
   rectangleLengthField.value = '';
})


// Area of Parallelogram

document.getElementById('btn-parallelogram-area').addEventListener('click', function(){
    
   let number1= createValueInteger('base-parallelogram');
   let number2= createValueInteger('height-parallelogram');

    const areaParallelogram=number1*number2;

    const areaParalleologramField=document.getElementById('area-parallelogram');
   
    document.getElementById('area-parallelogram-section').style.display='block';
    areaParalleologramField.innerText= areaParallelogram;
   
})


// Area of Rhombus

document.getElementById('btn-rhombus-area').addEventListener('click', function(){
   
    let number1= createValueInteger('base-rhombus');
    let number2= createValueInteger('height-rhombus');

    const areaRhombus=0.5*number1*number2;

    const areaRhombusField=document.getElementById('area-rhombus');
   
    document.getElementById('area-rhombus-section').style.display='block';
    areaRhombusField.innerText= areaRhombus;
})

// Area of Pentagon

document.getElementById('btn-pentagon-area').addEventListener('click', function(){
   
    let number1= createValueInteger('base-pentagon');
    let number2= createValueInteger('height-pentagon');

    const areaPentagon=0.5*number1*number2;

    const areaPentagonField=document.getElementById('area-pentagon');
   
    document.getElementById('area-pentagon-section').style.display='block';
    areaPentagonField.innerText= areaPentagon;
})

// Area of Ellipse

document.getElementById('btn-ellipse-area').addEventListener('click', function(){
    
    let number1= createValueInteger('base-ellipse');
    let number2= createValueInteger('height-ellipse');

    const areaEllipse=(3.14*number1*number2).toFixed(2);

    const areaEllipseField=document.getElementById('area-ellipse');
   
    document.getElementById('area-ellipse-section').style.display='block';
    areaEllipseField.innerText= areaEllipse;
})