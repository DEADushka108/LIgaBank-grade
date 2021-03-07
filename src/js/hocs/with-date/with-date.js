import moment from 'moment';
import React, {PureComponent} from 'react';

const withDate = (Component) => {
  class WithDate extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        date: moment().format('YYYY-MM-DD'),
        dateTo: moment().format('YYYY-MM-DD'),
        dateFrom: moment().day(-7).format('YYYY-MM-DD'),
      };

      this._handleDateChange = this._handleDateChange.bind(this);
    }

    _handleDateChange(evt) {
      this.setState({
        date: moment(evt.target.value).format('YYYY-MM-DD'),
      });
    }

    render() {
      const {date, dateFrom, dateTo} = this.state;

      return <Component
        {...this.props}
        date={date}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onDateChange={this._handleDateChange}
        />;
    }
  }

  WithDate.proptypes = {};

  return WithDate;
};

export default withDate;
