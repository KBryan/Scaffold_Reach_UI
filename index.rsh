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
/*
He who dwells in the shelter of the Most High will rest in the shadow of the Almighty.
Psalm 91:1

Your unfailing love is better than life itself; how I praise you!
Psalm 63:3

Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ.
Ephesians 1:3


 */

const SOME_DATA = "Something";
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