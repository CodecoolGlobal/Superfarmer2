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
    setTimeout(() => (this.className = 'invisible'), 0);
    console.log('start');
}

function dragEnd(){
    this.className = 'own-animal';
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
    this.className = 'holder';
    console.log('leave');
}

function drop(){
    this.className = 'holder';
    for (const ownAnimal of ownAnimals){
        this.append(ownAnimal);
    }
    console.log('drop');
}