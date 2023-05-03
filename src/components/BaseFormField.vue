<template>
    <label class="form-label">
        <slot/>
        <span class="form-value">{{title}}</span>
        <span class="form-error" v-if="error">{{error}}</span>
      </label>
</template>
<script>
export default {
    props: ['title', 'error'],
}
</script>