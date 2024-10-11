<template>
    <div class="senha-container">
        <div v-if="senha.trim() !== ''">
            {{ senha }}
            <button @click="copiar">📋</button>
        </div>
        <p v-if="mostrarAviso">Senha copiada para área de transferência!</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    senha: String,
});

const mostrarAviso = ref(false);

const copiar = () => {
    navigator.clipboard.writeText(props.senha);
    mostrarAviso.value = true;
    setTimeout(() => {
        mostrarAviso.value = false;
    }, 2000);
};
</script>