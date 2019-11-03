<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
        </v-container>
        <Exchanges />
        <v-container>
          <v-layout align-center column justify-center>
            <v-container>
              <h1>Próximas exchanges a serem adicionadas</h1>
              <v-container fluid>
                <v-layout row wrap align-center justify-center>
                  <div v-for="exchange in nextExchanges" :key="exchange.name">
                    <v-img class="img" :src="exchange.src" width="200px" />
                  </div>
                </v-layout>
              </v-container>
            </v-container>
          </v-layout>
        </v-container>
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
  },
  data: () => ({
    nextExchanges: [
      {
        name: "Bitfinex",
        src: "/bitfinex.svg"
      },
      {
        name: "KuCoin",
        src: "/kucoin.png"
      }
    ]
  })
};
</script>