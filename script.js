//your JS code here. If required.
document.getElementById('removeButton').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOptionIndex = colorSelect.selectedIndex;
    
    if (selectedOptionIndex !== -1) {
        colorSelect.remove(selectedOptionIndex);
    }
});
