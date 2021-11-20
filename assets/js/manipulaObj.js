function criaTempo(t1,t2) {
    return{
        tempo1:t1,
        tempo2:t2,
        tempoHtml(conter){
            const card = criaTag('div');
            const temp1 = criaTag('p');
            const temp2 = criaTag('p');
            card.classList.add('card');
            card.classList.add('card-tempo');
            const iniciar = criaButton('iniciar','button','btn','btn-outline-dark',`id=${conter}`,'iniciar');
            temp1.innerText = `tempo1: ${this.tempo1}`;
            temp2.innerText = `tempo2: ${this.tempo2}`;
            card.appendChild(temp1);
            card.appendChild(temp2);
            card.appendChild(iniciar);
            return card;
        },
        timer(tempo){
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
                    limpaInterval(timer)
                    audio.play();
                }
            },1000);
            const limpaInterval = timer => clearInterval(timer);
        },
        
        iniciaTimer(){
            this.timer(this.tempo1);
        }
    }
}