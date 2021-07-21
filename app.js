class CapyPal{
    constructor(){ 
        this.hungerLevel = 100
        this.happyLevel = 100
        this.sleepLevel = 100
        this.age = 0
    }
//#region capypalmethods
    hungerDrain()
    {   
        setInterval(() =>{ //drains 0-5 hunger every second
            this.hungerLevel -= Math.floor(Math.random()*5)
            
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
        this.hungerLevel+= (10+Math.floor(Math.random()*15))
        if(this.hungerLevel > 100){
            this.hungerLevel =100
        }
    }
    sleep()
    {
        this.sleepLevel+=(10+Math.floor(Math.random()*15))
        if(this.sleepLevel > 100){
            this.sleepLevel =100
        }
    }
    play()
    {
        this.happyLevel+=(10+Math.floor(Math.random()*5))
        if(this.happyLevel>100){
            this.happyLevel=100
        }
    }
    isCapyDead()
    {
        if (this.hungerLevel <= 0 || this.happyLevel <= 0 || this.sleepLevel <= 0)
        {
            return true
        }
        else return false
    }
//#endregion
}
const domElements = {
    meters: {
        hungerMeter: document.getElementById('hunger-bar'),
        sleepMeter: document.getElementById('sleep-bar'),
        happyMeter: document.getElementById('happy-bar'),
    },
    buttons: {
        addHunger: document.getElementById('feed-btn'),
        addSleep: document.getElementById('sleep-btn'),
        addHappy: document.getElementById('play-btn')        
    },
    values: {
        hungerVal: document.getElementById('hunger-val'),
        sleepVal: document.getElementById('sleep-val'),
        happyVal: document.getElementById('happy-val'),
        ageVal: document.getElementById('capy-age')
    },
    nameDiv: {
        inputEl: document.getElementById('name-div'),
        nameButtonEl: document.getElementById('name-button'),
        displayName: document.getElementsByClassName("name-display"),
        aniName: document.getElementById("capy-name-input"),
        header: document.getElementById('game-header')
    },
    deathDiv:{
        deathEl: document.getElementById('death'),
        resetBut: document.getElementById('reset')
    },
    hideEl: function(el){
        el.classList.add('hidden')
    },
    showEl: function(el){
        el.classList.remove('hidden')
    }
}
class Game{
    constructor(aniObj){
        this.count = 0
        this.animalObj = aniObj
    }
    resetGame(){
        this.animalObj.hungerLevel = 100
        this.animalObj.sleepLevel = 100
        this.animalObj.happyLevel = 100  
        this.animalObj.age = 0  
        this.count =0
    }
    startGame(){
        this.animalObj.hungerDrain()
        this.animalObj.sleepDrain()
        this.animalObj.happyDrain()
        let run = setInterval(() =>{
            domElements.meters.hungerMeter.value=this.animalObj.hungerLevel
            domElements.meters.sleepMeter.value=this.animalObj.sleepLevel
            domElements.meters.happyMeter.value=this.animalObj.happyLevel
            domElements.values.hungerVal.textContent = this.animalObj.hungerLevel
            domElements.values.sleepVal.textContent =this.animalObj.sleepLevel
            domElements.values.happyVal.textContent =this.animalObj.happyLevel
            domElements.values.ageVal.textContent= this.animalObj.age
         
            this.count++
            if(this.count%10 ===0){
                this.animalObj.age++
            }
            if (this.animalObj.isCapyDead()){ //capy dies, stop interval
                clearInterval(run)
                domElements.showEl(domElements.deathDiv.deathEl)        
            }
        },1000)
    }
    createChar(){
        let bool = false
        let newName = ""        
        newName=domElements.nameDiv.aniName.value  
        if (newName != ""){
            for (let i=0; i<domElements.nameDiv.displayName.length;i++){//change displaname span class to user input
                domElements.nameDiv.displayName[i].textContent=domElements.nameDiv.aniName.value
            }
            domElements.showEl(domElements.nameDiv.header) 
            domElements.nameDiv.aniName.value=""
            domElements.hideEl(domElements.nameDiv.inputEl)
            bool = true
            return bool                
        }
        else{    
            alert("You must enter a name.")
            return bool
            }
    }        
}

const newCapyPal = new CapyPal()
const newGame = new Game(newCapyPal)
domElements.nameDiv.nameButtonEl.addEventListener('click', function(){
    if(newGame.createChar()){
        newGame.startGame()
    }
})
domElements.buttons.addHunger.addEventListener('click', function(){
    newCapyPal.feed()
})
domElements.buttons.addSleep.addEventListener('click',function(){
    newCapyPal.sleep()
})
domElements.buttons.addHappy.addEventListener('click',function(){
    newCapyPal.play()
})
domElements.deathDiv.resetBut.addEventListener('click', function(){
    newGame.resetGame()
    newGame.startGame()
    domElements.hideEl(domElements.deathDiv.deathEl)
})






/* function startGame(){   
    inputEl.classList.add('hidden') // hide user input section
    const 
    const newCapyPal = new CapyPal(newName)

    
   
    
} */



