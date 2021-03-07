import React, {PureComponent} from 'react';
import {codes} from '../../utils/const';

const withCodes = (Component) => {
  class WithCodes extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        sellCode: codes[0],
        buyCode: codes[0],
      };

      this._handleSellCodeChange = this._handleSellCodeChange.bind(this);
      this._handleBuyCodeChange = this._handleBuyCodeChange.bind(this);
    }

    _handleSellCodeChange(evt) {
      this.setState({
        sellCode: evt.target.value
      });
    }

    _handleBuyCodeChange(evt){
      this.setState({
        buyCode: evt.target.value,
      });
    }

    render() {
      const {sellCode, buyCode} = this.state;

      return <Component
        {...this.props}
        sellCode={sellCode}
        buyCode={buyCode}
        onSellCodeChange={this._handleSellCodeChange}
        onBuyCodeChange={this._handleBuyCodeChange}
        />;
    }
  }

  WithCodes.proptypes = {};

  return WithCodes;
};

export default withCodes;
