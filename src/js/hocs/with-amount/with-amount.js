import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

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

    componentDidUpdate(prevProps) {
      const {exchangeCurrency} = this.props;
      if (exchangeCurrency !== prevProps.exchangeCurrency) {
        if (this.state.amountInFromCurrency) {
          this.setState({
            buyAmount: Number(this.state.sellAmount) * Number(exchangeCurrency),
          });
        } else {
          this.setState({
            sellAmount: Number(this.state.buyAmount) / Number(exchangeCurrency),
          });
        }
      }
    }

    _handleSellAmountChange(evt) {
      const {exchangeCurrency} = this.props;
      this.setState({
        sellAmount: Number(evt.target.value),
        buyAmount: Number(evt.target.value) * Number(exchangeCurrency),
        amountInFromCurrency: true,
      });
    }

    _handleBuyAmountChange(evt) {
      const {exchangeCurrency} = this.props;
      this.setState({
        buyAmount: Number(evt.target.value),
        sellAmount: Number(evt.target.value) / Number(exchangeCurrency),
        amountInFromCurrency: false,
      });
    }

    render() {
      const {sellAmount, buyAmount} = this.state;

      return <Component
        {...this.props}
        sellAmount={sellAmount}
        buyAmount={buyAmount}
        onSellAmountChange={this._handleSellAmountChange}
        onBuyAmountChange={this._handleBuyAmountChange}
      />;
    }
  }

  WithAmount.propTypes = {
    exchangeCurrency: PropTypes.number.isRequired,
  };

  return WithAmount;
};

export default withAmount;
