set up files : 
```npx create-react-app bmi_cal```

install : 
```npm i```


run project :  
```npm run dev```


deployment : (REACT)
1--
```npm install gh-pages --save-dev```

2--Update package.json

```"homepage": "https://your-username.github.io/your-repo-name"```

3-Add a predeploy and deploy script:
json

``` "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
} 
```

4--
```git init```

5-- ```git add.```



6- Deploy: this runs predeploy first then deploy
```npm run deploy```
