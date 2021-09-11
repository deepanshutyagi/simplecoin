const Migrations = artifacts.require("SimpleCoin");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
