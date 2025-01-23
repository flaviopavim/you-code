function getFloat() {
    htmlPHP += '$' + varName + ' = 3.14159;\necho $' + varName + ';';
    htmlJavascript += 'var ' + varName + ' = 3.14159;\n  console.log(' + varName + ');';
    htmlDart += 'double ' + varName + ' = 3.14159;\n  print(' + varName + ');';
    htmlCpp += 'float ' + varName + ' = 3.14159f;\n  std::cout << ' + varName + ' << std::endl;';
    htmlCsharp += 'float ' + varName + ' = 3.14159f;\n    Console.WriteLine(' + varName + ');';
    htmlPython += varName + ' = 3.14159\nprint(' + varName + ')';
    htmlJava += 'float ' + varName + ' = 3.14159f;\n    System.out.println(' + varName + ');';
}
