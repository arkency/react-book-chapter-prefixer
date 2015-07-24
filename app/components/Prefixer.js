import React from 'react';

let prefixes = {
    'Germany': '+49',
    'Poland': '+48',
    'Serbia': '+381'
};

class Prefixer extends React.Component {
  countryItem(country, index) {
    return (
      <option value={country} key={index}>{country}</option>
    );
  }

  render () {
    return (
      <div className="form-horizontal">
        <div className="form-group">
          <label for="selectbox" className="col-sm-3 control-label">Country</label>
          <div className="col-sm-3">
            <select className="form-control" id="selectbox">
              {Object.keys(prefixes).map(this.countryItem)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label for="input-text" className="col-sm-3 control-label">Phone number</label>
          <div className="col-sm-3">
            <div className="input-group">
              <span className="input-group-addon">+48</span>
              <input type="text" className="form-control" id="input-text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Prefixer;
