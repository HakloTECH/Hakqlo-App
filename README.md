# PWATest
app for Hakqlo community

# for Developers:
please use "double spaces" indentation when code.
you should change settings of indentation in order to do this.
If you don't know how to, ask in our Discord channel.

We are using WebPack

## file structure
├── css/
│   ├── 
│   └──
├── dist/   ->compiled files

## First step

```bash
npm i
```
## TODO

move on this project into WebPack.
add dialog-element-polyfill https://github.com/GoogleChrome/dialog-polyfill
add xtermjs
webpack auto SCSS into css
webpack auto latest es into suitable version
push notification(Using API & using IOS way)

## To test PWA locally, 
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
