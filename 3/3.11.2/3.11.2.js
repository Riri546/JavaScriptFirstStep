function average() {
    let l = arguments.length, i;
    if (arguments === Number) {
        for (i = 0; i < l; i++) {
            window.document.write(arguments[i] + ' ');
        }
        window.document.write((arguments + arguments[i]) / arguments.length);
    }
}
average(10, 20, 30, 40, 50, 60, 70, 80, 90, 100)
average(10, 20, 30, '40', 50, '60', 70, '80', 90, '100');