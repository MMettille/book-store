CREATE TABLE "store" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(100) NOT NULL,
	"author" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);
