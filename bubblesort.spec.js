describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single item array', function(){
    expect( bubbleSort([8]) ).toEqual( [8] );
  });
  it('handles a multiple item array', function(){
    expect( bubbleSort([6, 4, 7, 3, 1, 2]) ).toEqual( [1, 2, 3, 4, 6, 7] );
  });
});

// describe('Swap', function(){
//   it('should be able to check index in array and compare with neighboring index', function() {

//   })
// })
