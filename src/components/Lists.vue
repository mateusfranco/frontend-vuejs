<template>
  <div>
    <div class="container">
      <div class="card">
        <div class="card-content teal-text">
          <span class="card-title">Card Title</span>
          <ul class="collection">
            <li class="collection-item avatar" v-for="(item, index) in itens" :key="index">
              <div class="eventpadding">
                <p class="left-text title">{{item.text}}</p>
                <p class="left-text">area: {{item.text}}</p>
                <p class="left-text">descricao: {{item.description}}</p>
                <router-link to=""> trilha </router-link>
              </div>  
            </li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
    name: 'lists',
    data() {
      return {
        itens: [
          { text: 'teste', description: 'ajksdhjka hsjkdhaj kshdjkhaskdh aks hdkjashkd hajksdhjkashd' },
          { text: 'teste2', description: 'ajksdhjka hsjkdhaj kshdjkhaskdh aks hdkjashkd hajksdhjkashd' },
          { text: 'teste3',  description: 'ajksdhjka hsjkdhaj kshdjkhaskdh aks hdkjashkd hajksdhjkashd' }
        ],
        subitens: [
          { trilha: 'trilha1', description: 'trilha teste1'}
        ]

      }
    },
    methods: {
      addEvent(event) {
        this.itens.add(event)
      },
      delEvent(event) {
        this.itens.split( this.indexOf(event), 1)
      }
    },
}
</script>

<style>
.left-text{
  text-align: left !important;
}
.nopadding{
  padding: 0px !important;
}
.eventpadding{
  padding-left: 0px;
}
</style>

