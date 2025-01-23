//function getForeach() {
//    htmlPHP += `foreach ($${varName} as $${indexName} => $${varName}) {\n`;
//    htmlPHP += `  echo "The element is: $${indexName}<br>";\n`;
//    htmlPHP += `}`;
//
//    htmlJavascript += `for (const ${indexName} of ${varName}) {\n`;
//    htmlJavascript += `    console.log(\`The element is: $\{${indexName}\}\`);\n`;
//    htmlJavascript += `  }\n\n`;
//
//    htmlDart += `for (var ${indexName} in ${varName}) {\n`;
//    htmlDart += `    print("The element is: $${indexName}");\n`;
//    htmlDart += `  }`;
//
//    htmlCpp += `for (auto& ${indexName} : ${varName}) {\n`;
//    htmlCpp += `    cout << "The element is: " << ${indexName} << endl;\n`;
//    htmlCpp += `  }`;
//
//    htmlCsharp += `foreach (var ${indexName} in ${varName}) {\n`;
//    htmlCsharp += `      Console.WriteLine($"The element is: ${indexName}");\n`;
//    htmlCsharp += `    }`;
//
//    htmlPython += `for ${indexName} in ${varName}:\n`;
//    htmlPython += `  print(f"The element is: {${indexName}}")`;
//
//    htmlJava += `for (${className} ${varName} : ${varName}) {\n`;
//    htmlJava += `      System.out.println("The element is: " + ${indexName});\n`;
//    htmlJava += `    }`;
//}


function getForeach() {

    htmlPHP += `$${varName} = array("first", "second", "third");\n\n`;
    htmlPHP += `foreach ($${varName} as $${indexName}) {\n`;
    htmlPHP += `  echo "The element is: $${indexName}<br>";\n`;
    htmlPHP += `}\n`;

    htmlJavascript += `const ${varName} = ["first", "second", "third"];\n\n`;
    htmlJavascript += `  for (const ${indexName} of ${varName}) {\n`;
    htmlJavascript += `    console.log(\`The element is: \${${indexName}}\`);\n`;
    htmlJavascript += `  }\n`;

    htmlDart += `var ${varName} = ["first", "second", "third"];\n\n`;
    htmlDart += `  for (var ${indexName} in ${varName}) {\n`;
    htmlDart += `    print("The element is: $${indexName}");\n`;
    htmlDart += `  }\n`;

    htmlCpp += `std::vector<std::string> ${varName} = {"first", "second", "third"};\n\n`;
    htmlCpp += `  for (const auto& ${indexName} : ${varName}) {\n`;
    htmlCpp += `    std::cout << "The element is: " << ${indexName} << std::endl;\n`;
    htmlCpp += `  }\n`;

    htmlCsharp += `var ${varName} = new List<string> { "first", "second", "third" };\n\n`;
    htmlCsharp += `    foreach (var ${indexName} in ${varName}) {\n`;
    htmlCsharp += `      Console.WriteLine($"The element is: ${indexName}");\n`;
    htmlCsharp += `    }\n`;

    htmlPython += `${varName} = ["first", "second", "third"]\n\n`;
    htmlPython += `for ${indexName} in ${varName}:\n`;
    htmlPython += `  print(f"The element is: {${indexName}}")\n`;

    htmlJava += `List<String> ${varName} = Arrays.asList("first", "second", "third");\n\n`;
    htmlJava += `    for (String ${indexName} : ${varName}) {\n`;
    htmlJava += `      System.out.println("The element is: " + ${indexName});\n`;
    htmlJava += `    }\n`;
}