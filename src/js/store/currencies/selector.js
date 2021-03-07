import NameSpace from '../name-space';

const getCurrencyExchange = (state) => {
  return state[NameSpace.CURRENCIES].currencyExchange;
}

export {getCurrencyExchange};
