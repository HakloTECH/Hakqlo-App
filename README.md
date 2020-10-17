# Hakqlo PWA App
this is an official app for Hakqlo community. 

# for Developers:
when you type in indentations, please use "double space" indentation.
you can change the setting of indentation in VS Code.
If you don't know how to, ask in our Discord channel.

We are using WebPack+React

We are currently working on PWA edition. Future support for PC(electron) edition.

## First step

```bash
npm i
```
## TODO
For details, please see our Trello board.

## commands 
### npm 
- `npm run build` - builds optimized files in dist/
- `npm run start` - runs dev server and opens index.html on browser. it's useful. please use this when you want to develop and see the changes instantly.
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