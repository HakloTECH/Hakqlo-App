# PWATest
app for Hakqlo community

# for Developers:

To test PWA locally, 
use the following command to enable https local hosting.

Firstly, install mkcert. -> https://github.com/FiloSottile/mkcert (you can find some instructions for installing)
then run the following command.
```bash
mkcert -install
```
in your project directory, run:
```bash
mkcert 0.0.0.0 localhost 127.0.0.1 ::1
```
Two files generated in your directory, and rename it.
0.0.0.0+3-key.pem -> key.pem
0.0.0.0+3.pem -> cert.pem

then you can make a https server locally.
```bash
http-server -S -C cert.pem -o
```
source: https://qiita.com/walkers/items/b90a97a99bbb27f6550f
