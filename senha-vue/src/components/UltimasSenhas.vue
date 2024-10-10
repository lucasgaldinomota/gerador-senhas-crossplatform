<template>
    <div>
        <h2>Últimas Senhas Geradas:</h2>
        <ul class="ultimasSenhas">
            <li v-for="(senha, index) in senhas" :key="index">
                <ExibeSenha :senha="senha" />
            </li>
        </ul>
    </div>
</template>

<script>
import ExibeSenha from './ExibeSenha.vue';

export default {
    props: {
        senhas: Array,
    },
    components: {
        ExibeSenha,
    },
};
</script>