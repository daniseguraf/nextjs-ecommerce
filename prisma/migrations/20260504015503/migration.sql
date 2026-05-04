/*
  Warnings:

  - The `sizes` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sizes",
ADD COLUMN     "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[];

-- DropEnum
DROP TYPE "size";

-- CreateIndex
CREATE INDEX "Product_sizes_idx" ON "Product"("sizes");
