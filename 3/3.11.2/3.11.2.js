function average() {
    let l = arguments.length, i, sum;
    // if (arguments == Number) {
        for (i = 0; i < l; i++) {
            window.document.write(arguments[i] + ' ');
            sum += arguments[i];
            window.document.write(arguments[i] + ': ' + sum / l);
        }  
    // }
}
average(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
average(10, 20, 30, '40', 50, '60', 70, '80', 90, '100');