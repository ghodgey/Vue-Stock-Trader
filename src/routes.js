import Header from './components/Header.vue';
import Home from './components/Home.vue';

//Lazy import for components
const Stocks = resolve => {
    require.ensure(['./components/stocks/Stocks.vue'], () => {
        resolve(require('./components/stocks/Stocks.vue'));
    });
};

const Portfolio = resolve => {
    require.ensure(['./components/portfolio/Portfolio.vue'], () => {
        resolve(require('./components/portfolio/Portfolio.vue'));
    });
};


export const routes = [
    { path: '', name: 'home', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks }
];