import * as SHA256 from 'crypto-js/sha256';
interface NgTansactionData {
    from : string;
    to : string;
    amount : number;
}
interface NgBlockData {
    index : number;
    timeStamp : string;
    previousHash : string;
    transactionData : NgTansactionData[];
    hash : string;
}

export default class NgBlock implements NgBlockData {
    constructor(public index : number = 0, public timeStamp : string = '', public previousHash : string = '', public transactionData : NgTansactionData[] = [], public hash : string = '') {
        this.index = index;
        this.timeStamp = timeStamp;
        this.previousHash = previousHash
        this.transactionData = transactionData;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timeStamp + JSON.stringify(this.transactionData)).toString();
    }
}