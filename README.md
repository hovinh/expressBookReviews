# coding-project-template


Start application: 
```bash
npm install
npm start
curl localhost:5000/user
```

Task 1
GET:
```bash
https://hxvinhhcmus-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/

curl localhost:5000
```



Task 2
GET:
```bash
https://hxvinhhcmus-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn?isbn=1
https://hxvinhhcmus-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn/1
```

Task 3
GET
```
curl localhost:5000/author/Unknown
```

Task 4
```
curl "http://localhost:5000/title/Things%20Fall%20Apart"
```

```
curl -X POST "http://localhost:5000/register?name=YourName"

curl -X POST "http://localhost:5000/customer/login?name=user1&password=pass1"
```


```
curl -X PUT "http://localhost:5000/customer/auth/review/1"

curl -X PUT "http://localhost:5000/customer/auth/review/1" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzU0MjAxODExLCJleHAiOjE3NTQyMDU0MTF9.lkaeqZebs4MNfJwOyu6Wb2voj4dLBEgkBRBmluWV9sY"

```

