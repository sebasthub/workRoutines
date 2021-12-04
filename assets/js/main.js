(function() {
  const tempos = []; 
  const content = document.querySelector('.content');
  iniciaPrograma()
  document.addEventListener('click',function (e){
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
          timer(tempo.tempo1,function () {
            timer(tempo.tempo2);
          });
        }
      }
    }
  })
  function iniciaPrograma() {
    let counter = 0;
    const divTimers = criaTag('div');
    divTimers.classList.add("divTimers");
    for (const obj of tempos) {
      divTimers.appendChild(obj.tempoHtml(counter));
      counter++;
    }
    content.appendChild(divTimers);
  }
  function timer(tempo, callBack){
    let segundos = 0;
    const audio = new Audio('assets/audio/alarme.mp3');
    function minuto(seg){
        let minutos = seg/60;
        return minutos;
    }
    const timer = setInterval(function (){
        segundos++;
        console.log(segundos);
        if (tempo <= minuto(segundos)) {
            limpaInterval(timer);
            audio.play();
            return funcao = !callBack ? null : callBack();
        }
    },1000);
    const limpaInterval = timer => clearInterval(timer);
}
  function capturarTempos() {
    const tempoUm = document.querySelector('.primeiro-tempo');
    const tempoDois = document.querySelector('.segundo-tempo');
    tempos.push(criaTempo(Number(tempoUm.value),Number(tempoDois.value)));
  }
  
})();