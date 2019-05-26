<template>
  <div>
    <canvas id="graph"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  data() {
    return {
      
    }
  },
  mounted: {
    initGraph(concluido,falta){
      var ctx = document.getElementById("teste").getContext('2d')
      var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'pie',

          // The data for our dataset
          data: {
              labels: ['falta','concluido'],
              datasets: [{
                  label: 'My First dataset',
                  backgroundColor: ['rgba(60,45,190,0.7)','rgb(180, 180, 180)'],
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  data: [concluido, falta ]
              }]
          },

          // Configuration options go here
          options: {}
      });
    }
  }
    
}
</script>
