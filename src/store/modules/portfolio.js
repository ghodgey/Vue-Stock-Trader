const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    //located in the stocks module (the action)
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= (stockPrice * quantity);
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);//find the id in state.stocks where it is the same as the stock being sold from portfolio/stock
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += (stockPrice * quantity);
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio(state, getters) {
        //since we only have the stock id in the portfolio we now need to get the name and price from the Stocks
        return state.stocks.map(stock => { //stock holds the array of the portfolio stocks
            //element below would be the stocks from the stocks module
            const record = getters.stocks.find(element => element.id == stock.id);//getters.stock is the getter from the stocks.js module (how we access the getter from the stock module)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            };
        });
    },
    funds (state) {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters

};