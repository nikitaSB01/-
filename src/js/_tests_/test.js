import { lifePlayer } from "../app.js";

test("lifePlayer", () => {
  const player = { name: "Маг", health: 90 };
  const result = lifePlayer(player);
  expect(result).toBe("healthy");
});
test("lifePlayer", () => {
  const player = { name: "Маг", health: 30 };
  const result = lifePlayer(player);
  expect(result).toBe("wounded");
});
test("lifePlayer", () => {
  const player = { name: "Маг", health: 10 };
  const result = lifePlayer(player);
  expect(result).toBe("critical");
});

/* test.each([
  [{ name: "Маг", health: 90 }, "healthy"],
  [{ name: "Маг", health: 40 }, "wounded"],
  [{ name: "Маг", health: 10 }, "critical"],
])("testing life player %s status and %i amount", (amount, exp) => {
  const result = lifePlayer(amount);
  expect(result).toBe(exp);
}); */
