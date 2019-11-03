<template>
  <v-container grid-list-md id="value">
    <v-layout row>
      <v-flex v-for="service in services" :key="service.name" xs12 sm4>
        <ServiceCard :name="service.name" :icon="service.icon" :description="service.description" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import ServiceCard from "~/components/service/ServiceCard";
export default {
  components: {
    ServiceCard
  },
  data: () => ({
    services: [
      {
        name: "Sincronização",
        icon: "sync",
        description:
          "Sincronize suas operações com várias exchanges através da API disponibilizada por cada uma"
      },
      {
        name: "Operações manuais",
        icon: "build",
        description:
          "Adicione suas operações de compra, venda, saque e depósito de criptomoedas"
      },
      {
        name: "Declaração",
        icon: "file_copy",
        description:
          "Gere o arquivo TXT requerido pela Receita Federal para prestação de informações sobre suas operações"
      }
    ]
  })
};
</script>
