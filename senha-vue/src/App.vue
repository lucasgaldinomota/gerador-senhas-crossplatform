<template>
  <main class="main">
    <div class="mainContainer">
      <h1 class="mainTitle">Gerador de Senhas</h1>
      <TamanhoInput v-model="tamanho" />
      <div class="checkboxContainer">
        <Checkbox v-for="(opcao, index) in tiposCaracteres" :key="opcao.id" :id="opcao.id" :texto="opcao.nome"
          :selecionado="opcao.valor" @mudanca="lidaComMudanca(index)" />
      </div>
      <button class="mainButton" @click="gerarSenha">Gerar Senha</button>
    </div>
    <div class="mainContainer">
      <UltimasSenhas :senhas="senhasGeradas" />
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import Checkbox from './components/Checkbox.vue';
import UltimasSenhas from './components/UltimasSenhas.vue';
import TamanhoInput from './components/TamanhoInput.vue';
import opcoes from '../../core/OpcoesCaracteres';
import Senha from '../../core/Senha';

export default {
  components: {
    Checkbox,
    UltimasSenhas,
    TamanhoInput,
  },
  setup() {
    const tamanho = ref(8);
    const tiposCaracteres = ref(opcoes);
    const senhasGeradas = ref([]);

    const lidaComMudanca = (indice) => {
      tiposCaracteres.value[indice].valor = !tiposCaracteres.value[indice].valor;
    };

    const gerarSenha = () => {
      const novaSenha = Senha.gerarSenha(tamanho.value, tiposCaracteres.value);
      senhasGeradas.value.unshift(novaSenha);
      senhasGeradas.value.splice(8);
    };

    return {
      tamanho,
      tiposCaracteres,
      senhasGeradas,
      lidaComMudanca,
      gerarSenha,
    };
  },
};
</script>

<style>
@import './styles.css';
</style>