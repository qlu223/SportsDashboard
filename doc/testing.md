# Testing Plan

We are using WebdriverIO to test UI design and directory structure, as well as Vitest for API calls and data rendering functionality.

# Running WebDriverIO Tests (in electron-app/test/specs)

```
cd electron-app/
npx wdio run wdio.conf.js
```

### when you make a change to the application:

```
cd electron-app/
npm run make
npx wdio run wdio.conf.js
```

# Running Vitest Tests (in electron-app/test)

```
cd electron-app/
npm test
```

# Tests We Have Implemented 

1. Test call to external API to return expected data
2. Test various button clicks performing as expected on our app
3. Test rendering of data on our app
4. Test for no broken links in our app
5. Test that visualizations are correctly filtered/sorted


