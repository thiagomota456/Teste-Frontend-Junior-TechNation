const notas = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/notas.json')
    .then(response => response.json())
    .then(data => {
        notas.push(...data);
        showNotes(notas);
    });
});

function showNotes(notes) {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    notes.forEach(note => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${note.pagador}</td>
        <td>${note.numeroNota}</td>
        <td>${note.dataEmissao}</td>
        <td>${note.dataCobranca}</td>
        <td>${note.dataPagamento}</td>
        <td>${note.valorNota}</td>
        <td>${note.documentoNotaFiscal}</td>
        <td>${note.documentoBoleto}</td>
        <td>${note.status}</td>
        `;
        notesList.appendChild(row);
    });
}

function filterNotes() {
    const monthEmission = document.getElementById('monthEmission').value;
    const monthBilling = document.getElementById('monthBilling').value;
    const monthPayment = document.getElementById('monthPayment').value;
    const status = document.getElementById('statusFilter').value;
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    const filteredNotes = notas.filter(note => {
        return (monthEmission === '' || note.dataEmissao.startsWith(`2023-${monthEmission}`)) &&
                (monthBilling === '' || note.dataCobranca.startsWith(`2023-${monthBilling}`)) &&
                (monthPayment === '' || note.dataPagamento.startsWith(`2023-${monthPayment}`)) &&
                (status === '' || note.status.toLowerCase() === status.toLowerCase()) &&
                (note.pagador.toLowerCase().includes(searchTerm) ||
                note.numeroNota.toLowerCase().includes(searchTerm) ||
                note.dataEmissao.includes(searchTerm) ||
                note.dataCobranca.includes(searchTerm) ||
                note.dataPagamento.includes(searchTerm) ||
                note.valorNota.toString().includes(searchTerm) ||
                note.documentoNotaFiscal.toLowerCase().includes(searchTerm) ||
                note.documentoBoleto.toLowerCase().includes(searchTerm) ||
                note.status.toLowerCase().includes(searchTerm));
    });

    showNotes(filteredNotes);
}

document.getElementById('monthEmission').addEventListener('change', filterNotes);
document.getElementById('monthBilling').addEventListener('change', filterNotes);
document.getElementById('monthPayment').addEventListener('change', filterNotes);
document.getElementById('statusFilter').addEventListener('change', filterNotes);
document.getElementById('searchInput').addEventListener('input', filterNotes);
