//Variables for name to be entered

let firstName = promt('enter your first name: ')
let userState = promt("enter your state in 2 letter acronym: ")
let temp = Number(promt("Enter a temprature in Farenheit: "))

//combining the variables for easier use
let stateCapital = userState.toUpperCase()
let capitalName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

// set up for
let userInfo = [`${capitalName}`, `${StateCapital}`, `${temp}`]

console.log(`${userInfo}`);

if (userState == "NE" && TEMP < 32) {
    NSB.MsgBox("${capitalName}, wear a warm coat, hat, scarf and gloves.") 
    
} else if (userState == "NE" && temp>32 && temp<50) {
    NSB.MsgBox("${capitalName}, wear your warm coat but you wont\'t need a hat, scarf or gloves.")
    
} else if (userState == "FL" && temp > 32 && temp < 50) {
    NSB.MsgBox("${capitalName}, wear your warmest coat, a warm hat, a scarf, and warm gloves.")
    
} else if (userState == "FL" && temp>50 && temp<70) {
    NSB.MsgBox("${capitalName}, wear a warm coat, hat and gloves. Maybe a scarf too.")
}
;
