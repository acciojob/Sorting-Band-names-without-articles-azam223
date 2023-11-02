Let bandNames = ['The Rolling Stone', "Led Zeppelin', 'Aerosmith', 'The Beatles']
// Function to remove articles and return the modified band name function
function removeArticles (name) {
return name.replace(/(a Jan |the )/f, ).trim);
}
let modifiedBandNames = bandNames.map(removeArticles);
let ulElement = document. createElement (ul);
ulElement.id = "band';
modifiedBandNames.for Each (function (bandName) f
let liElement = document.createElement('li');
liElement. textContent = bandName;
ulElement. appendchild(liElement);
});
 document.body•appendChild(ulElement);