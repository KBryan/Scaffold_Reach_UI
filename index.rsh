'reach 0.1';
'use strict';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const Alice = {
        request:UInt,
        info:Bytes(128),
        log:Fun([UInt],Null)
};

const Bob = {
        want:Fun([UInt], Null),
        got:Fun([Bytes(128)], Null)
};


export const main =
    Reach.App(
        {
                deployMode: 'firstMsg'},
        [Participant('Alice', Alice),
                Participant('Bob', Bob)],
        (A, B) => {
                A.only(() => {
                        const request = declassify(interact.request);
                        interact.log(request);

                })
                A.publish(request);
                commit();

                B.only(() => {
                        interact.want(request); });
                B.pay(request);
                commit();

                A.only(() => {
                        const info = declassify(interact.info); });
                A.publish(info);
                transfer(request).to(A);
                commit();

                B.only(() => {
                        interact.got(info); });
                exit();
        } );
