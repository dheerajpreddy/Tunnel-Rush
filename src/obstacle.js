function obsConstructor(n) {
  obj = {};
  obj.num = n;
  var positions = [];
  for (var i = 0; i < obj.n; i++) {
    if (i % 2 == 0) {
      positions.push(
          1.4,  0.0,  0.5-2*i,
          1.0,  1.0,  0.5-2*i,
         -1.4,  0.0,  0.5-2*i,
         -1.0, -1.0,  0.5-2*i,
        )
    }
    else if (i % 2 == 1) {
      positions.push(
         -1.4,  0.0,  0.5-2*i,
         -1.0, -1.0,  0.5-2*i,
          1.0, -1.0,  0.5-2*i,
          1.4,  0.0,  0.5-2*i,
        )
    }
  }
  var c = [1.0, 0.0, 0.0, 0.7];
  var colors = [];
  for (var i = 0; i < obj.n; i++) {
    colors = colors.concat(c, c, c, c);
  }
  var indices = [];
  for (var i = 0; i < obj.n; i++) {
    indices.push(4*i, 4*i + 1, 4*i + 2, 4*i, 4*i + 2, 4*i + 3);
  }
  obj.positions = positions;
  obj.colors = colors;
  obj.indices = indices;
  return obj;
}
