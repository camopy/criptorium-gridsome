<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-parallax dark src="/home-bg.jpg">
          <Toolbar />
          <Home />
        </v-parallax>
        <Value />
        <Exchanges />
        <v-parallax dark src="/home-bg.jpg">
          <Plans />
        </v-parallax>
        <FAQ />
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
import FAQ from "~/components/FAQ";

export default {
  components: {
    Toolbar,
    Home,
    Exchanges,
    Value,
    FAQ,
    Plans
  }
};
</script>