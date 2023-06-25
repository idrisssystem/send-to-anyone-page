import {
    create
} from "fast-creator";
import css from "@idriss-crypto/send-to-anyone-core/sendToAnyoneStyle";
import {
    SendToAnyoneSuccess,
    SendToAnyoneWaitingConfirmation,
    SendToAnyoneWaitingApproval,
    SendToAnyoneError,
    SendToAnyoneMain,
    SendToAnyoneConnect,
    SendToAnyoneAddress,
    MultiSendToAnyone,
    MultiSendToAnyoneApproval,
    MultiSendToAnyoneSuccess,
    RevertPayment
} from "@idriss-crypto/send-to-anyone-core/subpages";

const nativeExisting = {
  transactionHash: '0xc6795e117503cbba61c83be1a08c88e03c46bbd9a6ce4f6bee65cc56a2f77733',
  transactionIndex: 0,
  blockHash: '0x3c04639805c2b814de491775641cc917f796ee40e74e97f012d728a6e7760dc6',
  blockNumber: 38,
  from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  to: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
  cumulativeGasUsed: 101728,
  gasUsed: 101728,
  contractAddress: null,
  logsBloom: '0x00000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000800020000000000000100000800000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000002200000004000000000020000000000000000000000000000000000001000000000000000000000000000000',
  type: '0x2',
  status: true,
  effectiveGasPrice: 2507240119
}
const erc20Existing ={
  transactionHash: '0x9f0b797475915120ad0479f2b8572c2c2995946169cd67e3bb998ad0d03845d5',
  transactionIndex: 0,
  blockHash: '0xde9e473bde8c92ffd59ef35a105cebffc3affe89dc7e806ac2226d5e52402bcc',
  blockNumber: 50,
  from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  to: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
  cumulativeGasUsed: 155809,
  gasUsed: 155809,
  contractAddress: null,
  logsBloom: '0x00000000000000000002000000000000000000000000000000000000000000000000000000000080400000000000080000000000000000000000000000102001000000000000000000000000000000000000000000000001000000000000000000000800000000000000000100000000000800000000000000000000000000000000000008000000000000000000000000000000000000000000000000000008000000001000200000000000080000000000000000000000000000000000000000000000000000200000000000000000000000002228000004000000000000000000000000000000008000000000000001000001000000000100080000000000',
  type: '0x2',
  status: true,
  effectiveGasPrice: 2501471818,
  events: {
    '0': {
      removed: false,
      logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x9f0b797475915120ad0479f2b8572c2c2995946169cd67e3bb998ad0d03845d5',
      blockHash: '0xde9e473bde8c92ffd59ef35a105cebffc3affe89dc7e806ac2226d5e52402bcc',
      blockNumber: 50,
      address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
      id: 'log_ebca2c8c'
    },
    '1': {
      removed: false,
      logIndex: 2,
      transactionIndex: 0,
      transactionHash: '0x9f0b797475915120ad0479f2b8572c2c2995946169cd67e3bb998ad0d03845d5',
      blockHash: '0xde9e473bde8c92ffd59ef35a105cebffc3affe89dc7e806ac2226d5e52402bcc',
      blockNumber: 50,
      address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
      id: 'log_4e8f5c7a'
    }
  }
}
const erc721Existing ={
  transactionHash: '0x1b36cd4b0d212b16b9b32f4b301ba4b100a35f49e132d8edbf12c55b5f863494',
  transactionIndex: 0,
  blockHash: '0xf7d01de6df808b7195b4e18d10aaecff1a28f18163cf20b12fcd46673c0470ad',
  blockNumber: 47,
  from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  to: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
  cumulativeGasUsed: 159129,
  gasUsed: 159129,
  contractAddress: null,
  logsBloom: '0x04000000000000000002000000000000000000000000000040000000000000000000000000000000000000000000080000000000000000000400000000340001001000000000000000000008000000000000000000040000000000000000000000000800020000000000000100000800000800000000000000000010000000040000000008000000000000000000000000000000000000000000000000000008020000000000200000000100000000000000000000000100000000000000000000000006000000200000000000000000000000002200000004000000000060000010000000000000000000000000000001000000008000000000000000000000',
  type: '0x2',
  status: true,
  effectiveGasPrice: 2502190947,
  events: {
    '0': {
      removed: false,
      logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x1b36cd4b0d212b16b9b32f4b301ba4b100a35f49e132d8edbf12c55b5f863494',
      blockHash: '0xf7d01de6df808b7195b4e18d10aaecff1a28f18163cf20b12fcd46673c0470ad',
      blockNumber: 47,
      address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
      id: 'log_9c8a7aef'
    },
    '1': {
      removed: false,
      logIndex: 1,
      transactionIndex: 0,
      transactionHash: '0x1b36cd4b0d212b16b9b32f4b301ba4b100a35f49e132d8edbf12c55b5f863494',
      blockHash: '0xf7d01de6df808b7195b4e18d10aaecff1a28f18163cf20b12fcd46673c0470ad',
      blockNumber: 47,
      address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
      id: 'log_31645b0d'
    },
    '2': {
      removed: false,
      logIndex: 3,
      transactionIndex: 0,
      transactionHash: '0x1b36cd4b0d212b16b9b32f4b301ba4b100a35f49e132d8edbf12c55b5f863494',
      blockHash: '0xf7d01de6df808b7195b4e18d10aaecff1a28f18163cf20b12fcd46673c0470ad',
      blockNumber: 47,
      address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
      id: 'log_eb4e4985'
    },
    '3': {
      removed: false,
      logIndex: 4,
      transactionIndex: 0,
      transactionHash: '0x1b36cd4b0d212b16b9b32f4b301ba4b100a35f49e132d8edbf12c55b5f863494',
      blockHash: '0xf7d01de6df808b7195b4e18d10aaecff1a28f18163cf20b12fcd46673c0470ad',
      blockNumber: 47,
      address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
      id: 'log_b1e3424d'
    }
  }
}
const erc1155Existing ={
  transactionHash: '0x9f0b797475915120ad0479f2b8572c2c2995946169cd67e3bb998ad0d03845d5',
  transactionIndex: 0,
  blockHash: '0xde9e473bde8c92ffd59ef35a105cebffc3affe89dc7e806ac2226d5e52402bcc',
  blockNumber: 50,
  from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  to: '0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9',
  cumulativeGasUsed: 155809,
  gasUsed: 155809,
  contractAddress: null,
  logsBloom: '0x00000000000000000002000000000000000000000000000000000000000000000000000000000080400000000000080000000000000000000000000000102001000000000000000000000000000000000000000000000001000000000000000000000800000000000000000100000000000800000000000000000000000000000000000008000000000000000000000000000000000000000000000000000008000000001000200000000000080000000000000000000000000000000000000000000000000000200000000000000000000000002228000004000000000000000000000000000000008000000000000001000001000000000100080000000000',
  type: '0x2',
  status: true,
  effectiveGasPrice: 2501471818,
  events: {
    '0': {
      removed: false,
      logIndex: 0,
      transactionIndex: 0,
      transactionHash: '0x9f0b797475915120ad0479f2b8572c2c2995946169cd67e3bb998ad0d03845d5',
      blockHash: '0xde9e473bde8c92ffd59ef35a105cebffc3affe89dc7e806ac2226d5e52402bcc',
      blockNumber: 50,
      address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
      id: 'log_ebca2c8c'
    },
    '1': {
      removed: false,
      logIndex: 2,
      transactionIndex: 0,
      transactionHash: '0x9f0b797475915120ad0479f2b8572c2c2995946169cd67e3bb998ad0d03845d5',
      blockHash: '0xde9e473bde8c92ffd59ef35a105cebffc3affe89dc7e806ac2226d5e52402bcc',
      blockNumber: 50,
      address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
      id: 'log_4e8f5c7a'
    }
  }
}
const nativeNonExisting ={
  transactionReceipt: {
    transactionHash: '0xf9aa3f3836cf92231d92b41f9cbde87067111c2fc6a83a20bad060824a45c736',
    transactionIndex: 0,
    blockHash: '0x326911c4e9942f01d2043184c3e3ac037722f061fa7e5f004233edbae1a814e8',
    blockNumber: 52,
    from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    to: '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    cumulativeGasUsed: 306860,
    gasUsed: 306860,
    contractAddress: null,
    logsBloom: '0x00000020000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000040200000000000000000000400000000000000000000000000000000000000000000000000000000000000000000020000000000000100000800000000000000000000000000000000200040000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000200000000000000000000000002000000000000200000020000000000000000000000000000000000000000000000000400000000000004000',
    type: '0x2',
    status: true,
    effectiveGasPrice: 2501130376
  },
  data: [
    {
      beneficiary: '788bfdbc8c8dc376e66df2decf95e205595f97c2998bb664537f87625793ba6f',
      claimPassword: 'a7f625fc497c0d8356a74c69335ace99',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting@idriss.xyz&claimPassword=a7f625fc497c0d8356a74c69335ace99&assetType=0&blockNumber=52'
    },
    {
      beneficiary: 'b0bcc16b207f3a0717771ec9d210ca72d87269a12b859a1e7d8a6061578403c5',
      claimPassword: 'd02954b66e435cb445e2e8b4f2efa42c',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting2@idriss.xyz&claimPassword=d02954b66e435cb445e2e8b4f2efa42c&assetType=0&blockNumber=52'
    }
  ]
}
const erc20NonExisting ={
  transactionReceipt: {
    transactionHash: '0xd889ac3904c156e510de001b4a74405207970bcddc386df51ceaf259b91649fd',
    transactionIndex: 0,
    blockHash: '0xa2bf386ebaea1c4c89324b2d953e4654237f2c0ce0f2c71b523ce6812026c2c9',
    blockNumber: 56,
    from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    to: '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    cumulativeGasUsed: 339258,
    gasUsed: 339258,
    contractAddress: null,
    logsBloom: '0x00000020000000000000000000100000000000000000000000000000000000000000000000080000000402002000000000400000000040200000000000200000000000000000000000000008000000000000000000000000000000000000400000001000000000000000000100000000000000000000000000000090000400000000000000000000000000000000008000000000000050000000000000000000020000000000000000100000000040000000000000000000000000000000008000000002000000200000000000000000000000002000000000000200000000000010000000000000000000000000000000000000000000400000000000000000',
    type: '0x2',
    status: true,
    effectiveGasPrice: 2500666333
  },
  data: [
    {
      beneficiary: '788bfdbc8c8dc376e66df2decf95e205595f97c2998bb664537f87625793ba6f',
      claimPassword: '03191facfce6372cc12f079056a49d17',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting@idriss.xyz&claimPassword=03191facfce6372cc12f079056a49d17&assetType=1&assetAddress=0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6&blockNumber=56'
    },
    {
      beneficiary: 'b0bcc16b207f3a0717771ec9d210ca72d87269a12b859a1e7d8a6061578403c5',
      claimPassword: 'a3c17508b8150da82996e1a371d85805',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting2@idriss.xyz&claimPassword=a3c17508b8150da82996e1a371d85805&assetType=1&assetAddress=0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6&blockNumber=56'
    }
  ]
}
const erc721NonExisting ={
  transactionReceipt: {
    transactionHash: '0x222071e764e98d42c9199eb2eb94718d836d230e849b8dd56617445a06db1065',
    transactionIndex: 0,
    blockHash: '0x10f6ac617a9169e3fdf06f1daee37e8013e196465cd3041c70101ec209075902',
    blockNumber: 61,
    from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    to: '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    cumulativeGasUsed: 536160,
    gasUsed: 536160,
    contractAddress: null,
    logsBloom: '0x00000020000000000000004000000000000002000000000040000000000000000000000000080200000410000000000000400000000040200400000000200000001000000000000000000008002000000000000001000000000000000000400000000000020000000000000100000800000800000000000000000010000000040000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000100080000000000000000000006000000200010000000000000002000002000000000000200000020200010000000000000000000000000000000000000000000440000000000000000',
    type: '0x2',
    status: true,
    effectiveGasPrice: 2500344356
  },
  data: [
    {
      beneficiary: '788bfdbc8c8dc376e66df2decf95e205595f97c2998bb664537f87625793ba6f',
      claimPassword: '7c6b6f6653c43ecf211b1d782c1652a4',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting@idriss.xyz&claimPassword=7c6b6f6653c43ecf211b1d782c1652a4&assetId=11&assetType=2&assetAddress=0x0165878A594ca255338adfa4d48449f69242Eb8F&blockNumber=61'
    },
    {
      beneficiary: 'b0bcc16b207f3a0717771ec9d210ca72d87269a12b859a1e7d8a6061578403c5',
      claimPassword: 'a6774f1055dcd05ce5ac41211475f10b',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting2@idriss.xyz&claimPassword=a6774f1055dcd05ce5ac41211475f10b&assetId=12&assetType=2&assetAddress=0x0165878A594ca255338adfa4d48449f69242Eb8F&blockNumber=61'
    }
  ]
}
const erc1155NonExisting ={
  transactionReceipt: {
    transactionHash: '0x3b5545fab1766edee9549a1b6600f05cdf7691633a680c33d3810122a81e5517',
    transactionIndex: 0,
    blockHash: '0x97ffae7a98ceda8c6d4f3d3492ae83e15f2cb9c6fca285c0a2109f7a55225644',
    blockNumber: 63,
    from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
    to: '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0',
    cumulativeGasUsed: 654106,
    gasUsed: 654106,
    contractAddress: null,
    logsBloom: '0x00000020000000000080000000000000000000000000000000000000000000000000000000080000400400000000000000400000000040204000000000002000000100000000000000000000000000000000000000000001000000000000400000000800000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000040000200000000000000000000000002028000000000200000000000000000000000000000000000000000000000001000000400100080000000000',
    type: '0x2',
    status: true,
    effectiveGasPrice: 2500265112
  },
  data: [
    {
      beneficiary: '788bfdbc8c8dc376e66df2decf95e205595f97c2998bb664537f87625793ba6f',
      claimPassword: '2a84600bf329dee5ece1721e65b8cdc2',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting@idriss.xyz&claimPassword=2a84600bf329dee5ece1721e65b8cdc2&assetId=2&assetType=3&assetAddress=0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9&blockNumber=63'
    },
    {
      beneficiary: 'b0bcc16b207f3a0717771ec9d210ca72d87269a12b859a1e7d8a6061578403c5',
      claimPassword: '1b5fceb263c8767afbafc99c2904abe4',
      claimUrl: 'https://idriss.xyz/claim?identifier=nonexisting2@idriss.xyz&claimPassword=1b5fceb263c8767afbafc99c2904abe4&assetId=3&assetType=3&assetAddress=0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9&blockNumber=63'
    }
  ]
}
const realNonExist = {
    "transactionReceipt": {
        "blockHash": "0x27bc213935ed86faf483c0e6d6e127391f5043f3025d8a3d8865a7691906c319",
        "blockNumber": 38076234,
        "contractAddress": null,
        "cumulativeGasUsed": 5308058,
        "effectiveGasPrice": 63972203300,
        "from": "0xe75bf5a0aa5bf8891b4b68cbda2e1c12df4f52b2",
        "gasUsed": 330687,
        "logsBloom": "0x00000020000000000000000000000008000000000000000000000000000000000000000000080000000000100000000000008000000000000000000000000000000000000000000000008000000000800000000000000000000100002000000000000000020000000000000000000800000000000000000080000000000000000040000000040000000000000000000000000000084204000000100000000000200000000000000000000000000000280000000000000000000100080000004000000000000000000001000000000000000000000000800000128200400020000000000200000000000000000000000000000000400000000000000000100000",
        "status": true,
        "to": "0xf333ede8d49dd100f02c946809c9f5d9867d10c0",
        "transactionHash": "0x975dc8fda70da4ff2c1733c51c082c25e2a1e2663253b1f8a3e03679cd8ef33b",
        "transactionIndex": 30,
        "type": "0x0",
        "events": {
            "0": {
                "address": "0x0000000000000000000000000000000000001010",
                "blockNumber": 38076234,
                "transactionHash": "0x975dc8fda70da4ff2c1733c51c082c25e2a1e2663253b1f8a3e03679cd8ef33b",
                "transactionIndex": 30,
                "blockHash": "0x27bc213935ed86faf483c0e6d6e127391f5043f3025d8a3d8865a7691906c319",
                "logIndex": 104,
                "removed": false,
                "id": "log_746ed473",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x0000000000000000000000000000000000000000000000000b1b3fb349ccd88a0000000000000000000000000000000000000000000000001f170c21425b024e00000000000000000000000000000000000000000000000001bfb7ed98e1d93600000000000000000000000000000000000000000000000013fbcc6df88e29c40000000000000000000000000000000000000000000000000cdaf7a0e2aeb1c0",
                    "topics": [
                        "0xe6497e3ee548a3372136af2fcb0696db31fc6cf20260707645068bd3fe97f3c4",
                        "0x0000000000000000000000000000000000000000000000000000000000001010",
                        "0x000000000000000000000000e75bf5a0aa5bf8891b4b68cbda2e1c12df4f52b2",
                        "0x000000000000000000000000f333ede8d49dd100f02c946809c9f5d9867d10c0"
                    ]
                }
            },
            "1": {
                "address": "0x0000000000000000000000000000000000001010",
                "blockNumber": 38076234,
                "transactionHash": "0x975dc8fda70da4ff2c1733c51c082c25e2a1e2663253b1f8a3e03679cd8ef33b",
                "transactionIndex": 30,
                "blockHash": "0x27bc213935ed86faf483c0e6d6e127391f5043f3025d8a3d8865a7691906c319",
                "logIndex": 107,
                "removed": false,
                "id": "log_2f4b7cbb",
                "returnValues": {},
                "signature": null,
                "raw": {
                    "data": "0x000000000000000000000000000000000000000000000000002a068e2c7128750000000000000000000000000000000000000000000000001f71f514f7a23c4e00000000000000000000000000000000000000000000a3f2b954f457a742fa6c0000000000000000000000000000000000000000000000001f47ee86cb3113d900000000000000000000000000000000000000000000a3f2b97efae5d3b422e1",
                    "topics": [
                        "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",
                        "0x0000000000000000000000000000000000000000000000000000000000001010",
                        "0x000000000000000000000000e75bf5a0aa5bf8891b4b68cbda2e1c12df4f52b2",
                        "0x0000000000000000000000009ead03f7136fc6b4bdb0780b00a1c14ae5a8b6d0"
                    ]
                }
            },
            "AssetTransferred": [
                {
                    "address": "0xf333EDE8D49dD100F02c946809C9F5D9867D10C0",
                    "blockNumber": 38076234,
                    "transactionHash": "0x975dc8fda70da4ff2c1733c51c082c25e2a1e2663253b1f8a3e03679cd8ef33b",
                    "transactionIndex": 30,
                    "blockHash": "0x27bc213935ed86faf483c0e6d6e127391f5043f3025d8a3d8865a7691906c319",
                    "logIndex": 105,
                    "removed": false,
                    "id": "log_ce381786",
                    "returnValues": {
                        "0": "0x357bccdc86a82db3ce532bf511629ad03ff280b6032ca4b9b7af214bbcd6aa56",
                        "1": "0xe75bf5A0aA5BF8891b4b68cBdA2e1C12DF4F52b2",
                        "2": "0x0000000000000000000000000000000000000000",
                        "3": "400000104188703109",
                        "4": "0",
                        "5": "",
                        "toHash": "0x357bccdc86a82db3ce532bf511629ad03ff280b6032ca4b9b7af214bbcd6aa56",
                        "from": "0xe75bf5A0aA5BF8891b4b68cBdA2e1C12DF4F52b2",
                        "assetContractAddress": "0x0000000000000000000000000000000000000000",
                        "amount": "400000104188703109",
                        "assetType": "0",
                        "message": ""
                    },
                    "event": "AssetTransferred",
                    "signature": "0xd89b73431940ba2875cf1fcc289a82b2c1ea2c6200efac052b13ba94adbafd21",
                    "raw": {
                        "data": "0x000000000000000000000000000000000000000000000000058d15f9b8497185000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000",
                        "topics": [
                            "0xd89b73431940ba2875cf1fcc289a82b2c1ea2c6200efac052b13ba94adbafd21",
                            "0x357bccdc86a82db3ce532bf511629ad03ff280b6032ca4b9b7af214bbcd6aa56",
                            "0x000000000000000000000000e75bf5a0aa5bf8891b4b68cbda2e1c12df4f52b2",
                            "0x0000000000000000000000000000000000000000000000000000000000000000"
                        ]
                    }
                },
                {
                    "address": "0xf333EDE8D49dD100F02c946809C9F5D9867D10C0",
                    "blockNumber": 38076234,
                    "transactionHash": "0x975dc8fda70da4ff2c1733c51c082c25e2a1e2663253b1f8a3e03679cd8ef33b",
                    "transactionIndex": 30,
                    "blockHash": "0x27bc213935ed86faf483c0e6d6e127391f5043f3025d8a3d8865a7691906c319",
                    "logIndex": 106,
                    "removed": false,
                    "id": "log_c361a4fa",
                    "returnValues": {
                        "0": "0x69958700200f35c6dfd72406f7f565780027adde1aaa68914caafad27f3aae59",
                        "1": "0xe75bf5A0aA5BF8891b4b68cBdA2e1C12DF4F52b2",
                        "2": "0x0000000000000000000000000000000000000000",
                        "3": "400101236874787251",
                        "4": "0",
                        "5": "",
                        "toHash": "0x69958700200f35c6dfd72406f7f565780027adde1aaa68914caafad27f3aae59",
                        "from": "0xe75bf5A0aA5BF8891b4b68cBdA2e1C12DF4F52b2",
                        "assetContractAddress": "0x0000000000000000000000000000000000000000",
                        "amount": "400101236874787251",
                        "assetType": "0",
                        "message": ""
                    },
                    "event": "AssetTransferred",
                    "signature": "0xd89b73431940ba2875cf1fcc289a82b2c1ea2c6200efac052b13ba94adbafd21",
                    "raw": {
                        "data": "0x000000000000000000000000000000000000000000000000058d71f4821db9b3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000",
                        "topics": [
                            "0xd89b73431940ba2875cf1fcc289a82b2c1ea2c6200efac052b13ba94adbafd21",
                            "0x69958700200f35c6dfd72406f7f565780027adde1aaa68914caafad27f3aae59",
                            "0x000000000000000000000000e75bf5a0aa5bf8891b4b68cbda2e1c12df4f52b2",
                            "0x0000000000000000000000000000000000000000000000000000000000000000"
                        ]
                    }
                }
            ]
        }
    },
    "data": [
        {
            "beneficiary": "8a1b88bd3163ed6419278982e4764c56b30662ae53581c3d93d407f61e504dad",
            "claimPassword": "11695538cee582378bdfc13b6d4b5795",
            "claimUrl": "https://idriss.xyz/claim?identifier=@IDriss_xyz_bot&claimPassword=11695538cee582378bdfc13b6d4b5795&assetType=0&blockNumber=38076234"
        },
        {
            "beneficiary": "5920bf82673fcc3128aa388f437f465a7256bf3302f9ef379b0a96cd709b112a",
            "claimPassword": "a098a88f962cf634db040b431b4952a6",
            "claimUrl": "https://idriss.xyz/claim?identifier=@elonmusk&claimPassword=a098a88f962cf634db040b431b4952a6&assetType=0&blockNumber=38076234"
        }
    ]
}


document.addEventListener('DOMContentLoaded', async() => {
    const sendToAnyoneLogicPromise = await
    import ("@idriss-crypto/send-to-anyone-core/sendToAnyoneLogic")
    const getProviderPromise =
        import ("@idriss-crypto/send-to-anyone-core/getWeb3Provider")
    const sendToAnyoneUtilsPromise =
        import ("@idriss-crypto/send-to-anyone-core/sendToAnyoneUtils")


    let params = new URL(document.location).searchParams;
    let navSelection = new URL(document.location).pathname.split('/')[2];
    let identifier = params.get('identifier');
    let recipient = params.get('recipient');
    let token = params.get('token');
    let sendToAnyoneValue = +params.get('sendToAnyoneValue');
    let network = params.get('network');
    let message = params.get('message') || '';
    let isIDrissRegistered;
    let assetType;
    let assetAmount;
    let assetAddress;
    let assetId;
    let selectedNFT;
    let nftName;
    let provider;
    let walletTag;
    let nftButton = document.querySelector('#nftSelectButton');
    let tokenButton = document.querySelector('#tokenSelectButton');
    let multiSendButton = document.querySelector('#multiSendSelectButton');
    let revertButton = document.querySelector('#revertSelectButton');
    let selectedTab = "token";

    let div = document.createElement('div')
    document.querySelector('.container').append(div);
    div.attachShadow({
        mode: 'open'
    })
    div.shadowRoot.addEventListener('close', () => {
        console.log("Close triggered")
        if (params.get('back') == 'close')
            window.close()
        else if (params.get('back'))
            return document.location = params.get('back');
        else
            if (selectedTab == "multi") multiSendButton.click();
            if (selectedTab == "nft") nftButton.click();
            if (selectedTab == "token") tokenButton.click();
            if (selectedTab == "revert") revertButton.click();
    })

    div.shadowRoot.addEventListener('discordSendError', () => {
        // ToDo: change url and add tooltip "Copied"
        const url = 'https://discord.gg/VMcJ9uF6u8';
        window.open(url, '_blank');
    })
    div.shadowRoot.append(create('style', {
        text: css
    }));

    let popupToken = create('section')
    popupToken.id = "popupToken"
    div.shadowRoot.append(popupToken);
    popupToken.classList.add('sendToAnyone-popup');
    let popupNFT = create('section')
    popupNFT.id = "popupNFT"
    popupNFT.style.display='none';
    div.shadowRoot.append(popupNFT);
    popupNFT.classList.add('sendToAnyone-popup');
    let popupMulti = create('section')
    popupMulti.id = "popupMulti"
    popupMulti.style.display='none';
    div.shadowRoot.append(popupMulti);
    popupMulti.classList.add('multiSendToAnyone-popup');
    //ToDo: change class names
    let popupRevert = create('section')
    popupRevert.id = "popupRevert"
    popupRevert.style.display='none';
    div.shadowRoot.append(popupRevert);
    popupRevert.classList.add('sendToAnyone-popup');

    document.querySelector('#triggerSuccessButton').addEventListener('click', () => {
        popupMulti.firstElementChild.remove();
        popupMulti.append((new MultiSendToAnyoneSuccess("@test", "https://www.idriss.xyz", "abc", false, 1, 1, 1, "0x", "Matic", 1, "0x")).html);
    });

    document.querySelector('#triggerErrorButton').addEventListener('click', () => {
        popupMulti.firstElementChild.remove();
        popupMulti.append((new SendToAnyoneError({
            name: 'Reverted',
            message: 'Transaction was not successful'
        })).html)
    });


    try {
        const {
            getProvider
        } = await getProviderPromise;
        const {
            getNFTsForAddress
        } = await sendToAnyoneUtilsPromise;
        const {
            SendToAnyoneLogic
        } = await sendToAnyoneLogicPromise;

        let popups = { 'selected': popupToken }


        async function connectWallet() {
            provider = await getProvider();
            await SendToAnyoneLogic.prepareSendToAnyone(provider, network ?? 'Polygon', ALCHEMY_API_KEY)
            document.querySelector('#connectWallet').classList.add('hidden');
            document.querySelector('#connectedWallet').classList.remove('hidden');
            let accounts = await SendToAnyoneLogic.web3.eth.getAccounts();
            let reverse = await SendToAnyoneLogic.idriss.reverseResolve(accounts[0]);
            let loginDisplay = reverse? reverse : accounts[0].substring(0, 6).concat("...").concat(accounts[0].substr(-4))
            document.querySelector('#connectedWallet').firstElementChild.value = loginDisplay
            document.querySelector('#polygon-scan-link').href = POLYGON_BLOCK_EXPLORER_ADDRESS + "/address/" + accounts[0];
        }

        async function disconnectWallet() {
            provider = null;
            document.querySelector('#connectWallet').classList.remove('hidden');
            document.querySelector('#connectedWallet').classList.add('hidden');
        }

        document.querySelector('#connectWallet').addEventListener('click', async () => {
            await connectWallet();
        });

        document.querySelector('#disconnectWallet').addEventListener('click', async () => {
            await disconnectWallet();
        });

        async function handleNFTclick() {
            selectedTab = "nft";

            adjustButtonActions();

            document.querySelector('#nftSelectButton').className = "text-center bg-indigo-50 text-[#5865F2] hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
            document.querySelector('#tokenSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
            document.querySelector('#multiSendSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
            document.querySelector('#flyoutMenuButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"

            popups.selected.firstElementChild?.remove();
            popupToken.style.display='none';
            popupMulti.style.display='none';
            popupRevert.style.display='none';
            popupNFT.style.display='block';
            popups.selected = popupNFT

            await showInputWidget("nft");
            // connect wallet when needed
            if (!provider) {
                await connectWallet()
            }
            console.log(SendToAnyoneLogic.web3)
            const accounts = await SendToAnyoneLogic.web3.eth.getAccounts();
            let selectedAccount = accounts[0];

            let addressNFTsPolygon = await getNFTsForAddress(selectedAccount, ALCHEMY_API_KEY, 'Polygon')
            let addressNFTsEthereum = await getNFTsForAddress(selectedAccount, ALCHEMY_API_KEY, 'Ethereum')

            console.log(addressNFTsPolygon)
            console.log(addressNFTsEthereum)

            function appendNFTs(addressNFTs, network) {
                return addressNFTs.ownedNfts
                    .filter((v, i, a) => v.title != "")
                    .filter((v, i, a) => v.tokenType == "ERC721" || v.tokenType == "ERC1155")
                    .map((v, i, a) => {
                        try {
                            let image = v.media[0].gateway ? v.media[0].gateway : "";
                            if (image.startsWith("ipfs://")) image = image.replace("ipfs://", "https://ipfs.io/ipfs/");
                            return {
                            name: v.title,
                            address: v.contract.address,
                            id: BigInt(v.tokenId).toString(10),
                            type: v.tokenType,
                            image: image,
                            network: network,
                        };
                        } catch { return {name: "dummy name" , address:"0x", id: 0, type: "ERC721", img: "https://ipfs.io/ipfs/", network: "polygon"}
                         }
                    });
            }

            let nfts = appendNFTs(addressNFTsPolygon, "Polygon");
            nfts = nfts.concat(appendNFTs(addressNFTsEthereum, "ETH"));

            console.log(nfts)

            nfts = nfts.filter((v, i, a) => v.address != "0x")

            popupNFT.firstElementChild?.remove();

            popupNFT.append(new SendToAnyoneMain(identifier, isIDrissRegistered, nfts, true, null, true).html);
            popupNFT.firstElementChild?.addEventListener('sendMoney', e => {
                                console.log(e);
                                network = e.network;
                                token = e.token;
                                sendToAnyoneValue = +e.amount;
                                message = e.message;
                                assetType = e.assetType;
                                assetAmount = e.assetAmount;
                                assetAddress = e.assetAddress;
                                assetId = e.assetId;
                                selectedNFT = nfts.filter(nft => nft.address == assetAddress).filter(nft => nft.id == assetId)
                                nftName = (selectedNFT[0] != undefined) ? selectedNFT[0].name : "";
                                handleRest();
                            });
        }
        async function handleTokenClick() {
            selectedTab = "token";

            adjustButtonActions();

            document.querySelector('#tokenSelectButton').className = "text-center bg-indigo-50 text-[#5865F2] hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
            document.querySelector('#nftSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
            document.querySelector('#multiSendSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
            document.querySelector('#flyoutMenuButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"

            popups.selected.firstElementChild?.remove();
            popupNFT.style.display='none';
            popupMulti.style.display='none';
            popupRevert.style.display='none';
            popupToken.style.display='block';
            popups.selected = popupToken;

            await showInputWidget("token");
            popupToken.firstElementChild?.remove();
            let nfts=[]
            popupToken.append(new SendToAnyoneMain(identifier, isIDrissRegistered, nfts).html);
            // probably not await, as code stops
            popupToken.firstElementChild?.addEventListener('sendMoney', e => {
                                console.log(e);
                                network = e.network;
                                token = e.token;
                                sendToAnyoneValue = +e.amount;
                                message = e.message;
                                assetType = e.assetType;
                                assetAmount = e.assetAmount;
                                assetAddress = e.assetAddress;
                                assetId = e.assetId;
                                selectedNFT = nfts.filter(nft => nft.address == assetAddress).filter(nft => nft.id == assetId)
                                nftName = (selectedNFT[0] != undefined) ? selectedNFT[0].name : "";
                                handleRest();
                            });
        }
        async function handleMultiSendClick() {
            selectedTab = "multi";

            try {

                adjustButtonActions();

                document.querySelector('#multiSendSelectButton').className = "text-center bg-indigo-50 text-[#5865F2] hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
                document.querySelector('#nftSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
                document.querySelector('#tokenSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
                document.querySelector('#flyoutMenuButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"

                popups.selected.firstElementChild?.remove();
                popupNFT.style.display='none';
                popupToken.style.display='none';
                popupRevert.style.display='none';
                popupMulti.style.display='block';

                popups.selected = popupMulti;

                // connect wallet when needed
                if (!provider) {
                    await connectWallet()
                }

                console.log(SendToAnyoneLogic.web3)
                const accounts = await SendToAnyoneLogic.web3.eth.getAccounts();
                let selectedAccount = accounts[0];

                let addressNFTsPolygon = await getNFTsForAddress(selectedAccount, ALCHEMY_API_KEY, 'Polygon')

                console.log(addressNFTsPolygon)

                function filterNFTs(addressNFTs, network) {
                    return addressNFTs.ownedNfts
                        .filter((v, i, a) => v.title != "")
                        .filter((v, i, a) => v.tokenType == "ERC1155")
                        .map((v, i, a) => {
                            try {
                                let image = v.media[0].gateway ? v.media[0].gateway : "";
                                if (image.startsWith("ipfs://")) image = image.replace("ipfs://", "https://ipfs.io/ipfs/");
                                return {
                                    name: v.title,
                                    address: v.contract.address,
                                    id: BigInt(v.tokenId).toString(10),
                                    type: v.tokenType,
                                    image: image,
                                    network: network,
                                    balance: v.balance
                                };
                            } catch { return {name: "dummy name" , address:"0x", id: 0, type: "ERC721", img: "https://ipfs.io/ipfs/", network: "polygon"}
                             }
                        });
                }

                let nfts = filterNFTs(addressNFTsPolygon, "Polygon");

                console.log(nfts)

                nfts = nfts.filter((v, i, a) => v.address != "0x")

                popupMulti.append(new MultiSendToAnyone(nfts, selectedAccount).html);

                popupMulti.firstElementChild?.addEventListener('multiSendMoney', e => {
                    console.log("Got multiSendEvent: ", e)
                                    multiHandleRest(e);
                                });
            }

            catch (e){
                console.log(e)
                // refresh screen so we are not stuck on error
                multiSendButton.click()
            }
        }
        async function handleRevertClick() {
            selectedTab = "revert";
            try {
                adjustButtonActions();

                document.querySelector('#flyoutMenuButton').className = "text-center bg-indigo-50 text-[#5865F2] hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
                document.querySelector('#nftSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
                document.querySelector('#tokenSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"
                document.querySelector('#multiSendSelectButton').className = "self-center text-gray-500 hover:bg-indigo-50 hover:text-[#5865F2] px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer"

                popups.selected.firstElementChild?.remove();
                popupNFT.style.display='none';
                popupToken.style.display='none';
                popupMulti.style.display='none';
                popupRevert.style.display='block';
                popups.selected = popupRevert;

                popupRevert.append(new RevertPayment().html);
            }

            catch (e){
                console.log("Revert error ", e)
                // refresh screen so we are not stuck on error
                revertButton.click()
            }
        }

        function setupButtonActions(){
            nftButton.onclick= nftButton.onclick? '' : function () { handleNFTclick() };
            tokenButton.onclick= tokenButton.onclick? '' : function () { handleTokenClick() };
            multiSendButton.onclick= multiSendButton.onclick? '' : function () { handleMultiSendClick() };
            revertButton.onclick= revertButton.onclick? '' : function () { handleRevertClick() };
        }

        function adjustButtonActions() {
          disableButton(nftButton, handleNFTclick);
          disableButton(tokenButton, handleTokenClick);
          disableButton(multiSendButton, handleMultiSendClick);
          disableButton(revertButton, handleRevertClick);
        }

        function disableButton(button, clickHandler) {
          if (!button.disabled) {
            button.disabled = true;
            button.onclick = null;
            setTimeout(function() {
              button.disabled = false;
              button.onclick = clickHandler;
            }, 1000); // 1 second delay
          }
        }


        // initialize page
        setupButtonActions();
        if (navSelection  == 'nft') await nftButton.click();
        else if (navSelection  == 'multi') await multiSendButton.click()
        else if (navSelection  == 'revert') await revertButton.click()
        else await tokenButton.click()
        // add param version of tipping-page here and call tokenButton(params)

        async function showInputWidget(type) {
            popups.selected.append(new SendToAnyoneAddress(type).html);
            return await new Promise((res) => {

                async function nextEventHandler(e) {
                    console.log(e);
                    identifier = e.identifier;
                    recipient = e.recipient;
                    isIDrissRegistered = e.isIDrissRegistered;
                    walletTag = e.walletTag ? e.walletTag : "Public ETH";
                    res()
                }

                popups.selected.firstElementChild.addEventListener('next', nextEventHandler);
                adjustButtonActions()
            });
        }

        async function handleRest() {

            if (!provider) {
                await connectWallet();
            }

            const accounts = await SendToAnyoneLogic.web3.eth.getAccounts();

            console.log(isIDrissRegistered)

            popups.selected.firstElementChild.remove();
            popups.selected.append((new SendToAnyoneWaitingConfirmation(identifier, isIDrissRegistered, sendToAnyoneValue, token, assetAmount, assetId, assetType, nftName)).html)
            let {
                integer: amountInteger,
                normal: amountNormal
            } = await SendToAnyoneLogic.calculateAmount(token, sendToAnyoneValue)


            popups.selected.querySelector('.amountCoin').textContent = amountNormal;
            //TODO: check price calculation + if it adds $fee properly
            console.log("In page: ", identifier, `${amountInteger}`, network, token, message,
                assetType, assetAmount, assetAddress, assetId)


            let success = await SendToAnyoneLogic.sendToAnyone(identifier, `${amountInteger}`, network, token, message,
                assetType, assetAmount, assetAddress, assetId, walletTag)
            console.log("Success is: ", success)
            popups.selected.firstElementChild.remove();
            let blockNumber;
            let txnHash;
            if (success) {
                blockNumber = success.blockNumber? success.blockNumber : success.transactionReceipt.blockNumber;
                txnHash = success.transactionHash? success.transactionHash : success.transactionReceipt.transactionHash;
                let explorerLink;
                if (network == 'ETH')
                    explorerLink = 'https://etherscan.io/tx/' + txnHash
                else if (network == 'BSC')
                    explorerLink = 'https://bscscan.com/tx/' + txnHash
                else if (network == 'Polygon')
                    explorerLink = POLYGON_BLOCK_EXPLORER_ADDRESS + '/tx/' + txnHash
                console.log(explorerLink)
                    // add success.blockNumber to url so we don't have to query
                popups.selected.append((new SendToAnyoneSuccess(identifier, explorerLink, success.claimPassword, isIDrissRegistered,
                    assetAmount, assetId, assetType, assetAddress, token, blockNumber, txnHash)).html)
            } else {
                popups.selected.append((new SendToAnyoneError({
                    name: 'Reverted',
                    message: 'Transaction was not successful'
                })).html)
            }
        }

        async function multiHandleRest(e) {
            let recipients = e.multiSendArr;
            console.log(recipients)
            let token = e.token;

            if (!provider) {
                await connectWallet();
            }

            console.log(SendToAnyoneLogic.web3)
            const accounts = await SendToAnyoneLogic.web3.eth.getAccounts();

            let assetName = recipients[0].asset.type

            popups.selected.firstElementChild.remove();
            popups.selected.append((new MultiSendToAnyoneApproval(token, recipients, SendToAnyoneLogic.idriss)).html)

            console.log("Sending to: ", recipients)
            //let success = erc20NonExisting
            let success = await SendToAnyoneLogic.multiSendToAnyone(recipients)
            console.log("Success is: ", success)
            try {
                // should be the claim links to download with download button as csv
                console.log(success)
            } catch (e) {
                console.log("Error after success ", e)
                console.log("no data found")
                console.log("Caught error:", e)
                // Errors will be reported on Discord
                popups.selected.firstElementChild?.remove();
                popups.selected.append((new SendToAnyoneError(e)).html)
                console.error(e)
                return
            }
            popups.selected.firstElementChild.remove();
            let txnHash;
            if (success) {
                txnHash = success.transactionHash? success.transactionHash : success.transactionReceipt.transactionHash;
                let explorerLink = POLYGON_BLOCK_EXPLORER_ADDRESS + `/tx/${txnHash}`
                console.log(explorerLink)
                //ToDo: check eligibility of params
                popups.selected.append((new MultiSendToAnyoneSuccess(explorerLink, token, success.data?? "")).html)
            } else {
                popups.selected.append((new SendToAnyoneError({
                    name: 'Reverted',
                    message: 'Transaction was not successful'
                })).html)
                console.log({
                    success
                })
            }
        }

    } catch (e) {
        console.log("Caught error:", e)
        // ToDo: catch different error types here
        // Errors will be reported on Discord
        popups.selected.firstElementChild?.remove();
        popups.selected.append((new SendToAnyoneError(e)).html)
        adjustButtonActions();
        console.error(e)
    }
});

// IDs
// (new) flyoutMenuButton - the outer part of the button, gets different styling when inner element (like revert tab) clicked
// (new) flyoutMenuSelectButton - inner part of the same button, triggers the menu
// (new) flyoutMenuBody - body of the flyout menu
// revertSelectButton - old button that handles selecting revert tab (now clicking the transaction reversal option)

let toggleFlyoutMenu = document.getElementById('flyoutMenuSelectButton');
let flyoutMenu = document.getElementById('flyoutMenuBody');
let flyoutMenuElement1 = document.getElementById('revertSelectButton');
// ToDo: add also flyoutMenuButton as the trigger below to increase the click area
    toggleFlyoutMenu.addEventListener('click', () => {
      flyoutMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
      const targetElement = event.target;
      if (!flyoutMenu.contains(targetElement) && targetElement !== toggleFlyoutMenu) {
        flyoutMenu.classList.add('hidden');
      }
    });

// ToDo: when there is more elements in the flyout menu, add them here
    flyoutMenuElement1.addEventListener('click', () => {
      flyoutMenu.classList.add('hidden');
    });