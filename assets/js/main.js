(function() {
  const content = document.querySelector('.content');
  let user = load('usuario') != null ? load('usuario') : null;
  let tempos = buscarTempos(user.id) != null ? buscarTempos(user.id) : [];
  let trava = false;
  iniciaPrograma()
  document.addEventListener('click',function (e){
    const el = e.target;
    if(el.classList.contains('logar')){
      const usuario = document.querySelector('.usuario');
      const senha = document.querySelector('.senha');
      login(usuario.value+senha.value);
    }
    if(el.classList.contains('Chama-Login')){
      manipulaFundoPreto(true,content);
      content.appendChild(criaLogin());
    }
    if(el.classList.contains('chama-criador')){
      console.log('apertado');
      if(!trava){
        manipulaFundoPreto(true,content);
        content.appendChild(criaCriador());
      }
    }
    if(el.classList.contains('cancelar-criar')){
      removeCriador();
      manipulaFundoPreto(false);
    }
    if(el.classList.contains('cancelar-timer')) {
      window.location.href = "index.html";
    }
    if(el.classList.contains('criar')){
      console.log(tempos);
      if(capturarTempos() == null) return null;
      removeCriador();
      manipulaFundoPreto(false);
      iniciaPrograma();
      console.log(tempos);
    }
    if(el.classList.contains('iniciar')){
      trava = true;
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
    console.log(tempos);
    if (tempos){
      for (const obj of tempos) {
        divTimers.appendChild(tempoHtml(obj.nome,obj.tempo1,obj.tempo2,counter));
        counter++;
      }
    }
  }
  
  function timer(tempo, contador, callBack){
    const progresso = document.querySelector(`.${contador}`);
    if(tempo <= 0){
      removeTimerVisualizador();
      manipulaFundoPreto(false);
      trava = false;
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
              trava = false;
              console.log(trava);
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
    const nome = document.querySelector('.nome');
    const tempoUm = document.querySelector('.primeiro-tempo');
    const tempoDois = document.querySelector('.segundo-tempo');
    if (tempoUm.value <= 0) return null;
    tempos.push(criaTempo(nome.value,Number(tempoUm.value),Number(tempoDois.value)));
    postTempo(criaTempo(nome.value,Number(tempoUm.value),Number(tempoDois.value)));
    return true;
  }
  function save(id,salvo) {
    const item = JSON.stringify(salvo);
    localStorage.setItem(id, item);
  }
  function load(id) {
    try{
      const item = localStorage.getItem(id);
      return JSON.parse(item);
    }catch{
      return null;
    }
  }
  function criaTempo(nome,t1,t2) {
    return{
        nome:nome,
        tempo1:t1,
        tempo2:t2,
    }
  }
  function criaUser(id,usuario) {
    return{
        id:id,
        usuario:usuario,
    }
  }
function login(complemento){
  var url = `http://localhost:8080/usuarios/login/${complemento}`;//Sua URL

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();
  console.log(xhttp.responseText);
  let json = JSON.parse(xhttp.responseText);
  user = criaUser(json.id,json.usuario);
  save('usuario',user);
  window.location.href = "index.html";
}
function postTempo (tempo){
  var url = `http://localhost:8080/tempos`;
  tempo.idUsuario = user.id;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, false);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(JSON.stringify(tempo));
}
function buscarTempos(id) {
  var url = `http://localhost:8080/tempos/${id}`;//Sua URL

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();
  console.log(xhttp.responseText);
  let json = JSON.parse(xhttp.responseText);
  return json;
}
})();