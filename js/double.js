function getDouble() {

    htmlPHP += '$' + varName + ' = 3.14159;\necho $' + varName + ';';
    htmlJavascript += 'var ' + varName + ' = 3.14159;\n  console.log(' + varName + ');';
    htmlDart += 'double ' + varName + ' = 3.14159;\n  print(' + varName + ');';
    htmlCpp += 'double ' + varName + ' = 3.14159;\n  std::cout << ' + varName + ' << std::endl;';
    htmlCsharp += 'double ' + varName + ' = 3.14159;\n    Console.WriteLine(' + varName + ');';
    htmlPython += '' + varName + ' = 3.14159\nprint(' + varName + ')';
    htmlJava += 'double ' + varName + ' = 3.14159;\n    System.out.println(' + varName + ');';

}