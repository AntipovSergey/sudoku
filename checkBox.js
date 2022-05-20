function CheckBox (board,emptyPos,num) {
  let array=[]
  let array1=[]
  let array2=[]
  
  ///////////
  let array3=[]
  let array4=[]
  let array5=[]
  
  //////////
  let array6=[]
  let array7=[]
  let array8=[]
  //////////
  
  array.push(board[0].slice(0,3))
  array.push (board[1].slice(0,3))
  array.push(board[2].slice(0,3))
  
  let b1=array.flat(2)
  /////////////
  array1.push(board[3].slice(0,3))
  array1.push (board[4].slice(0,3))
  array1.push(board[5].slice(0,3))
  let b2=array1.flat(2)
  ///////////////
  array2.push(board[6].slice(0,3))
  array2.push (board[7].slice(0,3))
  array2.push(board[8].slice(0,3))
  let b3=array2.flat(2)
  ///////////////
  
  array3.push(board[0].slice(3,6))
  array3.push (board[1].slice(3,6))
  array3.push(board[2].slice(3,6))
  let b4=array3.flat(2)
  ////////////////
  
  array4.push(board[3].slice(3,6))
  array4.push (board[4].slice(3,6))
  array4.push(board[5].slice(3,6))
  let b5=array4.flat(2)
  ////////////////
  array5.push(board[6].slice(3,6))
  array5.push (board[7].slice(3,6))
  array5.push(board[8].slice(3,6))
  let b6=array5.flat(2)
  
  array6.push(board[0].slice(6,9))
  array6.push (board[1].slice(6,9))
  array6.push(board[2].slice(6,9))
  let b7=array6.flat(2)
  
  /////////////////
  array7.push(board[3].slice(6,9))
  array7.push (board[4].slice(6,9))
  array7.push(board[5].slice(6,9))
  let b8=array7.flat(2)
  /////////////////
  
  array8.push(board[6].slice(6,9))
  array8.push (board[7].slice(6,9))
  array8.push(board[8].slice(6,9))
  let b9=array8.flat(2)
  
  ////////////////
  
  let [row, col] = emptyPos
  
  if ((row >=0 && row < 3) && (col >=0 && col < 4)) {
     return !b1.includes(num)
  }
  
  else if ((row >=3 && row < 6) && (col >=0 && col < 4)) {
    return !b2.includes(num)
  }
  
  else if ((row >=6 && row < 9) && (col >=0 && col < 4)) {
    return !b3.includes(num)
  }
  
  else if ((row >=0 && row < 3) && (col >=3 && col < 6)) {
    return !b4.includes(num)
  }
  
  else if ((row >=3 && row < 6) && (col >=3 && col < 6)) {
    return !b5.includes(num)
  }
  
  else if ((row >=6 && row < 9) && (col >=3 && col < 6)) {
    return !b6.includes(num)
  }
  
  else if ((row >=0 && row < 3) && (col >=6 && col < 9)) {
    return !b7.includes(num)
  }
  
  else if ((row >=3 && row < 6) && (col >=6 && col < 9)) {
    return !b8.includes(num)
  }
  
  else if ((row >=6 && row < 9) && (col >=6 && col < 9)) {
    return !b9.includes(num)
  }
  }
  