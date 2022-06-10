let getNumber =(num)=>{
    
    let result =document.getElementById("result")
    result.value += (num)
}

let clearResult=(empty)=>{
    let clear = document.getElementById("result")
    clear.value=(empty)
}

let answer=()=>{
    let getAnswer = document.getElementById("result")
    getAnswer.value=eval(getAnswer.value)
}