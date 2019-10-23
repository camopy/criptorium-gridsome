<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
          <v-layout column align-center>
            <h1>Serviços</h1>
          </v-layout>
        </v-container>
        <v-container>
          <Value/>
        </v-container>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Toolbar from "~/components/Toolbar";
import Value from "~/components/Value";

export default {
  components: {
    Toolbar,
    Value
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
