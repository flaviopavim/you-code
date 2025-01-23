function getJson() {
    
    // Exemplo de código PHP com json_encode e json_decode
    htmlPHP += `$${varName} = array('name' => 'John', 'age' => 30, 'city' => 'New York');\n\n`;
    htmlPHP += `$json = json_encode($${varName});\n\n`;
    htmlPHP += `echo "JSON: $json\\n";\n\n`;
    htmlPHP += `$newObject = json_decode($json, true);\n\n`;
    htmlPHP += `foreach ($newObject as $key => $value) {\n`;
    htmlPHP += `  echo "The element is: $key => $value\\n";\n`;
    htmlPHP += `}`;

    // Exemplo de código JavaScript (já existente)
    htmlJavascript += `const ${varName} = { name: "John", age: 30, city: "New York" };\n\n`;
    htmlJavascript += `  const json = JSON.stringify(${varName});\n\n`;
    htmlJavascript += `  console.log(\`JSON: \${json}\`);\n\n`;
    htmlJavascript += `  const newObject = JSON.parse(json);\n\n`;
    htmlJavascript += `  for (const ${indexName} in newObject) {\n`;
    htmlJavascript += `    console.log(\`The element is: \${${indexName}} => \${newObject[${indexName}]}\`);\n`;
    htmlJavascript += `  }`;

    // Exemplo de código Dart
//    htmlDart += `import 'dart:convert';\n\n`;
//    htmlDart += `  void main() {\n`;
//    htmlDart += `    var ${varName} = {'name': 'John', 'age': 30, 'city': 'New York'};\n`;
//    htmlDart += `    String json = jsonEncode(${varName});\n`;
//    htmlDart += `    print('JSON: \$json');\n`;
//    htmlDart += `    Map<String, dynamic> newObject = jsonDecode(json);\n`;
//    htmlDart += `    newObject.forEach((key, value) {\n`;
//    htmlDart += `      print('The element is: \$key => \$value');\n`;
//    htmlDart += `    });\n`;
//    htmlDart += `  }`;

    // Exemplo de código C++
//    htmlCpp += `// Exemplo em C++\n`;
//    htmlCpp += `#include <iostream>\n`;
//    htmlCpp += `#include <map>\n`;
//    htmlCpp += `#include <any>\n\n`;
//    htmlCpp += `int main() {\n`;
//    htmlCpp += `  std::map<std::string, std::any> ${varName} = {{"name", "John"}, {"age", 30}, {"city", "New York"}};\n`;
//    htmlCpp += `  std::string json = R"({"name":"John","age":30,"city":"New York"})"; // Supondo JSON pré-definido\n`;
//    htmlCpp += `  std::cout << "JSON: " << json << "\\n";\n`;
//    htmlCpp += `  // Para decodificar, você precisaria implementar um parser de JSON em C++, não é padrão na biblioteca padrão\n`;
//    htmlCpp += `  // Aqui estamos usando um JSON pré-definido para fins de exemplo\n`;
//    htmlCpp += `  std::cout << "The element is: name => John\\n";\n`;
//    htmlCpp += `  std::cout << "The element is: age => 30\\n";\n`;
//    htmlCpp += `  std::cout << "The element is: city => New York\\n";\n`;
//    htmlCpp += `  return 0;\n`;
//    htmlCpp += `}`;

    // Exemplo de código C#
//    htmlCsharp += `// Exemplo em C#\n`;
//    htmlCsharp += `using System;\n`;
//    htmlCsharp += `using System.Collections.Generic;\n\n`;
//    htmlCsharp += `class Program {\n`;
//    htmlCsharp += `    static void Main() {\n`;
//    htmlCsharp += `        Dictionary<string, object> ${varName} = new Dictionary<string, object>() {\n`;
//    htmlCsharp += `            {"name", "John"},\n`;
//    htmlCsharp += `            {"age", 30},\n`;
//    htmlCsharp += `            {"city", "New York"}\n`;
//    htmlCsharp += `        };\n\n`;
//    htmlCsharp += `        string json = Newtonsoft.Json.JsonConvert.SerializeObject(${varName});\n`;
//    htmlCsharp += `        Console.WriteLine($"JSON: {json}");\n`;
//    htmlCsharp += `        var newObject = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, object>>(json);\n`;
//    htmlCsharp += `        foreach (var entry in newObject) {\n`;
//    htmlCsharp += `            Console.WriteLine($"The element is: {entry.Key} => {entry.Value}");\n`;
//    htmlCsharp += `        }\n`;
//    htmlCsharp += `    }\n`;
//    htmlCsharp += `}`;
    
    // Exemplo de código Python
    htmlPython += `import json\n\n`;
    htmlPython += `${varName} = {'name': 'John', 'age': 30, 'city': 'New York'}\n\n`;
    htmlPython += `json_str = json.dumps(${varName})\n\n`;
    htmlPython += `print(f'JSON: {json_str}')\n\n`;
    htmlPython += `newObject = json.loads(json_str)\n\n`;
    htmlPython += `for ${indexName}, value in newObject.items():\n`;
    htmlPython += `    print(f'The element is: {${indexName}} => {value}')\n\n`;

    // Exemplo de código Java
//    htmlJava += `// Exemplo em Java\n`;
//    htmlJava += `import java.util.HashMap;\n`;
//    htmlJava += `import com.google.gson.Gson;\n\n`;
//    htmlJava += `public class Main {\n`;
//    htmlJava += `    public static void main(String[] args) {\n`;
//    htmlJava += `        HashMap<String, Object> ${varName} = new HashMap<>();\n`;
//    htmlJava += `        ${varName}.put("name", "John");\n`;
//    htmlJava += `        ${varName}.put("age", 30);\n`;
//    htmlJava += `        ${varName}.put("city", "New York");\n\n`;
//    htmlJava += `        Gson gson = new Gson();\n`;
//    htmlJava += `        String json = gson.toJson(${varName});\n`;
//    htmlJava += `        System.out.println("JSON: " + json);\n\n`;
//    htmlJava += `        HashMap<String, Object> newObject = gson.fromJson(json, HashMap.class);\n`;
//    htmlJava += `        for (String key : newObject.keySet()) {\n`;
//    htmlJava += `            System.out.println("The element is: " + key + " => " + newObject.get(key));\n`;
//    htmlJava += `        }\n`;
//    htmlJava += `    }\n`;
//    htmlJava += `}`;
    
}