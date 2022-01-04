(function() {
  const tempos = []; 
  const content = document.querySelector('.content');
  iniciaPrograma()
  document.addEventListener('click',function (e){
    const el = e.target;
    if(el.classList.contains('chama-criador')){
      console.log('apertado');
      manipulaFundoPreto(true,content);
      content.appendChild(criaCriador());
    }
    if(el.classList.contains('cancelar-criar')){
      removeCriador();
      manipulaFundoPreto(false);
    }
    if(el.classList.contains('criar')){
      if(capturarTempos() == null) return null;
      removeCriador();
      manipulaFundoPreto(false);
      iniciaPrograma();
      console.log(tempos);
    }
    if(el.classList.contains('iniciar')){
      manipulaFundoPreto(true,content);
      content.appendChild(timerVisualizadorHTML())
      for (let i = 0; i < tempos.length; i++) {
        if(el.classList.contains(`id=${i}`)){
          const tempo = tempos[i];
          timer(tempo.tempo1,'t1',function () {
            timer(tempo.tempo2,'t2');
          });
        }
      }
    }
  })
  function iniciaPrograma() {
    let counter = 0;
    const divTimers = document.querySelector('.divTimers');
    divTimers.innerHTML = '';
    for (const obj of tempos) {
      divTimers.appendChild(obj.tempoHtml(counter));
      counter++;
    }
  }
  function timer(tempo, contador, callBack){
    const progresso = document.querySelector(`.${contador}`);
    if(tempo <= 0){
      removeTimerVisualizador();
      manipulaFundoPreto(false);
      return
    }
    let segundos = 0;
    const audio = new Audio('assets/audio/alarme.mp3');
    function minuto(seg){
        let minutos = seg/60;
        return minutos;
    }
    function seg(min) {
      let segundos = min*60;
      return segundos;
    }
    progresso.max = seg(tempo);
    progresso.value = 0;
    const timer = setInterval(function (){
        segundos++;
        console.log(segundos);
        progresso.value = segundos;
        if (tempo <= minuto(segundos)) {
            limpaInterval(timer);
            audio.play();
            if(callBack == null){
              removeTimerVisualizador();
              manipulaFundoPreto(false);
              return null
            }
            return callBack();
        }
    },1000);
    const limpaInterval = timer => clearInterval(timer);
}
  function capturarTempos() {
    const tempoUm = document.querySelector('.primeiro-tempo');
    const tempoDois = document.querySelector('.segundo-tempo');
    if (tempoUm.value <= 0) return null;
    tempos.push(criaTempo(Number(tempoUm.value),Number(tempoDois.value)));
    return true;
  }
  
})();