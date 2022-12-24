#
# Set a variable that can be used in all stages.
#
ARG BUILD_HOME=patient

#
# Gradle image for the build stage.
#
FROM gradle:7.2.0-jdk17 as build-image

#
# Set the working directory.
#
ARG BUILD_HOME
ENV APP_HOME=$BUILD_HOME

#
# Copy the Gradle config, source code, and static analysis config
# into the build container.
#
COPY --chown=gradle:gradle build.gradle settings.gradle $APP_HOME/
COPY --chown=gradle:gradle src $APP_HOME/src
# COPY --chown=gradle:gradle config $APP_HOME/config

#
# Build the application.
#
RUN gradle init
RUN gradle --no-daemon build --exclude-task test

#
# Java image for the application to run in.
#
FROM openjdk:17-alpine

#
# Copy the jar file in and name it app.jar.
#
ARG BUILD_HOME
ENV APP_HOME=$BUILD_HOME
COPY --from=build-image ${BUILD_HOME}/build/libs/patient-0.0.1-SNAPSHOT.jar ./app.jar

#
# The command to run when the container starts.
#
ENTRYPOINT java -jar app.jar