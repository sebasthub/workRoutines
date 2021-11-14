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