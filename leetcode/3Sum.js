/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 // k sum
var threeSum = function(nums) {
    var nums = nums.sort(),
        rs=[],
        result = [],
        max = 3;
    function containt(arrs, ar1) {
      var ar1Str = ar1.join(",")
      for (var i = arrs.length - 1; i >= 0; i--) {
        if( ar1Str == arrs[i].join(',')){
          return false
        }
      }
      return true
    }

    function t(nums, st, ln, sup){
      for(var i=st;i<ln;i++){
        rs.push(nums[i]);
        var su = sup + nums[i];
        if(rs.length<max){
          if(i+1 < ln){
            t(nums, i+1, ln, su);
          }
        }else if(su===0){
          if(rs.length===max && containt(result, rs)){
            result.push(rs.slice());
          }
        }
        rs.pop();
      }
    }
    t(nums, 0, nums.length, 0);
    return result;
};


var threeSum = function(nums) {
    var nums = nums.sort(),
        rs=[],
        result = [],
        max = 3,
        final = 0;

    function containt(arrs, ar1) {
      for(var i=0; i<arrs.length;i++){
        console.log("arrs", arrs)
        console.log("ar1", ar1)
        if(arrs[i][0] === ar1[0] && arrs[i][1] === ar1[1]){
          return true
        }
      }
      return false
    }

    for(var i=0; i<nums.length-2; i++){
      for (var j = i+1; j <nums.length-1; j++) {
        if(containt(result, [nums[i], nums[j], null] )){
          continue
        }
        for (var z = j+1; z <nums.length; z++) {
          if(containt(result, [nums[i], nums[j], nums[z]] )){
            continue
          }
          if(final === (nums[i]+nums[j]+nums[z])) {
            result.push([nums[i], nums[j], nums[z]])
          }
        }
      }
    }

    return result;
};
