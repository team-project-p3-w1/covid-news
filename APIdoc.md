**Covid News**
----
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

  `process.env.CLIENT_ID : 119836259809-4vv73crpl6n1nfhum77ho330m5heps83.apps.googleusercontent.com`