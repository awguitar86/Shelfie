
CREATE TABLE bins (
    id VARCHAR(40) PRIMARY KEY,
    shelf VARCHAR(150),
    bin INTEGER,
    item VARCHAR(150),
    price VARCHAR(150)
);

INSERT INTO bins (id, shelf, bin)
VALUES  ('A1', 'A', 1),
        ('A2', 'A', 2),
        ('A3', 'A', 3),
        ('A4', 'A', 4),
        ('A5', 'A', 5),
        ('B1', 'B', 1),
        ('B2', 'B', 2),
        ('B3', 'B', 3),
        ('B4', 'B', 4),
        ('B5', 'B', 5),
        ('C1', 'C', 1),
        ('C2', 'C', 2),
        ('C3', 'C', 3),
        ('C4', 'C', 4),
        ('C5', 'C', 5),
        ('D1', 'D', 1),
        ('D2', 'D', 2),
        ('D3', 'D', 3),
        ('D4', 'D', 4),
        ('D5', 'D', 5)