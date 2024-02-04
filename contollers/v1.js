const { Calculator } = require("../calculator");
let calculator = new Calculator();

exports.initialiseHandler = (req, res) => {
  try {
    console.log("Initialising calculator");
    let { operator, num1, num2 } = req.body;
    calculator.initialise();
    let result = calculator.operate(operator, num1, num2);
    return res.json(result);
  } catch (err) {
    console.error("Initialising failed with error: ", err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

exports.operationHandler = (req, res) => {
  try {
    let { id, operator, num } = req.body;

    let result = calculator.calculate(id, operator, null, num);
    return res.json(result);
  } catch (err) {
    console.error("Operation failed with error: ", err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

exports.undoHandler = (req, res) => {
  try {
    let { id } = req.body;
    let result = calculator.undo(id);
    return res.json(result);
  } catch (err) {
    console.error("Undo failed with error: ", err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};

exports.resetHandler = (req, res) => {
  try {
    let { id } = req.body;
    calculator.reset(id);
    return res.json({
      success: true,
      message: `calculator ${id} is now reset`,
    });
  } catch (err) {
    console.error("Reset failed with error: ", err);
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};
