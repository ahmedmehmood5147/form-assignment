var input1 = document.getElementById("name")
var input2 = document.getElementById("email")
var input3 = document.getElementById("address")
var input4 = document.getElementById("number")

var arr = [input1,input2,input3,input4]
function getInput (){
    for (var i = 0 ; i < arr.length ; i++){
        console.log(arr[i].value)
    }
}


