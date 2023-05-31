// Javascript implementation of the approach
      function getSum(arr, n) {
        if (n % 2 == 0) {
          // (n) is even
          return 0;
        }
        var sum = 0;
        for (var i = 0; i < n; i++) {
          sum += arr[i];
        }
        return sum; //  (n) is odd
      }
 
      // Driver's Code
 
      // Declaring two array one of length odd and other of
      // length even;
      var arr = [1, 2, 3, 4];
      var a = [1, 2, 3, 4, 5];
 
      // Function call
      console.log(getSum(arr, 4)); //print 0 because (n) is even
      console.log(getSum(a, 5)); // print sum because (n) is odd
       
      // This code is contributed by satwiksuman.
