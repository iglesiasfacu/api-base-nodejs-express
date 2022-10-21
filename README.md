# API Rest con NodeJS y Express

## Descripcion

Api base desarrollada con NodeJS y Express, basada en la arquitectura de 3 capaz implementando buenas prácticas en estructuración de proyecto y nombrado de variables/funciones/clases. Consumira datos desde un JSON de prueba (src/database/db.json)

## Carpeta SRC

### Controllers

> Manejaremos todo lo relacionado con HTTP. Tratamos solicitudes y respuestas para nuestros endpoints

### Database

> - Workout: ORM de la API, CRUD directo con la db.json
> - db.json: Base de Datos de la API
> - utils: Funciones que utiliza la ORM

### Routes

> Endpoints de la API

### Services

> Utiliza la ORM de la API para exportar servicios (métodos) que utilizan los controllers.
