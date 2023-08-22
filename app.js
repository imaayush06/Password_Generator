const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "123456789"
const symbolSet = "!@#$%&*/?+_^"
//this is the complete set or data we are going to use in JS

//selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total")
const upperIn = document.getElementById("upper")
const lowerIn = document.getElementById("lower")
const numberIn = document.getElementById("number")
const symbolIn = document.getElementById("symbol")




const getRandomData = (data) => {
    dataSet = data[Math.floor(Math.random() * data.length)]
    return dataSet
}

const generate = (password = "") => {
    if(upperIn.checked) {
        password += getRandomData(upperSet)
    }
    if(lowerIn.checked) {
        password += getRandomData(lowerSet)
    }
    if(numberIn.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolIn.checked) {
        password += getRandomData(symbolSet)
    }            
    if(password.length < totalChar.value){ //to check generated password length is equal to what needed
        return generate(password)      //reccursive function
    }
    /*function trim(str, total){
        if (str.length > total){
            let pass = str.substring(0, total)
            return pass
        } else{
            return str
        }
    }*/
    //const item = trim(password, totalChar.value)
    passBox.innerText = truncateString(password , totalChar.value)
    //navigator.clipboard.writeText(item)
}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generate()    
    }
    
)

//Triming Password Function

function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0 , num)
        return substr
    } else{
        return str
    }
}