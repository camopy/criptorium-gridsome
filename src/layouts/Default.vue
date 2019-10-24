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

<style>
.background {
  background-color: var(--v-primary-base);
}
.link {
  color: white;
  text-decoration: none;
}
p, span {
  color: var(--v-text-base);
}
.divider {
  margin: 20px;
}
h2, h1 {
  color: var(--v-text-base);
  text-align: center;
}
.header {
  background-color: var(--v-primary-base);
}
</style>