//Все работает, но нужно сделать апгрейд в виде проверки на строки, а то вторая часть тз не работает 
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