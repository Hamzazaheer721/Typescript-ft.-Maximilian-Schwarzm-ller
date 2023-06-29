const a = [1, 2, 1, 2, 1, 3, 2]

// NOTE undefined + 2 = NaN and !!NaN = falsy
const frequency = a.reduce((acc, curr) => {
  acc[curr] = (acc[curr] + 1) || 1;
},{})
