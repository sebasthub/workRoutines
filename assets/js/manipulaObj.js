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
        }
    }
}