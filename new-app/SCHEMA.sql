CREATE TABLE recipes (
  ID INT SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  ingredients text[] NOT NULL,
  instructions text[] NOT NULL,
  prep_time varchar(6),
  cook_time varchar(6),
  tags text[]
);

CREATE TABLE family (
  ID INT SERIAL NOT NULL,
  name VARCHAR(70) NOT NULL,
  tags text[] NOT NULL
);
