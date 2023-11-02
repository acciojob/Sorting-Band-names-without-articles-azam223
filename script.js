let result={};
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let articlelessarray=[];
let articlelessitem=[];
for(let i=0;i<touristSpots.length;i++){
	articlelessitem= touristSpots[i].replace(/\bthe\b | \ban\b | \ba\b /gi," ").trim();
	articlelessarray.push(articlelessitem);
	result[articlelessitem]=touristSpots[i];
}
articlelessarray.sort();
let ans=[];
for(let i of articlelessarray){
	ans.push(result[i]);
}
console.log(ans);