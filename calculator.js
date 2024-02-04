class Calculator {
  constructor() {
    this.index = 0;
    this.records = {};
  }
  initialise() {
    let record = {
      results: [],
      totalOps: 0,
    };
    this.index += 1;
    this.records[this.index] = record;
  }

  operate(operation, num1, num2) {
    this.calculate(this.index, operation, num1, num2);
    let record = this.records[this.index];
    return {
      id: this.index,
      totalOps: record.totalOps,
      result: record.results[record.results.length - 1],
    };
  }

  calculate(id, operation, num1, num2) {
    let result = 0;
    if (!num1) {
      num1 = this.records[id].results[this.records[id].results.length - 1] || 0;
    }
    if (operation === "add") {
      result = num1 + num2;
    } else if (operation === "subtract") {
      result = num1 - num2;
    }
    if (operation === "multiply") {
      result = num1 * num2;
    }
    if (operation === "division") {
      result = num1 / num2;
    } else {
      throw new Error("Unsupported operation");
    }
    let record = this.records[id];
    record.results.push(result);
    record.totalOps += 1;
    return {
      id: id,
      totalOps: record.totalOps,
      result: record.results[record.results.length - 1] || 0,
    };
  }
  undo(id) {
    let record = this.records[id];
    record.results.pop();
    record.totalOps -= 1;
    return {
      id: id,
      totalOps: record.totalOps,
      result: record.results[record.results.length - 1],
    };
  }
  reset(id) {
    let record = this.records[id];
    record.results = [];
    record.totalOps = 0;
    return true;
  }
}

module.exports = { Calculator };
