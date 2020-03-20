require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('./src/lib/hdwalletprovider');

let mnemonic = 'inner arena bone table edge rare remain essay heavy arctic blue gas'; 
let testAccounts = [
"0x329765c189095a01bd3a26dcf494b7cd89249fd33f509318e1be8f93e6dd504f",
"0x7ed592177c5459a71298995235fc704380c1faa01882bf39b93e501e91061db7",
"0x66eadaef258f5c0f9e067dfd914ae969106ce2d32c56756a03ef334add411302",
"0x0f7477a885e326ed684ead12702f6a2b607359857f7f88bba330142db07fe278",
"0x086fe0668f0983ecf82efcb89138713d41b32c01ebedbc4462f99a680f0784f6",
"0xa58f19fe6bb6aafb6852a288299bfd25c80c0a3988572f08e33c3356a7ff71cf",
"0x7e6a6821df84f84548075c684dcfda424226b997e04f6e4be69a40e5ed26bfcb",
"0xab616888d43c1e7d4f86acdb968faccda1609769c0c7db678bffa852de52bd88",
"0xf3ff282fb79412755a1b0f76fb1a8c6201200e49622ce0aa36a099995c823e7b",
"0x971d577168a41d28133c9997acf80c0fd65dfecfad2980e24be7ae43d4a89201"
]; 
let devUri = 'https://api.baobab.klaytn.net:8651';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '1001',
            gas: '8500000',
            gasPrice: null,
        }
    },
    compilers: {
        solc: {
            version: '^0.5.6'
        }
    }
};
