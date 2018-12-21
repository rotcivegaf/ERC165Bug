const ERC165Query = artifacts.require('./ERC165Query.sol');
const ERC165QueryFixed = artifacts.require('./ERC165QueryFixed.sol');

const Example = artifacts.require('./Example.sol');
const Helper = require('./Helper.js');

const Web3Utils = require('web3-utils');

contract('ERC165Query and ERC165QueryFixed', function (accounts) {
    let erc165Query;
    let erc165QueryFixed;
    let example;

    before('Create contracts', async function () {
        erc165Query = await ERC165Query.new();
        erc165QueryFixed = await ERC165QueryFixed.new();

        example = await Example.new();
    });

    it('Test: ERC165Query', async () => {
        const implementTrue = await erc165Query.doesContractImplementInterface(
            example.address,
            await example.interfaceImplemented()
        );

        assert.isOk(implementTrue);

        const implementFalse = await erc165Query.doesContractImplementInterface(
            example.address,
            '0x38173617'
        );

        assert.isNotOk(implementFalse);
    });

    it('Test: ERC165QueryFixed', async () => {
        const implementTrue = await erc165QueryFixed.doesContractImplementInterface(
            example.address,
            await example.interfaceImplemented()
        );

        assert.isOk(implementTrue);

        const implementFalse = await erc165QueryFixed.doesContractImplementInterface(
            example.address,
            '0x38173617'
        );

        assert.isNotOk(implementFalse);
    });
});
