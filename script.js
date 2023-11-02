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