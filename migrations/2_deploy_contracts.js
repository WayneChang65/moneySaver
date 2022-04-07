const MoneySaver = artifacts.require('MoneySaver.sol');

module.exports = function (deployer) {
	deployer.deploy(MoneySaver, 100);
}
