var DAIRToken = artifacts.require("./DAIRToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DAIRToken,{gas:4700000});
};
