<script>
import { mapActions, mapState } from 'pinia'
import { useBackStore } from '../stores/counter';

export default {
    computed: {
        ...mapState(useBackStore, ['shortUrl'])
    },
    beforeCreate() {
        
    }
}
</script>

<template>

</template>