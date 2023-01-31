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
