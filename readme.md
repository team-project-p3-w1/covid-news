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