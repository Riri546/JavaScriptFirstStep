function average() {
    let i, avg, l = arguments.length;
    let sum = 0;
        for (i = 0; i < l; i++) {
            sum = sum + arguments[i];
            window.document.writeln(arguments[i])
        }
        avg = sum / l;
        window.document.write('<p>', 'Длина = ' + l, '</p>')
        window.document.writeln('<p>', 'Сумма = ' + sum, '</p>')
        window.document.writeln('<p>', "Среднее арифметическое = " + avg, '</p>')
}