<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objectives

- Build an app using React, Redux, Node and Sequelize.
- Strengthen the conpects learned through the course.
- Learn best practices.
- Learn/Practice Git workflow.
- Practice testing.

## Objetivos del Proyecto (ES)

- Construir una app utilizando React, Redux, Node y Sequelize.
- Fortalecer los conceptos aprendidos durante la carrera.
- Aprender mejores prácticas.
- Practicar el flujo de GIT.
- Practicar testing.

## Dependencies

 * __Node__: 12.18.3 or greater
 * __NPM__: 6.14.16 or greater
 * PostgreSQL installation.


## Running

- Clone the repo
- Create a `.env` file inside the `api` folder, with the following:
## BoilerPlate

Create an `.env` file in the `api` folder.

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```
replace with postgress user and password where apropriate.

Before running the app, a postgreSQL database with the name `countries` should be created.

## BoilerPlate (ES)

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=postgresUser
DB_PASSWORD=passwordPostgres
DB_HOST=localhost
```
(Replace postgresUser and passwordPostgres with your own credentials for postgres)

* Create a new database, name it `countries`


### Endpoints Used (Únicos Endpoints/Flags que pueden utilizar)

  - GET https://restcountries.com/v3/all
  - GET https://restcountries.com/v3/name/{name}
  - GET https://restcountries.com/v3/alpha/{code}

#### Frontend features (React/Redux/Vanilla CSS)

__Landing Page__

__Main Route__: 
- [x] Search countries by name.
- [x] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /countries` y deberá mostrar su:
- [x] Country listing, with the following:
  - Country flag
  - Name
  - Continent
  - Pagination (9 countries in the first page, 10 onwards)
- [x] Hability to filter by country and tourism activities.
- [x] Hability to sort countries by name and population. (additive filtering)

__Country Detail Route__: 
- [x] Fields for:
  - Flag
  - name
  - 3 letter code.
  - continent
  - Capital
  - Subregion
  - Area in (km2)
  - Population
  - Tourism activites with their descriptions.

__Activity Creation Route__: 
- [x] Un formulario __controlado con JavaScript__ con los siguientes campos:
- [x] Javscript controlled form with the following fields:
  - Name
  - Difficulty
  - Length
  - Season
- [x] Hability to add several countries at a time.

#### Database (Sequelize/PostgreSQL)

The models for the database includes the following:

- [x] País con las siguientes propiedades:
- [x] Country model:
  - ID (Código de 3 letras) *
  - Name
  - Country Flag 
  - Continent
  - Capital 
  - Subregion
  - Area
  - Population
- [x] Tourism Activity model: 
  - ID
  - Name
  - Difficulty (Between 1 and 5)
  - Length
  - Season (Spring, Summer, Fall, Winter)

#### Backend (Node/ExpresJS)

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:
The internal API provides the following routes:

- [x] __GET /countries__:
  - Populates the database with some data from the public API at server startup.
  - Provides a country listing.
- [x] __GET /countries/{idPais}__:
  - Provides the detail for a particular country. (Always queries the public API for the missing data)
  - Includes the data for the user created tourism activities.
- [x] __GET /countries?name="..."__:
  - Provides the countries that more or less match the query parameter.
- [x] __POST /activity__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Receives the data colected by the controlled form on the Activity Creation route.
  - Creates an tourism activity on the database with said data.

#### Testing
- [x] Testing for one route in the backend
- [x] Sequelize model tested.

#### Características del Frontend (ES)

__Pagina inicial__: deben armar una landing page con
- [x] Alguna imagen de fondo representativa al proyecto
- [x] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener
- [x] Input de búsqueda para encontrar países por nombre
- [x] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /countries` y deberá mostrar su:
  - Imagen de la bandera
  - Nombre
  - Continente
- [x] Botones/Opciones para filtrar por continente y por tipo de actividad turística
- [x] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- [x] Los filtros/ordenados son aditivos
- [x] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.

__Ruta de detalle de país__: debe contener
- [x] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- [x] Código de país de 3 letras (id)
- [x] Capital
- [x] Subregión
- [x] Área (Mostrarla en km2 o millones de km2)
- [x] Población
- [x] Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__: debe contener
- [x] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [x] Posibilidad de seleccionar/agregar varios países en simultáneo
- [x] Botón/Opción para crear una nueva actividad turística

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre de la actividad no pueda contener símbolos, que la duración no pueda exceder determinado valor, etc.

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [x] País con las siguientes propiedades:
  - ID (Código de 3 letras) *
  - Nombre *
  - Imagen de la bandera *
  - Continente *
  - Capital *
  - Subregión
  - Área
  - Población
- [x] Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

La relación entre ambas entidades debe ser de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países. Por ejemplo una actividad podría ser "Ski" que podría ocurrir en Argentina y también en Estados Unidos, pero a su vez Argentina podría también incluir "Rafting".

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [x] __GET /countries__:
  - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
  - Obtener un listado de los paises.
- [x] __GET /countries/{idPais}__:
  - Obtener el detalle de un país en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de país
  - Incluir los datos de las actividades turísticas correspondientes
- [x] __GET /countries?name="..."__:
  - Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
  - Si no existe ningún país mostrar un mensaje adecuado
- [x] __POST /activity__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos


#### Testing
- [x] Al menos tener una ruta del backend con sus tests respectivos
- [x] Al menos tener un modelo de la base de datos con sus tests respectivos

### Added Live
- [x] Link to a map of the country
