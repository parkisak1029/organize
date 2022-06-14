CREATE TABLE board(
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `subject` VARCHAR(100) NOT NULL,
    `content` TEXT NULL,
    `name` VARCHAR(30) NOT NULL,
    `date` TIMESTAMP default current_timestamp NOT NULL,
    `like` INT(11) default 0 NOT NULL,
    `hit` INT(11) default 0 NOT NULL
    `publicKey` VARCHAR(100) NOT NULL
);


