<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-parallax dark src="/home-bg.jpg">
          <Toolbar />
          <Home />
        </v-parallax>
        <Value />
        <v-divider class="divider" />
        <Exchanges />
        <v-divider class="divider" />
        <Plans />
        <v-divider class="divider" />
      </v-flex>
    </v-layout>
  </Layout>
</template>

<script>
import Toolbar from "~/components/Toolbar";
import Home from "~/components/Home";
import Exchanges from "~/components/Exchanges";
import Value from "~/components/Value";
import Plans from "~/components/Plans";

export default {
  components: {
    Toolbar,
    Home,
    Exchanges,
    Value,
    Plans
  }
};
</script>