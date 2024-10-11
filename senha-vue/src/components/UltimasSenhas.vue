<template>
    <div>
        <h2 class="mainTitle">Últimas Senhas Geradas:</h2>
        <ul class="ultimasList">
            <li v-for="(senha, index) in senhas" :key="index">
                <ExibeSenha :senha="senha" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import ExibeSenha from './ExibeSenha.vue';

const props = defineProps({
    senhas: Array,
});
</script>