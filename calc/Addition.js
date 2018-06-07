class Addition {
	constructor(name, a, b) {
		this.userName = name;
		this.a = a;
		this.b = b;
		this.string1 = 'hello!!11';
	}
	
	printString() {
		console.log('+++' + this.string1 + ' ' + this.userName);
	}
	
	add() {
		const result = this.a + this.b;
		console.log(`${this.userName} perform: ${this.a} + ${this.b}`);
		return result;
	}
}

module.exports = Addition;
