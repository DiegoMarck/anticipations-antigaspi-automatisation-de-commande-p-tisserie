CREATE DATABASE IF NOT EXISTS angelina_db;
USE angelina_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mot de passe: angelina123
INSERT INTO users (email, password, first_name) VALUES 
('admin@angelina-paris.fr', '$2a$10$YourHashedPasswordHere', 'Admin');
