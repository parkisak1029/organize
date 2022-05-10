INSERT INTO board(subject, content, name) VALUES('제목이었던 때가...', '내용', 'ingoo');
SELECT * FROM board
UPDATE board SET subject='asdf' WHERE idx=1
DELETE FROM board WHERE idx=1
INSERT INTO board(필드, 필드2...) VALUES(1,2,...)