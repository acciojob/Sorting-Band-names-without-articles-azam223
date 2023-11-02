Let bandNames = ['The Rolling Stone', "Led Zeppelin', 'Aerosmith', "The Beatles',
/ Function to remove articles and return the modified band name function
removeArticles (name) {
return name.replace(/(a Jan |the )/f, ).trim);
}
11 Remove articles from all band names
let modifiedBandNames = bandNames. map(removeArticles);
I Sort the modified band names lexicographically modifiedBandNames. sort();
It Create an ul element with id band"
let ulElement = document. createElement (ul);
ulElement. id = "band';
Il Add li elements to the ul element
modifiedBandNames. for Each (function (bandName) f
Let LiElement - document. createElement(li);
liElement. textContent = bandName;
ulElement. appendchild(liElement);
});
 document.body•appendChild(ulElement);