export const v3Abi = [
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
      "inputs": [],
      "name": "Flagged",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Initialized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidAncillaryData",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidOOPrice",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPayouts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotAdmin",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotFlagged",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInitialized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotOptimisticOracle",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotReadyToResolve",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Paused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PriceNotAvailable",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Resolved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "SafetyPeriodNotPassed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsupportedToken",
      "type": "error"
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
          "name": "admin",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newAdminAddress",
          "type": "address"
        }
      ],
      "name": "NewAdmin",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "admin",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "removedAdmin",
          "type": "address"
        }
      ],
      "name": "RemovedAdmin",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "addAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
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
      "name": "admins",
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
      "inputs": [],
      "name": "collateralWhitelist",
      "outputs": [
        {
          "internalType": "contract IAddressWhitelist",
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
          "internalType": "struct AncillaryDataUpdate",
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
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "name": "getQuestion",
      "outputs": [
        {
          "components": [
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
              "name": "liveness",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "emergencyResolutionTimestamp",
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
              "internalType": "bool",
              "name": "reset",
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
          "internalType": "struct QuestionData",
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
          "internalType": "struct AncillaryDataUpdate[]",
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
        },
        {
          "internalType": "uint256",
          "name": "liveness",
          "type": "uint256"
        }
      ],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "questionID",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "isAdmin",
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
      "name": "maxAncillaryData",
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
      "inputs": [],
      "name": "optimisticOracle",
      "outputs": [
        {
          "internalType": "contract IOptimisticOracleV2",
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
      "name": "pause",
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
          "name": "liveness",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "emergencyResolutionTimestamp",
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
          "internalType": "bool",
          "name": "reset",
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
      "name": "ready",
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
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "removeAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceAdmin",
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
      "name": "unpause",
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
      "inputs": [],
      "name": "yesOrNoIdentifier",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
