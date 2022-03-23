-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: grupo_riot
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Dolce Gabanna'),(2,'Emporio Armani'),(3,'Prada'),(4,'Ray Ban'),(5,'Vogue');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Administrador'),(2,'Vendedor'),(3,'Usuario');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Verde'),(2,'Marrón'),(3,'Negro'),(4,'Dorado'),(5,'Plateado'),(6,'Magenta'),(7,'Gris'),(8,'Naranja'),(9,'Violeta'),(10,'Verde'),(11,'Azul'),(12,'Rojo'),(13,'Rosa');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(50) NOT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=218 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'0DG2166__04_96_000A.jpg',1),(2,'0DG2166__04_96_030A.jpg',1),(3,'0DG2166__04_96_060A.jpg',1),(4,'0DG2166__04_96_090A.jpg',1),(5,'0DG2175__502_73_000A.jpg',2),(6,'0DG2175__502_73_030A.jpg',2),(7,'0DG2175__502_73_060A.jpg',2),(8,'0DG2175__502_73_090A.jpg',2),(9,'0DG2220__01_87_000A.jpg',3),(10,'0DG2220__01_87_030A.jpg',3),(11,'0DG2220__01_87_060A.jpg',3),(12,'0DG2220__01_87_090A.jpg',3),(13,'0DG2222__01_87_000A.jpg',4),(14,'0DG2222__01_87_030A.jpg',4),(15,'0DG2222__01_87_060A.jpg',4),(16,'0DG2222__01_87_090A.jpg',4),(17,'0DG4268__501_8G_000A.jpg',5),(18,'0DG4268__501_8G_030A.jpg',5),(19,'0DG4268__501_8G_060A.jpg',5),(20,'0DG4268__501_8G_090A.jpg',5),(21,'0DG4348__501_8G_000A.jpg',6),(22,'0DG4348__501_8G_030A.jpg',6),(23,'0DG4348__501_8G_060A.jpg',6),(24,'0DG4348__501_8G_090A.jpg',6),(25,'0EA2069__301455_000A.jpg',7),(26,'0EA2069__301455_030A.jpg',7),(27,'0EA2069__301455_060A.jpg',7),(28,'0EA2069__301455_090A.jpg',7),(29,'0EA2080__30016G_000A.jpg',8),(30,'0EA2080__30016G_030A.jpg',8),(31,'0EA2080__30016G_060A.jpg',8),(32,'0EA2080__30016G_090A.jpg',8),(33,'0EA4071__502613_000A.jpg',9),(34,'0EA4071__502613_030A.jpg',9),(35,'0EA4071__502613_060A.jpg',9),(36,'0EA4071__502613_090A.jpg',9),(37,'0EA4080__50178E_000A.jpg',10),(38,'0EA4080__50178E_030A.jpg',10),(39,'0EA4080__50178E_060A.jpg',10),(40,'0EA4080__50178E_090A.jpg',10),(41,'0EA4123__508973_000A.jpg',11),(42,'0EA4123__508973_030A.jpg',11),(43,'0EA4123__508973_060A.jpg',11),(44,'0EA4123__508973_090A.jpg',11),(45,'0EA4127__57448D_000A.jpg',12),(46,'0EA4127__57448D_030A.jpg',12),(47,'0EA4127__57448D_060A.jpg',12),(48,'0EA4127__57448D_090A.jpg',12),(49,'0PR_01OS__1AB3M1_000A.jpg',13),(50,'0PR_01OS__1AB3M1_030A.jpg',13),(51,'0PR_01OS__1AB3M1_060A.jpg',13),(52,'0PR_01OS__1AB3M1_090A.jpg',13),(53,'0PR_01OS__2AU6E1_000A.jpg',14),(54,'0PR_01OS__2AU6E1_030A.jpg',14),(55,'0PR_01OS__2AU6E1_060A.jpg',14),(56,'0PR_01OS__2AU6E1_090A.jpg',14),(57,'0PR_01VS__1AB5S0_000A.jpg',15),(58,'0PR_01VS__1AB5S0_030A.jpg',15),(59,'0PR_01VS__1AB5S0_060A.jpg',15),(60,'0PR_01VS__1AB5S0_090A.jpg',15),(61,'0PR_02VS__2AU6S1_000A.jpg',16),(62,'0PR_02VS__2AU6S1_030A.jpg',16),(63,'0PR_02VS__2AU6S1_060A.jpg',16),(64,'0PR_02VS__2AU6S1_090A.jpg',16),(65,'0PR_04VS__2AU4P0_000A.jpg',17),(66,'0PR_04VS__2AU4P0_030A.jpg',17),(67,'0PR_04VS__2AU4P0_060A.jpg',17),(68,'0PR_04VS__2AU4P0_090A.jpg',17),(69,'0PR_05TS__1AB1A1_000A.jpg',18),(70,'0PR_05TS__1AB1A1_030A.jpg',18),(71,'0PR_05TS__1AB1A1_060A.jpg',18),(72,'0PR_05TS__1AB1A1_090A.jpg',18),(73,'0PR_06TS__VAS2B0_000A.jpg',19),(74,'0PR_06TS__VAS2B0_030A.jpg',19),(75,'0PR_06TS__VAS2B0_060A.jpg',19),(76,'0PR_06TS__VAS2B0_090A.jpg',19),(77,'0PR_08OS__1AB0A7_000A.jpg',20),(78,'0PR_08OS__1AB0A7_030A.jpg',20),(79,'0PR_08OS__1AB0A7_060A.jpg',20),(80,'0PR_08OS__1AB0A7_090A.jpg',20),(81,'0PR_23VS__1AB0A9_000A.jpg',21),(82,'0PR_23VS__1AB0A9_030A.jpg',21),(83,'0PR_23VS__1AB0A9_060A.jpg',21),(84,'0PR_23VS__1AB0A9_090A.jpg',21),(85,'0RB1973__901_31_000A.jpg',22),(86,'0RB1973__901_31_030A.jpg',22),(87,'0RB1973__901_31_060A.jpg',22),(88,'0RB1973__901_31_090A.jpg',22),(89,'0RB2140__902_000A.jpg',23),(90,'0RB2140__902_030A.jpg',23),(91,'0RB2140__902_060A.jpg',23),(92,'0RB2140__902_090A.jpg',23),(97,'0RB2176__901_000A.jpg',25),(98,'0RB2176__901_030A.jpg',25),(99,'0RB2176__901_060A.jpg',25),(100,'0RB2176__901_090A.jpg',25),(101,'0RB3025__001_33_000A.jpg',26),(102,'0RB3025__001_33_030A.jpg',26),(103,'0RB3025__001_33_060A.jpg',26),(104,'0RB3025__001_33_090A.jpg',26),(105,'0RB3025L__L0205_000A.jpg',27),(106,'0RB3025L__L0205_030A.jpg',27),(107,'0RB3025L__L0205_060A.jpg',27),(108,'0RB3025L__L0205_090A.jpg',27),(109,'0RB3561__002_58_000A.jpg',28),(110,'0RB3561__002_58_030A.jpg',28),(111,'0RB3561__002_58_060A.jpg',28),(112,'0RB3561__002_58_090A.jpg',28),(113,'0RB3561__9106W0_000A.jpg',29),(114,'0RB3561__9106W0_030A.jpg',29),(115,'0RB3561__9106W0_060A.jpg',29),(116,'0RB3561__9106W0_090A.jpg',29),(117,'0RB3607__003_8G_000A.jpg',30),(118,'0RB3607__003_8G_030A.jpg',30),(119,'0RB3607__003_8G_060A.jpg',30),(120,'0RB3607__003_8G_090A.jpg',30),(121,'0RB3654__001_73_000A.jpg',31),(122,'0RB3654__001_73_030A.jpg',31),(123,'0RB3654__001_73_060A.jpg',31),(124,'0RB3654__001_73_090A.jpg',31),(157,'0VO4106S__848_F5_000A.jpg',40),(158,'0VO4106S__848_F5_030A.jpg',40),(159,'0VO4106S__848_F5_060A.jpg',40),(160,'0VO4106S__848_F5_090A.jpg',40),(161,'0VO4107S__280_87_000A.jpg',41),(162,'0VO4107S__280_87_030A.jpg',41),(163,'0VO4107S__280_87_060A.jpg',41),(164,'0VO4107S__280_87_090A.jpg',41),(165,'0VO4133S__502113_000A.jpg',42),(166,'0VO4133S__502113_030A.jpg',42),(167,'0VO4133S__502113_060A.jpg',42),(168,'0VO4133S__502113_090A.jpg',42),(169,'0VO4134S__502113_000A.jpg',43),(170,'0VO4134S__502113_030A.jpg',43),(171,'0VO4134S__502113_060A.jpg',43),(172,'0VO4134S__502113_090A.jpg',43),(173,'0VO5211S__2073_2_000A.jpg',44),(174,'0VO5211S__2073_2_030A.jpg',44),(175,'0VO5211S__2073_2_060A.jpg',44),(176,'0VO5211S__2073_2_090A.jpg',44),(182,'0RB2168__902_32_000A.jpg',24),(183,'0RB2168__902_32_030A.jpg',24),(184,'0RB2168__902_32_060A.jpg',24),(185,'0RB2168__902_32_090A.jpg',24),(186,'0RB4098__710_71_000A.jpg',32),(187,'0RB4098__710_71_030A.jpg',32),(188,'0RB4098__710_71_060A.jpg',32),(189,'0RB4098__710_71_090A.jpg',32),(190,'0RB4125__710_51_000A.jpg',33),(191,'0RB4125__710_51_030A.jpg',33),(192,'0RB4125__710_51_060A.jpg',33),(193,'0RB4125__710_51_090A.jpg',33),(194,'0RB8060__155_73_000A.jpg',34),(195,'0RB8060__155_73_030A.jpg',34),(196,'0RB8060__155_73_060A.jpg',34),(197,'0RB8060__155_73_090A.jpg',34),(198,'0RB8061__154_71_000A.jpg',35),(199,'0RB8061__154_71_030A.jpg',35),(200,'0RB8061__154_71_060A.jpg',35),(201,'0RB8061__154_71_090A.jpg',35),(202,'0VJ2004__W65673_000A.jpg',36),(203,'0VJ2004__W65673_030A.jpg',36),(204,'0VJ2004__W65673_060A.jpg',36),(205,'0VJ2004__W65673_090A.jpg',36),(206,'0VO4089S__5080H7_000A.jpg',37),(207,'0VO4089S__5080H7_030A.jpg',37),(208,'0VO4089S__5080H7_060A.jpg',37),(209,'0VO4089S__5080H7_090A.jpg',37),(210,'0VO4105S__507813_000A.jpg',38),(211,'0VO4105S__507813_030A.jpg',38),(212,'0VO4105S__507813_060A.jpg',38),(213,'0VO4105S__507813_090A.jpg',38),(214,'0VO4106S__848_7H_000A.jpg',39),(215,'0VO4106S__848_7H_030A.jpg',39),(216,'0VO4106S__848_7H_060A.jpg',39),(217,'0VO4106S__848_7H_090A.jpg',39);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `color_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  KEY `color_id` (`color_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Dolce Gabbana 2166 ','Nondisp Maisonneuve s fx r leg, 7thJ',15200,1,1),(2,'Dolce Gabbana 2175 ','Congenital compression facies',17300,1,2),(3,'Dolce Gabbana 2220 ','Displ oth extrartic fx l calcaneus, subs for fx w delay heal',18800,1,1),(4,'Dolce Gabbana 2222 ','Disp fx of coracoid process, right shoulder, init',18500,1,3),(5,'Dolce Gabbana 4268 ','Defects in post-translational mod of lysosomal enzymes',17500,1,4),(6,'Dolce Gabbana 4348 ','Intcran inj w loss of consciousness of 31-59 min, subs',13500,1,3),(7,'Emporio Armani 2069 ','Chronic angle-closure glaucoma, unsp eye, severe stage',20500,2,3),(8,'Emporio Armani 2080 ','Post disp fx of sternal end r clavicle, 7thD',13500,2,5),(9,'Emporio Armani 4071 ','Fetomaternal placental transfusion syndrome',18500,2,2),(10,'Emporio Armani 4080 ','Poisoning by anticholin agents, accidental, init',22300,2,3),(11,'Emporio Armani 4123 ','Migraine without aura',14600,2,2),(12,'Emporio Armani 4127 ','Hang-glider crash injuring occupant, sequela',17500,2,6),(13,'Prada PR01OS ','Oth fx upr end r tibia, 7thF',19300,3,3),(14,'Prada PR01OS ','Amniotic fluid embolism in pregnancy, unspecified trimester',18300,3,2),(15,'Prada Catwalk 01VS ','Other follicular cysts of the skin and subcutaneous tissue',19100,3,3),(16,'Prada 02VS ','Injury of radial nerve at upper arm level, unspecified arm',15100,3,2),(17,'Prada 04VS ','Crushing injury of unsp part(s) of r wrist, hand and fingers',17100,3,2),(18,'Prada 05TS ','Pain due to cardiac prosthetic devices, implants and grafts',15700,3,3),(19,'Prada PR 06TS ','Barn as the place of occurrence of the external cause',13600,3,7),(20,'Prada Conceptual 08OS ','Other sprain of other and unspecified finger(s)',26100,3,3),(21,'Prada PR 23VS ','Pedestrian injured in other and unsp transport accidents',19800,3,3),(22,'Ray Ban Square II 901 ','Disorders of muscle in diseases classd elswhr, r low leg',20700,4,3),(23,' Ray Ban Wayfarer Original Classic ','Disorders of the eye following cataract surgery',21600,4,3),(24,'Ray Ban Meteor RB 2168 ','Infect/inflm reaction due to int fix of left radius, subs',18100,4,3),(25,'Ray Ban Clubmaster Folding ','Chondromalacia patellae',15500,4,3),(26,'Ray Ban Aviator Classic ','Laceration w fb of left eyelid and periocular area, subs',16500,4,8),(27,'Ray Ban Aviator Classic 0RB3025L ','Unspecified sprain of right middle finger, subs encntr',17500,4,3),(28,'Ray Ban general ','Unspecified sprain of right middle finger, subs encntr',17200,4,1),(29,'Ray Ban general pop ','Strain of musc/fasc/tend at wrs/hnd lv, left hand, init',19300,4,9),(30,'Ray Ban RB3607 ','Other iridocyclitis',16300,4,1),(31,'Ray Ban RB3654 ','Milt op w acc deton onboard marine weapons, civ, sequela',17300,4,11),(32,'Ray Ban JACKIE OHH II ','Corrosion of first degree of unsp thumb (nail), subs encntr',14700,4,12),(33,'Ray Ban CATS 5000 CLASSIC ','Unsp injury of dorsal vein of unspecified foot, init encntr',18300,4,3),(34,'Ray Ban RB8060 ','Postproc hematoma and seroma of the spleen fol a procedure',14900,4,8),(35,'Ray Ban RB8061 ','Nondisplaced fracture of capitate bone, right wrist, sequela',15800,4,8),(36,'Vogue VJ2004 ','Osteochondrosis (juvenile) of carpal lunate, left hand',15500,5,9),(37,' Vogue VO4089S ','Milt op involving oth fire/hot subst, milt, sequela',25500,5,2),(38,' Vogue 0VO4105S ','Other superficial bite of right upper arm, sequela',25500,5,2),(39,'Vogue 0VO4106S ','Phlebitis and thrombophlebitis of unspecified iliac vein',24500,5,2),(40,'Vogue 0VO4106S ','Oth athscl nonbiol bypass of the extremities, bilateral legs',20500,5,13),(41,'Vogue 0VO4107S ','Foreign body in uterus, subsequent encounter',18900,5,3),(42,'Vogue 0VO4133S ','Pityriasis alba',15700,5,4),(43,'Vogue 0VO4134S ','Oth fracture of shaft of radius, unsp arm, init for clos fx',18300,5,4),(44,'Vogue 0VO5211S ','Sublux of proximal interphaln joint of r rng fngr, sequela',18200,5,7);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `user_product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Cordelie','Izakoff','cizakoff0@purevolume.com','cizakoff0','34qs7YiGFQ','https://robohash.org/quiaveniamest.png?size=50x50&set=set1',1),(2,'Larry','O Calleran','localleran1@netvibes.com','localleran1','BzWsKAmhd','https://robohash.org/autevenietquibusdam.png?size=50x50&set=set1',2),(3,'Honey','Heady','hheady2@simplemachines.org','hheady2','TazCnbLbw8A','https://robohash.org/quiaaperiammagni.png?size=50x50&set=set1',2),(4,'Guy','Tenwick','gtenwick3@google.pl','gtenwick3','DHN0xDac15h','https://robohash.org/aperiamrerumpraesentium.png?size=50x50&set=set1',2),(5,'Asa','Shambroke','ashambroke4@fc2.com','ashambroke4','WKIUldP8dD','https://robohash.org/cumquemolestiaequo.png?size=50x50&set=set1',3),(6,'Storm','Caudwell','scaudwell5@marriott.com','scaudwell5','sJVDRvqfemn','https://robohash.org/impeditsedenim.png?size=50x50&set=set1',3),(7,'Ange','Lain','alain6@joomla.org','alain6','mVz4N7m3N4','https://robohash.org/perspiciatisdeseruntnobis.png?size=50x50&set=set1',3),(8,'Catriona','Vampouille','cvampouille7@nymag.com','cvampouille7','5BvmUlG0p','https://robohash.org/veritatistemporaculpa.png?size=50x50&set=set1',3),(9,'Jackie','Tenman','jtenman8@mapy.cz','jtenman8','dBz4gDpoGvK','https://robohash.org/consequaturquodinventore.png?size=50x50&set=set1',3),(10,'Andie','Elcott','aelcott9@tripadvisor.com','aelcott9','kp0rUE3','https://robohash.org/hicdignissimoseligendi.png?size=50x50&set=set1',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-23 17:51:30
