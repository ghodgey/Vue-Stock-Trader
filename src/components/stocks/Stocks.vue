<template>
<div>
    <div class="row">
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
    </div>
</template>


<script>
import Stock from './Stock.vue';
import { mapGetters, mapMutations, mapActions} from "vuex";

export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
};
</script>
