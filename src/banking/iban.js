
var iban = function()
{
	// === private functions ===

	function mod( numberString, divisor )
	{
		var tmp = '';
		for ( var i = 0; i < numberString.length ; i++ )
		{
			tmp += numberString.charAt( i );
			var r = tmp % divisor;
			tmp = r.toString( 10 );
		}
		return tmp / 1;
	}

	// ---

	function alphaToNum( text, index )
	{
		var n = text.charCodeAt( index ) - 65 + 10;

		return ( n < 10 ? '0' : '' ) + n;
	}

	// === public functions ===

	function calculateIbanChecksum( country, accountID )
	{
	    var countryNumber = alphaToNum( country, 0 ) + alphaToNum( country, 1 );

	    // var rest = ( '' + accountID + countryNumber + '00' ) % 97;
	    var rest = mod( '' + accountID + countryNumber + '00', 97 );
	    var part = 98 - rest;

		return '' + ( part < 10 ? '0' : '' ) + part;
	}

	// ---

	function isIbanCorrect( iban )
	{
		var countryNumber = alphaToNum( iban, 0 ) + alphaToNum( iban, 1 );
		var checkSum = '' + iban.charAt( 2 ) + iban.charAt( 3 );
		var accountID = iban.substr( 4, iban.length - 1 );

		var rest = mod( '' + accountID + countryNumber + checkSum, 97 );

		return rest === 1;
	}

	// === interface ===

	return {
		'calculateIbanChecksum': calculateIbanChecksum,
		'isIbanCorrect': isIbanCorrect,
	};

}();
