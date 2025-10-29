-- AlterEnum
ALTER TYPE "CreditStatus" ADD VALUE 'CANCELED';

-- AlterTable
ALTER TABLE "KycAmlVerification" ADD COLUMN     "dni_back" TEXT,
ADD COLUMN     "dni_front" TEXT;
