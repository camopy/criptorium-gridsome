<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header" fluid>
          <Toolbar />
          <v-layout column align-center>
            <h1>Sobre</h1>
          </v-layout>
        </v-container>
        <v-container>
          <h2>Quem somos</h2>
            <p>O {{$static.metadata.siteName}} é um portal fundado em 2019. Somos uma empresa totalmente independente, sem vínculo com corretoras ou grupos de mídia.</p>
            <p>Nosso objetivo é facilitar o processo de declaração de suas cripto moedas para a Receita Federal através da importação de suas operações em várias exchanges internacionais.</p>
        </v-container>
      </v-flex>
    </v-layout>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Toolbar from "~/components/Toolbar";

export default {
  components: {
    Toolbar
  }
};
</script>

<style scoped>
.header {
  background-color: var(--v-primary-base);
}
h2, span, p {
  color: var(--v-text-base);
}
h1 {
  color: white;
}
span, p, h2 {
  text-align: justify;
}
</style>
