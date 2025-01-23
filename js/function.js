function getFunction() {
    
  htmlPHP += 'function ' + functionName + '() {\n';
  htmlPHP += '  return "' + exampleText + '";\n';
  htmlPHP += '}\n\n';
  htmlPHP += 'echo ' + functionName + '();';

  htmlJavascript += 'function ' + functionName + '() {\n';
  htmlJavascript += '    return "' + exampleText + '";\n';
  htmlJavascript += '  }\n\n';
  htmlJavascript += '  console.log(' + functionName + '());';

  htmlDart += 'String ' + functionName + '() {\n';
  htmlDart += '  return "' + exampleText + '";\n';
  htmlDart += '}\n\n';
  htmlDart += 'void main() {\n';
  htmlDart += '  print(' + functionName + '());\n';
  htmlDart += '}';

  htmlCpp += '#include <iostream>\n\n';
  htmlCpp += 'std::string ' + functionName + '() {\n';
  htmlCpp += '  return "' + exampleText + '";\n';
  htmlCpp += '}\n\n';
  htmlCpp += 'int main() {\n';
  htmlCpp += '  std::cout << ' + functionName + '() << std::endl;\n';
  htmlCpp += '  return 0;\n';
  htmlCpp += '}';

  htmlCsharp += 'using System;\n\n';
  htmlCsharp += 'class Program {\n\n';
  htmlCsharp += '  static string ' + functionName + '() {\n';
  htmlCsharp += '    return "' + exampleText + '";\n';
  htmlCsharp += '  }\n\n';
  htmlCsharp += '  static void Main() {\n';
  htmlCsharp += '    Console.WriteLine(' + functionName + '());\n';
  htmlCsharp += '  }\n\n';
  htmlCsharp += '}';

  htmlPython += 'def ' + functionName + '():\n';
  htmlPython += '  return "Hello from Python!"\n\n';
  htmlPython += 'print(' + functionName + '())';

  htmlJava += 'public class HelloWorld {\n\n';
  htmlJava += '  static String ' + functionName + '() {\n';
  htmlJava += '    return "' + exampleText + '";\n';
  htmlJava += '  }\n\n';
  htmlJava += '  public static void main(String[] args) {\n';
  htmlJava += '    System.out.println(' + functionName + '());\n';
  htmlJava += '  }\n\n';
  htmlJava += '}';
}