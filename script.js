window.onload = function() {
    const img = document.getElementById('logo');
    const elemento = document.getElementById('dados');
    const elemento1 = document.getElementById('res');
    elemento.style.fontWeight = 'bold';
    elemento1.style.fontWeight = 'bold';

    function limpar() {
        const hz40 = document.getElementById('hz40');
        const constantek = document.getElementById('constantek');

        hz40.value = ''; 
        constantek.value = ''; 

        hz40.disabled = false; 
        constantek.disabled = false; 
        elemento1.innerHTML = 'Preparando o Resultado...';
    }

    function handleInputChange(input) {
        const hz40 = document.getElementById('hz40');
        const constantek = document.getElementById('constantek');

        if (input === hz40) {
            constantek.disabled = true;
            hz40.disabled = false;
        } else if (input === constantek) {
            hz40.disabled = true;
            constantek.disabled = false;
        }

        
        if (input.value.trim() === '') {
            hz40.disabled = false;
            constantek.disabled = false;
        }
    }

    function calcular() {
        const hz40i = Number(document.getElementById('hz40').value);
        const constanteki = Number(document.getElementById('constantek').value);
        const hzemcont = hz40i / 0.011125;
        const contemhz = constanteki * 0.011125;
        const vel50hz = ((hz40i * 50) / 40).toFixed(2);
        const vel60hz = ((hz40i * 60) / 40).toFixed(2);

        if (!isNaN(hz40i) && !isNaN(constanteki) && hz40i > 0) {
            elemento1.innerHTML = `
                Resultado:<br>
                50 Km/h: ${vel50hz} Hz.<br>
                60 Km/h: ${vel60hz} Hz.<br>
                K: ${hzemcont}<br>`;
        } else {
            const hz40praK = constanteki * 0.011125;
            const vel50hz = ((hz40praK * 50) / 40).toFixed(2);
            const vel60hz = ((hz40praK * 60) / 40).toFixed(2);
            elemento1.innerHTML = `
                Resultado:<br>
                Constante (K): ${constanteki}<br>
                50 Km/h: ${vel50hz} Hz.<br>
                60 Km/h: ${vel60hz} Hz.<br>`;
        }

        img.src = 'logo.png';
    }

    document.getElementById('hz40').oninput = function() { handleInputChange(this); };
    document.getElementById('constantek').oninput = function() { handleInputChange(this); };
    document.querySelector('input[value="Calcular✔️"]').onclick = calcular;
    document.querySelector('input[value="Limpar🧹"]').onclick = limpar;
}
