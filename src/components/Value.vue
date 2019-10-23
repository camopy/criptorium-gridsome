<template>
  <v-container grid-list-md id="value">
    <v-layout align-center column justify-center></v-layout>
    <v-layout row>

      <v-flex xs12 sm4>
        <v-container>
          <v-avatar class="center" color="secondary">
            <v-icon>sync</v-icon>
          </v-avatar>
          <h1>Sincronização</h1>
          <p>Sincronize suas operações com as exchanges. Sincronize suas operações com as exchanges. Sincronize suas operações com as exchanges</p>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4>
        <v-container>
          <v-avatar class="center" color="secondary">
            <v-icon class="material-icons-outlined">build</v-icon>
          </v-avatar>
          <h1>Operações manuais</h1>
          <p>Adicione suas operações manualmente Adicione suas operações manualmente Adicione suas operações manualmente</p>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4>
        <v-container>
          <v-avatar class="center" color="secondary">
            <v-icon class="material-icons-outlined">file_copy</v-icon>
          </v-avatar>
          <h1>Declaração</h1>
          <p
            color="primary"
          >Gere o arquivo pronto para ser enviado para a Receita Federal Gere o arquivo pronto para ser enviado para a Receita Federal</p>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {};
</script>

<style scoped>
p {
  color: var(--v-text-base);
  text-align: center;
  justify-content: center;
}

h1 {
  color: var(--v-secondary-base);
  font-weight: bold;
  text-align: center;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
