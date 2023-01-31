//Все работает, но нужно сделать апгрейд в виде проверки на строки, а то вторая часть тз не работает 
function average() {
    let i, el, l = arguments.length;
    let sum = 0, count = 0;
    for (i = 0; i < l; i++) {
        el = arguments[i]
        if (typeof el == 'number') {
            window.document.writeln(el)
            sum += el;
            count++
        }
    }
    return sum / count;
}

