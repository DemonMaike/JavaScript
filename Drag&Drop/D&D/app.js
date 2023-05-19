const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragOver);
    placeholder.addEventListener('dragenter', dragEnter);
    placeholder.addEventListener('dragleave', dragLeave);
    placeholder.addEventListener('drop', drop);
}

function dragStart(event) {
    console.log('drag start', event.target);
    event.target.classList.add('hold');
    setTimeout(()=>event.target.classList.add('hide'),0);

}

function dragEnd(event) {
    console.log('drag end');
    event.target.classList.remove('hold', 'hide');

}

function dragOver (event) {
    event.preventDefault();
    console.log('drag over');

}

function dragEnter (event) {
    console.log('drag enter');
    event.target.classList.add('hovered');
}

function dragLeave (event) {
    console.log('drag leave');
    event.target.classList.remove('hovered');
}

function drop (event) {
    console.log('drop');
    event.target.append(item);
    event.target.classList.remove('hovered');
}