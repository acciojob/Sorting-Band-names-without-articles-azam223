let arr = ['Tajmahal', 'The Virupaksha Temple', 'Victoria Memorial'];
function getArticleLessString(input) {
    // example: input: "The tajmahal an umberilla" , output: "tajmahal umberiall"
    // words = "The tajmahal an umberilla".split(" ") = [ "The", "tajmahal", "an", "umberilla" ] 
    // nonArticleWords = [ "tajmahal", "umberilla"].join(" ") => "tajmahal umberilla"
    let words = input.split(" ");
    let nonArticleWords = words.filter(
        // words = [ "The", "tajmahal", "an", "umberilla" ] 
        (word) => {
            let smallCaseWord = word.toLowerCase();
            if(smallCaseWord === "the" || smallCaseWord === "an" || smallCaseWord === "a"){
                return false;
            }
            return true ;
        }
    );
    // nonArticleWords = [ "tajmahal", "umberilla" ]
    return nonArticleWords.join(" "); //  "tajmahal umberilla"
}
let hashMap = {} ;
let arr1 = [] ;
for(let i = 0; i < arr.length; i++) {
    let articleLessString = getArticleLessString(arr[i]);
    hashMap[articleLessString] = arr[i];
    arr1.push(articleLessString);
}
// arr1 = [ 'Tajmahal', 'Virupaksha Temple' , 'Victoria Memorial']
arr1.sort();
// arr1 = [ 'Tajmahal', 'Victoria Memorial' , 'Virupaksha Temple']
let outputList = [] ;
// [ "Tajmahal", "Victoria Memorial", 'The Virupaksha Temple']
arr1.forEach((newString) => {
    outputList.push( hashMap[newString] ) ; // 
})
console.log(outputList);