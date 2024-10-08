
function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}


function rolarDados() {
    let dado1 = rolarDado();
    let dado2 = rolarDado();
    return dado1 + dado2;
}


function jogarCraps() {
    let primeiroLancamento = rolarDados();
    console.log(`Você rolou: ${primeiroLancamento}`);

    
    if (primeiroLancamento === 7 || primeiroLancamento === 11) {
        console.log("Natural! Você ganhou!");
    } else if (primeiroLancamento === 2 || primeiroLancamento === 3 || primeiroLancamento === 12) {
        console.log("Craps! Você perdeu!");
    } else {
      
        let ponto = primeiroLancamento;
        console.log(`Seu ponto é: ${ponto}. Agora você precisa rolar ${ponto} novamente para ganhar. Mas se tirar 7, você perde.`);

        
        let novoLancamento;
        do {
            novoLancamento = rolarDados();
            console.log(`Você rolou: ${novoLancamento}`);
            if (novoLancamento === ponto) {
                console.log("Você tirou seu Ponto! Você ganhou!");
                return;
            } else if (novoLancamento === 7) {
                console.log("Você tirou 7! Você perdeu!");
                return;
            }
        } while (true);
    }
}


jogarCraps();
