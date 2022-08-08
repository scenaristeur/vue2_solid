
<template>
    <div>Bar: {{getSharedStoreState}}</div>
</template><script>
    export default {
        name: 'component-b',
        computed: {
            getSharedStoreState() {
                return this.$store.state.my_store.foo + 1;
            }
        }
    };
</script>
