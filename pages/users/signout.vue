
  <script setup>

   onMounted(() => {

     // set session to null

     useSetSession(null);

    

     setTimeout(() => {

       alert("你現在已經登出! 下次見 =)");

       navigateTo("/");

     }, 100);



   });

   </script>

