function Module1(userName, a, b) {
	this.userName = userName;
	this.string1 = 'hello';
	this.a = a;
	this.b = b;
	//....
};

Module1.prototype.substr = function() {
	const result = this.a - this.b;
	console.log(`${this.userName} perform: ${this.a} - ${this.b}`);
	return result;
}

Module1.prototype.printString = function() {
	console.log('!!!' + this.string1 + ' ' + this.userName);
}

// .....

module.exports = Module1;
