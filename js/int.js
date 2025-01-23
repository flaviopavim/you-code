function getInt() {
    htmlPHP += '$' + varName + ' = 42;\necho $' + varName + ';';
    htmlJavascript += 'var ' + varName + ' = 42;\n  console.log(' + varName + ');';
    htmlDart += 'int ' + varName + ' = 42;\n  print(' + varName + ');';
    htmlCpp += 'int ' + varName + ' = 42;\n  std::cout << ' + varName + ' << std::endl;';
    htmlCsharp += 'int ' + varName + ' = 42;\n    Console.WriteLine(' + varName + ');';
    htmlPython += '' + varName + ' = 42\nprint(' + varName + ')';
    htmlJava += 'int ' + varName + ' = 42;\n    System.out.println(' + varName + ');';
}