
function getWidget() {
    htmlDart += 'import \'package:flutter/material.dart\';\n\n';
    htmlDart += 'class ' + className + ' extends StatefulWidget {\n\n';
    htmlDart += '  final String title;\n\n';
    htmlDart += '  const ' + className + '({\n';
    htmlDart += '    Key? key,\n';
    htmlDart += '    required this.title,\n';
    htmlDart += '  }) : super(key: key);\n\n';
    htmlDart += '  @override\n';
    htmlDart += '  _' + className + ' createState() => _' + className + '();\n\n';
    htmlDart += '}\n\n';
    htmlDart += 'class _' + className + ' extends State<' + className + '> {\n\n';
    htmlDart += '  @override\n';
    htmlDart += '  Widget build(BuildContext context) {\n';
    htmlDart += '    return Container();\n';
    htmlDart += '  }\n\n';
    htmlDart += '}';
    
    
//    htmlDart += 'import \'package:flutter/material.dart\';\n\n';
//    htmlDart += 'void main() => runApp(const MyApp());\n\n';
//    htmlDart += 'class MyApp extends StatelessWidget {\n';
//    htmlDart += '  const MyApp({Key? key}) : super(key: key);\n\n';
//    htmlDart += '  @override\n';
//    htmlDart += '  Widget build(BuildContext context) {\n';
//    htmlDart += '    return MaterialApp(\n';
//    htmlDart += '      debugShowCheckedModeBanner: false,\n';
//    htmlDart += '      theme: ThemeData(\n';
//    htmlDart += '        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.blue),\n';
//    htmlDart += '      ),\n';
//    htmlDart += '      home: const MyHomePage(title: \'Hello world\'),\n';
//    htmlDart += '    );\n';
//    htmlDart += '  }\n';
//    htmlDart += '}\n\n';
//
//    htmlDart += 'class MyHomePage extends StatefulWidget {\n';
//    htmlDart += '  final String title;\n\n';
//    htmlDart += '  const MyHomePage({Key? key, required this.title}) : super(key: key);\n\n';
//    htmlDart += '  @override\n';
//    htmlDart += '  _MyHomePageState createState() => _MyHomePageState();\n';
//    htmlDart += '}\n\n';
//
//    htmlDart += 'class _MyHomePageState extends State<MyHomePage> {\n';
//    htmlDart += '  @override\n';
//    htmlDart += '  Widget build(BuildContext context) {\n';
//    htmlDart += '    return Scaffold(\n';
//    htmlDart += '      appBar: AppBar(\n';
//    htmlDart += '        title: Text(widget.title),\n';
//    htmlDart += '      ),\n';
//    htmlDart += '      body: Center(\n';
//    htmlDart += '        child: Column(\n';
//    htmlDart += '          mainAxisAlignment: MainAxisAlignment.center,\n';
//    htmlDart += '          children: <Widget>[\n';
//    htmlDart += '            Text(\n';
//    htmlDart += '              \'Hello World\',\n';
//    htmlDart += '              style: TextStyle(fontSize: 24),\n';
//    htmlDart += '            ),\n';
//    htmlDart += '          ],\n';
//    htmlDart += '        ),\n';
//    htmlDart += '      ),\n';
//    htmlDart += '    );\n';
//    htmlDart += '  }\n';
//    htmlDart += '}';
}



/*
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorSchemeSeed: Colors.blue,
      ),
      home: const MyHomePage(title: 'Hello world'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  
  final String title;

  const MyHomePage({
    super.key,
    required this.title,
  });

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(widget.title),
          ],
        ),
      ),
    );
  }
}
 */