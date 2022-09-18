# PhoneCatalog
Phone catalog REST API and cross-platform mobile app.

## PhoneCatalogAPI
REST API implemented in .NET with SQLite database.

### Features

- `GET /phones` Get all phones
- `POST /phones` Add new phone
- `GET /phones/{id}` Get phone by id
- `PUT /phones/{id}` Update phone by id
- `DELETE /phones/{id}` Delete phone by id
- Swagger with endpoint details
- Deployed to Heroku for App usage

### Instructions
Open the project in Visual Studio and simply build and run the profile that you want.
You can run it either directly, in IIS Express or in Docker.

You can also use docker-compose to build and run a docker container with the api.
The docker-compose file is in the repository root. Make sure you run those commands in that directory.

Build
```bash
docker-compose build api
```

Run
```bash
docker-compose up -d api
```

## PhoneCatalogApp
Mobile app implemented in React Native.

### Features

- Home screen showing a nice catalog of phones
- Phone details screen
- Add new phones
- Edit any phone detail
- Delete any phone
- Light/Dark theme
- Multilanguage support (currently English and Spanish)
- Detox and Jest tests

### Instructions

Make sure React Native is [set up and ready](https://reactnative.dev/docs/environment-setup).

Install all the packages.
```bash
npm i
```

Run the app.
```bash
npx react-native run-android
```

If you want to change API URL for the app, edit the `.env` file. By default it will point to a Heroku API URL.

### App tests

Run jest tests.
```bash
npm test
```

Detox build.
```bash
detox build -c yourConfiguration
```

Detox test.
```bash
detox test -c yourConfiguration
```

