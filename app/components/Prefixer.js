import React from 'react';

class Prefixer extends React.Component {
  render () {
    return (
      <div className="form-horizontal">
        <div className="form-group">
          <label for="selectbox" className="col-sm-3 control-label">Country</label>
          <div className="col-sm-3">
            <select className="form-control" id="selectbox">
              <option value="Poland">Poland</option>
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
