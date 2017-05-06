Create Database burgers_db;

use burgers_db;

create table burgers(
id int(11) auto_increment,
burger_name varchar(255) not null,
devoured boolean not null,
date_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
Primary key(id)
);

		