const rotator = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(() => {
    // Find index of active case
    let indexCase = rotator.findIndex((rotatorCase) => rotatorCase.classList.contains('rotator__case_active'));
    // Make deactive this element
    rotator[indexCase].classList.remove('rotator__case_active');
    // When finish list, go to start
    if (indexCase === rotator.length-1) indexCase = -1;
    // Make active next element
    rotator[indexCase+1].classList.add('rotator__case_active');
    }, 1000)