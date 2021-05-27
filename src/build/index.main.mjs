// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
  };
};

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
    },
    views: {
    }
  };
};

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc1, ctc4, ctc1, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc4, ctc1]);



  const v18 = stdlib.protect(ctc0, interact.info, null);
  const v19 = stdlib.protect(ctc1, interact.request, null);




  const txn1 = await (ctc.sendrecv(1, 1, false, [ctc1], [v19], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:15:9:dot', stdlib.UInt_max, 0)]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:15:9:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v27 = txn1.time;
    const v23 = txn1.from;

    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
    });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:16:15:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:16:15:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24]);
    sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:16:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;

    return sim_r;
  })));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  ;


  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v34 = txn2.time;
  const v31 = txn2.from;
  ;


  const txn3 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, 2), [ctc4, ctc1, ctc1, ctc0], [v23, v24, v34, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, 2), v23, v24, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:25:9:dot', stdlib.UInt_max, 2), v23, v24]);
    const [v39] = txn3.data;
    const v43 = txn3.time;
    const v38 = txn3.from;

    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
    });
    const v42 = stdlib.addressEq(v23, v38);
    stdlib.assert(v42, {
      at: './index.rsh:25:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
    });
    sim_r.txns.push({
      amt: v24,
      kind: 'from',
      to: v23,
      tok: undefined
    });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
    })
    sim_r.nextSt = stdlib.digest(ctc3, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc3, []);
    sim_r.view = [ctc2, [stdlib.checkedBigNumberify('./index.rsh:27:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;

    return sim_r;
  })));
  const [v39] = txn3.data;
  const v43 = txn3.time;
  const v38 = txn3.from;
  ;
  const v42 = stdlib.addressEq(v23, v38);
  stdlib.assert(v42, {
    at: './index.rsh:25:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
  });
  ;

  return;



};
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc3 = stdlib.T_Tuple([ctc0]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0]);







  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.want(v24), {
    at: './index.rsh:19:22:application',
    fs: ['at ./index.rsh:18:13:application call to [unknown function] (defined at: ./index.rsh:18:17:function exp)'],
    msg: 'want',
    who: 'Bob'
  });


  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, 2), [ctc4, ctc0, ctc0], [v23, v24, v27], [v24, []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, 1), v23, v24]);
    const [] = txn2.data;
    const v34 = txn2.time;
    const v31 = txn2.from;

    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
    });
    sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:21:15:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:21:15:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:21:15:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;

    return sim_r;
  })));
  const [] = txn2.data;
  const v34 = txn2.time;
  const v31 = txn2.from;
  ;


  const txn3 = await (ctc.recv(3, 1, [ctc2], false, false));
  const [v39] = txn3.data;
  const v43 = txn3.time;
  const v38 = txn3.from;
  ;
  const v42 = stdlib.addressEq(v23, v38);
  stdlib.assert(v42, {
    at: './index.rsh:25:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
  });
  ;
  stdlib.protect(ctc1, await interact.got(v39), {
    at: './index.rsh:35:21:application',
    fs: ['at ./index.rsh:34:13:application call to [unknown function] (defined at: ./index.rsh:34:17:function exp)'],
    msg: 'got',
    who: 'Bob'
  });

  return;



};

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 7,
    size: 97
  }, {
    count: 8,
    size: 129
  }, {
    count: 9,
    size: 257
  }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:15:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:20:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// CheckPay
// "./index.rsh:25:9:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./index.rsh:25:9:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
};
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[128]",
                "name": "v39",
                "type": "uint8[128]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v24",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[128]",
                "name": "v39",
                "type": "uint8[128]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610573380380610573833981016040819052610022916100f9565b341561002d57600080fd5b6040805182511515815260208084015151908201527f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d9910160405180910390a161009a604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33815260209182015151828201908152436040808401918252805160018187015293516001600160a01b03168482015291516060840152516080808401919091528151808403909101815260a090920190528051910120600055610196565b6000818303604081121561010b578182fd5b6101156040610158565b83518015158114610124578384fd5b81526020601f1983011215610137578283fd5b6101416020610158565b602094850151815293810193909352509092915050565b604051601f8201601f191681016001600160401b038111828210171561018e57634e487b7160e01b600052604160045260246000fd5b604052919050565b6103ce806101a56000396000f3fe60806040526004361061002d5760003560e01c80632438df7014610039578063f512f77e1461004e57610034565b3661003457005b600080fd5b61004c6100473660046102ad565b610061565b005b61004c61005c3660046102c4565b61017f565b604051610075906001908390602001610384565b6040516020818303038152906040528051906020012060001c6000541461009b57600080fd5b60008055346020820135146100af57600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516100de91906102ff565b60405180910390a1610113604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b610120602083018361028c565b6001600160a01b039081168252602092830135838301908152436040808501918252805160028188015294519093168484015290516060840152516080808401919091528151808403909101815260a090920190528051910120600055565b604051610193906002908390602001610384565b6040516020818303038152906040528051906020012060001c600054146101b957600080fd5b6000805534156101c857600080fd5b336101d6602083018361028c565b6001600160a01b0316146101e957600080fd5b6101f6602082018261028c565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610231573d6000803e3d6000fd5b507f6ca511835aec60423a26d24cdbe1d3b53c20c6d05a3c891aed1744e1f97974bf81604051610261919061032f565b60405180910390a16000805533ff5b80356001600160a01b038116811461028757600080fd5b919050565b60006020828403121561029d578081fd5b6102a682610270565b9392505050565b6000608082840312156102be578081fd5b50919050565b600061106082840312156102be578081fd5b6001600160a01b036102e782610270565b16825260208181013590830152604090810135910152565b6080810161030d82846102d6565b606083013580151580821461032157600080fd5b806060850152505092915050565b611060810161033e82846102d6565b60608201606084016000805b608081101561037a57823560ff8116808214610364578384fd5b855250602093840193929092019160010161034a565b5050505092915050565b828152608081016102a660208301846102d656fea264697066735822122007e779e2ec9375dd3a5566901686bd5ef98797a239cf6c67eeefac045f73d1c464736f6c63430008020033`,
  deployMode: `DM_firstMsg`,
  views: {
  }
};

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
};

