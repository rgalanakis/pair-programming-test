function add(x, y) {
	return x + y;
}

describe('add', function () {
	it('adds', function () {
		expect(add(1, 2)).toBe(3);
	});
});
