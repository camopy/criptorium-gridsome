<template>
  <v-app>
    <v-content>
      <v-progress-linear color="secondary" rounded value="100"></v-progress-linear>
      <slot />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "~/components/Footer";
export default {
  components: {
    Footer
  }
};
</script>