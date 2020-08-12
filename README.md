# Hakqlo PWA App
this is an official app for Hakqlo community. 

# for Developers:
when you type in indentations, please use "double space" indentation.
you can change the setting of indentation in VS Code.
If you don't know how to, ask in our Discord channel.

We are using WebPack

## file structure
```
.
├── 404.html
├── LICENSE
├── README.md
├── css
│   └── <SCSS/CSS files>
├── dist
│   └──<compiled files!>
├── icon
│   └── <OGP, SVG icons, PNG images, etc>
├── old_backups
│   └── <it is for leaving old-backup files just in case>
├── index.html -> <app main page>
├── install.html -> <app install page>
├── js
│   └── <JS files>
├── package-lock.json
├── package.json
├── sw.js -> <service worker script>
├── test
│   └── <directory for testing> 
├── webpack.common.js -> <build configuration file>
├── webpack.dev.js -> <build configuration file for development>
└── webpack.prod.js -> <build configuration file for production>

```
## First step

```bash
npm i
```
## TODO
For details, please see our google keep

- add xtermjs
- develop gesture-triggering library
- firebase authentication
- device & browser detection and show popup for each environment for installation instruction. 
  - i.e. 
    - IOS & safari -> show popup for instruction
    - android & chrome -> just do install process.
    - mobile but doesn't support PWA -> show popup to say you should use appropriate browser or OS version.
    - and so on....
- push notification(Using API & using IOS way)
## commands 
### npm 
- `npm run build` - builds optimized files in dist/
- `npm run start` - runs dev server and opens index.html on browser. it's useful. please use this when yu want to develop and see the changes instantly.
- `npm run watch` - this is similar to above but it does not start a server and open browser. use this when you don't need to see the changes in browser.
- `npm run deploy` - it runs `npm run build` and deploys to Github Page.
### git 
for the most cases you only type those three commands to upload your changes to github. (this uploads developing source to github, and `npm run deploy` will only upload the compiled ones.(i.e. files in dist/))
- `git add . `
- `git commit -a -m 'your message'` (replace 'your message' to your message)
- `git push origin master`

#### if you need to type in github password every single time...
you should GOOGLE like 'github ssh' and see the articles that you find. if you are done with the ssh setting, your problems should be solved. goodluck:wink:  lol


# In the end...
  I like ramen.