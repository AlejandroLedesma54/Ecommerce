# Ecommerce

Uso de dependencias:

    express: Framework web para Node.js.
    @types/express: Definiciones de tipos para Express.
    sequelize: ORM para Node.js.
    sequelize-typescript: Decoradores de TypeScript para Sequelize.
    @types/sequelize: Definiciones de tipos para Sequelize.
    typescript: Lenguaje de programación que añade tipado estático a JavaScript.
    mysql2: Driver de MySQL para Node.js.
    nodemon: Herramienta para reiniciar automáticamente la aplicación cuando se detectan cambios.
    ts-node: Ejecuta TypeScript directamente en Node.js.
    @types/node: Definiciones de tipos para Node.js.
    tsyringe: Contenedor de inyección de dependencias para TypeScript.
    bcrypt: Librería para cifrar y verificar contraseñas.
    @types/bcrypt: Definiciones de tipos para bcrypt.
    jsonwebtoken: Librería para crear y verificar tokens JWT.
    @types/jsonwebtoken: Definiciones de tipos para jsonwebtoken.

    

1. Inicializar el proyecto con npm

npm init -y

2. Instalar TypeScript y otras dependencias necesarias

-> npm install typescript ts-node @types/node --save-dev

Dependencias de produccion:
->npm install @types/bcrypt@^5.0.2 @types/express@^4.17.21 @types/jsonwebtoken@^9.0.6 bcrypt@^5.1.1 express@^4.19.2 -jsonwebtoken@^9.0.2 mysql2@^3.11.0 sequelize@^6.37.3 sequelize-typescript@^2.1.6 trying@file: tsyringe@^4.8.0

Dependencias de Desarollo
->npm install --save-dev @types/node@^22.1.0 @types/sequelize@^4.28.20 nodemon@^3.1.4 ts-node@^10.9.2 typescript@^5.5.4

Instalar CORS
->npm install express cors

3. Inicializar TypeScript

npx tsc --init

    Editar el archivo tsconfig.json para configurar TypeScript

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

4. Crear el archivo de configuración de variables de entorno .env

DB_HOST=b34l6ysou7xdcstgwkcn-mysql.services.clever-cloud.com
DB_USER=unw3avinwttaurc4
DB_PASSWORD=ORzDRZoQ2rs50sNCUJo0
DB_NAME=b34l6ysou7xdcstgwkcn
PORT=3306

5. Compilar el proyecto

npx tsc

6. Iniciar el servidor con Nodemon

npm start
