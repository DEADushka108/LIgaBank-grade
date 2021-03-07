import {extend} from '../../utils/utils';

const initialState = {
  currencyExchange: 1
};

const ActionType = {
  LOAD_CURRENCY_EXCHANGE: `LOAD_CURRENCY_EXCHANGE`,
};

const ActionCreator = {
  loadCurrencyExchange: (exchange) => ({
    type: ActionType.LOAD_CURRENCY_EXCHANGE,
    payload: exchange,
  }),
};

const Operation = {
  loadCurrencyExchange: (date, from, to) => (dispatch, _getState, api) => {
    if (from === to) {
      return dispatch(ActionCreator.loadCurrencyExchange(1));
    } else {
    return api.get(`${date}?base=${from}`)
      .then(data => data.json())
      .then((response) => {
        dispatch(ActionCreator.loadCurrencyExchange(response.rates[to]));
      })
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CURRENCY_EXCHANGE:
      return extend(state, {
        currencyExchange: action.payload,
      });
  }
  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
