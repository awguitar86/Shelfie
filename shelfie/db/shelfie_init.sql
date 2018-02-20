

CREATE TABLE bins (
    id VARCHAR(40) PRIMARY KEY,
    shelf VARCHAR(150),
    bin INTEGER,
    item VARCHAR(150),
    price VARCHAR(150)
);

INSERT INTO bins (id, shelf, bin)
VALUES  (1, 'A', 'A1'),
        (2, 'A', 'A2'),
        (3, 'A', 'A3'),
        (4, 'A', 'A4'),
        (5, 'A', 'A5'),
        (1, 'B', 'B1'),
        (2, 'B', 'B2'),
        (3, 'B', 'B3'),
        (4, 'B', 'B4'),
        (5, 'B', 'B5'),
        (1, 'C', 'C1'),
        (2, 'C', 'C2'),
        (3, 'C', 'C3'),
        (4, 'C', 'C4'),
        (5, 'C', 'C5'),
        (1, 'D', 'D1'),
        (2, 'D', 'D2'),
        (3, 'D', 'D3'),
        (4, 'D', 'D4'),
        (5, 'D', 'D5')