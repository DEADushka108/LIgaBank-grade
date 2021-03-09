import React from 'react';
import PropTypes from 'prop-types';
import {currencyCodes} from '../../utils/const';

const ConverterSelect = (props) => {
  const {onChange} = props;
  return <select className="converter__select" onChange={(evt) => {
    onChange(evt);
  }}>
    {currencyCodes.map((code) => {
      return <option key={code} value={code}>{code}</option>;
    })
    };
  </select>;
};

ConverterSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ConverterSelect;
