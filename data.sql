insert into brands (id, name)
values (default, "Dolce Gabanna");

insert into colors (id, name)
values (default, "Verde");

insert into products (id, name, description, price, brand_id, color_id)
values(default, "Dolce Gabbana 2166", "Nondisp Maisonneuve's fx r leg, 7thJ", 15.2, default, default);

insert into images (id, file_name, product_id)
values (default, "0DG2166__04_96_000A.jpg", default);

insert into categories (id, name)
values (default, "Administrador");

insert into users (id, first_name, last_name, email, user_name, password, image, category_id)
values  (default, "Cordelie", "Izakoff", "cizakoff0@purevolume.com", "cizakoff0", "34qs7YiGFQ", "Administrador", "https://robohash.org/quiaveniamest.png?size=50x50&set=set1", default);

insert into user_product (id, user_id, product_id)
values(default, default, default);



      
      


