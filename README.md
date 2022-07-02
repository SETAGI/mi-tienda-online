# Mi tienda online

## Local instalation guide  💻

#### 1. Download project

Link to download: https://github.com/SETAGI/mi-tienda-online

#### 2. Installation of required packages

`npm install`

#### 3. Firestore configuration

- Create a Firestore Database in [Firebase](https://console.firebase.google.com/ 'Firebase')
- Set a collection and name it "products" with the following structure (example):
 ```    category: "smartphones"
        description "smartphone description"
        pictureUrl: "smartphone image url"
        price: 1200
        stock: 10000
        title: "smartphone name"
```

#### 4. Enviroment variables configuration

- create a `.env.local` file using the `.env.template` info plus your firebase configuration to be enable the whole project

#### 5. Start the app

`npm start`

#### Server Port

`3000`

#### Demo

[Live Demo](https://funny-figolla-0821d8.netlify.app 'Live Demo')


---

---

## The aplication is ready to use (let´s do it) 🚀