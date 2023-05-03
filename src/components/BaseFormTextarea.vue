<template>
    <BaseFormField :title="title" :error="error">
        <textarea class="form-input form-input-area"  v-model="dataValue" :placeholder="placeholder"></textarea>
    </BaseFormField>
</template>

<script>
import formFieldMixins from '@/mixins/formFieldMixins';

    export default {
        mixins: [formFieldMixins]
    }

</script>