const textInput = document.getElementById("text-input")
const textOutput = document.getElementById("text-output")

textInput.addEventListener("keyup", function (event) {
   if (event.key === "Enter") {
       const text = event.target.value
        textOutput.innerText = text
        textInput.value = ""
   }
})

