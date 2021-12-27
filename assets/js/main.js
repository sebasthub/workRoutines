(function() {
  const tempos = []; 
  const content = document.querySelector('.content');
  iniciaPrograma()
  document.addEventListener('click',function (e){
    const el = e.target;
    if(el.classList.contains('chama-criador')){
      console.log('apertado');
      content.appendChild(criaCriador());
    }
    if(el.classList.contains('cancelar-criar')){
      removeCriador();
      iniciaPrograma();
    }
    if(el.classList.contains('criar')){
      if(capturarTempos() == null) return null;
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
    const divTimers = document.querySelector('.divTimers');
    divTimers.innerHTML = '';
    for (const obj of tempos) {
      divTimers.appendChild(obj.tempoHtml(counter));
      counter++;
    }
  }
  function timer(tempo, callBack){
    if(tempo <= 0) return;
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
    if (tempoUm.value <= 0) return null;
    tempos.push(criaTempo(Number(tempoUm.value),Number(tempoDois.value)));
    return true;
  }
  
})();