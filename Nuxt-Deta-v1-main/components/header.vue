<template>
<div>
<div class="flex items-center justify-between py-4 text-blue-800 p-2">
    <div>
      <NuxtLink to="/">
        <img src="~/assets/logo-hrms.png" class="h-10" />
      </NuxtLink>      
    </div>        

    <div class="font-semibold">
      Login
    </div>

  </div>


  <div class="bg-blue-900 text-white text-center p-8 font-semibold" >
    {{ title }}
  </div>
</div>

  
</template>

<script>
export default {
  props: [
    'title'
  ],
    data(){
      return {
        title: 'Hello Vue again!'
      }
    },
    methods : {
     
    }

}
</script>