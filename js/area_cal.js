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
        triagleArea = 0.5 * inputBaseTriangle * inputHeightTriangle;

    } else {

        alert('Please input positive numbers');
    }

   const areaTriangleField=document.getElementById('area-triangle');
   
   if (!isNaN(triagleArea)){
   areaTriangleField.innerText= triagleArea+' cm';
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
    areaRectangleField.innerText= rectangleArea+' cm';
   }

   rectangleWidthField.value = '';
   rectangleLengthField.value = '';
})