SET NAMES UTF8;
DROP DATABASE IF EXISTS sohu;
CREATE DATABASE sohu CHARSET=UTF8;
USE sohu;

/**用户信息表**/
CREATE TABLE sohu_user(
  id INT PRIMARY KEY AUTO_INCREMENT,  
  uname  VARCHAR(32),
  upwd   VARCHAR(64),
  homepage     VARCHAR(50)
);
INSERT INTO sohu_user VALUES
(null, 'dongdong', password('123456'),'http://dongdong.com'),
(null, 'dingding',password( '123456'),'http://dingding.com');

/* 发表评论表*/
CREATE TABLE sohu_comment(
  cid     INT PRIMARY KEY AUTO_INCREMENT,
  title   VARCHAR(50),
  cImg    VARCHAR(32),
  content VARCHAR(800),
  cTime   DATETIME
);
INSERT INTO sohu_comment VALUES
(null,'燕洵','images/comment/comment01.jpg','评论一',now());
