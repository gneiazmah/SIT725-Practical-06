function changeText(){
    var textsArray = ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"]
    var number = getRandomNumberBetween(0,textsArray.length-1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML= textsArray[number];
}
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}