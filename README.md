
### CONSULTAS PARA CREACIÓN DE BASE DE DATOS ###

CREATE DATABASE IF NOT EXISTS employees_db;

USE employees_db;

CREATE TABLE `employees` (
  `id` int(11) NOT NULL PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `dni` varchar(20) NOT NULL,
  `birth` date NOT NULL,
  `dev` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL
)

### Endpoint createEmployee ###

POST /api/createEmployee

Descripción:
Este endpoint permite agregar un nuevo empleado a la base de datos employees_db.

Parámetros de la solicitud (Body):
La solicitud debe enviarse en formato JSON, con los siguientes parámetros:

name (string, requerido): El nombre completo del empleado.
dni (string, requerido): El DNI del empleado (único).
birth (string, requerido): La fecha de nacimiento del empleado en formato YYYY-MM-DD.
dev (boolean, requerido): Indicador de si el empleado es un desarrollador (true) o no (false).
description (string, opcional): Descripción adicional sobre el empleado.