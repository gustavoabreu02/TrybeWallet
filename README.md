
# Projeto TrybeWallet

Este projeto consiste em uma aplicação React que permite ao usuário controlar seus gastos, adicionando, removendo e editando gastos. Além disso, o usuário pode visualizar uma tabela com seus gastos e o total de gastos convertidos para uma moeda de escolha.

## Instalação

Para instalar e executar a aplicação, siga os seguintes passos:

1. Clone este repositório em sua máquina local
2. Navegue até o diretório do projeto em seu terminal
3. Execute o comando `npm install` para instalar todas as dependências do projeto
4. Execute o comando `npm start` para iniciar a aplicação
5. Abra o navegador e acesse http://localhost:3000

## Como utilizar

Ao abrir a aplicação, o usuário verá a tela inicial com uma tabela vazia de gastos. Para adicionar um novo gasto, basta clicar no botão "Adicionar Gasto" e preencher os campos com as informações necessárias (nome do gasto, valor em reais e data). 

Caso deseje remover ou editar um gasto já cadastrado, basta clicar nos botões correspondentes na tabela de gastos.

Para visualizar o total de gastos convertidos para uma moeda de escolha, basta selecionar a moeda desejada no menu suspenso na parte superior da tela. A conversão é feita usando a API externa Open Exchange Rates.

## Estrutura do Projeto

A estrutura do projeto é composta pelos seguintes diretórios:

- `src/actions`: Contém as actions do Redux.
- `src/components`: Contém os componentes React da aplicação.
- `src/reducers`: Contém os reducers do Redux.
- `src/store`: Contém o arquivo de configuração da store do Redux.
- `src/utils`: Contém arquivos de utilidade, como a função de conversão de moedas.

## Tecnologias utilizadas

- React
- Redux
- React Router
- Bootstrap
- Open Exchange Rates API

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, sugestões e correções de bugs. Basta abrir um Pull Request com as mudanças propostas. 

## Autor

Esse projeto foi desenvolvido por - [@gustavoabreu02](https://www.github.com/gustavoabreu02).