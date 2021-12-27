function criaTag(tag) {
    return document.createElement(tag);
}
function criaCriador() {
    const criador = criaTag('div');
    const cardCriador = criaTag('div');
    const criarRotina = criaTag('h5');
    const inputs = criaTag('div');
    inputs.classList.add("inputs");
    criador.classList.add("criador");
    criador.classList.add("sobrepor");
    cardCriador.classList.add("card-criador");
    cardCriador.classList.add("card");
    criarRotina.innerText = 'criar rotina';
    inputs.appendChild(criaInput('primeiro tempo','primeiro-tempo','number'));
    inputs.appendChild(criaInput('segundo tempo','segundo-tempo','number'));
    inputs.appendChild(criaButton('criar','submit','btn','btn-outline-success','criar'));
    inputs.appendChild(criaButton('cancelar','submit','btn','btn-outline-danger','cancelar-criar'));
    cardCriador.appendChild(criarRotina);
    cardCriador.appendChild(inputs);
    criador.appendChild(cardCriador);
    return criador;
}
function removeCriador() {
    const criar = document.querySelector('.criador');
    criar.remove();
}
function timerVisualizadorHTML() {
  const timerDiv = criaTag('div');
  const timerCard = criaTag('div');
  const rotinaIniciada = criaTag('h5');
  const progresso = criaTag('div');
  //progresso.classList.add("progress");
  timerDiv.classList.add("timerDiv");
  timerDiv.classList.add("sobrepor");
  timerCard.classList.add("timer-card");
  timerCard.classList.add("card");
  rotinaIniciada.innerText = 'rotina iniciada';
  progresso.appendChild(criarProgessBar('t1'));
  progresso.appendChild(criarProgessBar('t2'));
  timerCard.appendChild(rotinaIniciada);
  timerCard.appendChild(progresso);
  timerDiv.appendChild(timerCard);
  return timerDiv;
}
function removeTimerVisualizador() {
  const timerDiv = document.querySelector('.timerDiv');
  timerDiv.remove();
}
function criaInput(nome,classe,tipo = 'text') {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const input = document.createElement('input');
    div.classList.add("input-group");
    div.classList.add("mb-3");
    span.classList.add("input-group-text");
    span.innerText = nome;
    input.type = tipo;
    input.classList.add('form-control');
    input.classList.add(classe);
    div.appendChild(span);
    div.appendChild(input);
    return div;
}
function criaButton(text,type,...clases) {
    const button = document.createElement('button');
    if(type) button.type = type;
    button.innerText = text;
    for (const classe of clases) {
        button.classList.add(classe);
    }
      return button;
}
function criarProgessBar(nome) {
  const div = criaTag('div');
  const progress = criaTag('progress');
  const pnome = criaTag('p');
  pnome.innerText = nome;
  progress.classList.add(`progresso`);
  progress.classList.add(nome);
  div.appendChild(pnome);
  div.appendChild(progress);
  return div;
}
/* estrutura do criador de timers
<div class="criador">
      <div class="card card-criador">
        <h5>criar rotina</h5>
        <div class="inputs">
          <div class="input-group mb-3">
            <span class="input-group-text">primeiro tempo</span>
            <input type="number" aria-label="First name" class="form-control">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">segundo tempo</span>
            <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
          </div>
          <button type="submit" class="btn btn-outline-success criar">criar</button>
          <button type="submit" class="btn btn-outline-danger cancelar">cancelar</button>
        </div>
      </div>
    </div>
*/