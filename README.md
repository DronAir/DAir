<h1>Dronair</h1>

<a href="https://dronair.io">https://dronair.io</a>

<h2> What is Dronair? </h2>
     The DronAir Operating Platform will provide a disruptive solution for switching global logistics industries to unmanned systems. As an independent blockchain-based Operating Platform open to all industry participants it will contain critical information for each stage of lifecycle of a cargo robot. The operations and access to clients of DAIR drone will be used to develop and test the DronAir. We aim to set the standards  for  the new  industry in robotic delivery in areas  such  as financing, manufacturing, operations, maintenance, insurance, and authorization of drones and robots in the air, on the ground and at the sea.
<br>
For more information, see: <a href="https://dronair.io">HERE!!</a>
<br><br>


<h2>Set up the Testing Environment, you must have truffle installed.</h2>

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
