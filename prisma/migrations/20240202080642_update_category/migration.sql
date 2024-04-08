-- AlterTable
ALTER TABLE `category` ADD COLUMN `app_id` VARCHAR(191) NOT NULL DEFAULT 'front_page_resource',
    ADD COLUMN `is_delete` TINYINT NOT NULL DEFAULT 1;
