DROP TABLE IF EXISTS bins;

CREATE TABLE bins (
    id VARCHAR,
    shelf VARCHAR,
    bin INTEGER,
    item VARCHAR,
    price VARCHAR
);

INSERT INTO bins (id, shelf, bin, item, price)
    VALUES  ('A1', 'A', 1, 'Apple Macbook Pro', 2000),
            ('A2', 'A', 2, 'Apple iPhone X', 1000),
            ('A3', 'A', 3, 'Apple iWatch', 550)
;