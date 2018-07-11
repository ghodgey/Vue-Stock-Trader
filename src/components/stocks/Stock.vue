<template>
    <div class="col-sm-6 col-md-4" style="padding: 20px;">
        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <h3>{{ stock.name }} <small>(Price: {{ stock.price }})</small></h3>
                </div>
            </div>
            <div class="card-body">
                <form class="form-inline" v-on:submit.prevent> 
                    <input type="number" class="form-control" placeholder="Quantity" v-model.number="quantity">
                    <button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity 
            };
            //console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style>

</style>

