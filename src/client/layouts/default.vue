<template>
  <div class="font-sans antialiased">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/site/header.vue';

export default {
  components: {
    Header
  }
};
</script>
