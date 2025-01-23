function getFor() {
  htmlPHP += 'for ($' + indexName + ' = 0; $' + indexName + ' < 5; $' + indexName + '++) {\n';
  htmlPHP += '  echo "The number is: $' + indexName + '<br>";\n';
  htmlPHP += '}';

  htmlJavascript += 'for (var ' + indexName + ' = 0; ' + indexName + ' < 5; ' + indexName + '++) {\n';
  htmlJavascript += '    console.log(`The number is: ${' + indexName + '}`);\n';
  htmlJavascript += '  }';

  htmlDart += 'for (int ' + indexName + ' = 0; ' + indexName + ' < 5; ' + indexName + '++) {\n';
  htmlDart += '    print("The number is: $' + indexName + '");\n';
  htmlDart += '  }';

  htmlCpp += 'for (int ' + indexName + ' = 0; ' + indexName + ' < 5; ' + indexName + '++) {\n';
  htmlCpp += '    cout << "The number is: " << ' + indexName + ' << endl;\n';
  htmlCpp += '  }';

  htmlCsharp += 'for (int ' + indexName + ' = 0; ' + indexName + ' < 5; ' + indexName + '++) {\n';
  htmlCsharp += '      Console.WriteLine($"The number is: {' + indexName + '}");\n';
  htmlCsharp += '    }';

  htmlPython += 'for i in range(5):\n';
  htmlPython += '  print(f"The number is: {i}")\n';

  htmlJava += 'for (int i = 0; i < 5; i++) {\n';
  htmlJava += '      System.out.println("The number is: " + i);\n';
  htmlJava += '    }';
}
