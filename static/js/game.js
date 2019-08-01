const dice1 = ['rabbit', 'rabbit', 'rabbit', 'rabbit', 'pig', 'fox', 'rabbit', 'rabbit', 'pig', 'sheep', 'sheep', 'horse'];
const dice2 = ['cow', 'pig', 'sheep', 'rabbit', 'rabbit', 'rabbit', 'wolf', 'rabbit', 'rabbit', 'rabbit', 'sheep', 'sheep'];


const buttonEvents = function (bank, user1, user2) {
    document.getElementById("done-button").disabled = false;
    document.getElementById("done-button").addEventListener("click", function () {endTurn(bank, user1, user2);});
    document.getElementById("dice-button").addEventListener("click", function () {startTurn(bank, user1, user2);});
    showValues(bank, user1, user2);

};

function showValues(bank, user1, user2){
    console.log("showValues function user1 check:", user1);
    console.log("showValues function user2 check:", user2);
    user1Rabbit = document.getElementById("user1-rabbit");
    user1Rabbit.innerHTML=user1.rabbit;
    user1Sheep = document.getElementById("user1-sheep");
    user1Sheep .innerHTML=user1.sheep;
    user1Pig = document.getElementById("user1-pig");
    user1Pig.innerHTML=user1.pig;
    user1Cow = document.getElementById("user1-cow");
    user1Cow.innerHTML=user1.cow;
    user1Horse = document.getElementById("user1-horse");
    user1Horse.innerHTML=user1.horse;
    user1SmallDog = document.getElementById("user1-small-dog");
    user1SmallDog.innerHTML=user1.small_dog;
    user1RBigDog = document.getElementById("user1-big-dog");
    user1RBigDog.innerHTML=user1.big_dog;
    user2Rabbit = document.getElementById("user2-rabbit");
    user2Rabbit.innerHTML=user2.rabbit;
    user2Sheep = document.getElementById("user2-sheep");
    user2Sheep .innerHTML=user2.sheep;
    user2Pig = document.getElementById("user2-pig");
    user2Pig.innerHTML=user2.pig;
    user2Cow = document.getElementById("user2-cow");
    user2Cow.innerHTML=user2.cow;
    user2Horse = document.getElementById("user2-horse");
    user2Horse.innerHTML=user2.horse;
    user2SmallDog = document.getElementById("user2-small-dog");
    user2SmallDog.innerHTML=user2.small_dog;
    user2RBigDog = document.getElementById("user2-big-dog");
    user2RBigDog.innerHTML=user2.big_dog;
    bankRabbitNr = document.getElementById("bank-rabbit-nr");
    bankRabbitNr.textContent = bank.rabbit;
    bankSheepNr = document.getElementById("bank-sheep-nr");
    bankSheepNr.innerHTML = bank.sheep;
    bankPigNr = document.getElementById("bank-pig-nr");
    bankPigNr.innerHTML = bank.pig;
    bankCowNr = document.getElementById("bank-cow-nr");
    bankCowNr.innerHTML = bank.cow;
    bankHorseNr = document.getElementById("bank-horse-nr");
    bankHorseNr.innerHTML = bank.horse;
}

const main = function() {
    var bank = {'rabbit': 60, 'sheep': 14, 'pig': 20, 'cow': 12, 'horse': 6, 'small_dog': 4, 'big_dog': 2};
    var user1 = {'rabbit': 0, 'sheep': 0, 'pig': 0, 'cow': 0, 'horse': 0, 'small_dog': 0, 'big_dog': 0};
    var user2 = {'rabbit': 0, 'sheep': 0, 'pig': 0, 'cow': 0, 'horse': 0, 'small_dog': 0, 'big_dog': 0};
    showValues(bank, user1, user2);
    buttonEvents(bank, user1, user2);
};


function rollDice()  {
    var diceRoll1 = Math.floor(Math.random() * 12);
    var diceRoll2 = Math.floor(Math.random() * 12);
    var diceImgName1 = dice1[diceRoll1];
    var diceImgName2 = dice2[diceRoll2];
    document.getElementById("dice_img_1").innerHTML = `<img src='/static/images/${diceImgName1}.png' width="100px">`;
    document.getElementById("dice_img_2").innerHTML = `<img src='/static/images/${diceImgName2}.png' width="100px">`;
    document.getElementById("dice-button").disabled = true;
    return [diceImgName1, diceImgName2];
};


function stockInflux(bank, user) {

}

const stockGrowth = function(bank, user) {
    console.log("in stockGrowth function the received stock is:", user);
    for (const animal of Object.keys(user)) {
    offsprings = Math.floor(user[animal] / 2);
    if (offsprings <= bank.animal) {
        user[animal] = user[animal] + offsprings;
        bank.animal = bank.animal - offsprings;
    } else {
        growth = bank.animal;
        user[animal] = user[animal] + growth;
        bank.animal = 0;
    }
}
};

function whichUser() {
    user = document.getElementById("done-button");
    if (user.classList.contains("user1")){
        console.log("which user function says it is: user1")
        return 'user1';
    } else if (user.classList.contains("user2")){
        console.log("which user function says it is: user2")
        return 'user2';
    }
}

function switchUser() {
    user = document.getElementById("done-button");
    var turn = whichUser();
    console.log("in the beg of switchUser function the current user is", user);
    if (turn === 'user1'){
        user.classList.replace('user1', 'user2')
    } else if (turn === 'user2'){
        user.classList.replace('user2', 'user1')
    }
    var newturn = whichUser();
    console.log("in switchUser function, after switching is done", newturn)
}

const startTurn =function(bank, user1, user2) {
    let diceResult = rollDice();
    user = whichUser();

    if (user==="user1") {
        stockInflux(diceResult, bank, user1);
        stockGrowth(bank, user1)}
    if (user==="user2") {
        stockInflux(diceResult, bank, user2);
        stockGrowth(bank, user2)}
    document.getElementById("done-button").disabled = false;
};

const winCheck = function(user1, user2){
   if (user1.sheep > 0 && user1.horse > 0 && user1.cow > 0 && user1.pig > 0 && user1.rabbit>0 && user2.sheep > 0 && user2.horse > 0 && user2.cow > 0 && user2.pig > 0 && user2.rabbit>0) {
      document.getElementById("done-button").disabled = true;
      document.getElementById("dice-button").disabled = true;
      alert('Congratulations, it is a draw!')
    }
    else if (user1.sheep > 0 && user1.horse > 0 && user1.cow > 0 && user1.pig > 0 && user1.rabbit>0) {
       document.getElementById("done-button").disabled = true;
       document.getElementById("dice-button").disabled = true;
       alert('Congratulations, User1 won!')
    }
   else if (user2.sheep > 0 && user2.horse > 0 && user2.cow > 0 && user2.pig > 0 && user2.rabbit>0) {
       document.getElementById("done-button").disabled = true;
       document.getElementById("dice-button").disabled = true;
       alert('Congratulations, User2 won!')
    }
};

const endTurn = function(bank, user1, user2){
    let turn = whichUser();
    if (document.getElementById("6-rabbits").className === "market-animal hovered active"){
        bank.rabbit += 6;
        if (turn === 'user1'){
            user1.rabbit -= 6;
        } else {
            user2.rabbit -= 6;
        }
    } else if (document.getElementById("1-sheep").className === "market-animal hovered active"){
        bank.sheep += 1;
        if (turn === 'user1'){
            user1.sheep -= 1;
        } else {
            user2.sheep -= 1;
        }
    } else if (document.getElementById("2-sheeps").className === "market-animal hovered active"){
        bank.sheep += 2;
        if (turn === 'user1'){
            user1.sheep -= 2;
        } else {
            user2.sheep -= 2;
        }
    } else if (document.getElementById("1-pig").className === "market-animal hovered active"){
        bank.pig += 1;
        if (turn === 'user1'){
            user1.pig -= 1;
        } else {
            user2.pig -= 1;
        }
    } else if (document.getElementById("3-pigs").className === "market-animal hovered active"){
        bank.pig += 3;
        if (turn === 'user1'){
            user1.pig -= 3;
        } else {
            user2.pig -= 3;
        }
    } else if (document.getElementById("1-cow").className === "market-animal hovered active"){
        bank.cow += 1;
        if (turn === 'user1'){
            user1.cow -= 1;
        } else {
            user2.cow -= 1;
        }
    } else if (document.getElementById("2-cows").className === "market-animal hovered active"){
        bank.cow += 2;
        if (turn === 'user1'){
            user1.cow -= 2;
        } else {
            user2.cow -= 2;
        }
    } else if (document.getElementById("1-horse").className === "market-animal hovered active"){
        bank.horse += 1;
        if (turn === 'user1'){
            user1.horse -= 1;
        } else {
            user2.horse -= 1;
        }
    } else if (document.getElementById("1-sheep-vs-dog").className === "market-animal hovered active"){
        bank.sheep += 1;
        if (turn === 'user1'){
            user1.sheep -= 1;
        } else {
            user2.sheep -= 1;
        }
    } else if (document.getElementById("1-small-dog").className === "market-animal hovered active"){
        bank.small_dog += 1;
        if (turn === 'user1'){
            user1.small_dog -= 1;
        } else {
            user2.small_dog -= 1;
        }
    } else if (document.getElementById("1-cow-vs-dog").className === "market-animal hovered active"){
        bank.cow += 1;
        if (turn === 'user1'){
            user1.cow -= 1;
        } else {
            user2.cow -= 1;
        }
    } else if (document.getElementById("1-big-dog").className === "market-animal hovered active"){
        bank.big_dog += 1;
        if (turn === 'user1'){
            user1.big_dog -= 1;
        } else {
            user2.big_dog -= 1;
        }
    }
    const marketAnimals = document.querySelectorAll('.market-animal');
    for (marketAnimal of marketAnimals){
        marketAnimal.className = "market-animal";
    }

    showValues(bank, user1,  user2);
    turn = whichUser();
    if (turn === 'user2') {
        winCheck(user1, user2)
    }
    document.getElementById("done-button").disabled = true;
    switchUser();
    document.getElementById("dice-button").disabled = false;
};

window.addEventListener('load', main);


const marketAnimals = document.querySelectorAll('.market-animal');
const ownAnimals = document.querySelectorAll('.own-animal');

for (const ownAnimal of ownAnimals) {
    ownAnimal.addEventListener('dragstart', dragStart);
    ownAnimal.addEventListener('dragend', dragEnd);
}
for (const marketAnimal of marketAnimals){
    marketAnimal.addEventListener('dragover', dragOver);
    marketAnimal.addEventListener('dragenter', dragEnter);
    marketAnimal.addEventListener('dragleave', dragLeave);
    marketAnimal.addEventListener('drop', drop);
}

function dragStart(){
    this.className += ' held';
    setTimeout(() => (this.className = 'own-animal-inactive'), 0);

}

function dragEnd(){
    this.className = 'own-animal-inactive';

}

function dragOver(e){
    e.preventDefault();

}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';

}

function dragLeave(){
    this.className = 'market-animal';

}

function drop(){
    this.className += ' active';

}

