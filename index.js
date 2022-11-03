const mainInput = document.querySelector(".mainInput")
const mainBtns = document.querySelectorAll(".calcBody")
const result = document.querySelector(".result")
const copyBtn = document.querySelector(".copyBtn")
const clear = document.getElementById("clear")
const eqlBtn = document.getElementById("result")

const allowedBtns = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","(",")",".","%"]

mainInput.addEventListener("keydown", function(ev){
  ev.preventDefault()
  if (allowedBtns.includes(ev.key)) {
    mainInput.value += ev.key
  }

  if (ev.key === "Backspace"){
    mainInput.value = mainInput.value.slice(0,-1)
  }

  if (ev.key === "Enter"){
    calculate()
  }
})

clear.addEventListener("click", function (){
  mainInput.value = ""
  mainInput.focus()
})

eqlBtn.addEventListener("click", calculate)

mainBtns.forEach(element => {
  element.addEventListener("click", function(){
  mainInput.value += element.dataset.reference  
  mainInput.focus()
  })
});

function calculate(){
  if (mainInput.value === "") {
  result.value = "Digite seu cálculo para um resultado."
  } else { 
    result.value = eval(mainInput.value)
  }
  mainInput.focus()
}