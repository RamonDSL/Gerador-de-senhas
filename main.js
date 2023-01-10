const inputPassword = document.getElementById('password')
const range = document.getElementById('range')
const rangeLabel = document.querySelector('label[for=range]')
const btn = document.querySelector('#gerar')
const btnCopy = document.querySelector('#copiar')

const inputLower = document.querySelector('#lower')
const inputUpper = document.querySelector('#upper')
const inputNumbers = document.querySelector('#numbers')
const inputSymbols = document.querySelector('#symbols')

const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ['@',"!","#","$","%","&","&","(",")",]

const caracters = Array.from(Array(26)).map((_,i) => i + 97) 
const lower = caracters.map(item => String.fromCharCode(item))
const upper = lower.map(letter => letter.toLocaleUpperCase())

rangeLabel.innerHTML = range.value

range.addEventListener('change', () => {
    rangeLabel.innerHTML = range.value
})

btn.addEventListener('click', () => {
    generatePassword(
        inputLower.checked,
        inputUpper.checked,
        inputNumbers.checked,
        inputSymbols.checked,
        range.value
    )
})

btnCopy.addEventListener('click', () => {
    inputPassword.select()
    document.execCommand('copy')
    inputPassword.blur()
})


function generatePassword(
    chLower,
    chUpper,
    chNumbers,
    chSybols,
    length,
) {
    const newArray = [
        ...(chLower ? lower : []),
        ...(chUpper ? upper : []),
        ...(chNumbers ? numbers : []),
        ...(chSybols ? symbols : [])
    ]
    
    if (newArray.length === 0) return;

    let password = ""

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * newArray.length)
        password += newArray[randomIndex]
    }

    inputPassword.value = password
}

