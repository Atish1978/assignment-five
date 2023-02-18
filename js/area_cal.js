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

// Area of Parallelogram

document.getElementById('btn-parallelogram-area').addEventListener('click', function(){
    const baseParallelogramField=document.getElementById('base-parallelogram');
    const baseParallelogramString=baseParallelogramField.innerText;
    const baseParallelogramValue=parseFloat(baseParallelogramString);

    const heightParallelogramField=document.getElementById('height-parallelogram');
    const heightParallelogramString=heightParallelogramField.innerText;
    const heightParallelogramValue=parseFloat(heightParallelogramString);

    const areaParallelogram=baseParallelogramValue*heightParallelogramValue;

    const areaParalleologramField=document.getElementById('area-parallelogram');
   
   
    areaParalleologramField.innerText= areaParallelogram+' cm';
})


// Area of Rhombus

document.getElementById('btn-rhombus-area').addEventListener('click', function(){
    const baseRhombusField=document.getElementById('base-rhombus');
    const baseRhombusString=baseRhombusField.innerText;
    const baseRhombusValue=parseFloat(baseRhombusString);

    const heightRhombusField=document.getElementById('height-rhombus');
    const heightRhombusString=heightRhombusField.innerText;
    const heightRhombusValue=parseFloat(heightRhombusString);

    const areaRhombus=0.5*baseRhombusValue*heightRhombusValue;

    const areaRhombusField=document.getElementById('area-rhombus');
   
   
    areaRhombusField.innerText= areaRhombus+' cm';
})

// Area of Pentagon

document.getElementById('btn-pentagon-area').addEventListener('click', function(){
    const basePentagonField=document.getElementById('base-pentagon');
    const basePentagonString=basePentagonField.innerText;
    const basePentagonValue=parseFloat(basePentagonString);

    const heightPentagonField=document.getElementById('height-pentagon');
    const heightPentagonString=heightPentagonField.innerText;
    const heightPentagonValue=parseFloat(heightPentagonString);

    const areaPentagon=0.5*basePentagonValue*heightPentagonValue;

    const areaPentagonField=document.getElementById('area-pentagon');
   
   
    areaPentagonField.innerText= areaPentagon+' cm';
})

// Area of Ellipse

document.getElementById('btn-ellipse-area').addEventListener('click', function(){
    const baseEllipseField=document.getElementById('base-ellipse');
    const baseEllipseString=baseEllipseField.innerText;
    const baseEllipseValue=parseFloat(baseEllipseString);

    const heightEllipseField=document.getElementById('height-ellipse');
    const heightEllipseString=heightEllipseField.innerText;
    const heightEllipseValue=parseFloat(heightEllipseString);

    const areaEllipse=0.5*baseEllipseValue*heightEllipseValue;

    const areaEllipseField=document.getElementById('area-ellipse');
   
   
    areaEllipseField.innerText= areaEllipse+' cm';
})