<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>
    <ul class="navbar-nav mr-auto">
        <router-link to="/stocks" tag="li" class="nav-item" activeClass="active" exact><a class="nav-link">Stocks</a></router-link>
        <router-link to="/portfolio" tag="li" class="nav-item" activeClass="active" exact><a class="nav-link">Portfolio</a></router-link>
    </ul>
    <ul class="navbar-nav ml-auto">
        <li class="nav-item nav-link">End Day</li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
        </li>
        <li class="nav-item nav-link"><strong>Funds: {{ funds | currency }}</strong></li>
      
    </ul>
</nav>
</template>

 <script>
 export default {
     computed: {
         funds() {
             return this.$store.getters.funds;
         }
     }
 }
 </script>