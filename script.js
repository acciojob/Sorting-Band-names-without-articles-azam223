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