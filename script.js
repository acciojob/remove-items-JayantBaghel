function removeColor() {
    // Get the select element by its ID
    var select = document.getElementById("colorSelect");
    
    // Get the selected option's index
    var selectedIndex = select.selectedIndex;
    
    // Check if there is a selected option (index is not -1)
    if (selectedIndex !== -1) {
        // Remove the selected option from the select element
        select.remove(selectedIndex);
    }
}
