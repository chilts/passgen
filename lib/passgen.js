(function() {
	/*
	 * Generate a random token.
	 */

	function create(len, alphabet) {
		var result = '';

		if (!alphabet) alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		var alphabetLength = alphabet.length;

		if ((len === undefined) || isNaN(len)) len = 64;
		for (var i = 0; i < len; i++) {
			var rnd = Math.floor(Math.random() * alphabetLength);
			result += alphabet[rnd];
		}

		return result;
	}

	var passgen = {};
	passgen.create = create;

	module.exports = passgen;
})();
