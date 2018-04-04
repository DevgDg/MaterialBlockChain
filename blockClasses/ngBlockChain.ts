import ngBlock from './ngBlock';
export default class NgBlockChain{
    chain;
    constructor(){
        this.chain = [this.createGenesisBlock];
    }
    createGenesisBlock(){
        return new ngBlock(0, '03-04-2018', '00000', [{ from: '', to: '', amount: 120}], '0');
    }
    getLatestBlock(){
        return this.chain[this.chain.length-1];
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    isChainValid(){
        for(let i=0; i<this.chain.lenght; i++)
        {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];
            if(currentBlock.hash !== currentBlock.calculateHash)
            {
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash)
            {
                return false;
            }
        }
        return true;
    }
}