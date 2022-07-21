<template>
  <div>
    <Header title="Welcome to Homepage" />

    <div>
     
    </div>

    <div class="p-3">
      
      <NuxtLink to="/add">
        <button class="bg-blue-600 p-3 text-white">Add New</button>
      </NuxtLink>

      <button @click="get_data">Refresh Data</button>

      <table class="table-auto w-full p-3 border border-red-500">
        <thead>
          <tr>
            <th class="text-left p-2">Name</th>
            <th class="text-left p-2">Password</th>
            <th class="text-left p-2">Age</th>
            <th class="text-left p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in data_from_db" :key="data.id">
            <td>{{ data.name }}</td>
            <td>{{ data.password }}</td>
            <td>{{ data.age }}</td>
            <td>Delete Edit</td>
          </tr>          
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import Header from '~/components/header.vue'
export default {
  data(){
    return {
      data_from_db : []
    }
  },  
  methods: {
    hello() {
      alert('all good.')
    },

    get_data(){
      fetch('http://127.0.0.1:8000/db')
            .then(response => response.json())
            .then(data => this.data_from_db = data.data.users);
    }
  },

  beforeMount(){
    this.get_data()
 },

  components: { Header },
}
</script>
