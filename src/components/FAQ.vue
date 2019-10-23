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
        question: "Como funciona?",
        answer: `1. Preencha o cadastro do seu cão aqui (sem compromisso!)
                        2. Iremos analisar e definir as melhores opções de dietas e quantidade diária
                        3. Encaminhamos em seu email todas as informações à respeito de valores, entrega, prazos e opções de armazenamento;
                        4. Ficará a seu critério definir a periodicidade das entregas: semanal, quinzenal ou mensal;
                        5. Após alguns dias, você receberá em sua casa a primeira entrega, com porções diárias congeladas que seu cão precisa
                        6. Seu cãozinho tendo aprovado a comidinha, prosseguimos para a produção de um novo ciclo de pedidos conforme periodicidade combinada.
                        7. Pronto! Seu cãozinho agora será mais feliz!`
      },
      {
        question: "Como os alimentos são preparados?",
        answer:
          "Vegetais e legumes são sempre cozidos no vapor, visando garantir a maior preservação de nutrientes possível. As carnes (lombo, músculo, frango e vísceras são cozidas, enquanto os peixes (Sardinha, Merluza ou Tilápia) são assados."
      },
      {
        question: "Qual é o valor?",
        answer:
          "Cada cãozinho possui necessidades específicas, sendo necessário então dietas personalizadas de acordo com os dados dele. Com isso, o valor mensal da alimentação natural da PetNaturau irá depender de fatores como peso ideal, idade, castração, nível de atividade e restrições específicas de saúde."
      },
      {
        question: "Como é feita a transição?",
        answer:
          "Como toda troca de alimentação, é necessário que o cãozinho passe por um período de transição, misturando gradativamente o alimento anterior com a nova alimentação ofertada. O ideal é que esse período dure em torno de 7 dias."
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