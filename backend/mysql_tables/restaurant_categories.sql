DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `categories` WRITE;

INSERT INTO `categories` VALUES (1,'burgers'),(2,'desserts'),(3,'drinks'),(4,'meats'),(5,'pasta'),(6,'pizzas'),(7,'salads');

UNLOCK TABLES;

