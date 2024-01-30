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
