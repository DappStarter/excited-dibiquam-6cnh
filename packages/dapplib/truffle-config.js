require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth museum clump harvest merry flame swamp'; 
let testAccounts = [
"0x10fd7d575f0844777b151028a66215cf964299d21d09d93075b60f511186842b",
"0xa3bb981a07b814f695f13b9b091320354efd4200480487047986f26af72c7e9c",
"0x1a7b2137b9e36055e57228365f5b1b5a43d7ba5460c06d12de4f3ce6451fe534",
"0xb358516d270d08db7432ffc77c8d9778cbd15873fa5fbbd6a70cde117197f373",
"0x5a83310ce726cfe234936d1ba7995547602de4e7638b6a20c243813c62c049a9",
"0x340873b7c223ee70e95f78e51cbb74697edccea0f9eb9da3f4e9320ee08793e5",
"0x9c6e28836c690fe9e0f33c9facb7ffa2e9996f0e81046801f2541f8f9769cd05",
"0xa9be93bbf0d5bf743ddf24d4c59092b93190a684fa6ad6842d68fb9aa2f08363",
"0xb544a6cb76f9817fa3430e2943c7890b190296e87276b0ee1baf05dd8858c3d1",
"0x6d558e2fc7b28cf1ac4a20b763ef1ba0452037712053e5f423e167379b644163"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


