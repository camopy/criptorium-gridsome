<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 12 : 2" height="100%">
      <v-container>
        <v-avatar class="center" color="secondary">
          <v-icon class="material-icons-outlined">{{icon}}</v-icon>
        </v-avatar>
        <h1>{{name}}</h1>
        <p>{{description}}</p>
      </v-container>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: {
    name: String,
    description: String,
    icon: String
  }
};
</script>

<style scoped>
p {
  color: var(--v-text-base);
  text-align: center;
  justify-content: center;
}

h1 {
  color: var(--v-secondary-base);
  font-weight: bold;
  text-align: center;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.material-icons-outlined {
  color: white;
}
</style>
