CREATE TABLE users (
  id uuid DEFAULT uuid_generate_v4 (),
  user_name varchar(12) unique,
  user_text varchar(40),
  user_location varchar(10),
  image_url varchar(200),
  primary key (id, user_name)
);

INSERT INTO users (user_name, user_text, user_location) VALUES ('이제호', '인생은 소소하게', '부산'), ('노정훈', '심장을 바칠게', '서울'), ('김선우', '공주', '경기도'), ('노민우', '사람을 믿지말자', '대전'), ('강현희', '금연하자', '대전'), ('권효재', 'BS', '광주');

CREATE TABLE visit (
  from_who varchar(12),
  to_whom varchar(12),
  message_text varchar(50),
  send_when date,
  primary key (from_who, to_whom, message_text, send_when),
  foreign key (from_who) references users(user_name),
  foreign key (to_whom) references users(user_name)
);

INSERT INTO visit (from_who, to_whom, message_text, send_when) VALUES ('노민우', '이제호', '사람을 믿지마라', '2022-01-22'), ('노정훈', '이제호', '사람을 믿지마라', '2022-01-22'), ('강현희', '이제호', '사람을 믿지마라', '2022-01-22'), ('권효재', '이제호', '사람을 믿지마라', '2022-01-22');

CREATE TABLE GHT (
  id uuid DEFAULT uuid_generate_v4 (),
  writer varchar(12),
  text varchar(500),
  writen_when date, 
  image_url varchar(200),
  primary key (id),
  foreign key (writer) references users(user_name)
);