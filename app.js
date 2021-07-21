class CapyPal{
    constructor(){ 
        this.hungerLevel = 100
        this.happyLevel = 100
        this.sleepLevel = 100
        this.age = 0
        this.image = null
        this.state = null
        this.stage = null
    }
    static capyImages = {
        old: {
            bored: [],
            hungry: [],
            normal: [],
            tired: [],
            dead: []
        },
        mid: {
            bored: [],
            hungry: [],
            normal: [],
            tired: [],
            dead: []
        },
        young: {
            bored: [],
            hungry: [],
            normal: [],
            tired: [],
            dead: []
        },
    }
    static capyStates = {
        bored: "bored",
        hungry: "hungry",
        normal: "normal",
        tired: "tired",
        dead: "dead"
    }
    static capyStages = {
        old: "old",
        mid: "adult",
        young: "young"
    }
//#region capypalmethods
    setImage(){
        const capyImage = CapyPal.capyImages
        const tempObj = {}
        const tempArr = []
        switch(true){
            case this.stage = "old":
                tempObj = capyImage.old
                break
            case this.stage = "adult":
                tempObj = capyImage.mid
                break
            case this.stage = "young":
                tempObj = capyImage.young
                break
        }
        switch(true){
            case this.state = "bored":
                tempArr = tempObj.bored
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state = "hungry":
                tempArr = tempObj.hungry
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state = "normal":
                tempArr = tempObj.normal
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state = "tired":
                tempArr = tempObj.tired
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state = "dead":
                tempArr = tempObj.dead
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
        }

    }
    setState(){
        const capyState = CapyPal.capyStates
        const rand = Math.floor(Math.random()*100)
        switch(true){
            case this.hungerLevel <= 0 || this.happyLevel <= 0 || this.sleepLevel <= 0 || this.age >= (10 +Math.floor(Math.random()* 5)):
                this.state = capyState.dead
                break;
            case this.hungerLevel >= 50 && this.happyLevel >= 50 && this.sleepLevel >= 50:
                this.state = capyState.normal
                break
            case this.hungerLevel <= 50 && this.happyLevel <= 50:                
                if (rand %2 ===0){
                    this.state = capyState.hungry
                }
                else
                this.state = capyState.bored
                break
            case this.happyLevel <= 50 && this.sleepLevel <= 50:
                if (rand %2 ===0){
                    this.state = capyState.tired
                }
                else
                this.state = capyState.bored
                break
            case this.hungerLevel <= 50 && this.sleepLevel <= 50:
                if (rand %2 ===0){
                    this.state = capyState.hungry
                }
                else
                this.state = capyState.tired
                break
            case this.hungerLevel <= 50:
                this.state = capyState.hungry
                break
            case this.happyLevel <= 50:
                this.state = capyState.bored
                break
            case this.sleepLevel <= 50:
                this.state = capyState.tired
                break
        }
    }
    setStage(){
        const capyStage = CapyPal.capyStages
        switch(true){ //young
            case this.age >=0 && this.age < 2:
                this.stage=capyStage.young
                break;
            case this.age >= 2 && this.age < 7:
                this.stage = capyStage.mid
                break;
            case this.age >=7:
                this.stage = capyStage.old
                break;                
        }
    }
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
        if (this.state === "dead")
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
         
            this.animalObj.setStage()
            this.animalObj.setState()
            console.log(this.animalObj.stage + " " + this.animalObj.state)
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
        newCapyPal.setStage()
        newCapyPal.setState()
        
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


