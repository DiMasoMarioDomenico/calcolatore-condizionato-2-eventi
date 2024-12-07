function calcola() {
    // Recupero input
    const importoPuntata = parseFloat(document.getElementById('importoPuntata').value) || 0;
    const quotaPuntata = parseFloat(document.getElementById('quotaPuntata').value) || 0;
    const quotaBanca = parseFloat(document.getElementById('quotaBanca').value) || 0;
    const commissioneBanca = parseFloat(document.getElementById('commissioneBanca').value) / 100 || 0;
    const importoBonus = parseFloat(document.getElementById('importoBonus').value) || 0;
    const quotaCond1 = parseFloat(document.getElementById('quotaCond1').value) || 0;
    const commissioneCond1 = parseFloat(document.getElementById('commissioneCond1').value) / 100 || 0;
    const quotaCond2 = parseFloat(document.getElementById('quotaCond2').value) || 0;
    const commissioneCond2 = parseFloat(document.getElementById('commissioneCond2').value) / 100 || 0;

    // Calcoli
    const banca = (importoPuntata * quotaPuntata) / (quotaBanca - commissioneBanca);
    const responsabilita = banca * (quotaBanca - 1);
    const bancaCond1 = importoBonus / (quotaCond1 - commissioneCond1);
    const responsabilitaCond1 = bancaCond1 * (quotaCond1 - 1);
    const bancaCond2 = importoBonus / (quotaCond2 - commissioneCond2);
    const responsabilitaCond2 = bancaCond2 * (quotaCond2 - 1);

    // Aggiorna risultati
    document.getElementById('banca').innerText = banca.toFixed(2);
    document.getElementById('responsabilita').innerText = responsabilita.toFixed(2);
    document.getElementById('bancaCond1').innerText = bancaCond1.toFixed(2);
    document.getElementById('responsabilitaCond1').innerText = responsabilitaCond1.toFixed(2);
    document.getElementById('bancaCond2').innerText = bancaCond2.toFixed(2);
    document.getElementById('responsabilitaCond2').innerText = responsabilitaCond2.toFixed(2);

    // Calcoli scenari
    const puntataVinceBetfair = -banca + responsabilitaCond1 + responsabilitaCond2;
    document.getElementById('puntataVinceBetfair').innerText = puntataVinceBetfair.toFixed(2);
    document.getElementById('puntataVinceTotale').innerText = (puntataVinceBetfair + banca).toFixed(2);
}
