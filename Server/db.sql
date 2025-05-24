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