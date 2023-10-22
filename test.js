/* # 1

❌ 1. Accepts a string
❌ 2. Accepts the widest range of possible date-string inputs (i.e. "1/1" or "12/31/2010" or more!)
❌ 3. Converts the string to 5 distinct formats: ISO, YYYY-MM-DD, D/M, Day of the week and the full month
❌ 4. After calling the function I can use my chosen format throughout the rest of my code.
❌ 5. "Gracefully" handles a non-string input

*/

// ADDRESSES #4
// establish global variable that will hold the user's preferred format of the date to be converted to.
let selectedFormat = 'ISO';

function formatDate(string, format) {
	// ADDRESSES #1
	// check that string === string
	if (typeof string !== 'string') {
		return 'Invalid input: not a string.';
	}

	// ADDRESSES #2
	// parse date
	const date = new Date(string);

	// check if date is valid
	if (isNaN(date.getTime())) {
		return 'Invalid input: not a valid date.';
	}

	// ADDRESSES #4
	// if user specifies format, update global variable
	if (format) {
		selectedFormat = format;
	}

	// Week & Month arrays to reference for conversion
	const dayOfWeekArr = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const monthArr = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	//  ADDRESSES # 3
	// switch case - convert date to the input / default format
	let formattedDate = '';

	switch (selectedFormat) {
		case 'ISO':
			formattedDate = date.toISOString();
			break;
		case 'YYYY-MM-DD':
			formattedDate = date.toISOString().split('T')[0];
			break;
		case 'D/M':
			formattedDate = `${date.getDate()}/${date.getMonth()}`;
			break;
		case 'Day of the week':
			formattedDate = dayOfWeekArr[date.getDay()];
			break;
		case 'Full month':
			formattedDate = monthArr[date.getMonth()];
			break;
		default:
			return 'Invalid format';
	}

	// return the formatted date
	return formattedDate;
}

function testFormatDate(string) {
	// format array
	const dateFormats = [
		'ISO',
		'YYYY-MM-DD',
		'D/M',
		'Day of the week',
		'Full month',
	];

	dateFormats.forEach((format) => {
		console.log(formatDate(string, format));
	});
}

testFormatDate('December 31, 2023');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// # 2

/* Convert the following input:
{
"John": "Engineer",
"Alice": "Engineer",
"Sam": "Accountant",
"Leah": "Baker",
}

to the following output:
{
"Accountant": ["Sam"],
"Baker": ["Leah"],
"Engineer": ["Alice", "John"],
} */

let obj1 = {
	John: 'Engineer',
	Alice: 'Engineer',
	Sam: 'Accountant',
	Leah: 'Baker',
};

function reverseObj(obj) {
	// create new obj variable
	let obj2 = {};

	// iterate over obj1
	for (const name in obj1) {
		const job = obj1[name];

		// check if obj2 contains obj1[prop]
		if (!obj2[job]) {
			// create key and set equal to empty array
			obj2[job] = [];
		}

		// push name into job
		obj2[job].push(name);
	}

	return obj2;
}

// test
console.log(reverseObj(obj1));

