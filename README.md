# serverless-framework

Este proyecto esta configurado en base a las nuevas actualizaciones de la dependencia de erverless-dynamodb y serverless-offline. En caso de algún error puedes seguir los siguiente pasos.

## Error: UnrecognizedClientException: The Access Key ID or security token is invalid.

En el archivo serverless.yml en el directorio raíz, hay que modificar en el apartado de plugins:

- serverless-dynamodb-local
  por:
- serverless-dynamodb

![App Screenshot](https://i.imgur.com/NffkJcb.png)

Posterior, necesitamos desinstalar el modulo viejo (olvidado por su creador y de dificil comunicación para realizarle cambios) por el nuevo (actualmente con soporte y actualizado) Eso se logra con unos pasos en npm:

Paso 1: Desinstalar el paquete serverless-dynamodb-local con el comando

```bash
  npm uninstall serverless-dynamodb-local
```

Paso 2: Instalar serverless-dynamodb con el comando:

```bash
  npm install serverless-dynamodb
```

Ahora que ya tenemos el modulo de dynamodb actualizado en npm, el ultimo paso es agregar tus llaves de acceso en el archivo handler.js localizado en el directorio de "Serverless-framework\getusers". Aquí tienes que agregar tus llaves de acceso del usuario de AWS, tanto la accessKeyId como la secretAccessKey.
![App Screenshot](https://i.imgur.com/JQkL3bE_d.webp?maxwidth=1520&fidelity=grand)
En caso que olvidaste o quieres actualizar tus llaves de acceso puedes visualizarlas utilizando el comando:

```bash
  aws configure list
```

![App Screenshot](https://i.imgur.com/bbVdk35.png)

Para abrir el archivo de configuración y modificar las llaves puedes utilizar el comando:

```bash
  cat ~/.aws/credentials
```

Finalmente podemmos iniciar nuestro serverless utilizando el comando:

```bash
  sls offline start
```

## Proyecto en ejecución

![App Screenshot](https://i.imgur.com/CQ7eYzT.png)

## Validar la conexión

Utiliza Postman para hacer una nueva petición, puedes copiar el endpoint de GET para realizar la petición.

Petición en Postman

![App Screenshot](https://i.imgur.com/mJEhJSI.png)

Respuesta del servidor a la petición

![App Screenshot](https://i.imgur.com/dZDSVPq.png)
