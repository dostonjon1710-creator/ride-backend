async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // 👈 TO DODAJEMY

  await app.listen(3000);
}
bootstrap();