<template>
  <v-container fluid class="container" id="contact">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm3>
          <div>
            <h1>Cripto RF</h1>
          </div>
          <div>
            <span>Born In Code Solutions</span>
          </div>
          <div>
            <span>CNPJ</span>
          </div>
        </v-flex>
        <v-flex xs12 sm3>
            <h1>A Empresa</h1>
            <div>
              <g-link class="link" to="/about/">Sobre</g-link>
            </div>
            <div>
              <g-link class="link" to="/terms/">Termos de Uso</g-link>
            </div>
            <div>
              <g-link class="link" to="/privacy-policy/">Política de Privacidade</g-link>
            </div>
        </v-flex>
        <v-flex xs12 sm3>
            <h1>Plataforma</h1>
            <div>
              <g-link class="link" to="/services/">Serviços</g-link>
            </div>
            <div>
              <g-link class="link" to="/exchanges/">Exchanges</g-link>
            </div>
            <div>
              <g-link class="link" to="/plans/">Planos</g-link>
            </div>
        </v-flex>
        <v-flex xs12 sm3>
            <h1>Contato</h1>
            <div>
              <a href="mailto:contato@criptorf.com" target="_blank"><v-icon class="material-icons-outlined">email</v-icon><span> contato@criptorf.com</span></a>
            </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<style scoped>
.container {
  background-color: var(--v-primary-base);
}
.link {
  color: white;
  text-decoration: none;
}

span {
  color: white;
}

h1 {
  /* font-weight: bold; */
  font-size: 20px;
  color: white;
}
</style>
