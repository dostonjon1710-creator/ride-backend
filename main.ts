async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // 🔥 TO DODAJ

  await app.listen(process.env.PORT || 3000);
}
bootstrap();