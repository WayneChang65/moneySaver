const MoneySaver = artifacts.require('MoneySaver.sol');

contract('MoneySaver', async () => {
	it('Data Update', async () => {
		const moneySaver = await MoneySaver.new(33);
		assert((await moneySaver.getGoal()).toString() == '33');
		
		await moneySaver.setGoal(44);
		assert((await moneySaver.getGoal()).toString() === '44');

		assert((await moneySaver.getBalance()).toString() === '0');
	});

});
