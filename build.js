fs = require('fs');
//constants
const themeColor = "#333333",backgroundColor = themeColor,
appName="PWA TEST",appShortName = appName;

const rewriteJson = (filename,func) =>{
    fs.readFile(filename, (err, data) => {
        if (err) {
          console.error("read file error: "+err)
          return
        }
        console.log(data);
        fs.writeFile(filename, JSON.stringify(func(JSON.parse(data))), function (err) {
            if (err) return console.log(err);
            console.log('wrote file');
        });
      })
}
rewriteJson('./manifest.webmanifest',(obj)=>{
    obj.background_color = backgroundColor;
    obj.theme_color = themeColor;
    obj.name = appName;
    obj.short_name = appShortName;
    
})