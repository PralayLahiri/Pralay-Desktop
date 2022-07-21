<template>
  <div>
    <Header title="Adding New Values" />

      <div class="p-3 border">
        Sample ID :
        <input type="number" value="256" class="border-2 rounded-md p-2" v-model="id"/>
      </div>

      <div class="p-3 border">
        Sample Name :
        <input type="text" value="sample choudhary" class="border-2 rounded-md p-2" v-model="name"/>
      </div>
      <div class="p-3 border">
        Sample Password :
        <input type="text" value="pass" class="border-2 rounded-md p-2" v-model="password" />
      </div>

      <div class="p-3 border">        
        Sample Age :
        <input type="number" value="20" class="border-2 rounded-md p-2" v-model="age"/>
      </div>

      <div class="p-3 border">
        <button class="bg-blue-600 p-3 text-white" @click="post">Submit</button>
      </div>
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  components: { Header },
  data(){
    return {
        password : '',
        name : '',
        age : '',
        id : ''
    }
  },

  methods : {
    post() {
      fetch("http://127.0.0.1:8000/save", {            
            method: "POST",            
            body: JSON.stringify({
                age: this.age,
                id: this.id,
                name: this.name,
                password: this.password,
            }),
            
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
        // Converting to JSON
        .then(response => response.json())
        
        // Displaying results to console
        .then(json => console.log(json));
    },
  },
  }
</script>