```
367. Valid Perfect Square   QuestionEditorial Solution  My Submissions
Total Accepted: 22273
Total Submissions: 60416
Difficulty: Medium
Contributors: Admin
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Returns: True
Example 2:

Input: 14
Returns: False
Credits:
Special thanks to @elmirap for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
```

# @param {Integer} num
# @return {Boolean}
def is_perfect_square(num)
    if num==1 || num==0
      return true;
    else
      mid = (num/2).round
      hig = mid
      while mid*mid > num
        hig=mid
        mid=(mid/2).round
      end
      if mid*mid == num
        return true
      else
        i = mid + 1
        while i < hig
          if i*i == num
            return true
          else
            i=i+1
          end
        end
        return false
      end
    end
end