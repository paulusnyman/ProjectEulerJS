/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
$(document).ready(() => {
    $('<select id=selTeht>' +
            [...Array(50).keys()].map(i => '<option> Tehtävä ' + (i + 1) + '</option>') +
            '</select>').appendTo('body');
    $('<button id=btnOk>Ok</button>').appendTo('body');
    $('<div id=res style="margin-top:10px;"></div>').appendTo('body');
    $('#btnOk').click(() => {
        switch ($('#selTeht').val()) {
            case 'Tehtävä 1':
                const sum=[...Array(1000).keys()]
                         .filter(i => i%5===0 || i%3===0)
                         .reduce((j,i)=>j+i, 0);
                $('#res').text('1000 pienempien 3 tai 5 jaollisten lukujen summa on ' + sum);
                /* ---------------------------------
                 * Tähän tulee tehtävän 1 koodi
                 * Vastaus divin res sisälle jqueryä hyödyntäen
                 * ---------------------------------
                 */
                break;
                /*
                 * ---------------------------------
                 * Tähän lisää caseja
                 * Kaikki tehtävät ratkaistava
                 * ---------------------------------
                 */
            case 'Tehtävä 2':
            
            break;
            
            case 'Tehtävä 50':
                /* ---Yksi tehtävä esimerkiksi--- */
                var start = new Date().getTime();
                var primeN = function (n) {
                    if (n < 1 || Math.round(n) !== n) {
                        return;
                    }
                    var count = 0;
                    loopOuter:
                            for (var i = 2; ; i++) {
                        for (var j = 2; j < i; j++) {
                            if (i % j === 0) {
                                continue loopOuter;
                            }
                        }
                        count++;
                        if (count === n) {
                            return i;
                        }
                    }
                };
                var isPrime = function (n) {
                    if (n < 2 || Math.round(n) !== n) {
                        return false;
                    }
                    for (var i = (n === 2 ? 3 : 2); i < n; i++) {
                        if (n % i === 0) {
                            return false;
                        }
                    }
                    return true;
                };
                [1e2, 1e3, 1e6].forEach(max => {
                    var num = 2;
                    var numbers_in_sum = [2];
                    for (var i = 1; ; i++) {
                        var sum = primeN(i);
                        if (sum >= max) {
                            break;
                        }
                        var numbers_in_sum_temp = [sum];
                        for (var j = i + 1; ; j++) {
                            var next = primeN(j);
                            if (sum + next >= max) {
                                break
                            }
                            numbers_in_sum_temp.push(next);
                            sum += next;
                            if (isPrime(sum) && j - i + 1 > numbers_in_sum.length) {
                                num = sum;
                                numbers_in_sum = numbers_in_sum_temp.slice();
                            }
                        }
                    }
                    var end = new Date().getTime();
                    var duration = new Date(end - start).toISOString().substr(11, 8);
                    $('<span>Alkuluku, joka saadaan mahdollisimman monen peräkkäisen alkulukujen summana ja on pienempi kuin ' + max + ', on ' + num +
                            '.<br/> Se saadaan tuloksesta ' + numbers_in_sum.join(' + ') +
                            '.<br/> Laskenta kesti ' + duration + '.<br/></br></span>').appendTo('#res');
                });
                break;
            default:
                /* ----------------------------
                 * Lopuksi tätä ei tarvita
                 * ----------------------------
                 */
                $('#res').text('En osaa tätä tehtävää!!!');
                break;
        }
    });
});