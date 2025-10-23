const messageType = require('./messages-type.js');
const {
    REQUEST_LATEST_BLOCK,
    RECEIVE_LATSET_BLOCK,
    REQUEST_LATEST_BLOCKCHAIN,
    RECEIVE_LATEST_BLOCKCHAIN
} = messageType;
class Messages {

    //请求最新区块的函数
    static getLatestBlock() {
        return { type: REQUEST_LATEST_BLOCK };
    }
    //响应最新区块的函数
    static sendLatestBlock(block) {
        return {
            type: RECEIVE_LATSET_BLOCK,
            data: block
        };
    }
    //请求整个区块链的消息函数
    static getBlockchain() {
        return {
            type: REQUEST_LATEST_BLOCKCHAIN
        };
    }
    //响应整个区块链的消息函数
    static sendBlockchain(blockchain) {
        return {
            type: RECEIVE_LATEST_BLOCKCHAIN,
            data: blockchain
        };
    }
}

module.exports = Messages;