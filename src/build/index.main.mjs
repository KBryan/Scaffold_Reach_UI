// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 128));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc3, ctc1, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc1, ctc3, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  
  
  
  const v18 = stdlib.protect(ctc0, interact.info, null);
  const v19 = stdlib.protect(ctc1, interact.request, null);
  const txn1 = await (ctc.sendrecv(1, 1, false, [ctc1], [v19], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:18:9:dot', stdlib.UInt_max, 0)]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:18:9:dot', stdlib.UInt_max, 0)]);
    const [v24] = txn1.data;
    const v27 = txn1.time;
    const v23 = txn1.from;
    
    stdlib.assert(true, {
      at: './index.rsh:18:9:dot',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:18:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:19:15:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:19:15:after expr stmt semicolon', stdlib.UInt_max, 1), v23, v24]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  stdlib.assert(true, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v34 = txn2.time;
  const v31 = txn2.from;
  stdlib.assert(true, {
    at: './index.rsh:27:9:dot',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  stdlib.assert(true, {
    at: './index.rsh:27:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, 2), [ctc3, ctc1, ctc1, ctc0], [v23, v24, v34, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, 2), v23, v24, v34]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:32:9:dot', stdlib.UInt_max, 2), v23, v24]);
    const [v39] = txn3.data;
    const v43 = txn3.time;
    const v38 = txn3.from;
    
    stdlib.assert(true, {
      at: './index.rsh:32:9:dot',
      fs: [],
      msg: null,
      who: 'Alice'
      });
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v42 = stdlib.addressEq(v23, v38);
    stdlib.assert(v42, {
      at: './index.rsh:32:9:dot',
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
    sim_r.nextSt = stdlib.digest(ctc2, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc2, []);
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v39] = txn3.data;
  const v43 = txn3.time;
  const v38 = txn3.from;
  stdlib.assert(true, {
    at: './index.rsh:32:9:dot',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  const v42 = stdlib.addressEq(v23, v38);
  stdlib.assert(v42, {
    at: './index.rsh:32:9:dot',
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
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3, ctc0]);
  
  
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v24] = txn1.data;
  const v27 = txn1.time;
  const v23 = txn1.from;
  stdlib.assert(true, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  stdlib.assert(true, {
    at: './index.rsh:18:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.want(v24), {
    at: './index.rsh:26:22:application',
    fs: ['at ./index.rsh:25:13:application call to [unknown function] (defined at: ./index.rsh:25:17:function exp)'],
    msg: 'want',
    who: 'Bob'
    });
  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, 2), [ctc3, ctc0, ctc0], [v23, v24, v27], [v24, []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, 1), v23, v24, v27]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:27:9:dot', stdlib.UInt_max, 1), v23, v24]);
    const [] = txn2.data;
    const v34 = txn2.time;
    const v31 = txn2.from;
    
    stdlib.assert(true, {
      at: './index.rsh:27:9:dot',
      fs: [],
      msg: null,
      who: 'Bob'
      });
    sim_r.txns.push({
      amt: v24,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './index.rsh:27:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    sim_r.nextSt = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:28:15:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24, v34]);
    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:28:15:after expr stmt semicolon', stdlib.UInt_max, 2), v23, v24]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [] = txn2.data;
  const v34 = txn2.time;
  const v31 = txn2.from;
  stdlib.assert(true, {
    at: './index.rsh:27:9:dot',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  stdlib.assert(true, {
    at: './index.rsh:27:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn3 = await (ctc.recv(3, 1, [ctc2], false, false));
  const [v39] = txn3.data;
  const v43 = txn3.time;
  const v38 = txn3.from;
  stdlib.assert(true, {
    at: './index.rsh:32:9:dot',
    fs: [],
    msg: null,
    who: 'Bob'
    });
  ;
  const v42 = stdlib.addressEq(v23, v38);
  stdlib.assert(v42, {
    at: './index.rsh:32:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  stdlib.protect(ctc1, await interact.got(v39), {
    at: './index.rsh:42:21:application',
    fs: ['at ./index.rsh:41:13:application call to [unknown function] (defined at: ./index.rsh:41:17:function exp)'],
    msg: 'got',
    who: 'Bob'
    });
  return;
  
  
  
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
  Bytecode: `0x6080604052604051610573380380610573833981016040819052610022916100f9565b341561002d57600080fd5b6040805182511515815260208084015151908201527f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d9910160405180910390a161009a604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33815260209182015151828201908152436040808401918252805160018187015293516001600160a01b03168482015291516060840152516080808401919091528151808403909101815260a090920190528051910120600055610196565b6000818303604081121561010b578182fd5b6101156040610158565b83518015158114610124578384fd5b81526020601f1983011215610137578283fd5b6101416020610158565b602094850151815293810193909352509092915050565b604051601f8201601f191681016001600160401b038111828210171561018e57634e487b7160e01b600052604160045260246000fd5b604052919050565b6103ce806101a56000396000f3fe60806040526004361061002d5760003560e01c80632438df7014610039578063f512f77e1461004e57610034565b3661003457005b600080fd5b61004c6100473660046102ad565b610061565b005b61004c61005c3660046102c4565b61017f565b604051610075906001908390602001610384565b6040516020818303038152906040528051906020012060001c6000541461009b57600080fd5b60008055346020820135146100af57600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516100de91906102ff565b60405180910390a1610113604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b610120602083018361028c565b6001600160a01b039081168252602092830135838301908152436040808501918252805160028188015294519093168484015290516060840152516080808401919091528151808403909101815260a090920190528051910120600055565b604051610193906002908390602001610384565b6040516020818303038152906040528051906020012060001c600054146101b957600080fd5b6000805534156101c857600080fd5b336101d6602083018361028c565b6001600160a01b0316146101e957600080fd5b6101f6602082018261028c565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610231573d6000803e3d6000fd5b507f6ca511835aec60423a26d24cdbe1d3b53c20c6d05a3c891aed1744e1f97974bf81604051610261919061032f565b60405180910390a16000805533ff5b80356001600160a01b038116811461028757600080fd5b919050565b60006020828403121561029d578081fd5b6102a682610270565b9392505050565b6000608082840312156102be578081fd5b50919050565b600061106082840312156102be578081fd5b6001600160a01b036102e782610270565b16825260208181013590830152604090810135910152565b6080810161030d82846102d6565b606083013580151580821461032157600080fd5b806060850152505092915050565b611060810161033e82846102d6565b60608201606084016000805b608081101561037a57823560ff8116808214610364578384fd5b855250602093840193929092019160010161034a565b5050505092915050565b828152608081016102a660208301846102d656fea26469706673582212207cc85f3d345f577060d1fc6228d7dde09e8abd552fb83ed084fd6728e0bb889d64736f6c63430008020033`,
  deployMode: `DM_firstMsg`
  };

export const _Connectors = {
  ETH: _ETH
  };

