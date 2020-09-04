# Puppeteer

* https://developers.google.com/web/tools/puppeteer


* https://www.youtube.com/watch?v=lhZOFUY1weo
    * https://youtu.be/lhZOFUY1weo?t=680
        * `await page.goto(url, { waitUntil: 'networkidle0' });`
        * `await page.content();` returns searialized HTML content
        * `await page.$eval('html', e => e.outerHTML)`
          * same thing as above
          * may be the html isn't searialized
    * https://youtu.be/lhZOFUY1weo?t=760
        * Create a server side pre-render module
        * This module shoudl return the HTML content of the page
        * In your `express` server's `get()` method, call the SSR
        * Serve the pre-rendered page as the response
            * `return res.status(200).send(html);` 

### Sample Codes:
#### SSR Example 1:
```js
import express from `express`;
import {ssr} from `./ssr.mjs`;

app.get('/', async (req, res, next) => {
    const origin = `${req.protocol}://${req.get('host')}`;
    const html = await ssr(`${origin}/index.html`);
    return res.status(200).send(html).
});


```


### Firehose:
* https://devwebfeed.appspot.com/
* https://devwebfeed.appspot.com/?tweets


#### For Debugging (in Head**ful** mode)
```js
const browser = await puppeteer.launch({
    headless: false
});
```

With EJS you can have several tags to render a variable `code`:
  <% code %>
  ... which is code that is evaluated but not printed out.

  <%= code %>
  ... which is code that is evaluated and printed out (escaped).

  <%- code %>
  ... which is code that is evaluated and printed out (not escaped).

  Control flow with <% %>
  Escaped output with <%= %> (escape function configurable)
  Unescaped raw output with <%- %>
  Newline-trim mode ('newline slurping') with -%> ending tag
  Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%>
