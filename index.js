const mainInput = document.querySelector(".mainInput")
const mainBtns = document.querySelectorAll(".calcBody")
const result = document.querySelector(".result")
const copyBtn = document.querySelector(".copyBtn")
const clear = document.getElementById("clear")
const eqlBtn = document.getElementById("result")
const switchTheme = document.getElementById("switchDarkLight")
const root = document.querySelector(':root')

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

switchTheme.addEventListener("click", function(){
  if (switchTheme.dataset.theme === "dark"){
    root.style.setProperty('--main-color', 'white')
    root.style.setProperty('--text-color', '#999999')

    root.style.setProperty('--text-border', '#cccccc')
    root.style.setProperty('--normal-color', 'black')
    switchTheme.dataset.theme = "light"

  } else {
    root.style.setProperty('--main-color', 'black')
    root.style.setProperty('--text-color', '#cccccc')
    root.style.setProperty('--text-border', '#999999')
    root.style.setProperty('--normal-color', 'white')
    switchTheme.dataset.theme = "dark"
  }
})


document.getElementById("copyBtn").addEventListener("click", function(ev){
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied"
    button.classList.remove("copyBtn")
    button.classList.add("greenBtn")
    navigator.clipboard.writeText(result.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("greenBtn")
    button.classList.add("copyBtn")
  }
})

function calculate(){
  if (mainInput.value === "") {
  result.value = "Digite seu cálculo para um resultado."
  } else { 
    result.value = "Error"
    result.classList.add("error")
    result.value = eval(mainInput.value)
    result.classList.remove("error")
  }
  mainInput.focus()
}