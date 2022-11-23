import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  static const int color = 0xFF2d8577;

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.

        primarySwatch: MaterialColor(
          color,
          <int, Color>{
            50: Color(0xFF000000),
            100: Color(0xFF000000),
            200: Color(0xFF000000),
            300: Color(0xFF000000),
            400: Color(0xFF000000),
            500: Color(0xFF000000),
            600: Color(0xFF000000),
            700: Color(0xFF000000),
            800: Color(0xFF000000),
            900: Color(0xFF000000),
          },
        ),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  final double buttonPadding = 40;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  Widget getButton(double left, double top, double right, double bottom) {
    return Padding(
      padding: EdgeInsets.fromLTRB(left, top, right, bottom),
      child: TextButton(
          onPressed: () => {},
          // ignore: prefer_const_constructors
          style: ButtonStyle(
              backgroundColor: const MaterialStatePropertyAll(
                  Color.fromARGB(96, 122, 122, 122)),
              foregroundColor: const MaterialStatePropertyAll(Colors.black)),
          child: const Text("BUTTON")),
    );
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        appBar: AppBar(title: Text("Example 1")),
        body: Column(
          children: [
            Expanded(
                flex: 2,
                child: Center(
                    child: SizedBox(
                  width: 100,
                  height: 100,
                  child: Image(
                    image: NetworkImage(
                        "https://design4circle.eu/wp-content/uploads/2019/03/just_arrows.png"),
                  ),
                ))),
            Expanded(
              flex: 2,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Column(
                    children: [
                      getButton(0, 0, buttonPadding, buttonPadding / 3),
                      getButton(0, 0, buttonPadding, buttonPadding / 3)
                    ],
                  ),
                  Column(
                    children: [
                      getButton(buttonPadding, 0, 0, buttonPadding / 3),
                      getButton(buttonPadding, 0, 0, buttonPadding / 3)
                    ],
                  )
                ],
              ),
            ),
            Expanded(
              flex: 2,
              child: Align(
                alignment: Alignment.topCenter,
                child:
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  Padding(
                    padding: EdgeInsets.only(right: 25),
                    child: const Text(
                      "Email",
                      textAlign: TextAlign.center,
                    ),
                  ),
                  SizedBox(
                      width: 175.0,
                      child: TextFormField(
                          decoration: const InputDecoration(
                              border: UnderlineInputBorder()))),
                ]),
              ),
            )
          ],
        ));
  }
}
