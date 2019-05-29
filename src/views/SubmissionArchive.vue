<template>
  <div class=container>
    <div class="card">
      <div class="row">
        <h2> tela de submissao </h2>
      </div>
      <div class="row">

        <div class="col s6">
          <form action="#">
            <div class="file-field input-field">
              <div class="btn">
                <span>File</span>
                <input type="file" id="file" ref="file" v-on:change="FileUpload()"/>
              </div>
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
          </form>
        </div>
        
        <div class="col s6">
          <div class="card-content white-text">
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Materialize Select</label>
            </div>  
          </div>
        </div>
      

      </div>

      <div class="row">
        <a class="waves-effect waves-light btn enviar " v-on:click="sendFile()">Enviar arquivo</a>
        <a class="waves-effect waves-light btn enviar novaAba " v-on:click="openTab()">Ajuda</a>
      
      </div>
      
    </div>  
  </div>
</template>

<script>

import submission from '@/services/submissionCertify.js'
import { store } from '@/store'

export default {
  name: 'submission',
  components:{
  },
  data() {
    return {
      file: undefined,
      category: undefined
    }
  },
  mounted() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems)
  },
  methods: {
    sendFile(){
      this.file = this.$refs.file.files[0]
      var formData = new FormData()
      formData.append('file', this.file)
      formData.append('email',this.$store.getters.email)
      formData.append('token',this.$store.getters.token)
      formData.append('name',this.$store.getters.email)
      formData.append('category',"teste")
      formData.append('time',32)
      submission.sendFile(formData,).then((response) => {
        console.log(response)
      })
      this.$swal('OK!!!','you completed', 'success')
    },
    openTab(){
      window.open('http://www.campusrussas.ufc.br/docs/PPC-ES-Russas-AtividadesComplementares-2019.pdf', '_blank');  
    }
    
  },
  
}
</script>

<style>
.enviar {
  padding-left: 60px !important;
  padding-right: 60px !important;
  margin-right: 60px !important;
}
</style>
