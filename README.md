# React.js Fundamentals course

This is the project of the course [**React.js Fundamentals**][1]. In the lessons, the instructor used ES5 but I built the project using ES6.

Installation & running
---

```bash
git clone https://github.com/dmoralesm/reactjsfundamentals.git
cd reactjsfundamentals
cp app/config/config.js.sample app/config/config.js
npm install
```

Then create a [Personal access token at Github][2] and place it inside app/config/config.js
```javascript
const config = {
  GITHUB_TOKEN: 'YOUR_TOKEN_HERE'
}
```

Lastly, run `npm start` and view project running at http://localhost:3000

[1]: https://online.reacttraining.com/courses/50507
[2]: https://github.com/settings/tokens
