-- CreateTable
CREATE TABLE "Meme" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,

    CONSTRAINT "Meme_pkey" PRIMARY KEY ("id")
);
