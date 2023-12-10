const checkBoxesArray = Array.from(document.querySelectorAll('input.interest__check'))

function setChildrenChecked(node, tagName, isChecked) {
    node.childNodes.forEach(function (item) {
        isChecked ? item.checked = true : item.checked = false;
        setChildrenChecked(item, tagName, isChecked);
    });
} 


checkBoxesArray.forEach(function (item) {
    item.addEventListener('change', function () {
        let node = item.closest('li');
        setChildrenChecked(node, 'input', item.checked);
    });
});
