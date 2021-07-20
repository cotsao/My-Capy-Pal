class CapyPal{
    constructor(name){ //
        this.name =name
        this.hungerLevel = 100
        this.happyLevel = 100
        this.sleepLevel = 100
    }
    hungerDrain()
    {   
        setInterval(() =>{ //drains 0-5 hunger every second
            this.hungerLevel -= Math.floor(Math.random()*25)
            
        }, 1000)
    }
    happyDrain()
    {
        setInterval(() =>{ //drains 0-5 happy level every second
            this.happyLevel -=Math.floor(Math.random()*5)
        },1000)
    }
    sleepDrain()
    {
        setInterval(() =>{ //drains 0-5 sleep level every second
            this.sleepLevel -=Math.floor(Math.random()*5)
        },1000)
    }
    feed() 
    {
        this.hungerLevel+=20
    }
    sleep()
    {
        this.sleepLevel+=20
    }
    play()
    {
        this.happyLevel+=10
    }
    isCapyDead()
    {
        if (this.hungerLevel <= 0 || this.happyLevel <= 0 || this.sleepLevel <= 0)
        {
            return true
        }
        else return false
    }
}


let newName = ""
const nameButtonEl = document.getElementById('name-button')
nameButtonEl.addEventListener('click', function (){
const displayName = document.getElementsByClassName("name-display")
const capyName = document.getElementById("capy-name-input")
newName=capyName.value
if (newName != "")
{
    for (let i=0; i<displayName.length;i++) //change displayname span class to user input
    {
    displayName[i].textContent=capyName.value
    }    
    capyName.value=""
    startGame()    
}
else{    
    alert("You must enter a name.")
}

})
/*
todo:
add age 
add images
add buttons
 */

function resetGame(obj){
    obj.hungerLevel = 100
    obj.sleepLevel = 100
    obj.happyLevel = 100    
}
function startGame(){ 
    const hungerMeter = document.getElementById('hunger-bar')
    const sleepMeter = document.getElementById('sleep-bar')
    const happyMeter = document.getElementById('happy-bar')
    const hungerVal = document.getElementById('hunger-val')
    const sleepVal = document.getElementById('sleep-val')
    const happyVal = document.getElementById('happy-val')
    const resetBut = document.getElementById('reset')

    
    const inputEl = document.getElementById('name-getter')
    inputEl.classList.add('hidden') // hide user input section

    const deathEl =document.getElementById('death')
    const newCapyPal = new CapyPal(newName)

    newCapyPal.hungerDrain()
    newCapyPal.sleepDrain()
    newCapyPal.happyDrain()
    let run = setInterval(function(){
        hungerMeter.value=newCapyPal.hungerLevel
        sleepMeter.value=newCapyPal.sleepLevel
        happyMeter.value=newCapyPal.happyLevel
        hungerVal.textContent = newCapyPal.hungerLevel
        sleepVal.textContent =newCapyPal.sleepLevel
        happyVal.textContent =newCapyPal.happyLevel
        
        
    if (newCapyPal.isCapyDead()) //capy dies, stop interval
    {
        clearInterval(run)
        deathEl.classList.remove('hidden')
        resetBut.addEventListener('click', function(){
            resetGame(newCapyPal)
            deathEl.classList.add('hidden')
            startGame()
        })        
    }
    },1000)
}



