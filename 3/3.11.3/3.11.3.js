function average2(elmt,) {
    var elmt = new Array();
    let i, j, el1, el2, l = arguments.length, leng = elmt.length;
    let sum = 0, count = 0;
    for (i = 0; i < l; i++) {
        for (j = 0; j < leng; j++) {
            el1 = arguments[i]
            el2 = elmt[i]
            if (typeof el1 == 'number' && typeof el2 == 'number') {
                window.document.writeln(el1, el2)
                sum += el1;
                sum += el2;
                count++
            }
        }
    }
    return sum / count;
}

