<template>
    <v-container grid-list-md id="menu">
      <v-layout row wrap align-center justify-center>
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2">
            <v-layout column align-center>
              <v-card-title class="font-weight-bold justify-center">
                <span>Plano Grátis</span>
              </v-card-title>
              <v-img src="/rocket.svg" width="100px" class="align-center"></v-img>
              <v-card-text class="text-center">
                <v-container>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                </v-container>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" style="background-color:#f5f7fa;">
            <v-layout column align-center>
              <v-card-title class="font-weight-bold justify-center">
                <span>Plano Pro</span>
              </v-card-title>
              <v-img src="/rocket.svg" width="100px" class="align-center"></v-img>
              <v-card-text class="text-center">
                <v-container>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                  <div>
                    <v-icon>apps</v-icon>
                    <span>Sincronização com exchanges</span>
                  </div>
                </v-container>
                <v-container>
                  <v-layout row>
                    <v-flex xs12>
                      <span class="symbol">$</span>
                      <span class="price">10</span>
                      <span class="period">/ mês</span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="period">no plano anual</span>
                    </v-flex>
                    <v-flex xs12>
                      <span>R$15 por mês no plano mensal</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
            </v-layout>
          </v-card>
        </v-hover>
      </v-layout>
      <v-container>
        <v-layout row justify-center>
          <v-btn color="secondary font-weight-bold"><a href="http://localhost:8080/signup" target="_blank"><span class="link">Cadastre-se</span></a></v-btn>
        </v-layout>
      </v-container>
    </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  color: var(--v-text-base);
}

.symbol {
  font-size: 30px;
  font-weight: 400;
  vertical-align: top;
}

.price {
  font-size: 60px;
  font-weight: 300;
}

.period {
  font-size: 20px;
  font-weight: 500;
}

.link {
  color: white;
  text-decoration: none;
}
</style>