FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env

WORKDIR /app
COPY ./API ./API
COPY ./Persistence ./Persistence
COPY ./Domain ./Domain
COPY ./Application ./Application
COPY *.sln ./

RUN dotnet restore Reactivities.sln

WORKDIR /app/API

RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "API.dll"]
