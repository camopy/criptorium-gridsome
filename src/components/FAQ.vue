<template>
  <v-container grid-list-md id="faq">
    <v-layout align-center column justify-center>
      <h1>PERGUNTAS FREQUENTES</h1>
    </v-layout>
    <v-layout justify-center>
      <v-expansion-panels>
        <v-expansion-panel v-for="faq in faqs" :key="faq.question">
          <v-expansion-panel-header>
            <span>{{faq.question}}</span>
            <!-- <template v-slot:actions>
              <font-awesome style="color: var(--v-text-base);" :icon="['fas', 'angle-down']" />
            </template> -->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span>{{faq.answer}}</span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    faqs: [
      {
        question: "Como funciona a importação de operações?",
        answer:
          "A importação se dá através da sincronização de informações com a API das exchanges suportadas. Para isso, você deve cadastrar em nosso sistema a API Key e Secret Key das exchanges que você utiliza. Você pode cadastrar uma exchange na página \"Exchanges\", clicando no botão \"+\". Lembrando que isso é uma funcionalidade disponível somente no plano Pro."
      },
      {
        question: "Exchanges adicionadas futuramente também estarão disponíveis para sincronização no plano Pro?",
        answer:
          "Sim, todas as exchanges adicionadas posteriormente à sua assinatura do plano Pro estarão disponíveis para sincronização. Ou seja, o plano Pro garante a sincronização para todas as exchanges suportadas."
      },
      {
        question: "Como gerar o arquivo para a declaração?",
        answer:
          "O arquivo pode ser gerado na página de operações, disponível após você fazer seu login no sistema. Você deve clicar no botão \"GERAR TXT\" e selecionar o mês de operações desejado."
      },
      {
        question: "Como é feita a transmissão para a Receita Federal?",
        answer:
          "A transmissão do arquivo .txt para a Receita Federal deve ser feita pelo sistema e-CAC disponibilizado no proprio site da receita. Ao acessar o e-CAC, o usuário poderá encontrar o formulário para declaração dentro do menu “Cobrança e Fiscalização”, na opção “Obrigação Acessório - Formulários online e Arquivo de Dados”. Você deve abrir o arquivo que será baixado em seu computador no último passo e então basta clicar em \"Adicionar Arquivos\" e selecionar o .txt gerado pelo nosso sitema. Lembre-se de validar o arquivo .txt antes de transmiti-lo para a receita."
      }
    ]
  })
};
</script>

<style scoped>
span {
  color: var(--v-text-base);
}

h1 {
  color: var(--v-text-base);
}
</style>