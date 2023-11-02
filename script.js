//your code here

document.addEventListener("DOMContentLoaded", function () {
  const bandNames = [
    'The Virupaksha Temple',
    'Victoria Memorial',
    'Tajmahal'
  ];

  // Function to remove articles and return the cleaned name
  const removeArticles = (bandName) => {
    return bandName.replace(/^(a |an |the )/i, '').trim();
  };

  // Sort the band names in lexicographic order
  const sortedBandNames = bandNames.slice().sort((a, b) => {
    const nameA = removeArticles(a).toUpperCase();
    const nameB = removeArticles(b).toUpperCase();
    return nameA.localeCompare(nameB);
  });

  // Get the ul element by id
  const ulElement = document.getElementById('bands');

  // Create and append li elements for each band name
  sortedBandNames.forEach((bandName) => {
    const liElement = document.createElement('li');
    liElement.textContent = bandName;
    ulElement.appendChild(liElement);
  });
});
