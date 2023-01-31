function average2(elmt,) {
    var elmt = new Array();
    let i, j, el1, el2, l = arguments.length, leng = elmt.length;
    let sum = 0, count = 0;
    for (i = 0; i < l; i++) {
        for (j = 0; j < leng; j++) {
            el1 = arguments[i]
            el2 = elmt[i]
            if (typeof el1 == 'number' && typeof el2 == 'array') {
                window.document.writeln(el1, el2)
                sum += el1;
                sum += el2;
                count++
            }
        }
    }
    return sum / count;
}
function average2() {
    const cntAll = arguments.length;
    let sum = 0, cnt = 0, i, el, j, el2;
    for (i = 0; i < cntAll; i++) {
        el = arguments[i];
        switch(typeof el) {
            case 'number':
                sum += el;
                cnt++;
                break;
            case 'object':
                for (j = 0; j < el.length; j++) {
                    el2 = el[j];
                    if (typeof el2 == 'number') {
                        sum += el2;
                        cnt++;
                    }
                }
        }
    }
    return sum / cnt;
}
