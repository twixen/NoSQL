CREATE TABLE train (
    id      SERIAL PRIMARY KEY,
    title   TEXT,
    body    TEXT,
    tags    TEXT
);
COPY train
FROM 'CorrectTrain.csv'
DELIMITER ',' 
CSV 
HEADER 
ENCODING 'UTF8'; 

SELECT COUNT(id) FROM train;

CREATE TABLE tags (
    id          SERIAL PRIMARY KEY,
    id_train    INT,
    tag         TEXT
);

INSERT INTO tags (id_train, tag)
SELECT train.id, unnest(string_to_array(tags, ' ')) FROM train;

ALTER TABLE train DROP COLUMN tags;

SELECT COUNT(id) FROM tags;
SELECT COUNT(DISTINCT tag) FROM tags;
SELECT COUNT(tag), tag FROM tags GROUP BY tag ORDER BY COUNT(tag) DESC LIMIT 10;
SELECT COUNT(tag), tag FROM tags GROUP BY tag ORDER BY COUNT(tag) ASC LIMIT 10;