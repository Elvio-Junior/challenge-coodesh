# Objetivo
 
Este projeto tem o objetivo realizar a automação front-end utilizando o framework Playwright do site playwright.config.ts. Contempla os seguintes cenarios
- Cenário 1: Acessar a Home do Site
- Cenário 2: Busca na Home do Site
- Cenário 3: Adicionar Produto Carrinho
- Cenário 4: Realizar checkout
- Cenário 5: Realizar Review do Produto

# Pré-requisitos

## Sistemas Operacionais

- MacOS
    - MacOS 12 Monterey
    - MacOS 13 Ventura
    - MacOS 14 Sonoma
- Linux 
    - Debian 11
    - Debian 12
    - Ubuntu 20.04 (arquitetura x86-64 ou arm64)
    - Ubuntu 22.04 (arquitetura x86-64 ou arm64)
- Windows
    - Windows 10+
    - Windows Server 2016+
    - Subsistema do Windows para Linux (WSL)

## NodeJs
    - Node.js 18 e superiores
    - Gerenciador de Pacotes do NodeJS (npm)

# Escolha do Framework Playwright

Para o projeto foi escolhido o framework Playwright pelos seguintes motivos

- Suporte Multi-Navegador: Suporte nativo para Chromium, Firefox, WebKit, e Edge, permitindo testes cross-browser.

- Múltiplas Plataformas: Funciona em Windows, macOS, Linux e suporta emulação de dispositivos móveis.

- Execução em Paralelo: Capacidade nativa de executar testes em paralelo, acelerando o tempo total de execução.

- API Poderosa: Controle detalhado sobre todas as funcionalidades do navegador, como manipulação de abas, pop-ups e iframes.

- Modo Headless e CI/CD: Suporte robusto para execução em modo headless e fácil integração com pipelines CI/CD.

- Automação de Interações Complexas: Suporta interações avançadas e navegação em páginas que utilizam WebSockets, se destacando em ambientes dinâmicos.

Porém nem tudo é vantagem

- Curva de Aprendizado: A API, apesar de poderosa, pode ser complexa para iniciantes.

- Comunidade em Crescimento: Menor comunidade em comparação com o Cypress, mas está crescendo rapidamente.

- Menos Ferramentas Integradas: Embora tenha boas integrações, pode não ter tantas ferramentas de complementação quanto o Cypress.

# Projeto

## Instalação
    - Realizar o clone do projeto
    - Instalar os recursos necessários digite na raiz do projeto os comandos:

      - npx playwright install
      - npm install

## Execução dos Testes

Existe algumas maneiras de executar os testes, sendo:

    - Executar todos os testes: `npm run test:all`
    - Executar testes via interface gráfica: `npm run test:ui`
    - Exibir relatórios dos testes: `npm run test:report`

# Referências
- https://nodejs.org/pt-br/
- https://playwright.dev/
- https://developer.chrome.com/docs/puppeteer/

# Ferramentas para o Desenvolvimento

    As seguintes ferramentas são necessárias e/ou sugeridas para o projeto

## Instalação:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/pt-br)

## IDE
- [VSCode](https://code.visualstudio.com/download)

## Challenge by Coodesh

Este projeto é parte de um desafio proposto pela Coodesh. [Veja mais detalhes aqui.](https://coodesh.com/pt/assessments/project/d53db0dc-ef62-4a38-98d7-53de1931f9d1/intro)
