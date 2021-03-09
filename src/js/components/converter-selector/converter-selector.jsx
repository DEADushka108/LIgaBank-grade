import React from 'react';
import PropTypes from 'prop-types';
import {codes} from '../../utils/const';

const ConverterSelect = (props) => {
  const {onChange} = props;
  return <select className="converter__select" onChange={(evt) => {
    onChange(evt);
  }}>
    {codes.map((code) => {
      return <option key={code} value={code}>{code}</option>;
    })
    };
  </select>;
};

ConverterSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ConverterSelect;
