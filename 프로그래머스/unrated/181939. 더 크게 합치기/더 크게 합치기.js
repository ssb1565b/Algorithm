const solution = (a, b) =>
Number(b.toString() + a.toString()) > Number(a.toString() + b.toString()) 
    ? Number(b.toString() + a.toString())
    : Number(a.toString() + b.toString());
