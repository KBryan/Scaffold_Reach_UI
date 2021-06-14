import React from 'react';
import {  Button, Text } from "rimble-ui";
import { ToastMessage } from 'rimble-ui';

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
                <ToastMessage message={"Please wait while we connect to your account.\n" +
                "                    If this takes more than a few seconds, there may be something wrong."} />

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
                Address:
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
                <Button onClick={() => parent.fundAccount(this.state.amt)}>Fund Account</Button>
                <Button onClick={() => parent.skipFundAccount()}>Skip</Button>
            </div>
        );
    }
}

export class SelectRole extends React.Component {
    render() {
        const {parent} = this.props;

        return (
            <div>
                <Text>
                    Please select a role:
                </Text>
                <Text>
                    <Button
                        onClick={() => parent.selectAlice()}
                    >Alice</Button>
                    <br /> Requests payment from Bob in order to reveal a secret.
                </Text>
                <Text>
                    <Button
                        onClick={() => parent.selectBob()}
                    >Bob</Button>
                    <br /> Pays Alice in order for her to reveal a secret.
                </Text>
            </div>
        );
    }
}