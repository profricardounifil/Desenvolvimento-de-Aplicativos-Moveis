document.addEventListener('DOMContentLoaded', function () {
    const companyForm = document.getElementById('company-form');
    const empresaList = document.getElementById('empresa-list');

    companyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const linguagens = Array.from(document.getElementById('linguagens').selectedOptions).map(option => option.value);
        const multinacional = document.getElementById('multinacional').checked;

        const empresaItem = document.createElement('li');
        empresaItem.innerHTML = `
            <strong>Nome:</strong> ${nome}<br>
            <strong>Linguagens:</strong> ${linguagens.join(', ')}<br>
            <strong>Multinacional:</strong> ${multinacional ? 'Sim' : 'Não'}
        `;

        empresaList.appendChild(empresaItem);

        companyForm.reset();
    });
});
