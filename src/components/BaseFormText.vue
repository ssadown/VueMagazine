<template>
    <BaseFormField :title="title" :error="error">
        <input class="form-input" v-model="dataValue" :type="type" :placeholder="placeholder">
    </BaseFormField>
</template>

<script>
import formFieldMixins from '@/mixins/formFieldMixins';


export default {
    props: {
        type: {
            default: 'text',
        }
    },
    mixins: [formFieldMixins]
}

</script>