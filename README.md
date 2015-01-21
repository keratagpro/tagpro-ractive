Tagpro Ractive Userscript
====================

Download: http://keratagpro.github.io/tagpro-ractive/tagpro-ractive.user.js

Example: http://keratagpro.github.io/tagpro-ractive

## Usage

1. Include the script with `@require` in your userscript's header
    ```
    // @require  http://keratagpro.github.io/tagpro-ractive/tagpro-ractive.user.js
    ```

2. Add your components with `window.ractive.addComponent(component)`:
    ```
    tagpro.ready(function() {
        var MyComponent = Ractive.extend({
            template: '<h1>Hello {{name}}</h1>',
            data: {
                name: 'Hello'
            }
        });

        ractive.addComponent(MyComponent);
    });
    ```

## Development

1. Install NodeJS
2. Install Gulp Globally

    ```
    npm install -g gulp
    ```
3. Install npm dependencies from `package.json`
    ```
    npm install
    ```

4. Run Gulp + Watchify

    ```
    gulp watch
    ```
5. Start writing code in the `src/` and `example/` directories. The script will be available at `build/tagpro-ractive.user.js`.

### Publish the userscript + example page

```
gulp publish
```
