function changeText(){
    var textsArray = ["Select 1", "Select 2", "Select 3", "Select 4", "Select 5"]
    var number = getRandomNumberBetween(0,textsArray.length-1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML= textsArray[number];
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}