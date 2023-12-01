const why = (values) => {
	const calibrationValues = values.split('\n').map(line => {
		const numbers = line.split(/[^0-9]/).filter(v => v).reduce((acc, number) => {
			if (number.length > 1) {
				number.split('').forEach(s => acc.push(s));
			} else {
				acc.push(number);
			}

			return acc;
		}, []);

		const first = numbers[0];
		const last = numbers.length > 1 ? numbers[numbers.length - 1] : numbers[0];
		return `${first}${last}`;
	});

	return calibrationValues.reduce((sum, num) => Number(sum) + Number(num), 0);
};
