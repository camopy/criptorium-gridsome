<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
        </v-container>
        <v-container>
          <Plans/>
          <FAQ />
        </v-container>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Toolbar from "~/components/Toolbar";
import Plans from "~/components/Plans";
import FAQ from "~/components/FAQ";

export default {
  components: {
    Toolbar,
    Plans,
    FAQ
  }
};
</script>

<style scoped>
.header {
  background-color: var(--v-primary-base);
}
h2, span, p {
  color: var(--v-text-base);
}
h1 {
  color: white;
}
span, p {
  text-align: justify;
}
</style>
