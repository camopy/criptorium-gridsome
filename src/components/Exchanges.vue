<template>
  <v-container>
    <v-layout align-center column justify-center>
      <v-container>
        <h1>Exchanges suportadas</h1>
        <v-container fluid>
          <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm6 md3>
              <v-img class="img" src="/binance.svg" width="200px" />
            </v-flex>
            <!-- <v-flex xs12 sm6 md3>
              <v-img class="img" src="/bitfinex.svg" width="200px" />
            </v-flex>
            <v-flex xs12 sm6 md3>
              <v-img class="img" src="/kucoin.png" width="200px" />
            </v-flex>
            <v-flex xs12 sm6 md3>
              <v-img class="img" src="/binance.svg" width="200px" />
            </v-flex> -->
          </v-layout>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>

<style scoped>
.img {
  margin: auto;
}
</style>
