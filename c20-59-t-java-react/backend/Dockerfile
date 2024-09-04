FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/salud_vital-0.0.1.jar
COPY ${JAR_FILE} app_salud_vital.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_salud_vital.jar"]