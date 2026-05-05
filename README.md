# UMKM Management System Backend

Backend API untuk sistem manajemen UMKM F&B, dibangun dengan NestJS, TypeORM, dan MySQL.

## Ringkasan

Aplikasi ini mencakup manajemen user, produk, penjualan, pembelian, pengeluaran, outlet, dan channel penjualan. Otentikasi JWT digunakan untuk mengatur akses berdasarkan peran: owner, admin, dan staff.

## Fitur

- Autentikasi dan otorisasi JWT dengan role-based access
- CRUD produk dan outlet
- Pencatatan penjualan dengan detail item
- Pencatatan pembelian dan pengeluaran
- Laporan penjualan bulanan
- Dokumentasi API dengan Swagger

## Teknologi

- NestJS
- TypeORM
- MySQL
- JWT
- class-validator
- Swagger/OpenAPI

## Endpoint Utama

### Authentication
- `POST /auth/register` - daftar user baru
- `POST /auth/login` - login dan dapatkan token

### Products
- `GET /products`
- `GET /products/:id`
- `POST /products` (owner/admin)
- `PUT /products/:id` (owner/admin)
- `DELETE /products/:id` (owner/admin)

### Sales
- `GET /sales`
- `GET /sales/:id`
- `POST /sales` (owner/admin/staff)
- `GET /sales/report/monthly?year=2023&month=10`

### Expenses
- `GET /expenses`
- `GET /expenses/:id`
- `POST /expenses` (owner/admin)
- `PUT /expenses/:id` (owner/admin)
- `DELETE /expenses/:id` (owner/admin)

### Purchases
- `GET /purchases`
- `GET /purchases/:id`
- `POST /purchases` (owner/admin)
- `PUT /purchases/:id` (owner/admin)
- `DELETE /purchases/:id` (owner/admin)

### Outlets
- `GET /outlets`
- `GET /outlets/:id`
- `POST /outlets` (owner/admin)
- `PUT /outlets/:id` (owner/admin)
- `DELETE /outlets/:id` (owner/admin)

### Sales Channels
- `GET /sales-channels`
- `GET /sales-channels/:id`
- `POST /sales-channels` (owner/admin)
- `PUT /sales-channels/:id` (owner/admin)
- `DELETE /sales-channels/:id` (owner/admin)

## Contoh Request

#### Register
```json
POST /auth/register
{
  "username": "owner1",
  "password": "password123",
  "role": "owner"
}
```

#### Login
```json
POST /auth/login
{
  "username": "owner1",
  "password": "password123"
}
```

#### Create Product
```json
POST /products
Authorization: Bearer <access_token>
{
  "name": "Nasi Goreng",
  "hpp": 10000
}
```

#### Create Sales
```json
POST /sales
Authorization: Bearer <access_token>
{
  "date": "2023-10-01",
  "outlet_id": 1,
  "channel_id": 1,
  "items": [
    {
      "product_id": 1,
      "qty": 2,
      "price": 15000,
      "discount": 0
    },
    {
      "product_id": 2,
      "qty": 1,
      "price": 12000,
      "discount": 1000
    }
  ]
}
```

## Struktur Data

Entitas utama:
- User
- Product
- Outlet
- SalesChannel
- Sales
- SalesItem
- Purchase
- Expense
- CapitalExpense
- StockDaily

Semua relasi diatur dengan TypeORM dan foreign key di MySQL.

# Test
npm run test

# Lint
npm run lint
```
