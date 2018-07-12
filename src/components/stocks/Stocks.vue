<template>
    <div>
        <div class="alert alert-danger" v-if="warning != ''">{{ warning }}</div>
        <div class="row">
            <app-stock @warning="updateWarning" v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
        </div>
    </div>
</template>


<script>
import Stock from './Stock.vue';
import { mapGetters, mapMutations, mapActions} from "vuex";

export default {
    data() {
        return {
            warning: ''
        }
    },
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    },
    methods: {
        updateWarning() {
            this.warning = 'You do not have sufficient funds to purchase those stocks.'
            var self = this;
            setTimeout(function(){ self.warning = ''; }, 3000 );
        }

    }
};
</script>
