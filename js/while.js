function getWhile() {
    htmlPHP += '$' + indexName + ' = 0;\n\n';
    htmlPHP += 'while ($' + indexName + ' < 5) {\n';
    htmlPHP += '  echo $' + indexName + ';\n';
    htmlPHP += '  $' + indexName + '++;\n';
    htmlPHP += '}';

    htmlJavascript += 'var ' + indexName + ' = 0;\n\n';
    htmlJavascript += '  while (' + indexName + ' < 5) {\n';
    htmlJavascript += '    console.log(' + indexName + ');\n';
    htmlJavascript += '    ' + indexName + '++;\n';
    htmlJavascript += '  }';

    htmlDart += 'int ' + indexName + ' = 0;\n\n';
    htmlDart += '  while (' + indexName + ' < 5) {\n';
    htmlDart += '    print(' + indexName + ');\n';
    htmlDart += '    ' + indexName + '++;\n';
    htmlDart += '  }';

    htmlCpp += 'int ' + indexName + ' = 0;\n\n';
    htmlCpp += '  while (' + indexName + ' < 5) {\n';
    htmlCpp += '    cout << ' + indexName + 'i << endl;\n';
    htmlCpp += '    ' + indexName + '++;\n';
    htmlCpp += '  }';

    htmlCsharp += 'int ' + indexName + ' = 0;\n\n';
    htmlCsharp += '    while (' + indexName + ' < 5) {\n';
    htmlCsharp += '      Console.WriteLine(' + indexName + ');\n';
    htmlCsharp += '      ' + indexName + '++;\n';
    htmlCsharp += '    }';

    htmlPython += '' + indexName + ' = 0\n\n';
    htmlPython += 'while ' + indexName + ' < 5:\n';
    htmlPython += '  print(' + indexName + ')\n';
    htmlPython += '  ' + indexName + ' += 1';

    htmlJava += 'int ' + indexName + ' = 0;\n';
    htmlJava += '    while (' + indexName + ' < 5) {\n';
    htmlJava += '      System.out.println(' + indexName + ');\n';
    htmlJava += '      ' + indexName + '++;\n';
    htmlJava += '    }';
}