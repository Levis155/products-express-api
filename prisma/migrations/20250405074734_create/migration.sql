/*
  Warnings:

  - You are about to drop the `Products_table` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products_table";

-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "unitsLeft" INTEGER NOT NULL,
    "pricePerUnit" DOUBLE PRECISION NOT NULL,
    "isOnOffer" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
