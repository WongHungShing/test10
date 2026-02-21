<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'Threezero-renting'
  },
 
})


onMounted(() => {

     // set session from localStorage

     useSetSession(JSON.parse(localStorage.getItem("session")));

   });
</script>