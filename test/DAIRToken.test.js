const Token = artifacts.require('./DAIRToken.sol'); //must be the name of the contract file
const suite = require('../node_modules/token-test-suite/lib/suite');

contract('Total Supply', function(accounts) {
	// it("Get Values", async function() {
	//   supply = await Token.totalSupply();
	//   assert.equal(supply, 10000000, "New crowdsale was not created");
	// });
	console.log(accounts[0]);

	let options = {
		// accounts to test with, accounts[0] being the contract owner
		accounts: accounts,

		// factory method to create new token contract
		create: async function () {
			return await Token.new();
		},

		transfer: async function (token, to, amount) {
			return await token.transfer(to, amount, { from: accounts[0] });
		},

		// token info to test
		name: 'Dronair',
		symbol: 'DAIR',
		decimals: 18,

		// initial state to test
		initialSupply: 140000000000000000000000000000,
		initialBalances: [
			[accounts[0], 140000000000000000000000000000]
		],
		initialAllowances: [
			[accounts[0], accounts[1], 0]
		]
	};
 	suite(options);

});
