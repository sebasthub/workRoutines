(function() {
  const tempos = []; 
  const content = document.querySelector('.content');
  iniciaPrograma()
  document.addEventListener('click',function (e){ //geito correto de se usar botões
    const el = e.target;
    if(el.classList.contains('chama-criador')){
      console.log('apertado');
      content.innerHTML = '';
      content.appendChild(criaCriador());
    }
    if(el.classList.contains('cancelar-criar')){
      removeCriador();
      iniciaPrograma();
    }
    if(el.classList.contains('criar')){
      capturarTempos();
      removeCriador();
      iniciaPrograma();
      console.log(tempos);
    }
    if(el.classList.contains('iniciar')){
      for (let i = 0; i < tempos.length; i++) {
        if(el.classList.contains(`id=${i}`)){
          const tempo = tempos[i];
          tempo.iniciaTimer();
        }
      }
    }
  })
  function iniciaPrograma() {
    let counter = 0;
    for (const obj of tempos) {
      content.appendChild(obj.tempoHtml(counter));
      counter++;
    }
  }
  function capturarTempos() {
    const tempoUm = document.querySelector('.primeiro-tempo');
    const tempoDois = document.querySelector('.segundo-tempo');
    tempos.push(criaTempo(Number(tempoUm.value),Number(tempoDois.value)));
  }
})();
