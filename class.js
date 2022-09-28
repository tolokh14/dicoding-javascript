class Mail{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }

    sendMessage(msg,to){
        console.log(`you send : ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
}