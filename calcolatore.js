function calcola() {
    const importoPuntata = parseFloat(document.getElementById('importoPuntata').value) || 0;
    const quotaPuntata = parseFloat(document.getElementById('quotaPuntata').value) || 0;
    const quotaBanca = parseFloat(document.getElementById('quotaBanca').value) || 0;
    const commissioneBanca = parseFloat(document.getElementById('commissioneBanca').value) / 100 || 0;
    const importoBonus = parseFloat(document.getElementById('importoBonus').value) || 0;
    const quotaCond1 = parseFloat(document.getElementById('quotaCond1').value) || 0;
    const commissioneCond1 = parseFloat(document.getElementById('commissioneCond1').value) / 100 || 0;
    const quotaCond2 = parseFloat(document.getElementById('quotaCond2').value) || 0;
    const commissioneCond2 = parseFloat(document.getElementById('commissioneCond2').value) / 100 || 0;

    // Calcoli principali
    const banca = (importoPuntata * quotaPuntata) / (quotaBanca - commissioneBanca);
    const responsabilita = banca * (quotaBanca - 1);

    const bancaCond1 = importoBonus / (quotaCond1 - commissioneCond1);
    const responsabilitaCond1 = bancaCond1 * (quotaCond1 - 1);

    const bancaCond2 = importoBonus / (quotaCond2 - commissioneCond2);
    const responsabilitaCond2 = bancaCond2 * (quotaCond2 - 1);

    // Calcoli per "Puntata Vince, Condizioni No"
    const puntataVinceBookmaker = importoPuntata * (quotaPuntata - 1);
    const puntataVinceBetfair =
        -responsabilita +
        bancaCond1 * (1 - commissioneCond1) +
        bancaCond2 * (1 - commissioneCond2);
    const puntataVinceTotale = puntataVinceBookmaker + puntataVinceBetfair;

    // Calcoli per "Bancata Vince, Condizione 1 Sì e Condizione 2 No"
    const cond1Bookmaker = importoBonus - importoPuntata;
    const cond1Betfair =
        banca * (1 - commissioneBanca) +
        bancaCond2 * (1 - commissioneCond2) -
        responsabilitaCond1;
    const cond1Totale = cond1Bookmaker + cond1Betfair;

    // Calcoli per "Bancata Vince, Condizione 1 No e Condizione 2 Sì"
    const cond2Bookmaker = importoBonus - importoPuntata;
    const cond2Betfair =
        banca * (1 - commissioneBanca) +
        bancaCond1 * (1 - commissioneCond1) -
        responsabilitaCond2;
    const cond2Totale = cond2Bookmaker + cond2Betfair;

    // Calcoli per "Bancata Vince, Condizioni No"
    const condNoBookmaker = -importoPuntata;
    const condNoBetfair =
        banca * (1 - commissioneBanca) +
        bancaCond1 * (1 - commissioneCond1) +
        bancaCond2 * (1 - commissioneCond2);
    const condNoTotale = condNoBookmaker + condNoBetfair;

    // Aggiorna riga "Puntata Vince, Condizioni No"
    document.getElementById('puntataVinceBookmaker').innerText = puntataVinceBookmaker.toFixed(2);
    document.getElementById('puntataVinceBetfair').innerText = puntataVinceBetfair.toFixed(2);
    document.getElementById('puntataVinceTotale').innerText = puntataVinceTotale.toFixed(2);

    // Aggiorna riga "Bancata Vince, Condizione 1 Sì e Condizione 2 No"
    document.getElementById('cond1Bookmaker').innerText = cond1Bookmaker.toFixed(2);
    document.getElementById('cond1Betfair').innerText = cond1Betfair.toFixed(2);
    document.getElementById('cond1Totale').innerText = cond1Totale.toFixed(2);

    // Aggiorna riga "Bancata Vince, Condizione 1 No e Condizione 2 Sì"
    document.getElementById('cond2Bookmaker').innerText = cond2Bookmaker.toFixed(2);
    document.getElementById('cond2Betfair').innerText = cond2Betfair.toFixed(2);
    document.getElementById('cond2Totale').innerText = cond2Totale.toFixed(2);

    // Aggiorna riga "Bancata Vince, Condizioni No"
    document.getElementById('condNoBookmaker').innerText = condNoBookmaker.toFixed(2);
    document.getElementById('condNoBetfair').innerText = condNoBetfair.toFixed(2);
    document.getElementById('condNoTotale').innerText = condNoTotale.toFixed(2);

    // Aggiorna tabella Banca e Responsabilità
    document.getElementById('banca').innerText = banca.toFixed(2);
    document.getElementById('responsabilita').innerText = responsabilita.toFixed(2);
    document.getElementById('bancaCond1').innerText = bancaCond1.toFixed(2);
    document.getElementById('responsabilitaCond1').innerText = responsabilitaCond1.toFixed(2);
    document.getElementById('bancaCond2').innerText = bancaCond2.toFixed(2);
    document.getElementById('responsabilitaCond2').innerText = responsabilitaCond2.toFixed(2);
}
