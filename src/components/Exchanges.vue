<template>
  <v-container align-center justify-center>
    <v-layout align-center column justify-center>
      <v-container>
        <h1>Exchanges suportadas</h1>
        <v-container fluid>
          <v-layout row wrap align-center justify-center>
            <div xs12 sm6 md3 v-for="exchange in exchanges" :key="exchange.name">
              <v-img class="img" :src="exchange.src" width="200px" />
            </div>
          </v-layout>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    exchanges: [
      {
        name: "binance",
        src: "/binance.svg"
      }
    ]
  })
};
</script>

<style scoped>
.img {
  margin: auto;
}
</style>
