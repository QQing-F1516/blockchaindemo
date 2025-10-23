const messageType = require('./messages-type.js');
const Messages = require('./messages.js')
const Block = require('./Block.js');

console.log("================消息类型和消息工厂测试开始change===================");

try {
    //测试1.消息的枚举类型
    console.log("1.测试消息类型频率");
    console.log('REQUEST_LATEST_BLOCK:', messageType.REQUEST_LATEST_BLOCK);
    console.log('RECEIVE_LATSET_BLOCK:', messageType.RECEIVE_LATSET_BLOCK);
    console.log('REQUEST_LATEST_BLOCKCHAIN:', messageType.REQUEST_LATEST_BLOCKCHAIN);
    console.log('RECEIVE_LATEST_BLOCKCHAIN:', messageType.RECEIVE_LATEST_BLOCKCHAIN);

    //测试2.请求最新区块消息功能
    console.log("2.测试请求最新区块消息功能");
    const requestLatestBlockMsg = Messages.getLatestBlock();
    console.log('--消息类型: ', requestLatestBlockMsg.type);
    console.log('--是否请求最新区块类型: ', requestLatestBlockMsg.type === messageType.REQUEST_LATEST_BLOCK);
    console.log('--消息结构: ', JSON.stringify(requestLatestBlockMsg));

    //测试3.响应最新区块消息的功能
    console.log("3.测试响应最新区块消息的功能");
    const testBlock = Block.genesis;
    const sendLatestBlockMsg = Messages.sendLatestBlock(testBlock);
    console.log('--消息类型: ', sendLatestBlockMsg.type);
    console.log('--是否响应最新区块类型: ', sendLatestBlockMsg.type === messageType.RECEIVE_LATSET_BLOCK);
    console.log('--包含响应区块数据: ', sendLatestBlockMsg.data);
    console.log('--数据是否为创世纪区块: ', sendLatestBlockMsg.data.index === 0);
    console.log('--消息结构: ', JSON.stringify(sendLatestBlockMsg));

    //测试4.请求整个区块链消息功能
    console.log('4.测试请求整个区块链消息功能');
    const requestBlockchainMsg = Messages.getBlockchain();
    console.log('--消息类型: ', requestBlockchainMsg.type);
    console.log('--是否响应最新区块类型: ', requestBlockchainMsg.type === messageType.REQUEST_LATEST_BLOCKCHAIN);
    console.log('--消息结构: ', JSON.stringify(requestBlockchainMsg));

    //测试5.响应整个区块链消息功能
    console.log('5.测试响应整个区块链消息功能');
    const testChain = [Block.genesis];
    const sendBlockchainMsg = Messages.sendBlockchain(testChain);
    console.log('--消息类型: ', sendBlockchainMsg.type);
    console.log('--是否响应整个区块类型: ', sendBlockchainMsg.type === messageType.REQUEST_LATEST_BLOCKCHAIN);
    console.log('--数据是否包含创世纪区块: ', sendBlockchainMsg.data[0].index === 0);
    console.log('--消息结构: ', JSON.stringify(sendBlockchainMsg));

    //测试6.消息类型完整性检查
    console.log('6.测试消息类型完整性检查');
    const allMessageTypes = Object.keys(messageType);
    console.log('--定义的消息类型数量: ', allMessageTypes.length);
    console.log('--消息类型列表: ', allMessageTypes.join(','));


} catch (error) {
    console.log(error);
}