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
          <h2>Informações do Usuário</h2>
            <p>O Bússola do investidor coleta informações em três diferentes cenários: quando cadastram-se em nosso site, quando participam de nossas promoções ou concursos e quando entram em contato conosco pelos canais de atendimento. Estas informações coletadas nos ajudam a identificar nossos usuários, e são armazenadas e mantidas de forma confidencial.</p>
            <p>Utilizamos as informações coletadas para os seguintes propósitos gerais:</p>
            <div><v-icon>check</v-icon><span>Informar a respeito de novos produtos da empresa e de parceiros</span></div>
            <div><v-icon>check</v-icon><span>Manter atualizados os cadastros dos usuários para fins de contato por correio eletrônico, mala direta, SMS ou outros meios de comunicação</span></div>
            <div><v-icon>check</v-icon><span>Otimizar a usabilidade e a experiência interativa durante a navegação do usuário no site</span></div>
            <div><v-icon>check</v-icon><span>Elaborar estatísticas gerais, sem que haja identificação dos usuários</span></div>
            <div><v-icon>check</v-icon><span>Responder às dúvidas e solicitações de seus usuários</span></div>
            <div><v-icon>check</v-icon><span>Realizar campanhas de comunicação e marketing de relacionamento, bem como divulgar ofertas especiais de parceiros</span></div>
            <div><v-icon>check</v-icon><span>Comunicar-se com os usuários, a fim de lhes dar informações sobre a empresa</span></div>
            <br>
            <p>A não ser por determinação judicial, as informações dos usuários cadastrados no Bússola do Investidor jamais serão transferidas para terceiros que não sejam parceiros e empresas autorizadas, ou usadas para finalidades diferentes daquelas para as quais foram coletadas.</p>
            <p>O usuário garante a veracidade e exatidão dos dados pessoais fornecidos. O site não tem qualquer responsabilidade no caso de inserção de dados falsos ou inexatidão dos dados pessoais introduzidos pelo usuário.</p>
            <p>O usuário que introduzir seus dados pessoas identificáveis poderá alterá-los, corrigi-los e removê-los a qualquer momento, bastando fazê-lo através de seu próprio cadastro no site. O usuário, em hipótese alguma, deverá fornecer seus dados por e-mail, por se tratar de um ambiente sem os requisitos adequados de segurança. Desta forma, o site se exime de qualquer responsabilidade quanto à correção, alteração ou remoção de dados.</p>
            <p>As newsletters e mensagens publicitárias enviadas por e-mail virão com opção de cancelamento do envio daquele tipo de mensagem, obrigatoriamente. A solicitação será atendida com a maior presteza possível.</p>
            <p>Quer saber mais? Leia os nossos Termos de Uso.</p>
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
span, p {
  text-align: justify;
}
</style>
