# 📘 API SPECIFICATION

Tài liệu này mô tả các API mà Frontend cần Backend phát triển.  
Mục tiêu: Giúp hai bên FE/BE thống nhất input – output và format dữ liệu.

---

## 🧩 1. API: Lấy danh sách tin tức

**Mô tả:** Dùng cho trang danh sách tin tức (Post List Page)

**Method:** `GET`  
**URL:** `/posts`

### 🔸 Query Params

| Tên        | Kiểu dữ liệu | Bắt buộc | Mô tả                      | Ví dụ    |
| ---------- | ------------ | -------- | -------------------------- | -------- |
| `page`     | number       | No       | Trang hiện tại             | 1        |
| `limit`    | number       | No       | Số item mỗi trang          | 10       |
| `category` | string       | No       | Lọc theo danh mục          | "DFPK"   |
| `keyword`  | string       | No       | Tìm kiếm sản phẩm theo tên | "paddle" |

### 🔸 Response mẫu tối thiểu (expected)

Lưu ý: Khi category rỗng thì mậc định lấy hết

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "KHAI GIẢNG KHÓA ĐÀO TẠO",
      "content": "Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these. Horses nearer oh elinor of denote.",
      "createdAt": "01/01/2026",
      "category": "DFPK Series"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 120
  }
}
```

## 🧩 2. API: Lấy chi tiết tin tức

**Mô tả:** Dùng cho trang chi tiết tin tức (Post Details Page)

**Method:** `GET`  
**URL:** `/posts/:id`

### 🔸 Query Params

| Tên  | Kiểu dữ liệu | Bắt buộc | Mô tả       | Ví dụ |
| ---- | ------------ | -------- | ----------- | ----- |
| `id` | any          | Required | id bài viết | 1     |

### 🔸 Response mẫu tối thiểu (expected)

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "KHAI GIẢNG KHÓA ĐÀO TẠO",
    "content": "Elinor her his secure far twenty eat object. Late any far saw size want man. Which way you wrong add shall one. As guest right of he scale these. Horses nearer oh elinor of denote.",
    "createdAt": "01/01/2026",
    "category": "DFPK Series"
  }
}
```

## 🧩 3. API: Lấy danh sách loại tin tức

**Mô tả:** Dùng cho trang chi tiết tin tức (Blog Details Page)

**Method:** `GET`  
**URL:** `/posts/categories`

### 🔸 Query Params

| Tên | Kiểu dữ liệu | Bắt buộc | Mô tả | Ví dụ |
| --- | ------------ | -------- | ----- | ----- |

### 🔸 Response mẫu tối thiểu (expected)

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Tin tức"
    },
    {
      "id": 2,
      "name": "Sự kiện"
    }
  ]
}
```

## 🧩 4. API: Lấy danh sách giá các gọi dịch vụ

**Mô tả:** Dùng lấy danh sách giá các gói dịch vụ (Pricing Plans)

**Method:** `GET`  
**URL:** `/pricing-plans`

### 🔸 Query Params

| Tên | Kiểu dữ liệu | Bắt buộc | Mô tả | Ví dụ |
| --- | ------------ | -------- | ----- | ----- |

### 🔸 Response mẫu tối thiểu (expected)

```json
{
  "status": "success",
  "data": [
    {
      "id": 0,
      "name": "Basic",
      "price": 200000,
      "features": [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users"
      ],
      "isPopular": true,
      "description": "Lorem isum"
    },
    {
      "id": 1,
      "name": "Medium",
      "price": 200000,
      "features": [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users"
      ],
      "isPopular": true,
      "description": "Lorem isum"
    },
    {
      "id": 2,
      "name": "Pro",
      "features": [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users"
      ],
      "isPopular": true,
      "description": "Lorem isum"
    }
  ]
}
```
