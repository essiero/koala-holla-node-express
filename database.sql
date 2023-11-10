CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
    "image_path" TEXT,
	"name" VARCHAR(100) NOT NULL,
	"gender" VARCHAR(20),
	"age" INTEGER,
	"ready_to_transfer" BOOLEAN DEFAULT FALSE,
	"notes" VARCHAR(250)
	);
	
INSERT INTO "koalas" ("image_path", "name", "gender", "age", "ready_to_transfer", "notes")
	VALUES
	('/images/scotty.jpeg', 'Scotty', 'M', 4, TRUE, 'Born in Guatemala'),
	('/images/jean.jpeg', 'Jean', 'F', 5, TRUE, 'Allergic to lots of lava'),
	('/images/ororo.jpg', 'Ororo', 'F', 7, FALSE, 'Loves listening to Paula (Abdul)'),
	('/images/kleaf.webp', E'K\'leaf', 'NB', 15, FALSE, 'Never refuses a treat'),
	('/images/charlie.jpeg', 'Charlie', 'M', 9, TRUE, 'Favorite band is Nirvana'),
	('/images/betsy.webp', 'Betsy', 'F', 4, TRUE, 'Has a pet iguana');
	