README - Ejecutar Pruebas de Carga con K6
=========================================

1. Introducción
---------------
Este archivo README proporciona instrucciones sobre cómo ejecutar una prueba de carga utilizando K6.

2. Prerrequisitos
-----------------
Asegúrese de tener K6 instalado en su sistema. Puede descargar e instalar K6 siguiendo las instrucciones en la documentación oficial:
https://k6.io/docs/getting-started/installation/

3. Estructura del Proyecto
--------------------------
- FindPetByID.js: Script de K6 que define la prueba de carga.
- AddANewPetToTheStore.js: Script de K6 que define la prueba de carga.
- UpdateAnExistingPet.js: Script de K6 que define la prueba de carga.
- Readme.txt: Este archivo con instrucciones.

4. Script de Prueba
-------------------
- El script de prueba `FindPetByID.js` está configurado para enviar solicitudes GET a `http://localhost:8080/api/v3/pet/10` con el encabezado `accept: application/xml`. La prueba se ejecuta con 50 usuarios virtuales durante 1 minuto.
- El script de prueba `AddANewPetToTheStore.js` está configurado para enviar solicitudes POST a `http://localhost:8080/api/v3/pet` con los encabezados `Content-Type: application/json` y `accept: application/xml`. La prueba se ejecuta con 100 usuarios virtuales, 500 iteraciones durante 1 minuto.
- El script de prueba `UpdateAnExistingPet.js` está configurado para enviar solicitudes PUT a `http://localhost:8080/api/v3/pet` con los encabezados `Content-Type: application/json` y `accept: application/xml`. La prueba se ejecuta con 100 usuarios virtuales, 500 iteraciones durante 1 minuto.

5. Ejecución de la Prueba
-------------------------
Siga los pasos a continuación para ejecutar la prueba de carga:

1. Abra una terminal o línea de comandos CMD o Command Prompt en Visual Studio Code.
2. Navegue al directorio donde se encuentra los archivos script de pruebas.
3. Ejecute el siguiente comando: 
	- k6.exe run "performance\FindPetByID.js"
	- k6.exe run "performance\AddANewPetToTheStore.js"
	- k6.exe run "performance\UpdateAnExistingPet.js"


6. Resultados de la Prueba
--------------------------
Durante la ejecución de la prueba, K6 mostrará en la terminal los resultados en tiempo real, incluyendo estadísticas como el tiempo de respuesta, la tasa de errores y el número de solicitudes realizadas.

Si desea un reporte WEB con K6, debe setear las variables para el dashboard, estos comandos se lanzan desde la terminal, posteriormente seria lanzar la prueba para que genere el reporte:
set K6_WEB_DASHBOARD=true
set K6_WEB_DASHBOARD_EXPORT=test-report.html


7. Personalización
------------------
Puede personalizar la prueba modificando los archivos que contienen script K6. Algunos ejemplos de personalización incluyen:

- Cambiar el número de usuarios virtuales (opción `vus`).
- Ajustar la duración de la prueba (opción `duration`).
- Modificar la URL o los encabezados de la solicitud.

8. Soporte
----------
Si necesita ayuda adicional, puede consultar la documentación oficial de K6:
https://k6.io/docs/

O contactar con el equipo de soporte de su organización.

¡Gracias por utilizar K6 para sus pruebas de carga!

