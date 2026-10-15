import 'dart:convert';
class User { final String name; User(this.name); }
void main() { print(jsonEncode(User('Rafi'))); }
