<h1>Dronair</h1>

<a href="https://dronair.io">https://dronair.io</a>


Set up the Testing Environment, you must have truffle installed.

```
npm install truffle -g truffle
```

Some dependancies
```
 npm install --save-dev chai
 npm install --save-dev chai-bignumber

```

Then in the working folder, suggest a new folder for this

```
truffle init
```

You may need to edit the Migrations.sol file to rename the constructor as follows:


From this
```
  function Migrations() public {
    owner = msg.sender;
  }
```

To This
```
  constructor() public {
    owner = msg.sender;
  }
```

Then you can execute
To compile the code
```
truffle compile
```
To migrate or upload the contract to your engine, as configured in the truffle-config.js
```
truffle migrate
```
To run a test use
```
truffle test
or
watch -c truffle test test/DAIRToken.test.js
```

An approach I use is to install nodemon or watch to re-run the tests when you save the file.
