<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-parallax dark src="/home-bg.jpg">
          <Toolbar />
          <Home />
        </v-parallax>
        <Services />
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
import Services from "~/components/service/Services";
import Plans from "~/components/Plans";

export default {
  components: {
    Toolbar,
    Home,
    Exchanges,
    Services,
    Plans
  }
};
</script>