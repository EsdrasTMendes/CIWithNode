const sum = require("./sum");

test(
  "soma 1 + 2 para o resultado ser 3", () => {
    expect(sum(1,2)).toBe(3);
  });