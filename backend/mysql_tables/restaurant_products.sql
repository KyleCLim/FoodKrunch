
DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category_id` int NOT NULL,
  `image` varchar(50) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `products` WRITE;

INSERT INTO `products` VALUES (1,'Loaded Monster Burger','Congue eu consequat ac felis',150.00,1,'burger1.png'),(2,'Krunch Classic Burger','Lorem ipsum dolor sit amet',75.00,1,'burger2.png'),(3,'Captain Krunch Burger','Congue eu consequat ac felis',165.00,1,'burger3.png'),(4,'Krunch Classic Pancake','Lorem ipsum dolor sit amet',165.00,2,'dessert1.png'),(5,'Strawberry Cheesecake','Dolor morbi non arcu risus quis',130.00,2,'dessert2.png'),(6,'Chocolate Almond Cake','Lorem ipsum dolor sit amet',195.00,2,'dessert3.png'),(7,'Triple Island Delight','Congue eu consequat ac felis',135.00,2,'dessert4.png'),(8,'Lemon Iced Tea','Congue eu consequat ac felis',65.00,3,'drinks1.png'),(9,'Tropical Splash','Dolor morbi non arcu risus quis',65.00,3,'drinks2.png'),(10,'Ginger Zesty Burst','Congue eu consequat ac felis',70.00,3,'drinks3.png'),(11,'Cola Cabana','Lorem ipsum dolor sit amet',55.00,3,'drinks4.png'),(12,'Classic Dark Coffee','Dolor morbi non arcu risus quis',55.00,3,'drinks5.png'),(13,'Mocha Frappe Special','Congue eu consequat ac felis',100.00,3,'drinks6.png'),(14,'Premium Krunch Steak','Dolor morbi non arcu risus quis',650.00,4,'meal1.png'),(15,'Chicken Biryani','Lorem ipsum dolor sit amet',290.00,4,'meal2.png'),(16,'Chicken Finger Wings','Lorem ipsum dolor sit amet',185.00,4,'meal3.png'),(17,'Chicken Rice Curry','Congue eu consequat ac felis',175.00,4,'meal4.png'),(18,'Krunch Pork BBQ','Congue eu consequat ac felis',160.00,4,'meal5.png'),(19,'Krunch Chicken BBQ','Dolor morbi non arcu risus quis',150.00,4,'meal6.png'),(20,'Grilled Salmon','Lorem ipsum dolor sit amet',140.00,4,'meal7.png'),(21,'Chicken Karagi Special','Dolor morbi non arcu risus quis',375.00,4,'meal8.png'),(22,'Cheesy Chicken Pari-pari','Congue eu consequat ac felis',550.00,4,'meal9.png'),(23,'Krunch Roasted Chicken','Lorem ipsum dolor sit amet',630.00,4,'meal11.png'),(24,'Makkaroni Pomodoro','Lorem ipsum dolor sit amet',130.00,5,'pasta1.png'),(25,'Krunch Spaghetti','Congue eu consequat ac felis',150.00,5,'pasta2.png'),(26,'Krunch Carbonara','Dolor morbi non arcu risus quis',165.00,5,'pasta3.png'),(27,'Pepperoni Pizza','Congue eu consequat ac felis',215.00,6,'pizza1.png'),(28,'Avocado Zest Party','Dolor morbi non arcu risus quis',165.00,7,'salad1.png'),(29,'Green & Mean','Congue eu consequat ac felis',135.00,7,'salad2.png'),(30,'Salmon Zesty Greens','Lorem ipsum dolor sit amet',185.00,7,'salad3.png');

UNLOCK TABLES;
