
<template>
    <div>Foo: {{getSharedStoreState}}</div>
</template><script>
    export default {
        name: 'component-a',
        computed: {
            getSharedStoreState() {
                return this.$store.state.my_store.foo - 1;
            }
        }
    };
</script>
