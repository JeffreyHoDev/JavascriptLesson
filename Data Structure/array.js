const strings = ['a', 'b', 'c', 'd']

// Consider 32 bits system
// 4 shelves * 4 bytes each = 16 bytes of storage

strings[2] // Grab the value O(1)

// push
strings.push('e') // O(1) operation

// pop
strings.pop() // O(1), one step operation

// unshift - add something at beginning of array
strings.unshift('x') // O(n) ... why
// Previously computer knows:
/*
    0 => a
    1 => b
    2 => c
    3 => d

    now adding x at front
    0 => x
    1 => b
    ...
    It need to shift to other memory
*/

// splice
strings.splice(2,0,'alien') // start index, number to delete, value to add
// O(n/2) to simplify => O(n)


//Static vs Dynamic

// C++ 
// int a[20] I want array with 20 elements

// Dynamic array expands based on your need