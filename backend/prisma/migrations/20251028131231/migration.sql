/*
  Warnings:

  - The values [CANCELED] on the enum `CreditStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CreditStatus_new" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'NEW', 'REVIEW');
ALTER TABLE "public"."Credit" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Credit" ALTER COLUMN "status" TYPE "CreditStatus_new" USING ("status"::text::"CreditStatus_new");
ALTER TYPE "CreditStatus" RENAME TO "CreditStatus_old";
ALTER TYPE "CreditStatus_new" RENAME TO "CreditStatus";
DROP TYPE "public"."CreditStatus_old";
ALTER TABLE "Credit" ALTER COLUMN "status" SET DEFAULT 'NEW';
COMMIT;

-- AlterTable
ALTER TABLE "Credit" ALTER COLUMN "status" SET DEFAULT 'NEW';
