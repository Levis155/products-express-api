import { Router } from "express";
import validateProduct from "../Middleware/validateProduct.js";
import {
  createProduct,
  getProduct,
  getAllProducts,
  getOffers,
  updateProduct,
  deleteProduct,
} from "../Controllers/productsControllers.js";

const router = Router();

router.route("/").post(validateProduct, createProduct).get(getAllProducts);

router.route("/offers").get(getOffers);

router
  .route("/:productId")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
