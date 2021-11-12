const MyContract = artifacts.require("DartContract");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};