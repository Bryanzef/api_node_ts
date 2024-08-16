<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignalR com Webpack e TypeScript - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding-top: 10px;
            min-height: 50px;
            border-bottom: #ddd 3px solid;
            margin-bottom: 20px;
        }
        header h1 {
            text-align: center;
            margin: 0;
        }
        h2 {
            color: #333;
        }
        code {
            background: #eee;
            padding: 2px 4px;
            border-radius: 4px;
        }
        .section {
            background: #fff;
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 20px;
        }
        pre {
            background: #eee;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        .code-block {
            background: #f7f7f7;
            border-left: 4px solid #333;
            padding: 10px;
            margin: 20px 0;
            overflow: auto;
        }
        .code-block pre {
            margin: 0;
            padding: 0;
        }
        .code-block code {
            background: transparent;
            color: #333;
        }
        footer {
            text-align: center;
            padding: 10px;
            background: #333;
            color: #fff;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>SignalR com Webpack e TypeScript - README</h1>
        </div>
    </header>
    <div class="container">
        <div class="section">
            <h2>🛠️ O que foi feito</h2>
            <p>Este projeto demonstra a criação de um aplicativo SignalR com ASP.NET Core e a configuração de um cliente TypeScript usando Webpack.</p>
            <h3>Criação do Aplicativo ASP.NET Core:</h3>
            <ul>
                <li>Configuração do servidor SignalR.</li>
                <li>Implementação do <code>ChatHub</code> para gerenciar mensagens.</li>
            </ul>
            <h3>Configuração do Cliente:</h3>
            <ul>
                <li>Criação do projeto Node.js.</li>
                <li>Uso do Webpack para empacotar TypeScript e recursos do lado do cliente.</li>
            </ul>
            <h3>Integração do Cliente com SignalR:</h3>
            <ul>
                <li>Implementação do cliente TypeScript para enviar e receber mensagens em tempo real.</li>
            </ul>
        </div>

        <div class="section">
            <h2>🚀 Executando a Aplicação</h2>
            <h3>Pré-requisitos</h3>
            <ul>
                <li>Node.js com npm</li>
                <li>Visual Studio ou Visual Studio Code</li>
                <li>Visual Studio 2022 com cargas de trabalho de desenvolvimento Web e ASP.NET</li>
            </ul>

            <h3>Configuração do Projeto</h3>
            <div class="code-block">
                <pre><code>git clone &lt;URL_DO_REPOSITORIO&gt;
cd &lt;DIRETORIO_DO_PROJETO&gt;</code></pre>
            </div>

            <h4>Instale as Dependências:</h4>
            <div class="code-block">
                <pre><code>npm install</code></pre>
            </div>

            <h4>Compile o Cliente com Webpack:</h4>
            <p>Para criar uma versão de desenvolvimento e observar mudanças, execute:</p>
            <div class="code-block">
                <pre><code>npm run build</code></pre>
            </div>
            <p>Para criar uma versão de produção, execute:</p>
            <div class="code-block">
                <pre><code>npm run release</code></pre>
            </div>

            <h4>Publique o Aplicativo:</h4>
            <div class="code-block">
                <pre><code>npm run publish</code></pre>
            </div>

            <h3>Execução da Aplicação</h3>
            <h4>Inicie o Aplicativo no Visual Studio:</h4>
            <p>No Visual Studio, selecione <strong>Debug > Iniciar sem depuração</strong>.</p>

            <h4>Acesse a Aplicação:</h4>
            <p>Abra um navegador e vá para <code>https://localhost:&lt;porta&gt;</code>. A interface do usuário permitirá que você envie mensagens em tempo real.</p>

            <h4>Teste a Aplicação:</h4>
            <p>Abra uma nova aba ou instância do navegador. Envie uma mensagem usando o formulário e observe que ela é exibida instantaneamente em ambas as abas.</p>
        </div>

        <div class="section">
            <h2>🛠️ Estrutura do Projeto</h2>
            <ul>
                <li><code>/src</code>: Contém o código do cliente.
                    <ul>
                        <li><code>index.html</code>: Marca da página principal.</li>
                        <li><code>css/main.css</code>: Estilos para a página.</li>
                        <li><code>index.ts</code>: Lógica do cliente em TypeScript.</li>
                        <li><code>tsconfig.json</code>: Configuração do compilador TypeScript.</li>
                    </ul>
                </li>
                <li><code>webpack.config.js</code>: Configuração do Webpack para empacotar e compilar o código.</li>
                <li><code>Program.cs</code>: Configuração do servidor SignalR e mapeamento das rotas.</li>
                <li><code>Hubs/ChatHub.cs</code>: Implementação do hub SignalR para gerenciar mensagens.</li>
            </ul>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 SignalR com Webpack e TypeScript. Todos os direitos reservados.</p>
    </footer>
</body>
</html>
