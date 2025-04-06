import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const createProduct = async (req, res) => {
  const { productTitle, productDescription, unitsLeft, pricePerUnit } =
    req.body;

  try {
    const newProduct = await client.product.create({
      data: {
        productTitle,
        productDescription,
        unitsLeft,
        pricePerUnit,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Product added successfully!",
      data: newProduct,
    });
  } catch (e) {
    res.status(500).json({
      status: "Error",
      message: "There was an error",
    });
  }
};

export const getAllProducts = async (_req, res) => {
  try {
    const allProducts = await client.product.findMany();

    res.status(200).json({
      status: "Success",
      message: "Successfully found all products",
      data: allProducts,
    });
  } catch {
    res.status(500).json({
      status: "Error",
      message: "There was an error.",
    });
  }
};

export const getProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const foundProduct = await client.product.findFirst({
      where: {
        id: productId,
      },
    });

    if (!foundProduct) {
      res.status(404).json({
        status: "Error",
        message: `Product with id ${productId} was not found!`,
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: `Product with id ${productId} found successfully!`,
        data: foundProduct,
      });
    }
  } catch {
    res.status(500).json({
      status: "Error",
      message: "There was an error",
    });
  }
};

export const getOffers = async (_req, res) => {
  try {
    const productsOnOffer = await client.product.findMany({
      where: {
        isOnOffer: true,
      },
    });

    if (productsOnOffer.length === 0) {
      res.status(404).json({
        status: "Error",
        message: "Products on offer not found.",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Products on offer found successfully!",
        data: productsOnOffer,
      });
    }
  } catch {
    res.status(500).json({
      status: "Error",
      message: "There was an error.",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const {
    productTitle,
    productDescription,
    unitsLeft,
    pricePerUnit,
    isOnOffer,
  } = req.body;

  try {
    const foundProduct = await client.product.findFirst({
      where: {
        id: productId,
      },
    });
    if (!foundProduct) {
      res.status(404).json({
        status: "Error",
        message: `Product with id ${productId} was not found!`,
      });
    } else {
      const updatedProduct = await client.product.update({
        where: {
          id: productId,
        },
        data: {
          productTitle: productTitle && productTitle,
          productDescription: productDescription && productDescription,
          unitsLeft: unitsLeft && unitsLeft,
          pricePerUnit: pricePerUnit && pricePerUnit,
          isOnOffer: isOnOffer && isOnOffer,
        },
      });

      res.status(200).json({
        status: "Success",
        message: `Product with id ${productId} was updated successfully!`,
        data: updatedProduct,
      });
    }
  } catch {
    res.status(500).json({
      status: "Error",
      message: "There was an error",
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    const foundProduct = await client.product.findFirst({
      where: {
        id: productId,
      },
    });

    if (!foundProduct) {
      res.status(404).json({
        status: "Error",
        message: `Product with id ${productId} was not found!`,
      });
    } else {
      await client.product.delete({
        where: {
          id: productId,
        },
      });

      res.status(200).json({
        status: "Success",
        message: `Product with id ${productId} was deleted successfully!`,
      });
    }
  } catch {
    res.status(500).json({
      status: "Error",
      message: "There was an error!",
    });
  }
};
