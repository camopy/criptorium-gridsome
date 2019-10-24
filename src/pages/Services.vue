<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
        </v-container>
        <v-container>
          <h1>Nossos serviços</h1>
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
</style>
