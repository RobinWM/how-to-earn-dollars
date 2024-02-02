/*
  Warnings:

  - You are about to drop the column `app_id` on the `link` table. All the data in the column will be lost.
  - You are about to drop the column `is_delete` on the `link` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `link` DROP COLUMN `app_id`,
    DROP COLUMN `is_delete`;
