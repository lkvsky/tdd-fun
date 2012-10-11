function SetList(arr) {
	this.arr = arr || [];
}

SetList.prototype.size = function() {
	//calculate length of the array
	return this.arr.length;
};

SetList.prototype.isEmpty = function() {
	if (this.arr.length === 0) {
		return true;
	} else {
		return false;
	}
};

SetList.prototype.contains = function(element) {
	if (this.arr.indexOf(element) !== -1) {
		return true;
	} else {
		return false;
	}
};

SetList.prototype.add = function(element) {
	//add element to the array
	if (this.arr.indexOf(element) == -1) {
		this.arr.push(element);
	}
};

SetList.prototype.remove = function(element) {
	//check if element is in array, then remove element from the array
	var findIt = this.arr.indexOf(element);
	this.arr.splice(findIt, 1);
};

SetList.prototype.iterator = function(fn) {
	//take a function and call it on each element in array
	for (var i=0; i<this.arr.length; i++) {
		fn(this.arr[i]);
	}
};

function SortedSetList(arr) {
	SetList.call(this, arr);
}

function extend(subclass, superclass) {
	function Dummy() {}
	Dummy.prototype = superclass.prototype;
	subclass.prototype = new Dummy();
	subclass.prototype.constructor = subclass;
}

extend(SortedSetList, SetList);

SortedSetList.prototype.add = function(element) {
	SetList.prototype.add.call(this, element);
	this.arr.sort();
};



