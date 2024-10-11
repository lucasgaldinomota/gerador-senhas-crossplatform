<template>
    <div class="inputContainer">
        <label class="inputLabel">
            Tamanho da Senha:
        </label>
        <input type="number" min="5" max="30" :value="tamanho"
                @input="$emit('update:modelValue', +$event.target.value)" class="inputNumber" />
    </div>
</template>

<script>
export default {
    props: {
        modelValue: Number,
    },
    computed: {
        tamanho: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            },
        },
    },
};
</script>