/**
 * @param {string} s
 * @return {boolean}
 */

 // '(', ')', '{', '}', '[' and ']'
var isValid = function(s) {
  if(s.length%2 !== 0){
    return false;
  }
  var res = []
  var prefix = ["(", "{", "["]
  var sy = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  for(var i=0; i<s.length; i++){
    var pre = s[i]
    if(prefix.indexOf(pre)!= -1){
      res.push(pre)
    }else{
      var pop = res.pop()
      if(pop!=sy[pre])
        return false
    }
  }
  return (res.length==0)
};