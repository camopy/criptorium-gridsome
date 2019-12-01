<template>
  <Layout>
    <v-layout>
      <v-flex>
        <v-container class="header pt-0" fluid>
          <Toolbar />
          <v-layout column align-center>
            <h1>Política de Privacidade</h1>
          </v-layout>
        </v-container>
        <v-container>
          <h2>Informações do Usuário</h2>
            <p>O Cripto RF não coleta nenhuma informação do usuário além das necessárias para concluir o cadastro. Estas informações coletadas são armazenadas e mantidas de forma confidencial.</p>
            <p>Não utilizamos estas informações para nenhum outro fim além de manter sua conta cadastrada em nosso sistema.</p>

            <p>A não ser por determinação judicial, as informações dos usuários cadastrados no Cripto RF jamais serão transferidas para terceiros.</p>
            <p>O usuário garante a veracidade e exatidão dos dados pessoais fornecidos. O site não tem qualquer responsabilidade no caso de inserção de dados falsos ou inexatidão dos dados pessoais introduzidos pelo usuário.</p>
            <!-- <p>O usuário que introduzir seus dados pessoas identificáveis poderá alterá-los, corrigi-los e removê-los a qualquer momento, bastando fazê-lo através de seu próprio cadastro no site. O usuário, em hipótese alguma, deverá fornecer seus dados por e-mail, por se tratar de um ambiente sem os requisitos adequados de segurança. Desta forma, o site se exime de qualquer responsabilidade quanto à correção, alteração ou remoção de dados.</p> -->
            <!-- <p>As newsletters e mensagens publicitárias enviadas por e-mail virão com opção de cancelamento do envio daquele tipo de mensagem, obrigatoriamente. A solicitação será atendida com a maior presteza possível.</p> -->
            <p>Quer saber mais? Leia os nossos <g-link class="link" to="/terms/">Termos de Uso</g-link>.</p>
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
