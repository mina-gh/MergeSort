describe('Split Array function', function() {
  it('returns an empty array if the input array is empty', function() {
    expect(split([])).toEqual([]);
  });

  it('returns the same array, if it has only one element', function() {
    expect(split([1])).toEqual([1]);
  });

  it('splits an 3-elem array into two sub arrays, if given an array size > 1', function() {
    let array = randomArray(3);
    console.log("original array: " + array);
    let splitted = split(array);

    expect(splitted.length).toEqual(2);
    expect(splitted[0].length).toEqual(1);
    expect(splitted[1].length).toEqual(2);
  });

  it('splits an 3-elem array into two sub arrays, if given an array size > 1', function() {
    let array = randomArray(6);
    let splitted = split(array);

    expect(splitted.length).toEqual(2);
    // since the given array length is 6 i.e., an even number, make sure the splitted subarrays contains the same number of elements.
    expect(splitted[0].length).toEqual(3);
    expect(splitted[1].length).toEqual(3);
  });

});


/*describe('Merge Sort', function() {
  it('handles an empty array', function() {
      expect(mergeSort([])).toEqual([]);
  });

  beforeEach(function(){
    // make sure the build-in sort is not invoked.
    spyOn(Array.prototype, 'sort');
  });

  it('handles an array with only one item', function() {
      let array = [10];

      expect(mergeSort(array)).toEqual([10]);
      expect(array.mergeSort()).toEqual([10]);
      expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('handles an array which is already sorted', function() {
      let array = [1, 2, 3, 5, 6, 9, 10];

      expect(mergeSort(array)).toEqual([1, 2, 3, 5, 6, 9, 10]);
      expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('handles an array which is not sorted yet', function() {
      let array = [5, 1, 2, 7, 3, 9, 11, 60, 3, 4, 1000, 0];

      expect(mergeSort(array)).toEqual([0, 1, 2, 3, 3, 4, 5, 7, 9, 11, 60, 1000]);
      expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('A case of trying to sort a String array', function() {
      let array = ['a', 'd', 'h', 'a', 'c'];

      expect(mergeSort(array)).toEqual(['a', 'a', 'c', 'd', 'h']);
      expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('testing a custom comparator function', function(){
    let array = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
    let comparator = function (a, b) {
      if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
      if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
      return 0; // returning 0 means "a and b are equivalent"
    };

    expect(mergeSort(array, comparator)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
    expect(array.mergeSort(comparator)).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('test case with random array size 0', function(){
    let array = randomArray(0);

    for(let i = 0; i < array.length - 2; i++){
      expect(array[i] <= array[i + 1]).toEqual(true);
    }
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('test case with random array size 100', function(){
    let array = randomArray(100);

    mergeSort(array);

    for (let i = 0; i < array.length - 2; i++){
      expect(array[i] <= array[i + 1]).toBe(true);
    }
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });

  it('test a newly added function to Array.prototype', function(){
    let array = randomArray(100);

    array.mergeSort();

    for (let i = 0; i < array.length - 2; i++){
      expect(array[i] <= array[i + 1]).toBe(true);
    }
    expect(Array.prototype.sort.calls.count()).toEqual(0);
  });


});*/

function randomArray(n){
  // returns a random array of n elements.
  let array = [];
  while (n > 0){
    array.push(Math.floor(Math.random() * 100));
    n--;
  }
  return array;
}
