function validateProduct(req, res, next) {
  const {
    productTitle,
    productDescription,
    unitsLeft,
    pricePerUnit,
  } = req.body;

  if (!productTitle) {
    res.status(400).json({
      status: "Error",
      message: "ProductTitle is required",
    });
  }

  if (!productDescription) {
    res.status(400).json({
      status: "Error",
      message: "ProductDescription is required",
    });
  }

  if (!unitsLeft) {
    res.status(400).json({
      status: "Error",
      message: "unitsLeft is required",
    });
  }

  if (!pricePerUnit) {
    res.status(400).json({
      status: "Error",
      message: "pricePerUnit is required",
    });
  }

  next();
}

export default validateProduct;
