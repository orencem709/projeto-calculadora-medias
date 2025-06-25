const form = document.getElementById('form-atividade');
const imgAprobado = '<img src="./images/aprovado.png" alt="Emoji Celebrando"';
const imgReprobado = '<img src="./images/reprovado.png" alt="Emoji Decepcionado"';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();        
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} ya foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}<td>`;
        linha += `<td>${inputNotaAtividade.value}<td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprobado : imgReprobado}<td>`; 
        linha += '</tr>';  
        linhas+= linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

};

function atualizaMediaFinal() {
    const mediaFinal = calculoMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
};

function calculoMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    };

    return somaDasNotas / notas.length;
}
