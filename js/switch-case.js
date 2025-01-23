function getSwitchCase() {
    htmlPHP += '$' + varName + ' = "Monday";\n\n';
    htmlPHP += 'switch ($' + varName + ') {\n';
    htmlPHP += '  case "Monday":\n';
    htmlPHP += '    echo "Today is Monday";\n';
    htmlPHP += '    break;\n';
    htmlPHP += '  case "Tuesday":\n';
    htmlPHP += '    echo "Today is Tuesday";\n';
    htmlPHP += '    break;\n';
    htmlPHP += '  default:\n';
    htmlPHP += '    echo "Have a nice day!";\n';
    htmlPHP += '}';

    htmlJavascript += 'var ' + varName + ' = "Monday";\n\n';
    htmlJavascript += '  switch (' + varName + ') {\n';
    htmlJavascript += '    case "Monday":\n';
    htmlJavascript += '      console.log("Today is Monday");\n';
    htmlJavascript += '      break;\n';
    htmlJavascript += '    case "Tuesday":\n';
    htmlJavascript += '      console.log("Today is Tuesday");\n';
    htmlJavascript += '      break;\n';
    htmlJavascript += '    default:\n';
    htmlJavascript += '      console.log("Have a nice day!");\n';
    htmlJavascript += '  }';

    htmlDart += 'String ' + varName + ' = "Monday";\n\n';
    htmlDart += '  switch (' + varName + ') {\n';
    htmlDart += '    case "Monday":\n';
    htmlDart += '      print("Today is Monday");\n';
    htmlDart += '      break;\n';
    htmlDart += '    case "Tuesday":\n';
    htmlDart += '      print("Today is Tuesday");\n';
    htmlDart += '      break;\n';
    htmlDart += '    default:\n';
    htmlDart += '      print("Have a nice day!");\n';
    htmlDart += '  }';

    htmlCpp += 'std::string ' + varName + ' = "Monday";\n\n';
    htmlCpp += '  if (' + varName + ' == "Monday") {\n';
    htmlCpp += '    std::cout << "Today is Monday" << std::endl;\n';
    htmlCpp += '  } else if (' + varName + ' == "Tuesday") {\n';
    htmlCpp += '    std::cout << "Today is Tuesday" << std::endl;\n';
    htmlCpp += '  } else {\n';
    htmlCpp += '    std::cout << "Have a nice day!" << std::endl;\n';
    htmlCpp += '  }';

    htmlCsharp += 'string ' + varName + ' = "Monday";\n\n';
    htmlCsharp += '    switch (' + varName + ') {\n';
    htmlCsharp += '      case "Monday":\n';
    htmlCsharp += '        Console.WriteLine("Today is Monday");\n';
    htmlCsharp += '        break;\n';
    htmlCsharp += '      case "Tuesday":\n';
    htmlCsharp += '        Console.WriteLine("Today is Tuesday");\n';
    htmlCsharp += '        break;\n';
    htmlCsharp += '      default:\n';
    htmlCsharp += '        Console.WriteLine("Have a nice day!");\n';
    htmlCsharp += '    }';

    htmlPython += '' + varName + ' = "Monday"\n\n';
    htmlPython += 'if ' + varName + ' == "Monday":\n';
    htmlPython += '  print("Today is Monday")\n';
    htmlPython += 'elif ' + varName + ' == "Tuesday":\n';
    htmlPython += '  print("Today is Tuesday")\n';
    htmlPython += 'else:\n';
    htmlPython += '  print("Have a nice day!")';

    htmlJava += 'String ' + varName + ' = "Monday";\n\n';
    htmlJava += '    switch (' + varName + ') {\n';
    htmlJava += '      case "Monday":\n';
    htmlJava += '        System.out.println("Today is Monday");\n';
    htmlJava += '        break;\n';
    htmlJava += '      case "Tuesday":\n';
    htmlJava += '        System.out.println("Today is Tuesday");\n';
    htmlJava += '        break;\n';
    htmlJava += '      default:\n';
    htmlJava += '        System.out.println("Have a nice day!");\n';
    htmlJava += '    }';
}
