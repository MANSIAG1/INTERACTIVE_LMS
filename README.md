# LMS Frontend

### Setup instruction

1. Clone the project

```
    git clone https://github.com/Raghibjamil/lms-fronted.git
```

2. Move into the directory

```
    cd lms-frontend-hn
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```



### Setup instructions for tailwind


1. Terminal

```
   npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

3. Add file extensions to tailwind config file in the contents property
```
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

### Adding plugins and dependencies 

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axi
os react-hot-toast @tailwindcss/line-clamp
```


 