
// --- package creation ...

var de = de = de || {};
de.ratopi = de.ratopi || {};

// --- package interface definition

de.ratopi.template =
{
	"CREATE": function()
	{
		// ==== initial setup ====

		// ==== interface ====

		return {
			"hello": hello
		};

		// ==== interface functions ====

		function hello()
		{
			document.writeln( "Hello, World!" );
		}

		// ==== private functions ====

	}

};
