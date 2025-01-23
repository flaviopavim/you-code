function getString() {

    htmlPHP += '$' + varName + ' = "' + exampleText + '";\necho $' + varName + ';';
    htmlJavascript += 'var ' + varName + ' = "' + exampleText + '";\n    console.log(' + varName + ');';
    htmlDart += 'String ' + varName + ' = "' + exampleText + '";\n  print(' + varName + ');';
    htmlCpp += 'std::string ' + varName + ' = "' + exampleText + '";\n  std::cout << ' + varName + ' << std::endl;';
    htmlCsharp += 'String ' + varName + ' = "' + exampleText + '";\n  Console.WriteLine(' + varName + ');';
    htmlPython += '' + varName + ' = "' + exampleText + '"\nprint(' + varName + ')';
    htmlJava += 'String ' + varName + ' = "' + exampleText + '";\n    System.out.println(' + varName + ');';

}