DROP TABLE IF EXISTS `bookings`;

CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `customer_num` int NOT NULL,
  `booking_date` text NOT NULL,
  `customer_id` int NOT NULL,
  `created_at` varchar(45) NOT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `customer_id_idx` (`customer_id`),
  CONSTRAINT `fk_bookings_customer` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
