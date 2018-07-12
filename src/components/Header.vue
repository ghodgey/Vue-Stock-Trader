<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <ul class="navbar-nav mr-auto">
        <router-link to="/stocks" tag="li" class="nav-item" activeClass="active" exact><a class="nav-link">Stocks</a></router-link>
        <router-link to="/portfolio" tag="li" class="nav-item" activeClass="active" exact><a class="nav-link">Portfolio</a></router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item nav-link" @click="endDay">End Day</li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" @click="isDropdownOpen = !isDropdownOpen" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
          <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
        </div>
        </li>
        <li class="nav-item nav-link"><strong>Funds: {{ funds | currency }}</strong></li>
      
    </ul>
</nav>
</template>

 <script>
import {mapActions} from 'vuex';

 export default {
     data() {
         return {
             isDropdownOpen: false
         }
     },
     computed: {
         funds() {
             return this.$store.getters.funds;
         }
     },
     methods: {
         ...mapActions({
             randomizeStocks: 'randomizeStocks',
             fetchData: 'loadData'
         }),
         endDay() {
             this.randomizeStocks();
         },
         saveData() {
             const data = {
                 funds: this.$store.getters.funds, 
                 stockPortfolio: this.$store.getters.stockPortfolio, 
                 stocks: this.$store.getters.stocks
             };

             this.$http.put('data.json', data);
         },
         loadData() {
             this.fetchData();
         }
     }
 }
 </script>