function average() {
    let l = arguments.length, i;
    window.document.write('<ul>');
    for(i = 0; i < l; i++){
        window.document.write("<li>", arguments[i], "/li");
    window.document.write("</ul>");
    }
}
