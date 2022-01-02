//Super-comment, doesn't mean anything. I'm just flexing my muscles cos I can
console.log("Simiel's at the wheel, the show's getting started")

//Declare variables to track values and hold DOM children
let superTracker = 0
let superElement = document.getElementById('super-magic-reference')
let superDisplay = document.getElementById('display')

//Main engine I ordered from Pratt and Whitney to run the website interaction
function incrementEngine () {
    superTracker += 1
    superElement.innerText = superTracker
    console.log('Simiel, you got this')
    console.log(superTracker)
}

function saveIt(){
    superDisplay.textContent += superTracker + " - "
    superElement.textContent = 0
    superTracker = 0
}

//okay, this didn't go without a hitch. I missed the parentheses in my reference to my engine in my 'index.html'.
//This is awesome