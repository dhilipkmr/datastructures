function SpiralTreePrint(node){
  const queue = [];
  queue.push(node);
  queue.push('$');
  while(queue.length > 0) {
    const next = queue.pop();
    while (next.val !== '$') {
      console.log(next.val);
      queue.push(next.left);
      queue.push(next.right);
    }
    if (next.val === '$') {
      const next = queue.shift();
      while (next.val !== '$') {
        console.log(next.val);
        queue.push(next.left);
        queue.push(next.right);
      }
    }
  }
}

//                    1
//          2                     3
//     4        5            6           7
//  8    9   10    11    12    13    14    15

const node = {
  val:1,
  right: {
    val: 3,
    right: {
      val:7,
      right: {
        val: 15,
        right: null,
        left: null
      },
      left: {
        val: 14,
        right: null,
        left: null
      }
    },
    left: {
      val: 6,
      right: {
        val: 13,
        right: null,
        left: null
      },
      left: {
        val: 12,
        right: null,
        left: null
      }
    }
  },
  left: {
    val:2,
    left: {
      val: 4,
      right: {
        val: 9,
        right: null,
        left: null
      },
      left: {
        val: 8,
        right: null,
        left: null
      }
    },
    right: {
      val: 5,
      right: {
        val: 11,
        right: null,
        left: null
      },
      left: {
        val: 10,
        right: null,
        left: null
      }
    }
  }
}

SpiralTreePrint(node);

//1$23$7654$89101112131415$