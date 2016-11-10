var longestIncreasingPath = function(matrix) {
    var result = [],
        path = matrix.map(function(e){return new Array(e.length) });

    function move(ma, i, j, len, row, col) {
      // [[i,j], [], [], [], []]
      var point = ma[i][j],
          rs = [point],
          up = [point],
          left = [point],
          down = [point],
          right = [point]
      if(j-1 >=0 && ma[i][j-1]>point){ //move left
        if(path[i][j-1]&& (path[i][j-1].length + len)>(len + 1) ){
          left = left.concat(path[i][j-1])
        }else{
          left = left.concat( move(ma, i, j-1, len+1, row, col) );
        }
      }
      if(left.length > rs.length){
        rs=left
      }

      if(i-1 >=0&& ma[i-1] && ma[i-1][j]>point){// move up
        if(path[i-1][j]&&(path[i-1][j].length+len)>(len + 1)){
          up = up.concat(path[i-1][j])
        }else{
          up = up.concat( move(ma, i-1, j, len+1, row, col) )
        }
      }

      if(up.length > rs.length){
        rs=up
      }

      if(j+1 <col&& ma[i][j+1]>point){// move right
        if(path[i][j+1] && (path[i][j+1].length+len)>(len + 1)){
          right = right.concat(path[i][j+1])
        }else{
          right = right.concat( move(ma, i, j+1, len+1, row, col) )
        }
      }
      if(right.length > rs.length){
        rs=right
      }
      if(i+1<row&& ma[i+1] && ma[i+1][j]>point){// move down
        if(path[i+1][j]&&(path[i+1][j].length+len)>(len + 1)){
          down = down.concat(path[i+1][j])
        }else{
          down = down.concat( move(ma, i+1, j, len+1, row, col) )
        }
      }
      if(down.length > rs.length){
        rs=down
      }

      path[i][j]=rs

      return rs
    }

    for(var i=0; i<matrix.length; i++){
      for(var j=0; j<matrix[i].length; j++){
        var link = move(matrix, i, j, 0, matrix.length, matrix[i].length);
        if(link.length>result.length){
          result=link
        }
      }
    }

    return result.length;

};