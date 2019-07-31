const dice1 = ['rabbit', 'rabbit', 'rabbit', 'rabbit', 'pig', 'fox', 'rabbit', 'rabbit', 'pig', 'sheep', 'sheep', 'horse'];
const dice2 = ['cow', 'pig', 'sheep', 'rabbit', 'rabbit', 'rabbit', 'wolf', 'rabbit', 'rabbit', 'rabbit', 'sheep', 'sheep'];


const buttonEvents = function (bank, user1, user2) {
    document.getElementById("done-button").disabled = true;
    document.getElementById("done-button").addEventListener("click", endTurn);
    document.getElementById("dice_button").addEventListener("click", startTurn);

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
};

const main = function() {
    var bank = {'rabbit': 60, 'sheep': 14, 'pig': 20, 'cow': 12, 'horse': 6, 'small_dog': 4, 'big_dog': 2};
    var user1 = {'rabbit': 0, 'sheep': 0, 'pig': 0, 'cow': 0, 'horse': 0, 'small_dog': 0, 'big_dog': 0};
    var user2 = {'rabbit': 0, 'sheep': 0, 'pig': 0, 'cow': 0, 'horse': 0, 'small_dog': 0, 'big_dog': 0};
    buttonEvents(bank, user1, user2);
};


function rollDice()  {
    var diceRoll1 = Math.floor(Math.random() * 12);
    var diceRoll2 = Math.floor(Math.random() * 12);
    var diceImgName1 = dice1[diceRoll1];
    var diceImgName2 = dice2[diceRoll2];
    document.getElementById("dice_img_1").innerHTML = `<img src='/static/images/${diceImgName1}.png' width="100px">`;
    document.getElementById("dice_img_2").innerHTML = `<img src='/static/images/${diceImgName2}.png' width="100px">`;
    document.getElementById("dice_button").disabled = true;
    return [diceImgName1, diceImgName2];
};


function stockInflux(bank, user) {

}

const stockGrowth = function(bank, user) {

    for (animal of user) {
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
    user = document.getElementById("done_button");
    if (user.classList.contains("user1")) {return 'user1'}
    else if (user.classList.contains("user2")) {return 'user2'}
};

function switchUser() {
    user = document.getElementById("done_button");
    turn = whichUser();
    if (turn === 'user1') {user.classList.replace('user1', 'user2')}
    else if (turn === 'user2') {user.classList.replace('user2', 'user1')}
};

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

const endTurn = function(){

};

window.addEventListener('load', main);


const marketAnimals = document.querySelectorAll('.market-animal');
const ownAnimals = document.querySelectorAll('.own-animal');
console.log(marketAnimals);
console.log(ownAnimals);

for (const ownAnimal of ownAnimals) {
    console.log(ownAnimal);
    ownAnimal.addEventListener('dragstart', dragStart);
    ownAnimal.addEventListener('dragend', dragEnd);
}
for (const marketAnimal of marketAnimals){
    console.log(marketAnimal);
    marketAnimal.addEventListener('dragover', dragOver);
    marketAnimal.addEventListener('dragenter', dragEnter);
    marketAnimal.addEventListener('dragleave', dragLeave);
    marketAnimal.addEventListener('drop', drop);
}



function dragStart(){
    this.className += ' held';
    setTimeout(() => (this.className = 'own-animal-inactive'), 0);
    console.log('start');
}

function dragEnd(){
    this.className = 'own-animal-inactive';
    console.log('end');
}

function dragOver(e){
    e.preventDefault();
    console.log('over');
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
    console.log('enter');
}

function dragLeave(){
    this.className = 'market-animal';
    console.log('leave');
}

function drop(){
    this.className += ' active';
    console.log('drop');
}

