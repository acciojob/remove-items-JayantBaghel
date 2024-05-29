document.getElementById('removeButton').addEventListener('click', function() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOptionIndex = colorSelect.selectedIndex;

    console.log('Selected index:', selectedOptionIndex);
    console.log('Options before removal:', Array.from(colorSelect.options).map(opt => opt.value));

    if (selectedOptionIndex !== -1) {
        colorSelect.remove(selectedOptionIndex);
    }

    console.log('Options after removal:', Array.from(colorSelect.options).map(opt => opt.value));
});
