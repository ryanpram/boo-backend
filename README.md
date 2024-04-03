# Boo Backend Coding Test
## How to Setup
* Clone the project
  ```bash
  git clone https://github.com/ryanpram/boo-backend.git
  ```
* Install node dependencies
  ```bash
  npm install
  ```
* Run the node server locally
  ```bash
  npm start
  ```
## How to Run Automated API Test
* Install Postman application on your desktop
* Check all needed file on the [test folder](./test)
* Select "Collections" tab on the left pane, and click import button. Import the [exported collection file](./test/BooBackendTest.postman_collection.json)
![Screenshot 2024-04-03 at 22 33 27](https://github.com/ryanpram/boo-backend/assets/34083758/86f337fe-9744-471f-a418-b79e15adbebf)

* If it imported succefully your Collections list will looked like below image
![Screenshot 2024-04-03 at 22 42 10](https://github.com/ryanpram/boo-backend/assets/34083758/fb69045b-bbbe-4b24-8c67-acd5701bcf52)

* Select "Environtments" tab on the left pane, and click import button. Import the [exported environtment file](./test/BooBackendTest.postman_environment.json)
![Screenshot 2024-04-03 at 22 48 26](https://github.com/ryanpram/boo-backend/assets/34083758/ff907064-1cb6-4843-a59d-d84602bbf0f4)

* If it imported succefully your Environtment list will looked like below image
![Screenshot 2024-04-03 at 22 43 26](https://github.com/ryanpram/boo-backend/assets/34083758/c3b5abb5-ca78-4383-acd4-41ad511fcc77)

*  Select "BooBackendTest" as active environtments

![Screenshot 2024-04-03 at 22 48 26](https://github.com/ryanpram/boo-backend/assets/34083758/56f0d867-cc09-4476-8ed8-d50feb39692c)

*  Select "Collections" tab again,  select the "BooBackendTest", click the tree dots, click "Run collection"
![Screenshot 2024-04-03 at 22 53 20](https://github.com/ryanpram/boo-backend/assets/34083758/5726588e-2b6f-4a89-9f6d-1204d20c1116)

*  It will navigate you to Postmant collection runner page, select "Run manually", and then click "Run Boo BE Test". After it post should automatically run the test api script
![Screenshot 2024-04-03 at 22 54 06](https://github.com/ryanpram/boo-backend/assets/34083758/bff78b99-823d-4044-a511-8c8f97fccd3f)

*  After the test script finish to run, it will show the result page like below
![Screenshot 2024-04-03 at 22 54 45](https://github.com/ryanpram/boo-backend/assets/34083758/4e18f775-fece-4b1a-8064-d16939ae4f75)


