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
            /* bored: [],
            hungry: [],
            normal: [],
            tired: [],
            dead: [] */
            bored: ["old/sad.png"],
            hungry: ["old/hungry.png"],
            normal: ["old/normal.png"],
            tired: ["old/tired.png"],
            dead: ["old/ded.png"]
        },
        mid: {
            bored: ["adult/sad.png"],
            hungry: ["adult/hungry.png"],
            normal: ["adult/normal.png"],
            tired: ["adult/tired.png"],
            dead: ["adult/ded.png"]            
        },
        young: {
            bored: ["young/sad.png"],
            hungry: ["young/hungry.png"],
            normal: ["young/normal.png"],
            tired: ["young/tired.png"],
            dead: ["young/ded.png"]            
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
    getImage(){
        const capyImage = CapyPal.capyImages
        let tempObj = {}
        let tempArr = null

        if (this.stage === "old"){
            Object.assign( tempObj, capyImage.old )
        } 
        else if (this.stage === "adult" ){
            Object.assign(tempObj,capyImage.mid)
        }
        else if (this.stage === "young"){
            Object.assign(tempObj,capyImage.young)
        }
      /*   switch(true){
            case this.stage = "old":
                Object.assign(tempObj,capyImage.old)
                break
            case this.stage = "adult":
                Object.assign(tempObj,capyImage.mid)
                break
            case this.stage = "young":
                Object.assign(tempObj,capyImage.young)
                break
        } */
        switch(true){
            case this.state === "bored":
                tempArr = tempObj.bored
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state === "hungry":
                tempArr = tempObj.hungry
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state === "normal":
                tempArr = tempObj.normal
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state === "tired":
                tempArr = tempObj.tired
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
            case this.state === "dead":
                tempArr = tempObj.dead
                return tempArr[Math.floor(Math.random()*tempArr.length)]
                break
        }
    }
    setImage(node,str)
    {   let tempstr = "images/capy_pics/" + str
        node.src=tempstr
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
        if (this.age >=0 && this.age < 2){
            this.stage=capyStage.young
        }
        else if(this.age >= 2 && this.age < 7){
            this.stage = capyStage.mid
        }
        else if(this.age >=7){
            this.stage = capyStage.old
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
    images:{
        capyPic: document.getElementById('capy-boi')
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
        domElements.images.capyPic.src="https://render.fineartamerica.com/images/rendered/square-product/small/images/artworkimages/mediumlarge/3/capybara-cabernet-will-bullas.jpg"
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
            
            this.animalObj.setImage(domElements.images.capyPic, this.animalObj.getImage())
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


