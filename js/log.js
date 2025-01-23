function getLog() {
    htmlPHP += '//escreve "' + exampleText + '" na tela\necho "' + exampleText + '";';
    htmlJavascript += '//escreve "' + exampleText + '" nos logs\n  console.log(\'' + exampleText + '\');';
    htmlDart += '//escreve "' + exampleText + '" nos logs\n  print(\''+exampleText+'\');';
    htmlCpp += 'std::cout << "' + exampleText + '" << std::endl;';
    htmlCsharp += 'Console.WriteLine("' + exampleText + '");';
    htmlPython += '#escreve "' + exampleText + '" nos logs\nprint("' + exampleText + '")';
    htmlJava += '//escreve "' + exampleText + '" nos logs\n    System.out.println("' + exampleText + '");';
}