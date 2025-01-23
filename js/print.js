function getPrint() {
    htmlPHP += '//escreve "' + exampleText + '" na tela\necho "' + exampleText + '";';
    htmlJavascript += '//escreve "' + exampleText + '" dentro do <body>\n  document.body.innerHTML = \'' + exampleText + '\';';
    htmlDart += '//escreve "' + exampleText + '" nos logs\n  print(\''+exampleText+'\');';
    htmlCpp += 'std::cout << "' + exampleText + '" << std::endl;';
    htmlCsharp += 'Console.WriteLine("'+exampleText+'");';
    htmlPython += '#escreve "' + exampleText + '" nos logs\nprint("' + exampleText + '")';
    htmlJava += '//escreve "' + exampleText + '" nos logs\n    System.out.println("' + exampleText + '");';
}