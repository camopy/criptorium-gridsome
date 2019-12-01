<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
          <v-layout column align-center>
            <h1>Termos de Uso</h1>
          </v-layout>
        </v-container>
        <v-container>
          <p>O Cripto RF oferece conteúdo e ferramentas para interessados em cripto moedas.<br>
            Os usuários do site concordam com as condições impostas por este termo de uso ao passar a utilizar o site.</p>
          <br>
          <h2>Conteúdo informativo</h2>
            <p>As informações contidas em nosso site só poderão ser utilizadas pelos usuários para seu uso pessoal, sem propósitos comerciais. Os usuários não podem copiar, distribuir ou redistribuir os dados, nem vendê-los ou revendê-los para terceiros.</p>
            <p>Os conteúdos disponibilizados possuem caráter meramente informativo, portanto não devem ser considerados como recomendação de investimento. Não nos responsabilizamos por perdas, danos (diretos, indiretos e incidentais), custos e lucros cessantes.</p>
            <p>Nós ou nossos parceiros não poderemos ser responsabilizados juridicamente por qualquer perda ou dano, direto ou indireto, que decorram de qualquer imprecisão ou falta de complemento das informações, atrasos, interrupções, erros ou omissões no fornecimento dos dados contidos e/ou calculados neste site.</p>
          <br>
          <h2>Informações vindas de terceiros</h2>
            <p>A transmissão de informações entre nosso site e as APIs das exchanges pode ser objeto falhas ou atrasos arbitrários, que fogem ao nosso controle. Os usuários, através deste termo, reconhecem que nem nós e nem nossos parceiros poderemos ser responsabilizados por prejuízos advindos dessas falhas ou atrasos.</p>
          <br>
          <h2>Transmissão de informação para a Receita Federal</h2>
            <p>A transmissão de informações para a Receita Federal deve ser feita pelo próprio usuário, através do sistema e-CAC disponibilizado no proprio site da Receita Federal. Nosso site simplesmente gera um arquivo .txt com as suas operações para o mês escolhido. Esse arquivo .txt pode ser usado no e-CAC para realizar a importação das operações.</p>
          <br>
          <h2>Acesso à sua conta</h2>
            <p>O Cripto RF não se responsabiliza pela incapacidade de acesso à conta devido à perda ou esquecimento da senha. A única forma de recuperação de acesso é utilizando a opção “Esqueci minha senha”, onde é possível solicitar que a senha seja enviada para o email cadastrado.</p>
        </v-container>
      </v-flex>
    </v-layout>
  </Layout>
</template>

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
  text-align: left;
}
</style>
