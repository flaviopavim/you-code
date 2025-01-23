function getTryCatch() {
    // PHP
    htmlPHP += '$' + varName + ' = 18;\n\n';
    htmlPHP += 'try {\n\n';
    htmlPHP += '  if ($' + varName + ' < 18) {\n';
    htmlPHP += '    echo "You are under 18 years old.";\n';
    htmlPHP += '  } elseif ($' + varName + ' >= 18 && $' + varName + ' < 65) {\n';
    htmlPHP += '    echo "You are an adult."; \n';
    htmlPHP += '  } else {\n';
    htmlPHP += '    echo "You are a senior."; \n';
    htmlPHP += '  }\n\n';
    htmlPHP += '} catch (Exception $e) {\n';
    htmlPHP += '  echo "Error occurred: " . $e->getMessage();\n';
    htmlPHP += '}';

    // JavaScript
    htmlJavascript += 'var ' + varName + ' = 18;\n\n';
    htmlJavascript += '  try {\n\n';
    htmlJavascript += '    if (' + varName + ' < 18) {\n';
    htmlJavascript += '      console.log("You are under 18 years old.");\n';
    htmlJavascript += '    } else if (' + varName + ' >= 18 && ' + varName + ' < 65) {\n';
    htmlJavascript += '      console.log("You are an adult.");\n';
    htmlJavascript += '    } else {\n';
    htmlJavascript += '      console.log("You are a senior.");\n';
    htmlJavascript += '    }\n\n';
    htmlJavascript += '  } catch (error) {\n';
    htmlJavascript += '    console.error("Error occurred: " + error.message);\n';
    htmlJavascript += '  }';

    // Dart
    htmlDart += 'int ' + varName + ' = 18;\n\n';
    htmlDart += '  try {\n\n';
    htmlDart += '    if (' + varName + ' < 18) {\n';
    htmlDart += '      print("You are under 18 years old.");\n';
    htmlDart += '    } else if (' + varName + ' >= 18 && ' + varName + ' < 65) {\n';
    htmlDart += '      print("You are an adult.");\n';
    htmlDart += '    } else {\n';
    htmlDart += '      print("You are a senior.");\n';
    htmlDart += '    }\n\n';
    htmlDart += '  } catch (e) {\n';
    htmlDart += '    print("Error occurred: $e");\n';
    htmlDart += '  }';

    // C++
    htmlCpp += 'int ' + varName + ' = 18;\n\n';
    htmlCpp += '  try {\n\n';
    htmlCpp += '    if (' + varName + ' < 18) {\n';
    htmlCpp += '      std::cout << "You are under 18 years old." << std::endl;\n';
    htmlCpp += '    } else if (' + varName + ' >= 18 && ' + varName + ' < 65) {\n';
    htmlCpp += '      std::cout << "You are an adult." << std::endl;\n';
    htmlCpp += '    } else {\n';
    htmlCpp += '      std::cout << "You are a senior." << std::endl;\n';
    htmlCpp += '    }\n\n';
    htmlCpp += '  } catch (const std::exception& e) {\n';
    htmlCpp += '    std::cerr << "Error occurred: " << e.what() << std::endl;\n';
    htmlCpp += '  }';

    // C# (CSharp)
    htmlCsharp += 'int ' + varName + ' = 18;\n\n';
    htmlCsharp += '    try {\n\n';
    htmlCsharp += '      if (' + varName + ' < 18) {\n';
    htmlCsharp += '        Console.WriteLine("You are under 18 years old.");\n';
    htmlCsharp += '      } else if (' + varName + ' >= 18 && ' + varName + ' < 65) {\n';
    htmlCsharp += '        Console.WriteLine("You are an adult.");\n';
    htmlCsharp += '      } else {\n';
    htmlCsharp += '        Console.WriteLine("You are a senior.");\n';
    htmlCsharp += '      }\n\n';
    htmlCsharp += '    } catch (Exception e) {\n';
    htmlCsharp += '      Console.WriteLine("Error occurred: " + e.Message);\n';
    htmlCsharp += '    }';

    // Python
    htmlPython += '' + varName + ' = 18\n\n';
    htmlPython += 'try:\n\n';
    htmlPython += '  if ' + varName + ' < 18:\n';
    htmlPython += '    print("You are under 18 years old.")\n';
    htmlPython += '  elif ' + varName + ' >= 18 and ' + varName + ' < 65:\n';
    htmlPython += '    print("You are an adult.")\n';
    htmlPython += '  else:\n';
    htmlPython += '    print("You are a senior.")\n\n';
    htmlPython += 'except Exception as e:\n\n';
    htmlPython += '  print(f"Error occurred: {e}")';

    // Java
    htmlJava += 'int ' + varName + ' = 18;\n\n';
    htmlJava += '    try {\n\n';
    htmlJava += '      if (' + varName + ' < 18) {\n';
    htmlJava += '        System.out.println("You are under 18 years old.");\n';
    htmlJava += '      } else if (' + varName + ' >= 18 && ' + varName + ' < 65) {\n';
    htmlJava += '        System.out.println("You are an adult.");\n';
    htmlJava += '      } else {\n';
    htmlJava += '        System.out.println("You are a senior.");\n';
    htmlJava += '      }\n\n';
    htmlJava += '    } catch (Exception e) {\n';
    htmlJava += '      System.out.println("Error occurred: " + e.getMessage());\n';
    htmlJava += '    }';
}