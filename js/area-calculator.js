//reusable get input value
function getInputFieldValue(inputFieldId) {
    const input = document.getElementById(inputFieldId).value;
    // document.getElementById(inputFieldId).value = "";
    return input;
}

//reusable set input text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area.toFixed(4);
}
function removeClass(Id) {
    const calculationEnterField = document.getElementById(Id);
    calculationEnterField.classList.remove('hidden');
}

// Triangle Area
function calculateTriangleArea() {
    const base = getInputFieldValue('triangle-base')
    const height = getInputFieldValue('triangle-height');
    if (base === '' || height === '' || base < 0 || height < 0) {
        alert('Please provide the integer value');
        return;
    }
    const area = 0.5 * base * height;
    setElementInnerText('triangle-area', area);
    removeClass('triangle-enter');
    setElementInnerText('triangle-area-enter', area);
    // document.getElementById('triangle-count').innerText = document.getElementById('calculation-entry').childElementCount;
    return;
}

// Rectangle Area
function calculateRectangleArea() {
    const width = getInputFieldValue('rectangle-width');
    const length = getInputFieldValue('rectangle-length');
    if (width === '' || length === '' || width < 0 || length < 0) {
        alert('Please provide the integer value');
        return;
    }
    const area = width * length;
    setElementInnerText('rectangle-area', area);
    removeClass('rectangle-enter');
    setElementInnerText('rectangle-area-enter', area);
    // document.getElementById('rectangle-count').innerText = document.getElementById('calculation-entry').childElementCount;
}

// Parallelogram Area
function calculateParallelogramArea() {
    const base = getInputFieldValue('parallelogram-base');
    const height = getInputFieldValue('parallelogram-height');
    if (base === '' || height === '' || base < 0 || height < 0) {
        alert('Please provide the integer value');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
    removeClass('parallelogram-enter');
    setElementInnerText('parallelogram-area-enter', area);
    // document.getElementById('rectangle-count').innerText = document.getElementById('calculation-entry').childElementCount;
}

// Rhombus Area
function calculateRhombusArea() {
    const d1 = getInputFieldValue('rhombus-d1');
    const d2 = getInputFieldValue('rhombus-d2');
    if (d1 === '' || d2 === '' || d1 < 0 || d2 < 0) {
        alert('Please provide the integer value');
        return;
    }
    const area = 0.5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
    removeClass('rhombus-enter');
    setElementInnerText('rhombus-area-enter', area);
    // document.getElementById('rectangle-count').innerText = document.getElementById('calculation-entry').childElementCount;
}

// Pentagon Area
function calculatePentagonArea() {
    const p = getInputFieldValue('pentagon-p');
    const b = getInputFieldValue('pentagon-b');
    if (p === '' || b === '' || p < 0 || b < 0) {
        alert('Please provide the integer value');
        return;
    }
    const area = 0.5 * p * b;
    setElementInnerText('pentagon-area', area);
    removeClass('pentagon-enter');
    setElementInnerText('pentagon-area-enter', area);
    // document.getElementById('rectangle-count').innerText = document.getElementById('calculation-entry').childElementCount;
}

// Ellipse Area
function calculateEllipseArea() {
    const xRadius = getInputFieldValue('ellipse-x-radius');
    const yRadius = getInputFieldValue('ellipse-y-radius');
    if (xRadius === '' || yRadius === '' || xRadius < 0 || yRadius < 0) {
        alert('Please provide the integer value');
        return;
    }
    const area = (3.1416 * xRadius * yRadius);
    setElementInnerText('ellipse-area', area);
    removeClass('ellipse-enter');
    setElementInnerText('ellipse-area-enter', area);
    // document.getElementById('rectangle-count').innerText = document.getElementById('calculation-entry').childElementCount;
}

function cm2ToM2(target) {
    const cm2 = target.parentNode.childNodes[3].innerText;
    console.log(cm2);
    const m2 = cm2 / 10000;
    if (target.textContent === "Convert m²") {
        target.textContent = "Convert cm²";
        target.parentNode.childNodes[3].innerText = m2.toFixed(4);
        target.parentNode.childNodes[5].innerText = "m";
    } else {
        const M2 = target.parentNode.childNodes[3].innerText;
        const CM2 = M2 * 10000;
        target.textContent = "Convert m²";
        target.parentNode.childNodes[3].innerText = CM2.toFixed(4);
        target.parentNode.childNodes[5].innerText = "cm";
    }
}