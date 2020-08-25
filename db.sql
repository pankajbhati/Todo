/* Table for user */
create table users (  
	id int NOT NULL AUTO_INCREMENT, 
	username varchar(50),     
	password varchar(50),
    primary key  (id, username)
);

/* Table for Todo*/

create table todos (
	userId int,
	note TEXT
)