import assert from "node:assert/strict";
import { shouldCountVisit } from "./visitors";

assert.equal(shouldCountVisit(false, "Mozilla/5.0"), true);
assert.equal(shouldCountVisit(true, "Mozilla/5.0"), false);
assert.equal(
  shouldCountVisit(false, "Mozilla/5.0 (compatible; Googlebot/2.1)"),
  false,
);
assert.equal(shouldCountVisit(false, null), true);

console.log("visitors ok");
