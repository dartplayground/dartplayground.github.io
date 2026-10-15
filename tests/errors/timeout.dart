import 'dart:async';
Future<void> download() => Future.delayed(Duration(seconds: 30));
Future<void> main() async {
  await download().timeout(Duration(seconds: 5));
}
