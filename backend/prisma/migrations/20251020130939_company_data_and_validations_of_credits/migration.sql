/*
  Warnings:

  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CreditStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'CANCELED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastname",
DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "businessName" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT,
    "activity" TEXT,
    "incorporationDate" TIMESTAMP(3),
    "annualRevenue" DOUBLE PRECISION,
    "userDni" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credit" (
    "id" SERIAL NOT NULL,
    "requestedAmount" DOUBLE PRECISION NOT NULL,
    "termMonths" INTEGER NOT NULL,
    "interestRate" DOUBLE PRECISION NOT NULL,
    "status" "CreditStatus" NOT NULL DEFAULT 'PENDING',
    "requestDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approvalDate" TIMESTAMP(3),
    "digitalSignatureId" INTEGER,
    "companyId" INTEGER NOT NULL,
    "userDni" TEXT NOT NULL,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DigitalSignature" (
    "id" SERIAL NOT NULL,
    "documentHash" TEXT NOT NULL,
    "signatureDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "signedBy" TEXT NOT NULL,
    "documentUrl" TEXT,

    CONSTRAINT "DigitalSignature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KycAmlVerification" (
    "id" SERIAL NOT NULL,
    "creditId" INTEGER NOT NULL,
    "riskLevel" TEXT NOT NULL,
    "pep" BOOLEAN NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verificationDate" TIMESTAMP(3),

    CONSTRAINT "KycAmlVerification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_taxId_key" ON "Company"("taxId");

-- CreateIndex
CREATE UNIQUE INDEX "Credit_digitalSignatureId_key" ON "Credit"("digitalSignatureId");

-- CreateIndex
CREATE UNIQUE INDEX "KycAmlVerification_creditId_key" ON "KycAmlVerification"("creditId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userDni_fkey" FOREIGN KEY ("userDni") REFERENCES "User"("dni") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_userDni_fkey" FOREIGN KEY ("userDni") REFERENCES "User"("dni") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_digitalSignatureId_fkey" FOREIGN KEY ("digitalSignatureId") REFERENCES "DigitalSignature"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KycAmlVerification" ADD CONSTRAINT "KycAmlVerification_creditId_fkey" FOREIGN KEY ("creditId") REFERENCES "Credit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
