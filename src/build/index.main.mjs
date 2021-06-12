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

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
  };
};

export async function Alice(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    skip: ctc2,
    tile: ctc0
  });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 7));
  const ctc9 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3));
  const ctc11 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc0, ctc0, ctc0, ctc8, ctc10, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc0, ctc0, ctc0, ctc8, ctc10]);
  const ctc13 = stdlib.T_Object({
    buildings: ctc8,
    phase: ctc0,
    resources: ctc10,
    roll: ctc0,
    round: ctc0,
    turn: ctc0,
    winner: ctc0
  });
  const ctc14 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc13, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc13]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc0, ctc13]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc0]);
  const ctc19 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6]);
  const ctc20 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc21 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);
  const ctc22 = stdlib.T_Tuple([ctc0, ctc0]);


  const v20 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.testaroonie, 'for Alice\'s interact field testaroonie');
  const v19 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');

  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:73:11:dot', stdlib.UInt_max, 0), [ctc0, ctc0], [v20, v19], [v19, []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

    sim_r.prevSt = stdlib.digest(ctc22, [stdlib.checkedBigNumberify('./index.rsh:73:11:dot', stdlib.UInt_max, 0), v20]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:73:11:dot', stdlib.UInt_max, 0)]);
    const [v25] = txn1.data;
    const v28 = txn1.time;
    const v24 = txn1.from;

    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
    });
    sim_r.nextSt = stdlib.digest(ctc20, [stdlib.checkedBigNumberify('./index.rsh:74:17:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25, v28]);
    sim_r.nextSt_noTime = stdlib.digest(ctc21, [stdlib.checkedBigNumberify('./index.rsh:74:17:after expr stmt semicolon', stdlib.UInt_max, 1), v24, v25]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:74:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;

    return sim_r;
  })));
  const [v25] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v35 = txn2.time;
  const v32 = txn2.from;
  ;
  const txn3 = await (ctc.recv(3, 0, [], false, false));
  const [] = txn3.data;
  const v42 = txn3.time;
  const v39 = txn3.from;
  ;
  const txn4 = await (ctc.sendrecv(4, 1, stdlib.checkedBigNumberify('./index.rsh:103:11:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc6, ctc0, ctc0], [v24, v25, v32, v39, v42, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn4) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

    sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:103:11:dot', stdlib.UInt_max, 3), v24, v25, v32, v39, v42]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc19, [stdlib.checkedBigNumberify('./index.rsh:103:11:dot', stdlib.UInt_max, 3), v24, v25, v32, v39]);
    const [v47] = txn4.data;
    const v50 = txn4.time;
    const v46 = txn4.from;

    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
    });
    const v49 = stdlib.addressEq(v24, v46);
    stdlib.assert(v49, {
      at: './index.rsh:103:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
    });

    const v105 = [stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)];
    const v112 = [v105, v105, v105, v105, v105, v105, v105];
    const v113 = [stdlib.checkedBigNumberify('./index.rsh:178:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:39:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:42:decimal', stdlib.UInt_max, 2)];
    const v116 = [v113, v113, v113];
    const v117 = {
      buildings: v112,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0),
      resources: v116,
      roll: stdlib.checkedBigNumberify('./index.rsh:197:19:decimal', stdlib.UInt_max, 4),
      round: stdlib.checkedBigNumberify('./index.rsh:195:20:decimal', stdlib.UInt_max, 0),
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)
    };
    const v104 = v117;
    const v322 = v50;

    if ((() => {
      const v156 = v104.winner;
      const v157 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));

      return v157;})()) {
      const v166 = v104.round;
      const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:29:application', stdlib.UInt_max, 489220), v166);
      const v168 = stdlib.mod(v167, stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 6));
      const v170 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:71:application', stdlib.UInt_max, 989424), v166);
      const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:256:100:decimal', stdlib.UInt_max, 6));
      const v172 = stdlib.add(v168, v171);
      const v173 = stdlib.add(v172, stdlib.checkedBigNumberify('./index.rsh:256:105:decimal', stdlib.UInt_max, 2));
      const v175 = v104.winner;
      const v177 = stdlib.add(v166, stdlib.checkedBigNumberify('./index.rsh:262:51:decimal', stdlib.UInt_max, 1));
      const v178 = v104.buildings;
      const v179 = v104.resources;
      const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:269:49:array ref', stdlib.UInt_max, 0)];
      const v182 = v181[stdlib.checkedBigNumberify('./index.rsh:269:52:array ref', stdlib.UInt_max, 0)];
      const v183 = stdlib.add(v182, stdlib.checkedBigNumberify('./index.rsh:269:58:decimal', stdlib.UInt_max, 1));
      const v186 = v181[stdlib.checkedBigNumberify('./index.rsh:270:52:array ref', stdlib.UInt_max, 1)];
      const v187 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:270:58:decimal', stdlib.UInt_max, 1));
      const v190 = v181[stdlib.checkedBigNumberify('./index.rsh:271:52:array ref', stdlib.UInt_max, 2)];
      const v191 = stdlib.add(v190, stdlib.checkedBigNumberify('./index.rsh:271:58:decimal', stdlib.UInt_max, 1));
      const v194 = v181[stdlib.checkedBigNumberify('./index.rsh:272:52:array ref', stdlib.UInt_max, 3)];
      const v195 = stdlib.add(v194, stdlib.checkedBigNumberify('./index.rsh:272:58:decimal', stdlib.UInt_max, 1));
      const v196 = [v183, v187, v191, v195];
      const v197 = stdlib.Array_set(v179, stdlib.checkedBigNumberify('./index.rsh:268:61:decimal', stdlib.UInt_max, 0), v196);
      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:225:21:after expr stmt semicolon', stdlib.UInt_max, 8), v24, v25, v32, v39, v173, v175, v177, v178, v197, v322]);
      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:225:21:after expr stmt semicolon', stdlib.UInt_max, 8), v24, v25, v32, v39, v173, v175, v177, v178, v197]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:225:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
    }
    else {
      sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:472:17:after expr stmt semicolon', stdlib.UInt_max, 6), v24, v25, v32, v39, v104, v322]);
      sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:472:17:after expr stmt semicolon', stdlib.UInt_max, 6), v24, v25, v32, v39, v104]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:472:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
    }
    return sim_r;
  })));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:103:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
  });
  const v54 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:157:65:application', stdlib.UInt_max, 6),
    rss: stdlib.checkedBigNumberify('./index.rsh:157:31:application', stdlib.UInt_max, 3)
  };
  const v55 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:158:53:application', stdlib.UInt_max, 5),
    rss: stdlib.checkedBigNumberify('./index.rsh:158:25:application', stdlib.UInt_max, 1)
  };
  const v56 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:159:67:application', stdlib.UInt_max, 2),
    rss: stdlib.checkedBigNumberify('./index.rsh:159:32:application', stdlib.UInt_max, 3)
  };
  const v57 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:160:65:application', stdlib.UInt_max, 3),
    rss: stdlib.checkedBigNumberify('./index.rsh:160:31:application', stdlib.UInt_max, 0)
  };
  const v58 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:161:67:application', stdlib.UInt_max, 7),
    rss: stdlib.checkedBigNumberify('./index.rsh:161:32:application', stdlib.UInt_max, 0)
  };
  const v59 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:162:67:application', stdlib.UInt_max, 4),
    rss: stdlib.checkedBigNumberify('./index.rsh:162:32:application', stdlib.UInt_max, 1)
  };
  const v60 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:163:66:application', stdlib.UInt_max, 1),
    rss: stdlib.checkedBigNumberify('./index.rsh:163:31:application', stdlib.UInt_max, 2)
  };
  const v61 = [v54, v55, v56, v57, v58, v59, v60];
  stdlib.protect(ctc1, await interact.seeMap(v61), {
    at: './index.rsh:174:28:application',
    fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:28:function exp)'],
    msg: 'seeMap',
    who: 'Alice'
  });

  const v105 = [stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)];
  const v112 = [v105, v105, v105, v105, v105, v105, v105];
  const v113 = [stdlib.checkedBigNumberify('./index.rsh:178:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:39:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:42:decimal', stdlib.UInt_max, 2)];
  const v116 = [v113, v113, v113];
  const v117 = {
    buildings: v112,
    phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0),
    resources: v116,
    roll: stdlib.checkedBigNumberify('./index.rsh:197:19:decimal', stdlib.UInt_max, 4),
    round: stdlib.checkedBigNumberify('./index.rsh:195:20:decimal', stdlib.UInt_max, 0),
    turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
    winner: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)
  };
  let v104 = v117;
  let v322 = v50;

  while ((() => {
    const v156 = v104.winner;
    const v157 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));

    return v157;})()) {
    const v166 = v104.round;
    const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:29:application', stdlib.UInt_max, 489220), v166);
    const v168 = stdlib.mod(v167, stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 6));
    const v170 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:71:application', stdlib.UInt_max, 989424), v166);
    const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:256:100:decimal', stdlib.UInt_max, 6));
    const v172 = stdlib.add(v168, v171);
    const v173 = stdlib.add(v172, stdlib.checkedBigNumberify('./index.rsh:256:105:decimal', stdlib.UInt_max, 2));
    const v175 = v104.winner;
    const v177 = stdlib.add(v166, stdlib.checkedBigNumberify('./index.rsh:262:51:decimal', stdlib.UInt_max, 1));
    const v178 = v104.buildings;
    const v179 = v104.resources;
    const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:269:49:array ref', stdlib.UInt_max, 0)];
    const v182 = v181[stdlib.checkedBigNumberify('./index.rsh:269:52:array ref', stdlib.UInt_max, 0)];
    const v183 = stdlib.add(v182, stdlib.checkedBigNumberify('./index.rsh:269:58:decimal', stdlib.UInt_max, 1));
    const v186 = v181[stdlib.checkedBigNumberify('./index.rsh:270:52:array ref', stdlib.UInt_max, 1)];
    const v187 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:270:58:decimal', stdlib.UInt_max, 1));
    const v190 = v181[stdlib.checkedBigNumberify('./index.rsh:271:52:array ref', stdlib.UInt_max, 2)];
    const v191 = stdlib.add(v190, stdlib.checkedBigNumberify('./index.rsh:271:58:decimal', stdlib.UInt_max, 1));
    const v194 = v181[stdlib.checkedBigNumberify('./index.rsh:272:52:array ref', stdlib.UInt_max, 3)];
    const v195 = stdlib.add(v194, stdlib.checkedBigNumberify('./index.rsh:272:58:decimal', stdlib.UInt_max, 1));
    const v196 = [v183, v187, v191, v195];
    const v197 = stdlib.Array_set(v179, stdlib.checkedBigNumberify('./index.rsh:268:61:decimal', stdlib.UInt_max, 0), v196);
    stdlib.protect(ctc1, await interact.log('Dice Roll Phase'), {
      at: './index.rsh:384:27:application',
      fs: ['at ./index.rsh:384:27:application call to [unknown function] (defined at: ./index.rsh:384:27:function exp)', 'at ./index.rsh:384:27:application call to [unknown function] (defined at: ./index.rsh:384:27:function exp)'],
      msg: 'log',
      who: 'Alice'
    });

    const v203 = {
      buildings: v178,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      resources: v197,
      roll: v173,
      round: v177,
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: v175
    };
    stdlib.protect(ctc1, await interact.seeGameState(v203), {
      at: './index.rsh:230:42:application',
      fs: ['at ./index.rsh:229:21:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:386:35:application call to "letPlayersSeeGameState" (defined at: ./index.rsh:228:13:function exp)'],
      msg: 'seeGameState',
      who: 'Alice'
    });

    stdlib.protect(ctc1, await interact.log('Building Phase'), {
      at: './index.rsh:390:27:application',
      fs: ['at ./index.rsh:390:27:application call to [unknown function] (defined at: ./index.rsh:390:27:function exp)', 'at ./index.rsh:390:27:application call to [unknown function] (defined at: ./index.rsh:390:27:function exp)'],
      msg: 'log',
      who: 'Alice'
    });

    const v221 = stdlib.protect(ctc3, await interact.placeBuilding(), {
      at: './index.rsh:392:68:application',
      fs: ['at ./index.rsh:391:19:application call to [unknown function] (defined at: ./index.rsh:391:23:function exp)'],
      msg: 'placeBuilding',
      who: 'Alice'
    });

    const txn5 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:394:15:dot', stdlib.UInt_max, 9), [ctc6, ctc0, ctc6, ctc6, ctc0, ctc0, ctc0, ctc8, ctc10, ctc0, ctc3], [v24, v25, v32, v39, v173, v175, v177, v178, v197, v322, v221], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, false, (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

      sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:394:15:dot', stdlib.UInt_max, 8), v24, v25, v32, v39, v173, v175, v177, v178, v197, v322]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:394:15:dot', stdlib.UInt_max, 8), v24, v25, v32, v39, v173, v175, v177, v178, v197]);
      const [v223] = txn5.data;
      const v226 = txn5.time;
      const v222 = txn5.from;

      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
      });
      const v225 = stdlib.addressEq(v24, v222);
      stdlib.assert(v225, {
        at: './index.rsh:394:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
      });
      let v227;
      const v228 = v223.skip;
      const v282 = {
        buildings: v178,
        phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
        resources: v197,
        roll: v173,
        round: v177,
        turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
        winner: v175
      };
      v227 = v282;
      sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:395:21:after expr stmt semicolon', stdlib.UInt_max, 9), v24, v25, v32, v39, v226, v227]);
      sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:395:21:after expr stmt semicolon', stdlib.UInt_max, 9), v24, v25, v32, v39, v227]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:395:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;

      return sim_r;
    })));
    const [v223] = txn5.data;
    const v226 = txn5.time;
    const v222 = txn5.from;
    ;
    const v225 = stdlib.addressEq(v24, v222);
    stdlib.assert(v225, {
      at: './index.rsh:394:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
    });
    let v227;
    const v228 = v223.skip;
    const v282 = {
      buildings: v178,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
      resources: v197,
      roll: v173,
      round: v177,
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: v175
    };
    v227 = v282;
    if (v228) {
      v227 = v282;
    }
    else {
      const v230 = v223.tile;
      const v231 = stdlib.ge(v230, stdlib.checkedBigNumberify('./index.rsh:306:42:decimal', stdlib.UInt_max, 0));
      const v233 = stdlib.lt(v230, stdlib.checkedBigNumberify('./index.rsh:16:18:decimal', stdlib.UInt_max, 7));
      const v234 = v231 ? v233 : false;
      if (v234) {
        const v237 = v178[v230];
        const v239 = v237[stdlib.checkedBigNumberify('./index.rsh:283:32:array ref', stdlib.UInt_max, 0)];
        const v240 = stdlib.eq(v239, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v241 = v240 ? stdlib.checkedBigNumberify('./index.rsh:283:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:283:51:decimal', stdlib.UInt_max, 0);
        const v242 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:282:36:decimal', stdlib.UInt_max, 3), v241);
        const v243 = v237[stdlib.checkedBigNumberify('./index.rsh:284:32:array ref', stdlib.UInt_max, 1)];
        const v244 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v245 = v244 ? stdlib.checkedBigNumberify('./index.rsh:284:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:284:51:decimal', stdlib.UInt_max, 0);
        const v246 = stdlib.sub(v242, v245);
        const v247 = v237[stdlib.checkedBigNumberify('./index.rsh:285:32:array ref', stdlib.UInt_max, 2)];
        const v248 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v249 = v248 ? stdlib.checkedBigNumberify('./index.rsh:285:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:51:decimal', stdlib.UInt_max, 0);
        const v250 = stdlib.sub(v246, v249);
        const v252 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:7:35:decimal', stdlib.UInt_max, 3));
        if (v252) {
          stdlib.protect(ctc1, await interact.log('It got within the third if condition.'), {
            at: './index.rsh:316:52:application',
            fs: ['at ./index.rsh:316:31:application call to [unknown function] (defined at: ./index.rsh:316:35:function exp)', 'at ./index.rsh:397:52:application call to "attemptBuildingPhase" (defined at: ./index.rsh:278:13:function exp)'],
            msg: 'log',
            who: 'Alice'
          });

          const v257 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:326:50:decimal', stdlib.UInt_max, 0));
          let v262;
          if (v257) {
            v262 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v262 = v239;
          }
          const v263 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:327:50:decimal', stdlib.UInt_max, 1));
          let v268;
          if (v263) {
            v268 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v268 = v243;
          }
          const v269 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:328:50:decimal', stdlib.UInt_max, 2));
          let v274;
          if (v269) {
            v274 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v274 = v247;
          }
          const v275 = [v262, v268, v274];
          const v277 = stdlib.Array_set(v178, v230, v275);
          const v281 = {
            buildings: v277,
            phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
            resources: v197,
            roll: v173,
            round: v177,
            turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
            winner: v175
          };
          v227 = v281;
        }
        else {
        }
      }
      else {
      }
    }
    stdlib.protect(ctc1, await interact.seeGameState(v227), {
      at: './index.rsh:230:42:application',
      fs: ['at ./index.rsh:229:21:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:398:35:application call to "letPlayersSeeGameState" (defined at: ./index.rsh:228:13:function exp)'],
      msg: 'seeGameState',
      who: 'Alice'
    });

    const txn6 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:467:15:dot', stdlib.UInt_max, 4), [ctc6, ctc0, ctc6, ctc6, ctc0, ctc13, ctc4], [v24, v25, v32, v39, v226, v227, 'test'], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc4], true, true, false, (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

      sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:467:15:dot', stdlib.UInt_max, 9), v24, v25, v32, v39, v226, v227]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:467:15:dot', stdlib.UInt_max, 9), v24, v25, v32, v39, v227]);
      const [v297] = txn6.data;
      const v300 = txn6.time;
      const v296 = txn6.from;

      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
      });
      const v299 = stdlib.addressEq(v24, v296);
      stdlib.assert(v299, {
        at: './index.rsh:467:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
      });
      const cv104 = v227;
      const cv322 = v300;

      (() => {
        const v104 = cv104;
        const v322 = cv322;

        if ((() => {
          const v156 = v104.winner;
          const v157 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));

          return v157;})()) {
          const v166 = v104.round;
          const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:29:application', stdlib.UInt_max, 489220), v166);
          const v168 = stdlib.mod(v167, stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 6));
          const v170 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:71:application', stdlib.UInt_max, 989424), v166);
          const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:256:100:decimal', stdlib.UInt_max, 6));
          const v172 = stdlib.add(v168, v171);
          const v173 = stdlib.add(v172, stdlib.checkedBigNumberify('./index.rsh:256:105:decimal', stdlib.UInt_max, 2));
          const v175 = v104.winner;
          const v177 = stdlib.add(v166, stdlib.checkedBigNumberify('./index.rsh:262:51:decimal', stdlib.UInt_max, 1));
          const v178 = v104.buildings;
          const v179 = v104.resources;
          const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:269:49:array ref', stdlib.UInt_max, 0)];
          const v182 = v181[stdlib.checkedBigNumberify('./index.rsh:269:52:array ref', stdlib.UInt_max, 0)];
          const v183 = stdlib.add(v182, stdlib.checkedBigNumberify('./index.rsh:269:58:decimal', stdlib.UInt_max, 1));
          const v186 = v181[stdlib.checkedBigNumberify('./index.rsh:270:52:array ref', stdlib.UInt_max, 1)];
          const v187 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:270:58:decimal', stdlib.UInt_max, 1));
          const v190 = v181[stdlib.checkedBigNumberify('./index.rsh:271:52:array ref', stdlib.UInt_max, 2)];
          const v191 = stdlib.add(v190, stdlib.checkedBigNumberify('./index.rsh:271:58:decimal', stdlib.UInt_max, 1));
          const v194 = v181[stdlib.checkedBigNumberify('./index.rsh:272:52:array ref', stdlib.UInt_max, 3)];
          const v195 = stdlib.add(v194, stdlib.checkedBigNumberify('./index.rsh:272:58:decimal', stdlib.UInt_max, 1));
          const v196 = [v183, v187, v191, v195];
          const v197 = stdlib.Array_set(v179, stdlib.checkedBigNumberify('./index.rsh:268:61:decimal', stdlib.UInt_max, 0), v196);
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:225:21:after expr stmt semicolon', stdlib.UInt_max, 8), v24, v25, v32, v39, v173, v175, v177, v178, v197, v322]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:225:21:after expr stmt semicolon', stdlib.UInt_max, 8), v24, v25, v32, v39, v173, v175, v177, v178, v197]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:225:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
        }
        else {
          sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:472:17:after expr stmt semicolon', stdlib.UInt_max, 6), v24, v25, v32, v39, v104, v322]);
          sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:472:17:after expr stmt semicolon', stdlib.UInt_max, 6), v24, v25, v32, v39, v104]);
          sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:472:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
        }})();
      return sim_r;
    })));
    const [v297] = txn6.data;
    const v300 = txn6.time;
    const v296 = txn6.from;
    ;
    const v299 = stdlib.addressEq(v24, v296);
    stdlib.assert(v299, {
      at: './index.rsh:467:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
    });
    const cv104 = v227;
    const cv322 = v300;

    v104 = cv104;
    v322 = cv322;

    continue;

  }
  const txn5 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:480:11:dot', stdlib.UInt_max, 5), [ctc6, ctc0, ctc6, ctc6, ctc13, ctc0, ctc0], [v24, v25, v32, v39, v104, v322, v18], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn5) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:480:11:dot', stdlib.UInt_max, 6), v24, v25, v32, v39, v104, v322]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:480:11:dot', stdlib.UInt_max, 6), v24, v25, v32, v39, v104]);
    const [v305] = txn5.data;
    const v308 = txn5.time;
    const v304 = txn5.from;

    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
    });
    const v307 = stdlib.addressEq(v24, v304);
    stdlib.assert(v307, {
      at: './index.rsh:480:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
    });
    const v309 = stdlib.mul(v25, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, 3));
    const v310 = v104.winner;
    const v311 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v313 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v314 = v313 ? v32 : v39;
    const v315 = v311 ? v24 : v314;
    sim_r.txns.push({
      amt: v309,
      kind: 'from',
      to: v315,
      tok: undefined
    });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
    })
    sim_r.nextSt = stdlib.digest(ctc17, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc17, []);
    sim_r.view = [ctc17, []];
    sim_r.isHalt = true;

    return sim_r;
  })));
  const [v305] = txn5.data;
  const v308 = txn5.time;
  const v304 = txn5.from;
  ;
  const v307 = stdlib.addressEq(v24, v304);
  stdlib.assert(v307, {
    at: './index.rsh:480:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
  });
  const v309 = stdlib.mul(v25, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, 3));
  const v310 = v104.winner;
  const v311 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
  const v313 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v314 = v313 ? v32 : v39;
  const v315 = v311 ? v24 : v314;
  ;
  return;





};
export async function Bob(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    skip: ctc2,
    tile: ctc0
  });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0]);


  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v25] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v25), {
    at: './index.rsh:81:33:application',
    fs: ['at ./index.rsh:80:15:application call to [unknown function] (defined at: ./index.rsh:80:19:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
  });

  const txn2 = await (ctc.sendrecv(2, 0, stdlib.checkedBigNumberify('./index.rsh:83:11:dot', stdlib.UInt_max, 2), [ctc6, ctc0, ctc0], [v24, v25, v28], [v25, []], [], true, true, false, (async (txn2) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:83:11:dot', stdlib.UInt_max, 1), v24, v25, v28]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:83:11:dot', stdlib.UInt_max, 1), v24, v25]);
    const [] = txn2.data;
    const v35 = txn2.time;
    const v32 = txn2.from;

    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
    });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:85:17:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v25, v32, v35]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:85:17:after expr stmt semicolon', stdlib.UInt_max, 2), v24, v25, v32]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:85:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;

    return sim_r;
  })));
  const [] = txn2.data;
  const v35 = txn2.time;
  const v32 = txn2.from;
  ;
  const txn3 = await (ctc.recv(3, 0, [], false, false));
  const [] = txn3.data;
  const v42 = txn3.time;
  const v39 = txn3.from;
  ;
  const txn4 = await (ctc.recv(4, 1, [ctc0], false, false));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:103:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
  });
  const v65 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:157:65:application', stdlib.UInt_max, 6),
    rss: stdlib.checkedBigNumberify('./index.rsh:157:31:application', stdlib.UInt_max, 3)
  };
  const v66 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:158:53:application', stdlib.UInt_max, 5),
    rss: stdlib.checkedBigNumberify('./index.rsh:158:25:application', stdlib.UInt_max, 1)
  };
  const v67 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:159:67:application', stdlib.UInt_max, 2),
    rss: stdlib.checkedBigNumberify('./index.rsh:159:32:application', stdlib.UInt_max, 3)
  };
  const v68 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:160:65:application', stdlib.UInt_max, 3),
    rss: stdlib.checkedBigNumberify('./index.rsh:160:31:application', stdlib.UInt_max, 0)
  };
  const v69 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:161:67:application', stdlib.UInt_max, 7),
    rss: stdlib.checkedBigNumberify('./index.rsh:161:32:application', stdlib.UInt_max, 0)
  };
  const v70 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:162:67:application', stdlib.UInt_max, 4),
    rss: stdlib.checkedBigNumberify('./index.rsh:162:32:application', stdlib.UInt_max, 1)
  };
  const v71 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:163:66:application', stdlib.UInt_max, 1),
    rss: stdlib.checkedBigNumberify('./index.rsh:163:31:application', stdlib.UInt_max, 2)
  };
  const v72 = [v65, v66, v67, v68, v69, v70, v71];
  stdlib.protect(ctc1, await interact.seeMap(v72), {
    at: './index.rsh:174:28:application',
    fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:28:function exp)'],
    msg: 'seeMap',
    who: 'Bob'
  });

  const v105 = [stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)];
  const v112 = [v105, v105, v105, v105, v105, v105, v105];
  const v113 = [stdlib.checkedBigNumberify('./index.rsh:178:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:39:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:42:decimal', stdlib.UInt_max, 2)];
  const v116 = [v113, v113, v113];
  const v117 = {
    buildings: v112,
    phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0),
    resources: v116,
    roll: stdlib.checkedBigNumberify('./index.rsh:197:19:decimal', stdlib.UInt_max, 4),
    round: stdlib.checkedBigNumberify('./index.rsh:195:20:decimal', stdlib.UInt_max, 0),
    turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
    winner: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)
  };
  let v104 = v117;
  let v322 = v50;

  while ((() => {
    const v156 = v104.winner;
    const v157 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));

    return v157;})()) {
    const v166 = v104.round;
    const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:29:application', stdlib.UInt_max, 489220), v166);
    const v168 = stdlib.mod(v167, stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 6));
    const v170 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:71:application', stdlib.UInt_max, 989424), v166);
    const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:256:100:decimal', stdlib.UInt_max, 6));
    const v172 = stdlib.add(v168, v171);
    const v173 = stdlib.add(v172, stdlib.checkedBigNumberify('./index.rsh:256:105:decimal', stdlib.UInt_max, 2));
    const v175 = v104.winner;
    const v177 = stdlib.add(v166, stdlib.checkedBigNumberify('./index.rsh:262:51:decimal', stdlib.UInt_max, 1));
    const v178 = v104.buildings;
    const v179 = v104.resources;
    const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:269:49:array ref', stdlib.UInt_max, 0)];
    const v182 = v181[stdlib.checkedBigNumberify('./index.rsh:269:52:array ref', stdlib.UInt_max, 0)];
    const v183 = stdlib.add(v182, stdlib.checkedBigNumberify('./index.rsh:269:58:decimal', stdlib.UInt_max, 1));
    const v186 = v181[stdlib.checkedBigNumberify('./index.rsh:270:52:array ref', stdlib.UInt_max, 1)];
    const v187 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:270:58:decimal', stdlib.UInt_max, 1));
    const v190 = v181[stdlib.checkedBigNumberify('./index.rsh:271:52:array ref', stdlib.UInt_max, 2)];
    const v191 = stdlib.add(v190, stdlib.checkedBigNumberify('./index.rsh:271:58:decimal', stdlib.UInt_max, 1));
    const v194 = v181[stdlib.checkedBigNumberify('./index.rsh:272:52:array ref', stdlib.UInt_max, 3)];
    const v195 = stdlib.add(v194, stdlib.checkedBigNumberify('./index.rsh:272:58:decimal', stdlib.UInt_max, 1));
    const v196 = [v183, v187, v191, v195];
    const v197 = stdlib.Array_set(v179, stdlib.checkedBigNumberify('./index.rsh:268:61:decimal', stdlib.UInt_max, 0), v196);
    const v207 = {
      buildings: v178,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      resources: v197,
      roll: v173,
      round: v177,
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: v175
    };
    stdlib.protect(ctc1, await interact.seeGameState(v207), {
      at: './index.rsh:230:42:application',
      fs: ['at ./index.rsh:229:21:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:386:35:application call to "letPlayersSeeGameState" (defined at: ./index.rsh:228:13:function exp)'],
      msg: 'seeGameState',
      who: 'Bob'
    });

    const txn5 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v223] = txn5.data;
    const v226 = txn5.time;
    const v222 = txn5.from;
    ;
    const v225 = stdlib.addressEq(v24, v222);
    stdlib.assert(v225, {
      at: './index.rsh:394:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
    });
    let v227;
    const v228 = v223.skip;
    const v282 = {
      buildings: v178,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
      resources: v197,
      roll: v173,
      round: v177,
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: v175
    };
    v227 = v282;
    if (v228) {
      v227 = v282;
    }
    else {
      const v230 = v223.tile;
      const v231 = stdlib.ge(v230, stdlib.checkedBigNumberify('./index.rsh:306:42:decimal', stdlib.UInt_max, 0));
      const v233 = stdlib.lt(v230, stdlib.checkedBigNumberify('./index.rsh:16:18:decimal', stdlib.UInt_max, 7));
      const v234 = v231 ? v233 : false;
      if (v234) {
        const v237 = v178[v230];
        const v239 = v237[stdlib.checkedBigNumberify('./index.rsh:283:32:array ref', stdlib.UInt_max, 0)];
        const v240 = stdlib.eq(v239, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v241 = v240 ? stdlib.checkedBigNumberify('./index.rsh:283:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:283:51:decimal', stdlib.UInt_max, 0);
        const v242 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:282:36:decimal', stdlib.UInt_max, 3), v241);
        const v243 = v237[stdlib.checkedBigNumberify('./index.rsh:284:32:array ref', stdlib.UInt_max, 1)];
        const v244 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v245 = v244 ? stdlib.checkedBigNumberify('./index.rsh:284:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:284:51:decimal', stdlib.UInt_max, 0);
        const v246 = stdlib.sub(v242, v245);
        const v247 = v237[stdlib.checkedBigNumberify('./index.rsh:285:32:array ref', stdlib.UInt_max, 2)];
        const v248 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v249 = v248 ? stdlib.checkedBigNumberify('./index.rsh:285:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:51:decimal', stdlib.UInt_max, 0);
        const v250 = stdlib.sub(v246, v249);
        const v252 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:7:35:decimal', stdlib.UInt_max, 3));
        if (v252) {
          const v257 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:326:50:decimal', stdlib.UInt_max, 0));
          let v262;
          if (v257) {
            v262 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v262 = v239;
          }
          const v263 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:327:50:decimal', stdlib.UInt_max, 1));
          let v268;
          if (v263) {
            v268 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v268 = v243;
          }
          const v269 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:328:50:decimal', stdlib.UInt_max, 2));
          let v274;
          if (v269) {
            v274 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v274 = v247;
          }
          const v275 = [v262, v268, v274];
          const v277 = stdlib.Array_set(v178, v230, v275);
          const v281 = {
            buildings: v277,
            phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
            resources: v197,
            roll: v173,
            round: v177,
            turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
            winner: v175
          };
          v227 = v281;
        }
        else {
        }
      }
      else {
      }
    }
    stdlib.protect(ctc1, await interact.seeGameState(v227), {
      at: './index.rsh:230:42:application',
      fs: ['at ./index.rsh:229:21:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:398:35:application call to "letPlayersSeeGameState" (defined at: ./index.rsh:228:13:function exp)'],
      msg: 'seeGameState',
      who: 'Bob'
    });

    const txn6 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v297] = txn6.data;
    const v300 = txn6.time;
    const v296 = txn6.from;
    ;
    const v299 = stdlib.addressEq(v24, v296);
    stdlib.assert(v299, {
      at: './index.rsh:467:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
    });
    const cv104 = v227;
    const cv322 = v300;

    v104 = cv104;
    v322 = cv322;

    continue;

  }
  const txn5 = await (ctc.recv(7, 1, [ctc0], false, false));
  const [v305] = txn5.data;
  const v308 = txn5.time;
  const v304 = txn5.from;
  ;
  const v307 = stdlib.addressEq(v24, v304);
  stdlib.assert(v307, {
    at: './index.rsh:480:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
  });
  const v309 = stdlib.mul(v25, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, 3));
  const v310 = v104.winner;
  const v311 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
  const v313 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v314 = v313 ? v32 : v39;
  const v315 = v311 ? v24 : v314;
  ;
  return;





};
export async function Carl(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    skip: ctc2,
    tile: ctc0
  });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Address;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc6]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc6, ctc0, ctc6]);


  const v20 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v25] = txn1.data;
  const v28 = txn1.time;
  const v24 = txn1.from;
  ;
  const txn2 = await (ctc.recv(2, 0, [], false, false));
  const [] = txn2.data;
  const v35 = txn2.time;
  const v32 = txn2.from;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v25), {
    at: './index.rsh:88:33:application',
    fs: ['at ./index.rsh:87:15:application call to [unknown function] (defined at: ./index.rsh:87:19:function exp)'],
    msg: 'acceptWager',
    who: 'Carl'
  });

  const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('./index.rsh:90:11:dot', stdlib.UInt_max, 3), [ctc6, ctc0, ctc6, ctc0], [v24, v25, v32, v35], [v25, []], [], true, true, false, (async (txn3) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };

    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:90:11:dot', stdlib.UInt_max, 2), v24, v25, v32, v35]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:90:11:dot', stdlib.UInt_max, 2), v24, v25, v32]);
    const [] = txn3.data;
    const v42 = txn3.time;
    const v39 = txn3.from;

    sim_r.txns.push({
      amt: v25,
      kind: 'to',
      tok: undefined
    });
    sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:92:17:after expr stmt semicolon', stdlib.UInt_max, 3), v24, v25, v32, v39, v42]);
    sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:92:17:after expr stmt semicolon', stdlib.UInt_max, 3), v24, v25, v32, v39]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:92:17:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;

    return sim_r;
  })));
  const [] = txn3.data;
  const v42 = txn3.time;
  const v39 = txn3.from;
  ;
  const txn4 = await (ctc.recv(4, 1, [ctc0], false, false));
  const [v47] = txn4.data;
  const v50 = txn4.time;
  const v46 = txn4.from;
  ;
  const v49 = stdlib.addressEq(v24, v46);
  stdlib.assert(v49, {
    at: './index.rsh:103:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Carl'
  });
  const v76 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:157:65:application', stdlib.UInt_max, 6),
    rss: stdlib.checkedBigNumberify('./index.rsh:157:31:application', stdlib.UInt_max, 3)
  };
  const v77 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:158:53:application', stdlib.UInt_max, 5),
    rss: stdlib.checkedBigNumberify('./index.rsh:158:25:application', stdlib.UInt_max, 1)
  };
  const v78 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:159:67:application', stdlib.UInt_max, 2),
    rss: stdlib.checkedBigNumberify('./index.rsh:159:32:application', stdlib.UInt_max, 3)
  };
  const v79 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:160:65:application', stdlib.UInt_max, 3),
    rss: stdlib.checkedBigNumberify('./index.rsh:160:31:application', stdlib.UInt_max, 0)
  };
  const v80 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:161:67:application', stdlib.UInt_max, 7),
    rss: stdlib.checkedBigNumberify('./index.rsh:161:32:application', stdlib.UInt_max, 0)
  };
  const v81 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:162:67:application', stdlib.UInt_max, 4),
    rss: stdlib.checkedBigNumberify('./index.rsh:162:32:application', stdlib.UInt_max, 1)
  };
  const v82 = {
    roll: stdlib.checkedBigNumberify('./index.rsh:163:66:application', stdlib.UInt_max, 1),
    rss: stdlib.checkedBigNumberify('./index.rsh:163:31:application', stdlib.UInt_max, 2)
  };
  const v83 = [v76, v77, v78, v79, v80, v81, v82];
  stdlib.protect(ctc1, await interact.seeMap(v83), {
    at: './index.rsh:174:28:application',
    fs: ['at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:28:function exp)'],
    msg: 'seeMap',
    who: 'Carl'
  });

  const v105 = [stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)];
  const v112 = [v105, v105, v105, v105, v105, v105, v105];
  const v113 = [stdlib.checkedBigNumberify('./index.rsh:178:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:36:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:39:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:178:42:decimal', stdlib.UInt_max, 2)];
  const v116 = [v113, v113, v113];
  const v117 = {
    buildings: v112,
    phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0),
    resources: v116,
    roll: stdlib.checkedBigNumberify('./index.rsh:197:19:decimal', stdlib.UInt_max, 4),
    round: stdlib.checkedBigNumberify('./index.rsh:195:20:decimal', stdlib.UInt_max, 0),
    turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
    winner: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0)
  };
  let v104 = v117;
  let v322 = v50;

  while ((() => {
    const v156 = v104.winner;
    const v157 = stdlib.eq(v156, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));

    return v157;})()) {
    const v166 = v104.round;
    const v167 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:29:application', stdlib.UInt_max, 489220), v166);
    const v168 = stdlib.mod(v167, stdlib.checkedBigNumberify('./index.rsh:256:59:decimal', stdlib.UInt_max, 6));
    const v170 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:256:71:application', stdlib.UInt_max, 989424), v166);
    const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:256:100:decimal', stdlib.UInt_max, 6));
    const v172 = stdlib.add(v168, v171);
    const v173 = stdlib.add(v172, stdlib.checkedBigNumberify('./index.rsh:256:105:decimal', stdlib.UInt_max, 2));
    const v175 = v104.winner;
    const v177 = stdlib.add(v166, stdlib.checkedBigNumberify('./index.rsh:262:51:decimal', stdlib.UInt_max, 1));
    const v178 = v104.buildings;
    const v179 = v104.resources;
    const v181 = v179[stdlib.checkedBigNumberify('./index.rsh:269:49:array ref', stdlib.UInt_max, 0)];
    const v182 = v181[stdlib.checkedBigNumberify('./index.rsh:269:52:array ref', stdlib.UInt_max, 0)];
    const v183 = stdlib.add(v182, stdlib.checkedBigNumberify('./index.rsh:269:58:decimal', stdlib.UInt_max, 1));
    const v186 = v181[stdlib.checkedBigNumberify('./index.rsh:270:52:array ref', stdlib.UInt_max, 1)];
    const v187 = stdlib.add(v186, stdlib.checkedBigNumberify('./index.rsh:270:58:decimal', stdlib.UInt_max, 1));
    const v190 = v181[stdlib.checkedBigNumberify('./index.rsh:271:52:array ref', stdlib.UInt_max, 2)];
    const v191 = stdlib.add(v190, stdlib.checkedBigNumberify('./index.rsh:271:58:decimal', stdlib.UInt_max, 1));
    const v194 = v181[stdlib.checkedBigNumberify('./index.rsh:272:52:array ref', stdlib.UInt_max, 3)];
    const v195 = stdlib.add(v194, stdlib.checkedBigNumberify('./index.rsh:272:58:decimal', stdlib.UInt_max, 1));
    const v196 = [v183, v187, v191, v195];
    const v197 = stdlib.Array_set(v179, stdlib.checkedBigNumberify('./index.rsh:268:61:decimal', stdlib.UInt_max, 0), v196);
    const v211 = {
      buildings: v178,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      resources: v197,
      roll: v173,
      round: v177,
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: v175
    };
    stdlib.protect(ctc1, await interact.seeGameState(v211), {
      at: './index.rsh:230:42:application',
      fs: ['at ./index.rsh:229:21:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:386:35:application call to "letPlayersSeeGameState" (defined at: ./index.rsh:228:13:function exp)'],
      msg: 'seeGameState',
      who: 'Carl'
    });

    const txn5 = await (ctc.recv(8, 1, [ctc3], false, false));
    const [v223] = txn5.data;
    const v226 = txn5.time;
    const v222 = txn5.from;
    ;
    const v225 = stdlib.addressEq(v24, v222);
    stdlib.assert(v225, {
      at: './index.rsh:394:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Carl'
    });
    let v227;
    const v228 = v223.skip;
    const v282 = {
      buildings: v178,
      phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
      resources: v197,
      roll: v173,
      round: v177,
      turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
      winner: v175
    };
    v227 = v282;
    if (v228) {
      v227 = v282;
    }
    else {
      const v230 = v223.tile;
      const v231 = stdlib.ge(v230, stdlib.checkedBigNumberify('./index.rsh:306:42:decimal', stdlib.UInt_max, 0));
      const v233 = stdlib.lt(v230, stdlib.checkedBigNumberify('./index.rsh:16:18:decimal', stdlib.UInt_max, 7));
      const v234 = v231 ? v233 : false;
      if (v234) {
        const v237 = v178[v230];
        const v239 = v237[stdlib.checkedBigNumberify('./index.rsh:283:32:array ref', stdlib.UInt_max, 0)];
        const v240 = stdlib.eq(v239, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v241 = v240 ? stdlib.checkedBigNumberify('./index.rsh:283:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:283:51:decimal', stdlib.UInt_max, 0);
        const v242 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:282:36:decimal', stdlib.UInt_max, 3), v241);
        const v243 = v237[stdlib.checkedBigNumberify('./index.rsh:284:32:array ref', stdlib.UInt_max, 1)];
        const v244 = stdlib.eq(v243, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v245 = v244 ? stdlib.checkedBigNumberify('./index.rsh:284:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:284:51:decimal', stdlib.UInt_max, 0);
        const v246 = stdlib.sub(v242, v245);
        const v247 = v237[stdlib.checkedBigNumberify('./index.rsh:285:32:array ref', stdlib.UInt_max, 2)];
        const v248 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v249 = v248 ? stdlib.checkedBigNumberify('./index.rsh:285:47:decimal', stdlib.UInt_max, 1) : stdlib.checkedBigNumberify('./index.rsh:285:51:decimal', stdlib.UInt_max, 0);
        const v250 = stdlib.sub(v246, v249);
        const v252 = stdlib.lt(v250, stdlib.checkedBigNumberify('./index.rsh:7:35:decimal', stdlib.UInt_max, 3));
        if (v252) {
          const v257 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:326:50:decimal', stdlib.UInt_max, 0));
          let v262;
          if (v257) {
            v262 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v262 = v239;
          }
          const v263 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:327:50:decimal', stdlib.UInt_max, 1));
          let v268;
          if (v263) {
            v268 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v268 = v243;
          }
          const v269 = stdlib.eq(v250, stdlib.checkedBigNumberify('./index.rsh:328:50:decimal', stdlib.UInt_max, 2));
          let v274;
          if (v269) {
            v274 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
          }
          else {
            v274 = v247;
          }
          const v275 = [v262, v268, v274];
          const v277 = stdlib.Array_set(v178, v230, v275);
          const v281 = {
            buildings: v277,
            phase: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2),
            resources: v197,
            roll: v173,
            round: v177,
            turn: stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1),
            winner: v175
          };
          v227 = v281;
        }
        else {
        }
      }
      else {
      }
    }
    stdlib.protect(ctc1, await interact.seeGameState(v227), {
      at: './index.rsh:230:42:application',
      fs: ['at ./index.rsh:229:21:application call to [unknown function] (defined at: ./index.rsh:229:36:function exp)', 'at ./index.rsh:398:35:application call to "letPlayersSeeGameState" (defined at: ./index.rsh:228:13:function exp)'],
      msg: 'seeGameState',
      who: 'Carl'
    });

    const txn6 = await (ctc.recv(9, 1, [ctc4], false, false));
    const [v297] = txn6.data;
    const v300 = txn6.time;
    const v296 = txn6.from;
    ;
    const v299 = stdlib.addressEq(v24, v296);
    stdlib.assert(v299, {
      at: './index.rsh:467:15:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Carl'
    });
    const cv104 = v227;
    const cv322 = v300;

    v104 = cv104;
    v322 = cv322;

    continue;

  }
  const txn5 = await (ctc.recv(7, 1, [ctc0], false, false));
  const [v305] = txn5.data;
  const v308 = txn5.time;
  const v304 = txn5.from;
  ;
  const v307 = stdlib.addressEq(v24, v304);
  stdlib.assert(v307, {
    at: './index.rsh:480:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Carl'
  });
  const v309 = stdlib.mul(v25, stdlib.checkedBigNumberify('./index.rsh:6:22:decimal', stdlib.UInt_max, 3));
  const v310 = v104.winner;
  const v311 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
  const v313 = stdlib.eq(v310, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v314 = v313 ? v32 : v39;
  const v315 = v311 ? v24 : v314;
  ;
  return;





};

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
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
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
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
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
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
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 254
  }, {
    count: 9,
    size: 286
  }, {
    count: 9,
    size: 318
  }, {
    count: 9,
    size: 358
  }, null, null, {
    count: 9,
    size: 662
  }, {
    count: 9,
    size: 647
  }, {
    count: 9,
    size: 658
  }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
pop
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
// "CheckPay"
// "./index.rsh:73:11:dot"
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
load 3
btoi
-
load 255
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
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
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
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
// "CheckPay"
// "./index.rsh:83:11:dot"
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
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
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
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
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
load 253
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
// "CheckPay"
// "./index.rsh:90:11:dot"
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
load 3
btoi
-
load 254
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
byte base64()
load 1
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
concat
gtxn 0 Sender
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 251
pop
// Handler 4
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
// compute state in HM_Check 3
int 3
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
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
// "CheckPay"
// "./index.rsh:103:11:dot"
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
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:103:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
int 0
itob
int 0
itob
concat
int 0
itob
concat
store 250
int 2
itob
int 2
itob
concat
int 2
itob
concat
int 2
itob
concat
store 249
load 250
dup
concat
load 250
concat
load 250
concat
load 250
concat
load 250
concat
load 250
concat
int 0
itob
concat
load 249
dup
concat
load 249
concat
concat
int 4
itob
concat
int 0
itob
concat
int 1
itob
concat
int 0
itob
concat
dup
store 248
int 296
int 304
substring3
btoi
dup
store 247
int 0
==
bz l0
load 248
int 280
int 288
substring3
btoi
store 246
int 489220
load 246
*
int 6
%
int 989424
load 246
*
int 6
%
+
int 2
+
store 245
load 246
int 1
+
store 244
load 248
substring 0 168
store 243
load 248
int 176
int 272
substring3
dup
store 242
substring 0 32
store 241
load 242
substring 0 0
load 241
substring 0 8
btoi
int 1
+
itob
load 241
substring 8 16
btoi
int 1
+
itob
concat
load 241
substring 16 24
btoi
int 1
+
itob
concat
load 241
substring 24 32
btoi
int 1
+
itob
concat
concat
load 242
substring 32 96
concat
store 240
byte base64()
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 245
itob
concat
load 247
itob
concat
load 244
itob
concat
load 243
concat
load 240
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 248
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
int 104
int 408
substring3
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 250
pop
// Handler 7
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
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
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
// "CheckPay"
// "./index.rsh:480:11:dot"
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
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:480:11:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 251
int 296
int 304
substring3
btoi
store 249
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 252
load 253
load 249
int 2
==
select
load 255
load 249
int 1
==
select
==
assert
gtxn 4 Amount
load 254
int 3
*
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
load 1
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
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 6
==
assert
load 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
dup
substring 112 120
btoi
store 250
dup
substring 120 128
btoi
store 249
dup
int 128
int 296
substring3
store 248
dup
int 296
int 392
substring3
store 247
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 9
store 246
pop
// Handler 8
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
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
itob
concat
load 250
itob
concat
load 249
itob
concat
load 248
concat
load 247
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
// "CheckPay"
// "./index.rsh:394:15:dot"
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
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:394:15:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 248
int 2
itob
concat
load 247
concat
load 251
itob
concat
load 249
itob
concat
int 1
itob
concat
load 250
itob
concat
store 244
byte base64()
load 1
==
assert
// compute state in HM_Set 9
int 9
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 244
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
int 104
int 408
substring3
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 4
store 250
pop
// Handler 9
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
// compute state in HM_Check 9
int 9
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
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
// "CheckPay"
// "./index.rsh:467:15:dot"
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
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:467:15:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
load 251
int 296
int 304
substring3
btoi
dup
store 249
int 0
==
bz l0
load 251
int 280
int 288
substring3
btoi
store 248
int 489220
load 248
*
int 6
%
int 989424
load 248
*
int 6
%
+
int 2
+
store 247
load 248
int 1
+
store 246
load 251
substring 0 168
store 245
load 251
int 176
int 272
substring3
dup
store 244
substring 0 32
store 243
load 244
substring 0 0
load 243
substring 0 8
btoi
int 1
+
itob
load 243
substring 8 16
btoi
int 1
+
itob
concat
load 243
substring 16 24
btoi
int 1
+
itob
concat
load 243
substring 24 32
btoi
int 1
+
itob
concat
concat
load 244
substring 32 96
concat
store 242
byte base64()
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 247
itob
concat
load 249
itob
concat
load 246
itob
concat
load 245
concat
load 242
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
byte base64()
load 1
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 0,
  viewSize: 0
};
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
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
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
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
        "internalType": "struct T6",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v35",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
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
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[3][7]",
                    "name": "_buildings",
                    "type": "uint256[3][7]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_phase",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256[4][3]",
                    "name": "_resources",
                    "type": "uint256[4][3]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_roll",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_round",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_turn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_winner",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v104",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v305",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              },
              {
                "internalType": "uint256[3][7]",
                "name": "v178",
                "type": "uint256[3][7]"
              },
              {
                "internalType": "uint256[4][3]",
                "name": "v197",
                "type": "uint256[4][3]"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "_skip",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tile",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v223",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v226",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[3][7]",
                    "name": "_buildings",
                    "type": "uint256[3][7]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_phase",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256[4][3]",
                    "name": "_resources",
                    "type": "uint256[4][3]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_roll",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_round",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_turn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_winner",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v227",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[4]",
                "name": "v297",
                "type": "uint8[4]"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v20",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v25",
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
    "name": "m1",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v35",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
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
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v47",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[3][7]",
                    "name": "_buildings",
                    "type": "uint256[3][7]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_phase",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256[4][3]",
                    "name": "_resources",
                    "type": "uint256[4][3]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_roll",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_round",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_turn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_winner",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v104",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v305",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              },
              {
                "internalType": "uint256[3][7]",
                "name": "v178",
                "type": "uint256[3][7]"
              },
              {
                "internalType": "uint256[4][3]",
                "name": "v197",
                "type": "uint256[4][3]"
              },
              {
                "internalType": "uint256",
                "name": "v322",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bool",
                    "name": "_skip",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_tile",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T25",
                "name": "v223",
                "type": "tuple"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
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
                "name": "v24",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v25",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v39",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v226",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256[3][7]",
                    "name": "_buildings",
                    "type": "uint256[3][7]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_phase",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256[4][3]",
                    "name": "_resources",
                    "type": "uint256[4][3]"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_roll",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_round",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_turn",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_winner",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T14",
                "name": "v227",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[4]",
                "name": "v297",
                "type": "uint8[4]"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611c16806100826000396000f3fe6080604052600436106100745760003560e01c8063740827961161004e57806374082796146100bb5780639532ef01146100ce578063c1d82339146100e1578063f01a4c09146100f45761007b565b806302516d04146100805780632438df70146100955780634e67938a146100a85761007b565b3661007b57005b600080fd5b61009361008e3660046113da565b610107565b005b6100936100a3366004611421565b610244565b6100936100b63660046113c3565b610372565b6100936100c93660046113ec565b61058d565b6100936100dc366004611410565b6107e6565b6100936100ef366004611432565b6108e8565b6100936101023660046113fe565b610a2f565b60405161011b9060069083906020016119f8565b6040516020818303038152906040528051906020012060001c6000541461014157600080fd5b60008055341561015057600080fd5b3361015e6020830183611329565b6001600160a01b03161461017157600080fd5b6105208101356001146101b5576105208101356002146101a05761019b6080820160608301611329565b6101b0565b6101b06060820160408301611329565b6101c2565b6101c26020820182611329565b6001600160a01b03166108fc6101dd60036020850135611b5a565b6040518115909202916000818181858888f19350505050158015610205573d6000803e3d6000fd5b507f7f61a0f5296b0dcf86f237916d217db62558ac1a544a9609549bc424fe1fb91c816040516102359190611812565b60405180910390a16000805533ff5b6040516102589060019083906020016119e4565b6040516020818303038152906040528051906020012060001c6000541461027e57600080fd5b600080553460208201351461029257600080fd5b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd816040516102c191906118c4565b60405180910390a160408051608081018252600080825260208083018290529282018190526060820152906102f890830183611329565b6001600160a01b03908116825260208381013581840190815233604080860191825243606080880191825282516002968101969096528751871692860192909252925190840152519092166080820152905160a082015260c0015b60408051601f1981840301815291905280516020909101206000555050565b604051610386906003908390602001611afd565b6040516020818303038152906040528051906020012060001c600054146103ac57600080fd5b600080556103b8610edd565b34156103c357600080fd5b336103d16020840184611329565b6001600160a01b0316146103e457600080fd5b805160009081905281516020908101829052825160409081018390528351828501805191909152845181518401528451815183015284518151606090810191909152855182516080908101919091528651835160a0908101919091528751845160c0908101919091528589018051600290819052815189018190528151880181905281518601528051858b01805191909152815181518a0152905181518801529451838a018051919091528051909701889052935186518601528551600493019290925284510185905283516001910152915190910191909152517ff6e34afb6465fd7984fcc4266456cf5bbdecd9d7bfa95fde9735fa8cdf93f568906104ec9084906117f6565b60405180910390a16104fc610f29565b6105096020840184611329565b81516001600160a01b03909116905280516020808501359101526105336060840160408501611329565b81516001600160a01b039091166040909101526105566080840160608501611329565b81516001600160a01b039091166060909101526080820151602080830180519290925290514391015261058881610b75565b505050565b6040516105a1906008908390602001611924565b6040516020818303038152906040528051906020012060001c600054146105c757600080fd5b600080556105d3610f60565b34156105de57600080fd5b336105ec6020840184611329565b6001600160a01b0316146105ff57600080fd5b6040805160e081810190925290830160076000835b828210156106555760408051606081810190925290808402860190600390839083908082843760009201919091525050508152600190910190602001610614565b505050506020828101805192909252905160029101526040805160608101909152610380830160036000835b828210156106c25760408051608081810190925290808402860190600490839083908082843760009201919091525050508152600190910190602001610681565b5050506020830180516040908101939093528051608080870135606090920191909152815160c08088013591909201528151600160a09182015282519087013591015251835250517faedbc7dda7510956154f2ecac6b1117dff96cddf699b5aee99265eed000d44ab90610737908490611830565b60405180910390a1610747610f73565b6107546020840184611329565b6001600160a01b03168152602080840135908201526107796060840160408501611329565b6001600160a01b031660408201526107976080840160608501611329565b6001600160a01b03166060820152436080820152815160a08201526040516107c6906009908390602001611a86565b60408051601f198184030181529190528051602090910120600055505050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461082357600080fd5b600080553460208201351461083757600080fd5b6040805182358152602080840135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16108a1604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338152602082810135818301908152436040808501918252805160019481019490945284516001600160a01b0316908401529051606083015251608082015260a001610353565b6040516108fc906002908390602001611ae9565b6040516020818303038152906040528051906020012060001c6000541461092257600080fd5b600080553460208201351461093657600080fd5b7fbf4aa970276d46255077ef1eb805aea9165d6a1a04bb37b99855f1f39bf029fd8160405161096591906118f4565b60405180910390a16040805160a08101825260008082526020808301829052928201819052606082018190526080820152906109a390830183611329565b6001600160a01b03168152602080830135908201526109c86060830160408401611329565b6001600160a01b039081166040838101918252336060808601918252436080808801918252845160036020808301919091528951891696820196909652948801519285019290925293518516908301525190921660a08301525160c082015260e001610353565b604051610a43906009908390602001611a71565b6040516020818303038152906040528051906020012060001c60005414610a6957600080fd5b600080553415610a7857600080fd5b33610a866020830183611329565b6001600160a01b031614610a9957600080fd5b7f5a915d55a6c68493a56e528b687e99c976f8c99f33bd2919aac850fc910677e181604051610ac8919061186f565b60405180910390a1610ad8610f29565b610ae56020830183611329565b81516001600160a01b0390911690528051602080840135910152610b0f6060830160408401611329565b81516001600160a01b03909116604090910152610b326080830160608401611329565b81516001600160a01b03909116606090910152610b5736839003830160a0840161134a565b6020808301805192909252905143910152610b7181610b75565b5050565b610b7d610fc4565b60208201515160c00151610d6b5760208201515160800151600290600690610ba890620f18f0611b5a565b610bb29190611b94565b60208401515160800151600690610bcc9062077704611b5a565b610bd69190611b94565b610be09190611b42565b610bea9190611b42565b815260208201515160800151610c0290600190611b42565b60208281019190915282015151604001515151610c2190600190611b42565b604082810151919091526020838101515190910151510151610c4590600190611b42565b6040828101516020908101929092529083015151810151510151610c6b90600190611b42565b60408281015181019190915260208301515101515160600151610c9090600190611b42565b604082810180516060019290925260208401515101519051610cb59190600090610dd2565b6060820152610cc2610ff2565b8251516001600160a01b03908116825283516020908101518184015284516040908101518316818501528551606090810151909316838501528451608085015281860180515160c09081015160a087015286840151908601528051515160e08601529285015161010085015291518101516101208401529051610d4a91600891849101611939565b60408051601f19818403018152919052805160209091012060005550610b71565b610d7361106c565b82515181516001600160a01b0391821690528351602090810151835182015284516040908101518451908416910152845160609081015184519316920191909152808401805151835160800152510151815160a0015261058881610e70565b610dda61108c565b60005b6003811015610e4257848160038110610e0657634e487b7160e01b600052603260045260246000fd5b6020020151828260038110610e2b57634e487b7160e01b600052603260045260246000fd5b602002015280610e3a81611b79565b915050610ddd565b5081818460038110610e6457634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b610e786110b9565b8151516001600160a01b0390811682528251602090810151818401528351604090810151831681850152845160609081015190931692840192909252835160809081015190840152835160a09081015190840152905161035391600691849101611a0d565b6040518060a00160405280610ef0611103565b8152602001610efd611121565b8152602001610f0a61114e565b8152602001610f1761108c565b8152602001610f2461116c565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101610f246111b5565b6040518060400160405280610f1761116c565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001610f2461116c565b60405180608001604052806000815260200160008152602001610fe561114e565b8152602001610f2461108c565b60405180610140016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611052611121565b815260200161105f61108c565b8152602001600081525090565b604051806040016040528061107f6110b9565b8152600060209091015290565b60405180606001604052806003905b6110a361114e565b81526020019060019003908161109b5790505090565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200161105f61116c565b60405180606001604052806003906020820280368337509192915050565b6040518060e001604052806007905b611138611103565b8152602001906001900390816111305790505090565b60405180608001604052806004906020820280368337509192915050565b6040518060e0016040528061117f611121565b81526020016000815260200161119361108c565b8152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528061105f61116c565b600067ffffffffffffffff8311156111e2576111e2611bca565b60208084026111f081611b11565b9250828487838701111561120357600080fd5b600092505b86831015611226578035825260019290920191908301908301611208565b505050509392505050565b80356001600160a01b038116811461124857600080fd5b919050565b6000601f838184011261125e578182fd5b61126860e0611b11565b8084866102a08701111561127a578485fd5b845b60078110156112b5578785830112611292578586fd5b61129e886003846111c8565b84526020909301926060919091019060010161127c565b50909695505050505050565b6000601f83818401126112d2578182fd5b6112dc6060611b11565b808486610180870111156112ee578485fd5b845b60038110156112b5578785830112611306578586fd5b611312886004846111c8565b8452602090930192608091909101906001016112f0565b60006020828403121561133a578081fd5b61134382611231565b9392505050565b60006104c0828403121561135c578081fd5b61136660e0611b11565b611370848461124d565b81526102a0830135602082015261138b846102c085016112c1565b60408201526104408301356060820152610460830135608082015261048083013560a08201526104a09092013560c083015250919050565b600060c082840312156113d4578081fd5b50919050565b600061058082840312156113d4578081fd5b600061056082840312156113d4578081fd5b60006105e082840312156113d4578081fd5b6000604082840312156113d4578081fd5b6000608082840312156113d4578081fd5b600060a082840312156113d4578081fd5b806000805b600781101561146b57606080848737948501828152949290920191600101611448565b5050505050565b806000805b600781101561146b57825185835b60038110156114a4578251825260209283019290910190600101611485565b5050506060949094019360209290920191600101611477565b806000805b600381101561146b576080808487379485018281529492909201916001016114c2565b806000805b600381101561146b57825185835b60048110156115175782518252602092830192909101906001016114f8565b50505060809490940193602092909201916001016114ea565b61153a8282611443565b6102a081810135908301526102c06115568184018284016114bd565b506104408181013590830152610460808201359083015261048080820135908301526104a090810135910152565b61158f828251611472565b60208101516102a083015260408101516115ad6102c08401826114e5565b506060810151610440830152608081015161046083015260a081015161048083015260c001516104a090910152565b6001600160a01b036115ed82611231565b1682526020810135602083015261160660408201611231565b6001600160a01b0316604083015261162060608201611231565b6001600160a01b0381166060840152506080810135608083015260a081013560a083015260c081013560c083015261165e60e0830160e08301611443565b61038061166f8184018284016114bd565b5061050090810135910152565b6001600160a01b0361168d82611231565b16825260208181013590830152604090810135910152565b6001600160a01b03806116b783611231565b16835260208201356020840152806116d160408401611231565b166040840152806116e460608401611231565b166060840152506116fb6080830160808301611530565b61054090810135910152565b6001600160a01b038061171983611231565b168352602082013560208401528061173360408401611231565b1660408401528061174660608401611231565b1660608401525060808101356080830152610b7160a0830160a08301611530565b6001600160a01b038061177983611231565b168352602082013560208401528061179360408401611231565b16604084015250606090810135910152565b6001600160a01b03806117b783611231565b16835260208201356020840152806117d160408401611231565b166040840152806117e460608401611231565b16606084015250608090810135910152565b60c0810161180482846117a5565b60a092830135919092015290565b610580810161182182846116a5565b61056092830135919092015290565b610560810161183f82846115dc565b6105208084013580151580821461185557600080fd5b808386015250505061054080840135818401525092915050565b6105e0810161187e8284611707565b6105608381019083016000805b60048110156118ba57833560ff81168082146118a5578384fd5b8452506020938401939092019160010161188b565b5050505092915050565b608081016118d2828461167c565b60608301358015158082146118e657600080fd5b806060850152505092915050565b60a081016119028284611767565b608083013580151580821461191657600080fd5b806080850152505092915050565b828152610540810161134360208301846115dc565b82815281516001600160a01b03166020820152610540810160208301516040830152604083015161197560608401826001600160a01b03169052565b5060608301516001600160a01b038116608084015250608083015160a083015260a083015160c083015260c083015160e083015260e08301516101006119bd81850183611472565b84015190506119d06103a08401826114e5565b506101208301516105208301529392505050565b82815260808101611343602083018461167c565b828152610580810161134360208301846116a5565b60006105808201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152806060850151166080840152506080830151611a5e60a0840182611584565b5060a08301516105608301529392505050565b82815261058081016113436020830184611707565b60006105808201905083825260018060a01b038084511660208401526020840151604084015280604085015116606084015280606085015116608084015250608083015160a083015260a0830151611ae160c0840182611584565b509392505050565b82815260a081016113436020830184611767565b82815260c0810161134360208301846117a5565b604051601f8201601f1916810167ffffffffffffffff81118282101715611b3a57611b3a611bca565b604052919050565b60008219821115611b5557611b55611bb4565b500190565b6000816000190483118215151615611b7457611b74611bb4565b500290565b6000600019821415611b8d57611b8d611bb4565b5060010190565b600082611baf57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206585c7fccf6b89e416cbcbf2614c7796daa3afd4ce7c76107fde0dba0bb2e6a464736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
  }
};

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
};

