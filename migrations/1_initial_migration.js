var AENToken = artifacts.require("./DAIRToken.sol");

module.exports = function(deployer) {
  deployer.deploy(AENToken,{gas:4700000});
};
