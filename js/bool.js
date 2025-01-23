function getBool() {

    htmlPHP += '$' + varName + ' = true;\necho $' + varName + ' ? "true" : "false";';
    htmlJavascript += 'var ' + varName + ' = true;\n  console.log(' + varName + ');';
    htmlDart += 'bool ' + varName + ' = true;\n  print(' + varName + ');';
    htmlCpp += 'bool ' + varName + ' = true;\n  std::cout << (' + varName + ' ? "true" : "false") << std::endl;';
    htmlCsharp += 'bool ' + varName + ' = true;\n    Console.WriteLine(' + varName + ');';
    htmlPython += '' + varName + ' = True\nprint(' + varName + ')';
    htmlJava += 'boolean ' + varName + ' = true;\n    System.out.println(' + varName + ');';

}