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