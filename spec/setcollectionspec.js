describe("SetCollection", function() {
	var setList;

	beforeEach(function() {
		setList = new SetList();
	});

	it("should add an element to the collection", function() {
		setList.add('A');

		expect(setList.size()).toEqual(1);
		expect(setList.contains('A')).toBe(true);
	});

	it("should return size of collection", function() {
		setList.add('A');

		expect(setList.size()).toEqual(1);
	});

	it("should check if the collection is empty", function() {
		expect(setList.isEmpty()).toBe(true);
	});

	it("should remove the element from the collection", function() {
		setList.add('A');

		expect(setList.size()).toEqual(1);

		setList.remove('A');

		expect(setList.size()).toEqual(0);
		expect(setList.contains('A')).toBe(false);
	});

	it("should apply the function to each element of the collection", function() {
		setList.add(0);
		setList.add(1);

		var num = 0;
		var answers = [];
		setList.iterator(function(item) {
			num++;
			answers.push(item);
		});

		expect(num).toEqual(setList.size());
		expect(answers[0]).toEqual(0);
		expect(answers[1]).toEqual(1);
	});

});

describe("SortedSet", function() {
	it("should add an element in the correct order", function() {
		var sortedSet = new SortedSetList();
		
		sortedSet.add(2);
		sortedSet.add(1);

		var sortedArr = [];
		sortedSet.iterator(function(item) {
			sortedArr.push(item);
		});

		expect(sortedArr[0]).toEqual(1);
		expect(sortedArr[1]).toEqual(2);
	});
});