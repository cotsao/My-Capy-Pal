class CapyPal{
    constructor(){ 
        this.hungerLevel = 100
        this.happyLevel = 100
        this.sleepLevel = 100
        this.age = 0
        this.name =""
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
        capyPic: document.getElementById('capy-boi'),
        randImg: document.getElementById('rand-img')
    },
    boardDiv: document.getElementById('game-board'),
    scoreboard: document.getElementById('scoreboard'),
    buttonImages:{
        feed: ["feed/img (1).png", "feed/img (2).png","feed/img (3).png"],
        sleep: ["sleep/img (1).png", "sleep/img (2).png","sleep/img (3).png"],
        play: ["play/img (1).png", "play/img (2).png","play/img (3).png"]
    },
    hideEl: function(el){
        el.classList.add('hidden')
    },
    showEl: function(el){
        el.classList.remove('hidden')
    },
    randImage: function(parentDiv,arr){
        let divWidth = parentDiv.offsetWidth
        let divHeight = parentDiv.offsetHeight
        let tempStr = "images/button_pics/" + arr[Math.floor(Math.random()*arr.length)]
        let imgNode = document.createElement('img')
        parentDiv.appendChild(imgNode)
        imgNode.src = tempStr
        imgNode.classList.add('fadein')
        imgNode.classList.add('rand-img')
        imgNode.style.top = Math.floor((Math.random()*divHeight)/2) +"px"
        imgNode.style.left = Math.floor((Math.random()*divWidth)/2)+"px"
        setTimeout(() => {
            imgNode.remove()
        }, (2000));
       
        
      /*   setTimeout(function(){
            node.classList.remove('fadein')
            node.classList.add('fadeout')
            
        }, 1000)
        setTimeout(function(){
            node.classList.remove('fadeout')
            node.classList.add('fadein')
        },1000) */
        /* let tempstr = "images/capy_pics/" + str
        node.src=tempstr */
    }
}

class Game{
    constructor(aniObj){
        this.count = 0
        this.animalObj = aniObj
    }
    resetGame(){
        this.animalObj.hungerLevel = ""
        this.animalObj.sleepLevel = ""
        this.animalObj.happyLevel = ""  
        this.animalObj.age = 0  
        this.count =0
        domElements.meters.hungerMeter.value=this.animalObj.hungerLevel
        domElements.meters.sleepMeter.value=this.animalObj.sleepLevel
        domElements.meters.happyMeter.value=this.animalObj.happyLevel
        domElements.values.hungerVal.textContent = this.animalObj.hungerLevel
        domElements.values.sleepVal.textContent =this.animalObj.sleepLevel
        domElements.values.happyVal.textContent =this.animalObj.happyLevel
        domElements.values.ageVal.textContent= this.animalObj.age
        this.animalObj=null
    }
    startGame(){
        this.animalObj.hungerDrain()
        this.animalObj.sleepDrain()
        this.animalObj.happyDrain()
        domElements.showEl(domElements.images.capyPic)
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
            this.animalObj.name = newName
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


//todo

const typeGame = { 
    wordNode: document.getElementById("hunger-word"),
    typed: null,
    wordList: ["handle","theory","length","calm","likely","not","about","face","child","strong","map","asleep","spoken","smoke","rush","list","sale","discover","cry","indeed",
    "vessels","men","brought","everyone","health","pig","combine","goose","driving","distant","folks","suddenly","passage","saved","pack","watch","queen","useful","draw","mighty",
    "unless","skill","deep","is","special","fully","lower","paragraph","canal","terrible","floating","throughout","strike","eaten","cave","officer","of","subject","said","powerful",
    "establish","total","heading","cabin","poet","shelf","stock","then","settle","ranch","table","hurt","blue","chain","original","drawn","service","refused","bow","pie",
    "best","beyond","any","me","nearer","laugh","late","bent","large","graph","garage","thank","sort","blood","definition","being","struck","solid","play","heart",
    "near","ocean","cowboy","same","everybody","dangerous","married","purple","mixture","know","up","related","important","way","came","crop","castle","cotton","raise","lack",
    "rain","liquid","not","running","example","younger","pilot","bottle","size","shot","recent","studying","correct","experience","warm","thus","discuss","can","flame","person",
    "might","hardly","pretty","structure","clear","who","around","better","queen","trunk","hang","unknown","stems","widely","old","gun","unhappy","muscle","but","grow",
    "find","wall","announced","carried","eight","disease","measure","touch","ride","crop","least","letter","space","bad","apartment","shinning","fighting","least","citizen","has",
    "tune","earth","applied","appropriate","fruit","conversation","line","studying","oldest","being","love","tin","obtain","shells","citizen","repeat","swept","city","threw","record",
    "frequently","done","clean","husband","offer","smallest","exact","instant","journey","citizen","tax","balance","piano","protection","badly","brain","modern","cry","knife","character",
    "gather","rope","tonight","rear","environment","poor","coffee","war","leather","broken","vessels","begun","gave","aware","tired","chain","road","jungle","evidence","farther",
    "variety","avoid","research","forget","mill","tube","school","shore","receive","habit","tube","carefully","build","clothing","weather","view","rest","solution","alive","tree",
    "review","applied","quite","plenty","kill","anything","west","examine","paper","closer","occur","molecular","tin","catch","putting","job","caught","memory","modern","graph",
    "model","directly","familiar","positive","grandfather","sides","from","became","several","separate","reason","knowledge","verb","mainly","molecular","on","negative","closely","mental","carried",
    "palace","ranch","wore","combine","people","street","theory","salt","studying","immediately","union","consist","missing","saved","tired","market","coal","doubt","wind","remarkable",
    "grow","blew","kill","shallow","cutting","theory","perfect","between","feet","recall","pull","hurt","especially","draw","dog","future","scared","cast","ball","atomic",
    "believed","ranch","wagon","fireplace","longer","again","region","or","these","paint","observe","circus","available","cage","atom","officer","recent","moon","water","engineer",
    "planet","sister","establish","riding","watch","warm","war","purpose","column","facing","herd","private","war","type","front","dried","electric","many","climate","beginning",
    "bit","money","dot","clock","compound","see","pour","follow","dark","period","voyage","fur","standard","chief","reach","fill","suddenly","sentence","excited","shake",
    "seen","wool","point","brush","line","cloud","at","ready","greatly","learn","save","comfortable","then","she","particularly","truth","cutting","arrange","future","term"],
    wordArray: null,
    chars: null,
    getWord: function (){
        this.wordArray = this.wordList[Math.floor( Math.random()*this.wordList.length)].split("")
        for (let i = 0; i < this.wordArray.length; i++){
            let wordSpan = document.createElement("span")
            wordSpan.classList.add("char")
            wordSpan.textContent = this.wordArray[i]
            this.wordNode.appendChild(wordSpan)
        }
        chars = document.getElementsByClassName("char")
    },
    typeWord: function(e){
        const key = e.key
        for (let i = 0; i < this.chars.length; i++){
            if (this.chars[i].textContent === key){ //if keypress matchs char[i]
                if(this.chars[i].classList.contains("highlight") === true){ //skip if contains
                    continue
                }
                else if (this.chars[i].classList.contains("highlight") === false) // includes keys not in order
                {
                    this.chars[i].classList.add("highlight")
                    break
                }
            }
        }
        let checker = 0
        for (let i = 0; i < this.chars.length;i++)
        {
            if (this.chars[i].classList.contains("highlight"))
            checker++
        }
        if (checker === this.chars.length)
        {
            //add bar, sticker animation
            for (let i =0; i<this.chars.length; i++)
            {
                console.log("wow")
                this.chars[i].remove()
            }
            
        }

    }

}
window.addEventListener("keydown",typeGame.typeWord)

console.log(typeGame.getWord())

//#region 
let newCapyPal = null
let newGame = null
let capyName = null
let capyAge = null
domElements.nameDiv.nameButtonEl.addEventListener('click', function(){
    newCapyPal = new CapyPal()
    newGame = new Game(newCapyPal)
    
    if(newGame.createChar(capyName)){
        newGame.startGame()
    }
})
domElements.buttons.addHunger.addEventListener('click', function(){
    newCapyPal.feed()
    domElements.randImage(domElements.boardDiv, domElements.buttonImages.feed)
})
domElements.buttons.addSleep.addEventListener('click',function(){
    newCapyPal.sleep()
    domElements.randImage(domElements.boardDiv, domElements.buttonImages.sleep)
})
domElements.buttons.addHappy.addEventListener('click',function(){
    newCapyPal.play()
    domElements.randImage(domElements.boardDiv, domElements.buttonImages.play)
})
domElements.deathDiv.resetBut.addEventListener('click', function(){
    domElements.showEl(domElements.scoreboard)
    capyAge = newCapyPal.age
    capyName = newCapyPal.name
    const newScore = document.createElement('p')    
    newScore.textContent = "you raised " + capyName + " until age " + capyAge
    domElements.scoreboard.appendChild(newScore)
    newGame.resetGame()    
    domElements.showEl(domElements.nameDiv.inputEl)
    domElements.hideEl(domElements.nameDiv.header) 
    domElements.hideEl(domElements.images.capyPic)
    //  newGame.startGame()
    domElements.hideEl(domElements.deathDiv.deathEl)
})
//#endregion


