class CapyPal{
    constructor(name){ //
        this.name =name
        this.hungerLevel = 100
        this.happyLevel = 100
        this.sleepLevel = 100
    }
    hungerDrain()
    {
        setInterval(function(){ //drains 0-5 hunger every second
            this.hungerLevel -=Math.floor(Math.random()*5)
        }, 1000)
    }
    happyDrain()
    {
        setInterval(function(){ //drains 0-5 happy level every second
            this.happyLevel -=Math.floor(Math.random()*5)
        },1000)
    }
    sleepDrain()
    {
        setInterval(function(){ //drains 0-5 sleep level every second
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
    isCapyAlive()
    {
        if (this.hungerLevel <= 0 || this.happyLevel <= 0 || this.sleepLevel <= 0)
        {
            return false
        }
        else return true
    }
}


let newName = ""
const nameButtonEl = document.getElementById('name-button')

nameButtonEl.addEventListener('click', function (){
const displayName = document.getElementsByClassName("name-display")
const capyName = document.getElementById("capy-name-input")
for (let i=0; i<displayName.length;i++)
{
    displayName[i].textContent=capyName.value
}
newName=capyName.value
capyName.value=""
})

const newCapyPal = new CapyPal(newName)

