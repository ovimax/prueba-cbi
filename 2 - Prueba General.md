-----------------------------------------------------
### Pregunta 1:  ---
-----------------------------------------------------

Teniendo en cuenta que tenemos una aplicación web privada que necesita de un usuario
y contraseña para poder trabajar con ella. Un día un cliente nos pide que le creemos
un sistema de Single Sign On para que sus usuarios puedan darse de alta en nuestra
aplicación con su cuenta corporativa. Pongamos que se te asigna a ti la tarea y además
queremos usar SAML para este propósito.

Describe brevemente cómo resolverías este caso y que datos crees que sería necesario
pedir al departamente técnico de este hipotetico cliente.

## Respuesta:
Desde cliente creamos un archivo SAML con las credenciales de usuario (usuario y contraseña).
El archivo los enviamos al sevidor donde se autentifica y envia una respuesta tambien SAML al cliente


-----------------------------------------------------
### Pregunta 2:  ---
-----------------------------------------------------

Teniendo una aplicación de gestión de datos un día se nos plantea que tenemos
que crear una página pública, llamemosla public.domain.com, dónde mostrar parte
de esos datos, los cuales son privados y pertenecen a una empresa, algunos de
ellos son sensibles por lo que deben ser tratados con cuidado. Para complicarnos
un poco la vida nos piden que además las personas puedan darse de alta en esta
página pública validando sus credenciales contra nuestra app de gestión y con
ello se les permite a los usuarios con cuenta (cuenta con permisos muy restringidos)
realizar un par de acciones que resultan en la modificación / añadido de algunos
datos.

Ten en cuenta que nuestra app de gestión tiene un sistema de login de usuarios
para usar la api. La página pública es serverless, estática y está alojada en
otro dominio diferente. Adicionalmente hemos de tener en cuenta que nuestra api
no está preparada para trabajar con otros dominios.

Plantea una solución a este problema y comenta brevemente que cambios crees que
deberíamos hacer en nuestra aplicación de gestión, si crees que debemos hacer
alguno.

## Respuesta:
Creamos un endpoint publico, en el cual los usuarios que se dan de alta, reciben un rol especifico.
En la app privada, se puede crear un middleware para limitar las acciones del nuevo rol