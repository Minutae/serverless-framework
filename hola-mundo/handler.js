const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Hola mundo - bienvenidos la clase de serverless framework en aws",
    }),
  };
};

module.exports = {
  hello,
};
