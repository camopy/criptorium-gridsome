<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
        </v-container>
        <Exchanges />
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Toolbar from "~/components/Toolbar";
import Exchanges from "~/components/Exchanges";

export default {
  components: {
    Toolbar,
    Exchanges
  }
};
</script>