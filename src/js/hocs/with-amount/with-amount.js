import React, {PureComponent} from 'react';

const withAmount = (Component) => {
  class WithAmount extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        sellAmount: 0,
        buyAmount: 0,
        amountInFromCurrency: true,
      };

      this._handleSellAmountChange = this._handleSellAmountChange.bind(this);
      this._handleBuyAmountChange = this._handleBuyAmountChange.bind(this);
    }

    _handleSellAmountChange(evt) {
      this.setState({
        sellAmount: evt.target.value,
        amountInFromCurrency: true
      });
    }

    _handleBuyAmountChange(evt){
      this.setState({
        buyAmount: evt.target.value,
        amountInFromCurrency: false,
      });
    }

    render() {
      const {sellAmount, buyAmount, amountInFromCurrency} = this.state;

      return <Component
        {...this.props}
        sellAmount={sellAmount}
        buyAmount={buyAmount}
        amountInFromCurrency={amountInFromCurrency}
        onSellAmountChange={this._handleSellAmountChange}
        onBuyAmountChange={this._handleBuyAmountChange}
        />;
    }
  }

  WithAmount.proptypes = {};

  return WithAmount;
};

export default withAmount;
