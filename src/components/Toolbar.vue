<template>
  <v-container>
    <v-toolbar color="transparent" flat>
      <v-toolbar-title>
        <g-link to="/" class="link">Cripto RF</g-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <g-link to="/services/" class="link">Serviços</g-link>
        </v-btn>
        <v-btn text>
          <g-link to="/exchanges/" class="link">Exchanges</g-link>
        </v-btn>
        <v-btn text>
          <g-link to="/plans/" class="link">Planos</g-link>
        </v-btn>
        <v-btn text>
          <a href="http://localhost:8080/signin" target="_blank" class="link">Entrar</a>
        </v-btn>
        <v-btn color="secondary">
          <a href="http://localhost:8080/signup" target="_blank" class="link">Cadastre-se</a>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>
<script>
export default {};
</script>

<style scoped>
.title {
  color: white;
  font-weight: bold;
}
.link {
  color: white;
  text-decoration: none;
}
</style>