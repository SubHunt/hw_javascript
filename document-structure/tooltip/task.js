const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
hasTooltip.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Disable all active tooltips
        const tooltipActive = document.getElementsByClassName('tooltip_active')[0];
        if (tooltipActive) {
            tooltipActive.classList.remove('tooltip_active');
            if (tooltipActive.textContent == element.title) {
                return false;
            };
        };
        
        //Create HTML element with classes and title as need
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.textContent = element.getAttribute('title');
        document.body.append(tooltip); 
        
        //Show tooltip under current element
        const coordinates = element.getBoundingClientRect();
        tooltip.style.top = `${coordinates.bottom}px`;
        tooltip.style.left = `${coordinates.left}px`;
    });
});

