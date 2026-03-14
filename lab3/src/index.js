/**
 * Lab3 SonarQube Demo - quality-checked code
 * Secrets from environment; no eval; strict equality; no console.log in logic.
 */

function processUserInput(userInput) {
  // Safe alternative to eval: parse as JSON if expected format, or validate/sanitize
  try {
    return JSON.parse(userInput);
  } catch (_err) {
    return null;
  }
}

function getData(id) {
  if (id === null || id === undefined) {
    return null;
  }
  return { id };
}

function computeDoubledSum(a, b) {
  const sum = a + b;
  return sum * 2;
}

async function fetchWithCatch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}

function callRiskyWithHandling() {
  try {
    riskyOperation();
  } catch (e) {
    throw e;
  }
}

function riskyOperation() {
  throw new Error("fail");
}

function categorizeNumber(n) {
  if (n >= 1 && n <= 9 && n !== 5) {
    if (n >= 2 && n <= 4) {
      return "small";
    }
  }
  return "other";
}

module.exports = {
  getData,
  processUserInput,
  computeDoubledSum,
  fetchWithCatch,
  callRiskyWithHandling,
  categorizeNumber
};
