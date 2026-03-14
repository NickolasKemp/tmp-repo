/**
 * Utility helpers - SonarQube compliant
 */

function strictEquality(a, b) {
  return a === b;
}

function handleCase(x) {
  const action = () => doSomething();
  switch (x) {
    case 1:
    case 2:
      action();
      break;
    default:
      action();
  }
}

function doSomething() {}

function withExplicitReturn(condition) {
  if (condition) {
    return 1;
  }
  return undefined;
}

module.exports = {
  strictEquality,
  handleCase,
  doSomething,
  withExplicitReturn
};
