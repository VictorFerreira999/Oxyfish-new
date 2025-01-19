# Usar a imagem oficial do Node.js
FROM node:16

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos do projeto
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Rodar a aplicação
CMD ["node", "express.js"]
