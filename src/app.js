import { taskList } from "./tasks.js";

const doc = {
    cards: document.querySelector('#cards'),
    prevButton: document.querySelector('#prevButton'),
    nextButton: document.querySelector('#nextButton')
}

const state = {
    taskList: taskList,
    actTaskIndex: 0
}

renderCard(0);
handleButtons();

function handleButtons() {
    doc.prevButton.addEventListener('click', () => {
        startPrevButton();
    });
    doc.nextButton.addEventListener('click', () => {
        startNextButton();
    })
}

function startPrevButton() {
    if(state.actTaskIndex>0) {
        state.actTaskIndex--;
        renderCard(state.actTaskIndex);
    }
}

function startNextButton() {
    if(state.actTaskIndex < state.taskList.length -1) {
        state.actTaskIndex++;
        renderCard(state.actTaskIndex);
    }
}

function renderCard(index) {
    let div = document.createElement('div');
    div.classList = 'card m-2'
    div.innerHTML = `
        <div class="card-header">${taskList[index].question}</div>
        <div class="card-body">
        ${taskList[index].code}
        </div>
        <div class="card-footer">
        <ul class="list-group">
            <li class="list-group-item">
                a) ${taskList[index].answers[0]}
            </li>
            <li class="list-group-item">
                b) ${taskList[index].answers[1]}
            </li>
            <li class="list-group-item">
                c) ${taskList[index].answers[2]}
            </li>
            <li class="list-group-item">
                d) ${taskList[index].answers[3]}
            </li>
        </ul>
        </div>        
    `
    doc.cards.innerHTML = '';
    doc.cards.append(div);
}
