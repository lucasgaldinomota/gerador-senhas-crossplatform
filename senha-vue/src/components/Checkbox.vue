<template>
    <div class="checkboxContainer">
        <input type="checkbox" :id="id" :checked="selecionado" @change="$emit('mudanca')" />
        <label :for="id">{{ texto }}</label>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        texto: String,
        selecionado: Boolean,
    },
};
</script>