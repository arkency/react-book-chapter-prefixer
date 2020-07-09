import React, { useState } from 'react';

const prefixes = {
    'Germany': '+49',
    'Poland': '+48',
    'Serbia': '+381'
};

function Prefixer(props) {
  const [country, changeCountry] = useState(props.initialCountry || "Poland")

  const handleChange = e => {
    const newCountry = e.target.value;
    changeCountry(newCountry);
  }

  const countryItem = (country, index) =>
    <option value={country} key={index}>{country}</option>

  const prefix = prefixes[country];
  return (
    <div className="form-horizontal">
      <div className="form-group">
        <label htmlFor="selectbox" className="col-sm-3 control-label">Country</label>
        <div className="col-sm-3">
          <select className="form-control" id="selectbox" onChange={handleChange} value={country}>
            {Object.keys(prefixes).map(countryItem)}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="input-text" className="col-sm-3 control-label">Phone number</label>
        <div className="col-sm-3">
          <div className="input-group">
            <span className="input-group-addon">{prefix}</span>
            <input type="text" className="form-control" id="input-text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prefixer;
