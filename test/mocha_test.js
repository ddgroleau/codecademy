const assert = require('assert');

let num = 0;

describe('function',()=>{
    before('set num', ()=>{
       num = 1+1;
    })
    it('makes 1+1=2',()=>{

        assert.ok(num === 2);
    })
})

// assert.deepEqual(); -this compares values of two objects
// Use chai assertion library
// describe('hooks', function() {
//     before(function() {
//       // runs once before the first test in this block
//     });
  
//     after(function() {
//       // runs once after the last test in this block
//     });
  
//     beforeEach(function() {
//       // runs before each test in this block
//     });
  
//     afterEach(function() {
//       // runs after each test in this block
//     });
  
//     // test cases
//   });