deploy: https://pf-viajes-final.herokuapp.com
local server: http://localhost:3001

                                                   RUTAS:

-/login: verifica datos de login de usuarios y admins

-/transaction: es la ruta que guardara las transacciones de los usuarios:
\_numero de asiento=................"seatId" (number)
\_numero de vuelo=..................."flightId" (number)
\_precio final de venta=............."finalPrice" (number)
\_origen de partida=................."origin"
\_destino de aterrizaje=............."destination"
\_numero de equipaje=................"baggageId" (number)

-/users: lista de usuarios y admins (state)
\_nombre=..........................."name"
\_apellido=.........................."surname"
\_contraseña=......................."password"
\_sexo=.............................."sex"
\_nacionalidad......................."nationality"
\_DNI=..............................."DNI"
\_telefono=.........................."phone"
\_e-mail=............................"email"
\_estado=..........................."state"
\_transacciones......................"transactions"(esta se llena mediante la ruta /transactions)

-/flights: muestra en tiempo real los vuelos que estan a punto de salir en el dia, incluye:
\_destino = ........................"destination"
\_aeropuerto = ....................."airport"
\_numero de vuelo = ................"flightId" (number)
\_horario de partida = ............."departs"
\_estado si esta retrasado = ......."status"
\_puerto de embarque = ............."gate"
\_fecha = .........................."date"

-/flights2: muestra en tiempo real los vuelos que estan en el aire y donde van a aterrizar, contiene los mismos datos que flights

-/flightsAvailable:muestra la lista de vuelos programados, incluye:
\_origen = ........................."origin"
\_destino = ........................"destination"
\_imagen del destino = ............."img"
\_aeropuerto de salida = ..........."airport"
\_numero de vuelo = ................"flightId" (number)
\_horario de partida = ............."departs"
\_estado si esta retrasado = ......."status"
\_sala de embarque = ..............."gate"
\_fecha de salida = ................"date"
\_precio de usuario turista = ......"price" (number)
\_precio de primera clase = ........"firstclase" (number)
\_numero de asientos disponibles = ."seating" (number)
\_duracion de vuelo = .............."duration" (number)
(datos provistos al azar, ante irregularidades se los puede modificar directamente de la carpeta /database/fligthAvailable
o mediante el uso de un put a /flightsAvailable/:id")

                                                         METODOS:

Todos los metodos de peticion se usan de la misma forma (salvo excepciones), en caso de algun error se enviara los detalles por respuesta (lista de rutas en /routes)

-GET: solo devuelve la info en un array, puede que users este vacia, habra que crearlas mediante un post

-POST: para crear solo habra que enviar la info requerida por el body como objeto, no se puede omitir ninguno de los datos de documento o no se creara. Guiarse por los datos ya provistos en la parte superior del readme o visitar carpeta /models para ver la estructura de datos. Al crear un usuario no hace falta especificar su status, ya la tiene por defecto, pero si se lo debe hacer en caso de que sea "admin"

-PUT: enviar el id por params, y la info a modificar por body como objeto, no hace falta que esten todos los datos, se puede enviar solo la parte a modificar (usar esa forma para cambiar el satus de un user a admin o viceversa)

-DELETE: solo id por params

                                                  METODOS EXCEPCIONES:

Todas las contraseñas estan hasheadas por lo que la validacion de login solo se hara desde el back:

-GET(/login): debe enviarse por body los datos de ingreso como un objeto, de acuerdo a la respuesta podran redireccionar si es admin o usuario, y en caso de error mostrarlo:
\_datos de admin correctos= ..........."admin"
\_datos de user correctos = ..........."user"
\_name incorrecto = ..................."Invalid User"
\_name correcto/password incorrecta = ."Invalid Password"
