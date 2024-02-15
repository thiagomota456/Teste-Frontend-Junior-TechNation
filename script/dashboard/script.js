const data = {
  totalNotes: 10000,
  unbilledNotes: 2000,
  overdueNotes: 1500,
  dueNotes: 3000,
  paidNotes: 6000,
  inadimplenciaData: [500, 600, 700, 800, 900],
  receitaData: [2000, 3000, 4000, 5000, 6000]
};

function updateIndicators() {
  document.getElementById('totalNotes').textContent = `R$ ${data.totalNotes.toFixed(2)}`;
  document.getElementById('unbilledNotes').textContent = `R$ ${data.unbilledNotes.toFixed(2)}`;
  document.getElementById('overdueNotes').textContent = `R$ ${data.overdueNotes.toFixed(2)}`;
  document.getElementById('dueNotes').textContent = `R$ ${data.dueNotes.toFixed(2)}`;
  document.getElementById('paidNotes').textContent = `R$ ${data.paidNotes.toFixed(2)}`;
}
  

function updateInadimplenciaChart() {
  var ctx = document.getElementById('inadimplenciaChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Inadimplência',
        data: data.inadimplenciaData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
  
function updateReceitaChart() {
  var ctx = document.getElementById('receitaChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      datasets: [{
        label: 'Receita Recebida',
        data: data.receitaData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}


updateIndicators();
updateInadimplenciaChart();
updateReceitaChart();  