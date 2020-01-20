const Maybe = require("maybe-monada").default;

let lolXyZkStr = true;

function getAMutableVariableInsideAnObjectJungleHoldingABooleanWithNoClueInItsNameToItsBooleanType() {
	return (() => !!!!!lolXyZkStr)();
};

function areNodeDevsWillingToWriteCode() {
	return Maybe(getAMutableVariableInsideAnObjectJungleHoldingABooleanWithNoClueInItsNameToItsBooleanType());
}

console.log(areNodeDevsWillingToWriteCode().withDefault(42));

module.exports = areNodeDevsWillingToWriteCode;