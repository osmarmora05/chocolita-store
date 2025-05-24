-- Crear la base de datos
CREATE DATABASE ChocolitaStore;

-- Crear las tablas de la base de datos en este orden
-- 1) Clientes
CREATE TABLE Clientes (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(50), 
    apellido VARCHAR(50), 
    correo VARCHAR(100), 
    telefono VARCHAR(20),
    direccion TEXT
);

-- 2) Productos
CREATE TABLE Productos (
    producto_id INT AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(100), 
    precio DECIMAL(10,2), 
    imagen TEXT, 
    descripcion TEXT
);

-- 3) Pedidos
CREATE TABLE Ventas (
    venta_id INT AUTO_INCREMENT PRIMARY KEY, 
    cliente_id INT, 
    fecha DATE, 
    FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id) ON DELETE CASCADE
);

-- 4) Detalle del producto
CREATE TABLE DetalleDeVenta(
    detalle_id INT AUTO_INCREMENT PRIMARY KEY, 
    venta_id INT, 
    producto_id INT, 
    cantidad INT, 
    FOREIGN KEY (venta_id) REFERENCES Ventas(venta_id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES Productos(producto_id) ON DELETE CASCADE
);

-- Insertar datos en las tablas
-- 1) Clientes
INSERT INTO Clientes (nombre, apellido, correo, telefono, direccion) VALUES ('Joe', 'Goldberg', 'joe@gmail.com', '+505 19002020' , 'New York, Estados Unidos');

-- 2) Productos
INSERT INTO Productos (nombre, precio, imagen, descripcion) VALUES
('Chocolita', 10.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108290/Leche-Con-Chocolate-Eskimo-Ultrapasteurizada-Bolsa-400ml-1-10985_glhqhn.webp', 'Galleta con relleno de chocolate perfecta para meriendas.'),
('Gaseosa', 18.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108338/gaseosa-coca-cola-1_5_urisel.webp', 'Refresco carbonatado de sabor cola en botella de 600ml.'),
('Joyita', 5.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108368/images_lgim5v.jpg', 'Galleta dulce económica ideal para el recreo.'),
('Maruchan', 14.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108420/images_jfm0hd.jpg', 'Sopa instantánea sabor pollo, lista en 3 minutos.'),
('Príncipe', 12.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108476/24216_3_jchrph.webp', 'Galletas rellenas de chocolate con cobertura crocante.'),
('Pingüino', 18.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108512/images_usdrxx.jpg', 'Ponqué de chocolate con relleno de crema y cobertura.'),
('Taqueritos', 10.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108564/download_gqin2s.jpg', 'Botana de maíz con intenso sabor picante.'),
('Club Social', 9.00, 'https://res.cloudinary.com/ducthyafk/image/upload/v1748108589/images_ufu9bz.jpg', 'Galletas saladas ideales para meriendas.');

-- 3) Ventas
INSERT INTO Ventas (cliente_id, fecha) VALUES 
(1, '2023-10-03'),
(1, '2023-10-04'),
(1, '2023-10-05'),
(1, '2023-10-06');

-- 4) DetalleDeVenta
INSERT INTO DetalleDeVenta (venta_id, producto_id, cantidad) VALUES (1, 1, 2), (1, 2, 1), (1, 3, 3), (2, 4, 2), (2, 5, 1), (2, 6, 4), (3, 7, 5), (3, 8, 2), (3, 4, 2), (3, 5, 1), (4, 6, 2), (4, 2, 1);  

-- Consultas
-- Obtener el detalle de una venta específica
SELECT dv.detalle_id, v.venta_id, p.nombre AS producto, dv.cantidad, p.precio, (dv.cantidad * p.precio) AS total FROM DetalleDeVenta dv JOIN Ventas v ON dv.venta_id = v.venta_id JOIN Productos p ON dv.producto_id = p.producto_id WHERE v.venta_id = 1;