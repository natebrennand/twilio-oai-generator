FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
ARG SONAR_TOKEN=""
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
         git \
         mono-complete \
         openjdk-11-jre

RUN dotnet tool install --global dotnet-sonarscanner \
    && dotnet tool install --global dotnet-reportgenerator-globaltool --version 4.8.12

RUN dotnet tool list -g
ENV PATH="${PATH}:/root/.dotnet/tools"
ENV SONAR_TOKEN=$SONAR_TOKEN

RUN mkdir /app
WORKDIR /app
RUN git clone --depth 1 https://github.com/twilio/twilio-csharp.git
WORKDIR /app/twilio-csharp

RUN rm -rf src/Twilio/Rest/*/
COPY src/Twilio/Rest src/Twilio/Rest

RUN rm -rf test/Twilio.Test/*/
COPY unit-test/Rest integrationTest/Rest test/Twilio.Test/

RUN dotnet restore
RUN	dotnet build Twilio.sln
CMD ["/bin/bash", "-c", "set -o pipefail && sleep 10 && dotnet test test/Twilio.Test/Twilio.Test.csproj --no-build 2>&1 | tee /local/test-report.out"]

RUN apt-get -y install build-essential
CMD if [ "$SONAR_TOKEN" = "" ] ; then echo Skipping sonar analysis ;  else make cover PROJECT_NAME=twilio_twilio-oai-generator-csharp SONAR_SOURCES="/d:sonar.inclusions=src/Twilio/Rest/**/* /d:sonar.cs.analyzeGeneratedCode=true /d:sonar.exclusions=test/Twilio.Test/**/*" ; fi
