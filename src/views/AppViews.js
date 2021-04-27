import React from 'react';
import logo from '../img/story_book.png';

export class Wrapper extends React.Component {
  render() {
    const {app} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          {app}
        </header>
      </div>
    );
  }
}

export class ConnectAccount extends React.Component {
  render() {
    return (
      <div>
        <p>
            Please wait while we connect to your account.
            If this takes more than a few seconds, there may be something wrong.
        </p>
       </div>
    )
  }
}

export class FundAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amt: props.defaultFundAmtStandard};
  }

  render() {
    const {addr, bal, standardUnit, defaultFundAmtStandard, parent} = this.props;
    return (
      <div>
        <h1>Fund account</h1>
        <br />
        Address: {addr}
        <br />
        Balance: {bal} {standardUnit}
        <hr />
        Would you like to fund your account with additional {standardUnit}?
        <br />
        (This only works on certain devnets)
        <br />
        <input
          type='number'
          placeholder={defaultFundAmtStandard}
          onChange={(e) => this.setState({amt: e.currentTarget.value})}
        />
        <button id ="test" onClick={() => parent.fundAccount(this.state.amt)}>Fund Account</button>
        <button id="test" onClick={() => parent.skipFundAccount()}>Skip</button>
      </div>
    );
  }
}

export class SelectRole extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
          <div >
              <img id="rps"src={logo} alt=""/>
          </div>
          <div id="column">
              <p>Create Your StoryBook</p>
              <button id="button_style" onClick={() => parent.selectAlice()}>Create Story</button>
          </div>
        <div id="column">
              <p>Read and Share Stories</p>
              <button id="button_style" onClick={() => parent.selectBob()}>Read && Share</button>
        </div>
          <div>
              <p><em> Designed with &hearts; by 3EInteractive</em></p>
        </div>
      </div>
    );
  }
}
