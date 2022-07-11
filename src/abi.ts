export const ABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_ctf",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_finder",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "update",
          "type": "bytes"
        }
      ],
      "name": "AncillaryDataUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "usr",
          "type": "address"
        }
      ],
      "name": "AuthorizedUser",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "usr",
          "type": "address"
        }
      ],
      "name": "DeauthorizedUser",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "payouts",
          "type": "uint256[]"
        }
      ],
      "name": "QuestionEmergencyResolved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "QuestionFlagged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "requestTimestamp",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "ancillaryData",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "proposalBond",
          "type": "uint256"
        }
      ],
      "name": "QuestionInitialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "QuestionPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "QuestionReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "int256",
          "name": "settledPrice",
          "type": "int256"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "payouts",
          "type": "uint256[]"
        }
      ],
      "name": "QuestionResolved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "QuestionUnpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "collateralWhitelist",
      "outputs": [
        {
          "internalType": "contract AddressWhitelistInterface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ctf",
      "outputs": [
        {
          "internalType": "contract IConditionalTokens",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "usr",
          "type": "address"
        }
      ],
      "name": "deny",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "internalType": "uint256[]",
          "name": "payouts",
          "type": "uint256[]"
        }
      ],
      "name": "emergencyResolve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "emergencySafetyPeriod",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "flag",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "getExpectedPayouts",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getLatestUpdate",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "update",
              "type": "bytes"
            }
          ],
          "internalType": "struct BulletinBoard.AncillaryDataUpdate",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "ancillaryData",
          "type": "bytes"
        }
      ],
      "name": "getQuestionID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "getUpdates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "update",
              "type": "bytes"
            }
          ],
          "internalType": "struct BulletinBoard.AncillaryDataUpdate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "ancillaryData",
          "type": "bytes"
        },
        {
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "proposalBond",
          "type": "uint256"
        }
      ],
      "name": "initializeQuestion",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "isFlagged",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "isInitialized",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "optimisticOracle",
      "outputs": [
        {
          "internalType": "contract OptimisticOracleV2Interface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "pauseQuestion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        },
        {
          "internalType": "bytes",
          "name": "update",
          "type": "bytes"
        }
      ],
      "name": "postUpdate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "ancillaryData",
          "type": "bytes"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "priceDisputed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "questions",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "requestTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "proposalBond",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "adminResolutionTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "resolved",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "paused",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "rewardToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "ancillaryData",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "readyToResolve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "usr",
          "type": "address"
        }
      ],
      "name": "rely",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "reset",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "resolve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "unPauseQuestion",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "updates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "update",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "wards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];