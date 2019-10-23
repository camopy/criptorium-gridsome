<template>
  <v-container class="container" id="about">
    <v-layout align-center column justify-center>
      <v-container fluid>
        <v-divider class="divider" />
        <span>Exchanges suportadas no momento</span>
        <v-layout>
          <v-flex xs12 md3>
            <v-img src="/binance.svg" width="200px" />
          </v-flex>
          <v-flex xs12 md3>
            <v-img src="/bitfinex.svg" width="200px" />
          </v-flex>
          <v-flex xs12 md3>
            <v-img src="/kucoin.png" width="200px" />
          </v-flex>
          <v-flex xs12 md3>
            <v-img src="/binance.svg" width="200px" />
          </v-flex>
        </v-layout>
        <v-divider class="divider"/>
      </v-container>
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>

<style scoped>
.divider {
    margin: 40px;
}

span {
  color: var(--v-text-base);
}
</style>
