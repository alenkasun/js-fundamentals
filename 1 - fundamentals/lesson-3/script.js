var foo = 6 + "",
    bar = parseInt("34"),      // 34
    num = parseInt("34s76"),   // 34
    not = parseInt("s"),       // NaN
    f1  = parseInt("3.14");    // 3

 alert('foo = ' + foo + '  bar = ' + bar);
 alert('num = ' + num + '  not = ' + not);