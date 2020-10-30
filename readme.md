**REGISTER**

* **URL**

  `http://localhost:3000`

* **Method:**

  `POST`
  
*  **URL Params**

   `/register`

* **Request**

  * **data:**
  ```
  {
    "name": "string",
    "username": "string",
    "password": "string"
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```
    {
      "message": "Register success"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**
    ```
    { 
      "error" : "Register error"
    }
    ```


**LOGIN**

* **URL**

  `http://localhost:3000`

* **Method:**

  `POST`
  
*  **URL Params**

   `/login`

* **Request**

  * **data:**
  ```
  {
    "username": "string",
    "password": "string"
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```
    {
      "username": "string",
      "token": "dqwiugibIUGFIWbufwuh82739.wfjoiNOjifwn"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:**
    ```
    { 
      "error" : "Login error"
    }
    ```

**COVID DATA SEEDERS**
----
  return json data of one updated data of COVID-19 

* **URL**

  /covid

* **Method:**

  `GET`
  
* **URL Params**

  NONE

* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "id": 3,
    "jumlah_meninggal": 89,
    "jumlah_sembuh": 3985,
    "jumlah_positif": 3565,
    "akumulasi_meninggal": 13701,
    "akumulasi_sembuh": 329778,
    "akumulasi_positif": 404048,
    "tanggal": "2020-10-29T00:00:00.000Z",
    "updatedAt": "2020-10-29T08:56:50.780Z",
    "createdAt": "2020-10-29T08:56:50.780Z"
    }`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

**GET LAST TWO DAYS OF COVID DATA**
----
  return json data of last two days of updated data of COVID-19 

* **URL**

  /covid/data

* **Method:**

  `GET`
  
* **URL Params**

  NONE

* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
    {
        "id": 1,
        "jumlah_meninggal": 89,
        "jumlah_sembuh": 3985,
        "jumlah_positif": 3565,
        "akumulasi_meninggal": 13701,
        "akumulasi_sembuh": 329778,
        "akumulasi_positif": 404048,
        "tanggal": "2020-10-29T00:00:00.000Z",
        "createdAt": "2020-10-29T08:56:14.617Z",
        "updatedAt": "2020-10-29T08:56:14.617Z"
    },
    {
        "id": 2,
        "jumlah_meninggal": 89,
        "jumlah_sembuh": 3985,
        "jumlah_positif": 3565,
        "akumulasi_meninggal": 13701,
        "akumulasi_sembuh": 329778,
        "akumulasi_positif": 404048,
        "tanggal": "2020-10-29T00:00:00.000Z",
        "createdAt": "2020-10-29T08:56:21.480Z",
        "updatedAt": "2020-10-29T08:56:21.480Z"
    }
  ]`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`

**GET 5 LATESR NEWS**
----
  return json data of 5 latest news about COVID

* **URL**

  /news

* **Method:**

  `GET`
  
* **URL Params**

  NONE

* **Data Params**

  NONE

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
    {
        "sumber": "Detik.com",
        "judul": "Sebaran Virus Corona Indonesia 29 Oktober: 3.565 Kasus Baru, DKI Sumbang 713",
        "penulis": "Sarah Oktaviani Alam",
        "description": "Ada 3.565 kasus baru Corona di Indonesia pada Kamis (29/10/2020), sebaran tertinggi di DKI dan Jabar. Total konfirmasi positif menjadi 404.048 kasus.",
        "link": "https://health.detik.com/berita-detikhealth/d-5233724/sebaran-virus-corona-indonesia-29-oktober-3565-kasus-baru-dki-sumbang-713",
        "tanggal_terbit": "2020-10-29T08:52:52Z"
    },
    {
        "sumber": "Viva.co.id",
        "judul": "Satgas COVID-19: 23 Presenter TV Luncurkan Mars Iman-Aman-Imun",
        "penulis": "Dusep Malik, Syaefullah",
        "description": "Berita Satgas COVID-19: 23 Presenter TV Luncurkan Mars Iman-Aman-Imun terbaru hari ini 2020-10-29 15:35:55 dari sumber yang terpercaya",
        "link": "https://www.viva.co.id/berita/nasional/1317039-satgas-covid-19-23-presenter-tv-luncurkan-mars-iman-aman-imun",
        "tanggal_terbit": "2020-10-29T08:35:55Z"
    },
    {
        "sumber": "Detik.com",
        "judul": "Catat Nih! Daftar Lengkap Upah Minimum 2021 yang Tak Naik",
        "penulis": "Vadhia Lidyana",
        "description": "Upah Minimum Provinsi (UMP) tahun 2021 tidak naik, atau sama dengan 2020. Ini daftarnya.",
        "link": "https://finance.detik.com/berita-ekonomi-bisnis/d-5233675/catat-nih-daftar-lengkap-upah-minimum-2021-yang-tak-naik",
        "tanggal_terbit": "2020-10-29T08:35:17Z"
    },
    {
        "sumber": "Detik.com",
        "judul": "Bertambah 3.656, Kasus Positif COVID-19 di RI Jadi 404.048 Per 29 Oktober",
        "penulis": "Idham Kholid",
        "description": "Pemerintah kembali memperbaharui kasus virus Corona (COVID-19) di Indonesia. Kasus konfirmasi positif Corona di RI menjadi 404.048 per hari ini.",
        "link": "https://news.detik.com/berita/d-5233698/bertambah-3656-kasus-positif-covid-19-di-ri-jadi-404048-per-29-oktober",
        "tanggal_terbit": "2020-10-29T08:29:20Z"
    },
    {
        "sumber": "Detik.com",
        "judul": "Bertambah 3.656, Kasus Positif COVID-19 di RI Jadi 404.048 Per 29 Oktober",
        "penulis": "Idham Kholid",
        "description": "Pemerintah kembali memperbaharui kasus virus Corona (COVID-19) di Indonesia. Kasus konfirmasi positif Corona di RI menjadi 404.048 per hari ini.",
        "link": "https://news.detik.com/berita/d-5233698/bertambah-3565-kasus-positif-covid-19-di-ri-jadi-404048-per-29-oktober",
        "tanggal_terbit": "2020-10-29T08:29:20Z"
    }
  ]`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "INTERNAL SERVER ERROR" }`



USER ROUTES
--------------------------
* **URL**

  `/register`

* **Description** <br />
`REGISTER USER`

* **Method:**
  
  `POST`

*  **URL Params**

   `none`

   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**

  `request body`

    | Key        | Type       | Description|Validation|
    |----------- |------      |------------|----------|
    |nama        |string      |REQUIRED    |Not Empty
    |email       |string      |REQUIRED    |Not Empty
    |password    |string      |REQUIRED    |Not Empty
<br/>

* **Success Response:**<br />
    `IF PAYLOAD SUITS VALIDATION RULE`
  * **Code:** 201 Created <br />
    **Content:** <br />
    ```javascript
    {
        id:'1',nama : 'yudi', email:'yudi@test.mail'
    }
    ```
 
* **Error Response:**

  `VALIDATION FAIL`

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "Please Input All Required Fields" }`

  OR

  * **Code:** 500 Internal Server Error <br />
    

* **Sample Call:**

  `none`

* **Notes:**

  `none`

--------------------------
* **URL**

  `/login`

* **Description** <br />
`LOGIN USER`

* **Method:**
  
  `POST`

*  **URL Params**

   `none`

   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**

  `request body`

    | Key        | Type       | Description|Validation|
    |----------- |------      |------------|----------|
    |email       |string      |REQUIRED    |Not Empty
    |password    |string      |REQUIRED    |Not Empty
<br/>

* **Success Response:**<br />
    `IF PAYLOAD SUITS VALIDATION RULE`
  * **Code:** 201 Created <br />
    **Content:** <br />
    ```javascript
    {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5dWRpQGdtYWlsLmNvbSIsImlhdCI6MTYwMzg5NDEyNX0.YUD5N3SjvQk8Iacbq1Gz6_Qw_yFuH2NXO3JCGuAWSJY"
    }
    ```
 
* **Error Response:**

  `VALIDATION FAIL`

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `ERROR VALIDATION`

  OR

  * **Code:** 500 Internal Server Error <br />
    

* **Sample Call:**

  `none`

* **Notes:**
