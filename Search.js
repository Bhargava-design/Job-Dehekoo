// Get the search input element and search button element
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('searchButton');

// Function to perform the search
function performSearch() {
  var query = searchInput.value;
  
  // You can customize the search functionality here
  // For example, redirect to a search results page or perform an AJAX request
  
  // For now, let's just log the search query to the console
  console.log('Performing search for: ' + query);
}

// Attach click event listener to the search button
searchButton.addEventListener('click', performSearch);

function submitted() {
    console.log('Submitted Sucessfully');
}