Interfaces and types are not exactly the same although you could use them for same purpose for enforcing type structure

=> One major difference is that Interfaces can only be used to describe the structure of an object although you could use it as type as well but in types you could also use union types

=> You could say type is more flexible but on the other side of coin, interface is clear
=> One more thing that you could and only do with interfaces actually, that is you could use them in classes.
=> Interface acts as contract which class has to implement

==> You could implement many interfaces but extend only one parent like you do in JAVA
==> Class implementing any specific interface will have to atleast follow all the properties and methods of interface
==> It's a bit like abstract classes but difference here is that you don't have implementation details

==> intefaces could be used as function types.
==> While using interfaces with classes, we want class to have whatever is implemented into interfaces.
==> We could use Readonly property in interfaces. which suggests that the following property in interface could be given value once

==> We could also extend intefaces like as follows: interface interfaceName extends IntefaceName
