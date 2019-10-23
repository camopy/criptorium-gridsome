<template>
  <v-layout column justify-center>
    <v-container>
      <v-flex xs12>
        <h2 class="display-2 mb-3">Seu portfólio de criptomoedas</h2>
        <h4 class="subheading">Gere o arquivo para a declaração requerida pela Receita Federal</h4>
        <v-btn color="secondary font-weight-bold"><a href="http://localhost:8080/signup" target="_blank" class="link"><span>Cadastre-se grátis</span></a></v-btn>
      </v-flex>
    </v-container>
  </v-layout>
</template>
<script>

export default {
};
</script>

<style scoped>
p {
  color: var(--v-text-base);
}

h1 {
  color: white;
  font-weight: bold;
}

h4 {
  color: white;
  font-weight: normal;
}

.link {
  color: white;
  text-decoration: none;
}
</style>