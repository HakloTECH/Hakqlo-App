# PWATest
app for Hakqlo community

# for Developers:

To test PWA locally, 
use the following command to enable https local hosting.
```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```
then you may put some options like:
```
Generating a 2048 bit RSA private key
.+++
...................................................................................+++
writing new private key to 'key.pem'
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) []:JP
State or Province Name (full name) []:
Locality Name (eg, city) []:
Organization Name (eg, company) []:Hakqlo 
Organizational Unit Name (eg, section) []:
Common Name (eg, fully qualified host name) []:127.0.0.1
Email Address []:official.hakqlo@gmail.com
```
source: https://stackoverflow.com/questions/35127383/npm-http-server-with-ssl
