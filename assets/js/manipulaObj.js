function criaTempo(t1,t2) {
    return{
        tempo1:t1,
        tempo2:t2,
        tempoHtml(conter){
            const card = criaTag('div');
            const temp1 = criaTag('p');
            card.classList.add('card');
            card.classList.add('card-tempo');
            const iniciar = criaButton('iniciar','button','btn','btn-outline-dark',`id=${conter}`,'iniciar');
            temp1.innerText = `tempo1: ${this.tempo1} min`;
            card.appendChild(temp1);
            if(this.tempo2 > 0){
                const temp2 = criaTag('p');
                temp2.innerText = `tempo2: ${this.tempo2} min`;
                card.appendChild(temp2);
            }
            card.appendChild(iniciar);
            return card;
        }
    }
}