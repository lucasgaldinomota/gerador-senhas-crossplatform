<template>
    <div class="senhaContainer">
        <div v-if="senha.trim() !== ''" class="senhaBox">
            {{ senha }}
            <button @click="copiar">📋</button>
        </div>
        <p v-if="mostrarAviso">Senha copiada para área de transferência!</p>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        senha: String,
    },
    setup(props) {
        const mostrarAviso = ref(false);

        const copiar = () => {
            navigator.clipboard.writeText(props.senha);
            mostrarAviso.value = true;
            setTimeout(() => {
                mostrarAviso.value = false;
            }, 2000);
        };

        return {
            mostrarAviso,
            copiar,
        };
    },
};
</script>