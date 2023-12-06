const { Builder, By, until } = require('selenium-webdriver');

const fs = require('fs');

describe("Inicio de Sesion", ()=> {
    it("Login con credenciales de usuario estandar", async ()=>{
       let driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5500/index.html')
        await driver.findElement(By.id('username')).sendKeys('PedroAdmin25*')
        await driver.findElement(By.id('password')).sendKeys('PedroAdmin25*');

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Inicio Sesion.png', screenshot, 'base64');
        console.log('Se realizo la captura con el nombre Inicio Sesion');

        await driver.findElement(By.id('button')).click();

        const screenshot1 = await driver.takeScreenshot();
        fs.writeFileSync('./screenshots/Pagina Principal.png', screenshot1, 'base64');
        console.log('Se realizo la captura con el nombre Pagina Principal.');

        await driver.quit()
    })
})

describe("Mensajes de error claros", ()=> {
    it("Cuando se intenta ingresar con credenciales erroneas surge una alerta", async ()=>{
       let driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5500/index.html')
        await driver.findElement(By.id('username')).sendKeys('PedroAdmin*')
        await driver.findElement(By.id('password')).sendKeys('Pedro25*');
        await driver.findElement(By.id('button')).click();

            await driver.wait(until.elementLocated(By.className('myAlerta')), 10000);

            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('/Users/macbook/Desktop/selenium-js/screenshots/Mensaje de error.png', screenshot, 'base64');
            console.log('Se realizo la captura con el nombre Mensaje de error');


            await driver.quit();
    })
})

describe("Mostrar mensaje de bienvenida", ()=> {
    it("Cuando se ingresen las credenciales correctas surge un mensaje de bienvenida.", async ()=>{
       let driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5500/index.html')
        await driver.findElement(By.id('username')).sendKeys('PedroAdmin25*')
        await driver.findElement(By.id('password')).sendKeys('PedroAdmin25*');
        await driver.findElement(By.id('button')).click();

            await driver.wait(until.elementLocated(By.className('myBienvenida')), 10000);

            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('/Users/macbook/Desktop/selenium-js/screenshots/Mensaje de bienvenida.png', screenshot, 'base64');
            console.log('Se realizo la captura con el nombre Mensaje de bienvenida');


            await driver.quit();
    })
})

describe("Cerrar Sesion por inactividad", ()=> {
    it("Si se detecta inactividad en la pagina luego de 5 segundos se cerrara la sesion.", async ()=>{
       let driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5500/index.html')
        await driver.findElement(By.id('username')).sendKeys('PedroAdmin25*')
        await driver.findElement(By.id('password')).sendKeys('PedroAdmin25*');
        await driver.findElement(By.id('button')).click();

        await driver.get('http://127.0.0.1:5500/mainPage.html')

            await driver.wait(until.elementLocated(By.className('myInactividad')), 5000);

            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync('/Users/macbook/Desktop/selenium-js/screenshots/Cierre de sesion por inactividad.png', screenshot, 'base64');
            console.log('Se realizo la captura con el nombre Cierre de sesion por inactividad.');

            await driver.get('http://127.0.0.1:5500/index.html')

            await driver.wait(until.elementLocated(By.className('title')), 3000);

            const screenshot1 = await driver.takeScreenshot();
            fs.writeFileSync('/Users/macbook/Desktop/selenium-js/screenshots/Login Cierre inactividad.png', screenshot1, 'base64');
            console.log('Se realizo la captura con el nombre login cierre inactividad.');

            await driver.quit();
    })
})


describe("Cerrar Sesion", ()=> {
    it("Se cierra la sesion y se redirige a la pagina de inicio.", async ()=>{
       let driver = new Builder().forBrowser('chrome').build();
        await driver.get('http://127.0.0.1:5500/index.html')
        await driver.findElement(By.id('username')).sendKeys('PedroAdmin25*')
        await driver.findElement(By.id('password')).sendKeys('PedroAdmin25*');
        await driver.findElement(By.id('button')).click();

        await driver.get('http://127.0.0.1:5500/mainPage.html')

        await driver.wait(until.elementLocated(By.id('logout')), 3000);

        const screenshot = await driver.takeScreenshot();
        fs.writeFileSync('/Users/macbook/Desktop/selenium-js/screenshots/Cierre de sesion.png', screenshot, 'base64');
        console.log('Se realizo la captura con el nombre Cierre de sesion.');

        await driver.findElement(By.id('logout')).click();

        await driver.get('http://127.0.0.1:5500/index.html')

        await driver.wait(until.elementLocated(By.className('title')), 3000);

        const screenshot1 = await driver.takeScreenshot();
        fs.writeFileSync('/Users/macbook/Desktop/selenium-js/screenshots/Login Cierre manual.png', screenshot1, 'base64');
        console.log('Se realizo la captura con el nombre login cierre manual.');

            await driver.quit();
    })
})
