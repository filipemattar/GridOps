-- CreateTable
CREATE TABLE "Generation_SIN" (
    "id" SERIAL NOT NULL,
    "instant" TEXT NOT NULL,
    "instantDate" TIMESTAMP(3) NOT NULL,
    "hydro" DOUBLE PRECISION NOT NULL,
    "nuclear" DOUBLE PRECISION NOT NULL,
    "solar" DOUBLE PRECISION NOT NULL,
    "thermal" DOUBLE PRECISION NOT NULL,
    "wind" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Generation_SIN_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation_Norte" (
    "id" SERIAL NOT NULL,
    "instant" TEXT NOT NULL,
    "instantDate" TIMESTAMP(3) NOT NULL,
    "hydro" DOUBLE PRECISION NOT NULL,
    "nuclear" DOUBLE PRECISION NOT NULL,
    "solar" DOUBLE PRECISION NOT NULL,
    "thermal" DOUBLE PRECISION NOT NULL,
    "wind" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Generation_Norte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation_Sul" (
    "id" SERIAL NOT NULL,
    "instant" TEXT NOT NULL,
    "instantDate" TIMESTAMP(3) NOT NULL,
    "hydro" DOUBLE PRECISION NOT NULL,
    "nuclear" DOUBLE PRECISION NOT NULL,
    "solar" DOUBLE PRECISION NOT NULL,
    "thermal" DOUBLE PRECISION NOT NULL,
    "wind" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Generation_Sul_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation_Nordeste" (
    "id" SERIAL NOT NULL,
    "instant" TEXT NOT NULL,
    "instantDate" TIMESTAMP(3) NOT NULL,
    "hydro" DOUBLE PRECISION NOT NULL,
    "nuclear" DOUBLE PRECISION NOT NULL,
    "solar" DOUBLE PRECISION NOT NULL,
    "thermal" DOUBLE PRECISION NOT NULL,
    "wind" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Generation_Nordeste_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generation_COSU" (
    "id" SERIAL NOT NULL,
    "instant" TEXT NOT NULL,
    "instantDate" TIMESTAMP(3) NOT NULL,
    "hydro" DOUBLE PRECISION NOT NULL,
    "nuclear" DOUBLE PRECISION NOT NULL,
    "solar" DOUBLE PRECISION NOT NULL,
    "thermal" DOUBLE PRECISION NOT NULL,
    "wind" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Generation_COSU_pkey" PRIMARY KEY ("id")
);
