# UMKM Management System Backend

Backend API untuk sistem manajemen UMKM (Usaha Mikro Kecil Menengah) berbasis F&B menggunakan NestJS, TypeORM, dan MySQL.

## Fitur

- **Authentication & Authorization**: JWT-based auth dengan role-based access (owner, admin, staff)
- **Product Management**: CRUD produk
- **Sales Management**: Pencatatan penjualan dengan detail item
- **Expense Management**: Pencatatan pengeluaran operasional
- **Purchase Management**: Pencatatan pembelian bahan
- **Outlet Management**: Manajemen outlet
- **Sales Channel Management**: Manajemen channel penjualan
- **Reporting**: Laporan bulanan penjualan (revenue & profit)
- **Swagger Documentation**: API docs di `/docs`

## Teknologi

- **Framework**: NestJS
- **Database**: MySQL dengan TypeORM
- **Authentication**: JWT
- **Validation**: class-validator
- **Documentation**: Swagger

## Setup

### Prerequisites

- Node.js (v16+)
- MySQL Server
- npm atau yarn

### Installation

1. Clone atau download project ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup database MySQL:
   - Buat database bernama `umkm`
   - Pastikan MySQL server running di localhost:3306
   - Username: root, password: (kosong) - sesuaikan di `src/app.module.ts` jika berbeda

4. Jalankan aplikasi:
   ```bash
   # Development mode
   npm run start:dev
   ```

5. API akan berjalan di `http://localhost:3000`
6. Swagger docs: `http://localhost:3000/docs`

## API Endpoints

### Authentication
- `POST /auth/register` - Register user baru
- `POST /auth/login` - Login user

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create product (owner/admin)
- `PUT /products/:id` - Update product (owner/admin)
- `DELETE /products/:id` - Delete product (owner/admin)

### Sales
- `GET /sales` - Get all sales
- `GET /sales/:id` - Get sales by ID
- `POST /sales` - Create sales (all roles)
- `GET /sales/report/monthly?year=2023&month=10` - Monthly report

### Expenses
- `GET /expenses` - Get all expenses
- `GET /expenses/:id` - Get expense by ID
- `POST /expenses` - Create expense (owner/admin)
- `PUT /expenses/:id` - Update expense (owner/admin)
- `DELETE /expenses/:id` - Delete expense (owner/admin)

### Purchases
- `GET /purchases` - Get all purchases
- `GET /purchases/:id` - Get purchase by ID
- `POST /purchases` - Create purchase (owner/admin)
- `PUT /purchases/:id` - Update purchase (owner/admin)
- `DELETE /purchases/:id` - Delete purchase (owner/admin)

### Outlets
- `GET /outlets` - Get all outlets
- `GET /outlets/:id` - Get outlet by ID
- `POST /outlets` - Create outlet (owner/admin)
- `PUT /outlets/:id` - Update outlet (owner/admin)
- `DELETE /outlets/:id` - Delete outlet (owner/admin)

### Sales Channels
- `GET /sales-channels` - Get all sales channels
- `GET /sales-channels/:id` - Get sales channel by ID
- `POST /sales-channels` - Create sales channel (owner/admin)
- `PUT /sales-channels/:id` - Update sales channel (owner/admin)
- `DELETE /sales-channels/:id` - Delete sales channel (owner/admin)

## Contoh Request JSON

### Register User
```json
POST /auth/register
{
  "username": "owner1",
  "password": "password123",
  "role": "owner"
}
```

### Login
```json
POST /auth/login
{
  "username": "owner1",
  "password": "password123"
}
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Create Product
```json
POST /products
Authorization: Bearer <access_token>
{
  "name": "Nasi Goreng",
  "hpp": 10000
}
```

### Create Sales
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

### Monthly Report
```json
GET /sales/report/monthly?year=2023&month=10
Authorization: Bearer <access_token>
```

Response:
```json
{
  "totalRevenue": 41000,
  "totalProfit": 13000
}
```

## Database Schema

Sistem menggunakan entities berikut:
- User (authentication)
- Product
- Outlet
- SalesChannel
- Sales (header)
- SalesItem (detail)
- Purchase
- Expense
- CapitalExpense
- StockDaily

Semua relasi menggunakan TypeORM dengan foreign keys.

## Development

```bash
# Build
npm run build

# Test
npm run test

# Lint
npm run lint
```

## Production

Untuk production, pastikan:
- Ubah `synchronize: false` di TypeORM config
- Gunakan environment variables untuk database credentials
- Ubah JWT secret key
- Setup proper CORS jika perlu
