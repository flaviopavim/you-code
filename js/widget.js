

























function getWidget() {
    htmlDart += `
import 'package:flutter/material.dart';

class ${className} extends StatefulWidget {

  final String title;

  const ${className}({
    Key? key,
    required this.title,
  }) : super(key: key);

  @override
  _${className} createState() => _${className}();
}

class _${className} extends State<${className}> {

  bool loading = true;

  start() {

    setState(() {
      loading = true;
    });

    // Busca dados

    setState(() {
      loading = false;
    });

  }

  @override
  void initState() {
    super.initState();
    start();
  }

  doAction() {
    // Faz alguma ação
  }

  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
`;
}










//
//function getWidget() {
//    htmlDart += 'import \'package:flutter/material.dart\';\n\n';
//    htmlDart += 'class ' + className + ' extends StatefulWidget {\n\n';
//    htmlDart += '  final String title;\n\n';
//    htmlDart += '  const ' + className + '({\n';
//    htmlDart += '    Key? key,\n';
//    htmlDart += '    required this.title,\n';
//    htmlDart += '  }) : super(key: key);\n\n';
//    htmlDart += '  @override\n';
//    htmlDart += '  _' + className + ' createState() => _' + className + '();\n\n';
//    htmlDart += '}\n\n';
//    htmlDart += 'class _' + className + ' extends State<' + className + '> {\n\n';
//    htmlDart += '  @override\n';
//    htmlDart += '  Widget build(BuildContext context) {\n';
//    htmlDart += '    return Container();\n';
//    htmlDart += '  }\n\n';
//    htmlDart += '}';
//}



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