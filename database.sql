CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"gender" VARCHAR(20),
	"age" INTEGER,
	"ready_to_transfer" BOOLEAN DEFAULT FALSE,
	"notes" VARCHAR(250)
	);
	
INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
	VALUES
	('Scotty', 'M', 4, TRUE, 'Born in Guatemala'),
	('Jean', 'F', 5, TRUE, 'Allergic to lots of lava'),
	('Ororo', 'F', 7, FALSE, 'Loves listening to Paula (Abdul)'),
	(E'K\'leaf', 'NB', 15, FALSE, 'Never refuses a treat'),
	('Charlie', 'M', 9, TRUE, 'Favorite band is Nirvana'),
	('Betsy', 'F', 4, TRUE, 'Has a pet iguana');
	