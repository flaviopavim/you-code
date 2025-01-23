function getChar() {

    htmlPHP += '$' + varName + ' = "A";\necho ' + varName + ';';
    htmlJavascript += 'var ' + varName + ' = "A";\n  console.log(' + varName + ');';
    htmlDart += 'String ' + varName + ' = "A";\n  print(' + varName + ');';
    htmlCpp += 'char ' + varName + ' = \'A\';\n  std::cout << ' + varName + ' << std::endl;';
    htmlCsharp += 'char ' + varName + ' = \'A\';\n    Console.WriteLine(' + varName + ');';
    htmlPython += '' + varName + ' = "A"\nprint(' + varName + ')';
    htmlJava += 'char ' + varName + ' = \'A\';\n    System.out.println(' + varName + ');';

}