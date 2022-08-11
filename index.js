const {app, BrowserWindow} = require('electron');
const path = require('path');

/* 
## Função para criar a página
- BrowserWindow é uma classe
- Seu parâmetro (options) é um objeto

*/
function createHomePage(){
    let homePage = new BrowserWindow({
        width: 800,
        height: 800,

        // Referencia qual arquivo será carregado previamente
        webPreferences: {
            preload: path.join(__dirname, 'js/preload.js')
                    // Busca o caminho até o arquivo (dirname + filename)
        },
    });

    // Página carregada
    homePage.loadFile('index.html');
}

app.whenReady().then(createHomePage);