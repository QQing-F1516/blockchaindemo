const messageType = {
    REQUEST_LATEST_BLOCK:0,//请求最新区块
    RECEIVE_LATSET_BLOCK:1,//接收最新区块(将最新区块发送至请求方)
    REQUEST_LATEST_BLOCKCHAIN:2,//请求整个区块链
    RECEIVE_LATEST_BLOCKCHAIN:3,//接收整个区块链(将整个区块链发送至请求方)
    
}

module.exports = messageType