function getAlert() {
    htmlPHP += '//escreve "' + exampleText + '" na tela\necho "' + exampleText + '";';
    htmlJavascript += '//escreve "' + exampleText + '" no alert\n  window.alert(\'' + exampleText + '\');';
    htmlDart += '//escreve "' + exampleText + '" nos logs\n  print(\''+exampleText+'\');';
    htmlCpp += `std::cout << "${exampleText}" << std::endl;`;
    htmlCsharp += 'MessageBox.Show("' + exampleText + '");';
    htmlPython += '#escreve "' + exampleText + '" nos logs\nprint("' + exampleText + '")';
    htmlJava += '//escreve "' + exampleText + '" nos logs\n    System.out.println("' + exampleText + '");';
}