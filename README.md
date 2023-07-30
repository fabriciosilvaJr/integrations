# integrations

Solução do desafio de integração para vaga [https://github.com/godevapi/vagas](https://github.com/godevapi/vagas/tree/master/integrations), de forma que a planilha a ser integrada deve ter as colunas conforme ordem indicada nas instruções, e a primeira linha deve estar com cabeçalho ou estar vazia (pois é ignorada) 

## Executando o projeto

### Usar demo serverless agora mesmo 🚀
Você pode experimentar o resultado do projeto agora mesmo com esse frontend simples: https://integracaohubspot.netlify.app

### Preparação
Recomendo o uso do arquivo `.env` na raiz do projeto para facilitar configuração de variáveis de ambiente.

1. instalar [Node.js](https://nodejs.org/pt-br), caso ainda não tenha
2. executar `npm install` na raiz do projeto para instalar as dependências
3. adicionar o arquivo de [credenciais do Google](https://developers.google.com/workspace/guides/create-credentials?hl=pt-br#service-account) com o nome `credenciais` na pasta netlify/functions
4. dar permissão de leitura em sua planilha para o email da service account 
5. configurar a variável de ambiente HUB_SPOT_API_KEY com o [token da sua aplicação HubSpot](https://knowledge.hubspot.com/pt/integrations/how-do-i-get-my-hubspot-api-key#:~:text=Na%20sua%20conta%20da%20HubSpot,em%20Gerar%20chave%20de%20API), que deve ter permissão `crm.objects.contacts.write`
6. seguir passos da seção abaixo, [Executando o código](#executando-o-código)

### Executando o código na linha de comando
Após preparação basta executar `node index.js`

### Executando no modo serverless para testes (netlify dev)
Após preparação execute o comando `npm run dev`

## Executando o linter
 Ao executar `npm run lint` o eslint será executando com a flag --fix, resolvendo todos os problemas de linting que podem ser resolvidos de forma automática.

## Tecnologias utilizadas
- [Node.js](https://nodejs.org/pt-br) - runtime para execução do Javascript
- [Google Spread Sheet](https://www.npmjs.com/package/google-spreadsheet) - biblioteca client que facilita integração com APIs Google, usada no projeto para integração com Google Planilhas
- [HubSpot API Client](https://github.com/HubSpot/hubspot-api-nodejs) - biblioteca client para facilitar integração com API do [HubSpot](https://www.hubspot.com/)
- [ESLint](https://eslint.org/) - linter configurável para identificação de problemas no código
- [Netlify Functions](https://www.netlify.com/) - para hospedagem, funções serverless,
- [Netlify](https://www.netlify.com/) - para hospedagem e serverless functions
- [dotenv](https://www.npmjs.com/package/dotenv) - para dar suporte leitura de variáveis de ambiente a partir do arquivo .env
