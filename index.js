function clicked()
{
    console.log("button was clicked");
}

// FirstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
// })

// let prevHtml = document.querySelectorAll('.container')[1].innerHTML;

// FirstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHtml;
//     console.log("Mouse UP")
// })

// FirstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Mouse DOWN")
// })

sum = (a,b) =>{
    return a+b;
}

LogK = () =>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
    console.log("We have logged")
}

clr = setTimeout(LogK, 5000)
// clr = setInterval(LogK, 2000)

var obj = {name : "Sahil", length : 1}
jso = JSON.stringify(obj);
console.log(jso);



