<template>
    <div class="input-container">
        <label class="input-label">Tamanho da Senha:</label>
        <input type="number" min="5" max="30" :value="tamanho" 
            @input="emit('update:modelValue', +$event.target.value)" class="input-number" />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: Number,
});

const emit = defineEmits(['update:modelValue']);

const tamanho = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
});
</script>