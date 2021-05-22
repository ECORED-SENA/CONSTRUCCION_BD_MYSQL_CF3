<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3.texto-azul 1
      .h3 Caso de estudio
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_1_1.titulo-segundo
      .h4 1.1	Diseño modelo entidad relación
    p.my-5 Para el desarrollo del modelo se utilizará la herramienta Draw.io, a la cual pueden acceder en línea o descargar a sus computadoras sin ningún problema toda vez que es de licencia GPL, a través del link.
    .col-lg-4
      a.anexo(:href="obtenerLink('https://app.diagrams.net/')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p <b>Descargar Draw.io</b><br>https://app.diagrams.net/.
    p.my-5 El modelo entidad relación, introducido por Peter Chen en 1976, es el más utilizado para el diseño conceptual de bases de datos; este modelo está formado por un conjunto de conceptos que permiten describir la realidad mediante un conjunto de representaciones gráficas y lingüísticas.
    h5.mb-5 Los siguientes son los elementos a utilizar para representar el modelo:
    .col-lg-8.mx-auto
      img(src="@/assets/curso/tema1/t1-f1.svg")
    p.my-5 A continuación, se ilustra cómo se puede construir el modelo entidad relación con la herramienta propuesta.
    h5.mb-4.text-center Construcción del modelo entidad - relación
    .col-lg-10.mx-auto
      img(src="@/assets/curso/tema1/t1-i1.jpg")
    p.my-5 Como se evidencia en la figura 2, se deben seleccionar los componentes a utilizar y se llevan al área de trabajo donde se crean las entidades con sus respectivos atributos y sus relaciones.
    h5.mb-4.text-center Diseño modelo entidad - relación
    .col-lg-10.mx-auto
      img(src="@/assets/curso/tema1/t1-f2.svg")
    #t_1_2.titulo-segundo.mt-5
      .h4 1.2	Modelo físico
    p.my-5 Para la construcción del modelo de datos físico se utilizará la herramienta MySQL Workbeanch previamente instalada.
    h5.mb-4.text-center Construcción de un nuevo modelo
    .col-lg-10.mx-auto
      img(src="@/assets/curso/tema1/t1-i2.jpg")
    p.my-5 Para crear el modelo físico se hace en el menú principal Archivo (File) y en las opciones del menú se elige la opción New Model.
      br
      | Es importante tener claro cuáles son los tipos de datos disponibles para la creación de la base de datos en MySQL.
    h5.mb-5 ¿Qué es un tipo de dato?
    .row.mb-5.justify-content-between.align-items-start
      .col-lg-3
        img(src="@/assets/curso/tema1/t1-f3.svg")
      .col-lg-8
        p.mb-4 En ciencias de la computación un tipo de dato informático, o simplemente tipo, es un atributo de los datos que indica al ordenador (y/o al programador/programadora) sobre la clase de datos que se va a manejar. Esto incluye imponer restricciones en los datos, como qué valores pueden tomar y qué operaciones se pueden realizar.
        br
        p.mb-4 <b>Los tipos de datos más comunes son:</b>
        ul.lista-ul
          li 
            i.fas.fa-check.me-4.amarillo
            | Números enteros
          li 
            i.fas.fa-check.me-4.amarillo
            | Números con signo (negativos)
          li 
            i.fas.fa-check.me-4.amarillo
            | Números de coma flotante (decimales)
          li 
            i.fas.fa-check.me-4.amarillo
            | Cadenas alfanuméricas (y unicodes)
          li 
            i.fas.fa-check.me-4.amarillo
            | Estados, etc.
    p.mb-5 Un tipo de dato es un espacio en memoria con restricciones. Por ejemplo, el tipo "int" representa, generalmente, un conjunto de enteros de 32 bits, cuyo rango va desde el -2.147.483.648 al 2.147.483.647, así como las operaciones que se pueden realizar con los enteros, como son la suma, la resta, y la multiplicación. Los colores, por su parte, se representan como tres bytes denotando la cantidad de rojo, verde y azul, y una cadena de caracteres representando el nombre del color (en este caso, las operaciones permitidas incluyen la adición y la sustracción, pero no la multiplicación).
    .cajon.color-secundario.p-4.mb-5
      p Este es un concepto propio de la informática y, más específicamente, de los lenguajes de programación, aunque también se encuentra relacionado con nociones similares de la matemática y la lógica.
    .row.mb-5.justify-content-between.align-items-start
      .col-lg-8
        p.mb-4 En un sentido amplio, un tipo de datos define un conjunto de valores y las operaciones sobre esos valores. Casi todos los lenguajes de programación explícitamente incluyen la notación del tipo de datos, aunque lenguajes diferentes pueden usar terminologías diferentes. La mayor parte de los lenguajes de programación permiten al programador definir tipos de datos adicionales, normalmente combinando múltiples elementos de otros tipos y definiendo las operaciones del nuevo tipo de dato.<br><br><b>Por ejemplo,</b> un programador puede crear un nuevo tipo de dato llamado "Persona", contemplando que el dato interpretado como Persona incluya un nombre y una fecha de nacimiento.
      .col-lg-3
        img(src="@/assets/curso/tema1/t1-f4.svg")
    p Un tipo de dato puede ser también visto como una limitación impuesta en la interpretación de los datos en un sistema de tipificación, describiendo la representación, la interpretación y la estructura de los valores u objetos almacenados en la memoria del ordenador. El sistema de tipificación usa información de los tipos de datos para comprobar la verificación de los programas que acceden o manipulan los datos.
    br
    p.mb-5 <b>Los tipos de datos que puede haber en un campo, se pueden agrupar en tres grandes grupos:</b>
    .row.justify-content-between.mb-5.px-5
      .col-lg-3
      .col-lg-2.mx-auto
        img(src="@/assets/curso/tema1/t1-f5.svg").mb-4
        h6.text-center Tipos numéricos
      .col-lg-2.mx-auto
        img(src="@/assets/curso/tema1/t1-f6.svg").mb-4
        h6.text-center Tipos de fecha
      .col-lg-2.mx-auto
        img(src="@/assets/curso/tema1/t1-f7.svg").mb-4
        h6.text-center Tipos de cadena
      .col-lg-3
    h5 Tipos numéricos
    .row.justify-content-between.align-items-center.mb-5
      .col-lg-2
        img(src="@/assets/curso/tema1/t1-f8.svg").pe-5.my-5
      .col-lg-10
        p Existen tipos de datos numéricos, que se pueden dividir en dos grandes grupos, los que están en coma flotante (con decimales) y los que no.
    .row.mb-5
      .col-lg-6
        p.fondo_azul.p-4.mb-4 <b>TinyInt:</b> es un número entero con o sin signo. Con signo el rango de valores válidos va desde -128 a 127. Sin signo, el rango de valores es de 0 a 255.
        p.fondo_azul.p-4.mb-4 <b>Bit o Bool:</b> un número entero que puede ser 0 o 1.
        p.fondo_azul.p-4.mb-4 <b>SmallInt:</b> número entero con o sin signo. Con signo el rango de valores va desde -32768 a 32767. Sin signo, el rango de valores es de 0 a 65535.
        p.fondo_azul.p-4.mb-4 <b>MediumInt:</b> número entero con o sin signo. Con signo el rango de valores va desde -8.388.608 a 8.388.607. Sin signo el rango va desde 0 a16777215.
        p.fondo_azul.p-4.mb-4 <b>Integer, Int:</b> número entero con o sin signo. Con signo el rango de valores va desde -2147483648 a 2147483647. Sin signo el rango va desde 0 a 429.4967.295.
      .col-lg-6
        p.fondo_azul.p-4.mb-4 <b>BigInt:</b> número entero con o sin signo. Con signo el rango de valores va desde -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807. Sin signo el rango va desde 0 a 18.446.744.073.709.551.615.
        p.fondo_azul.p-4.mb-4 <b>Float:</b> número pequeño en coma flotante de precisión simple. Los valores válidos van desde -3.402823466E+38 a -1.175494351E-38, 0 y desde 1.175494351E-38 a 3.402823466E+38.
        p.fondo_azul.p-4.mb-4 <b>xReal, Double:</b> número en coma flotante de precisión doble. Los valores permitidos van desde -1.7976931348623157E+308 a -2.2250738585072014E-308, 0 y desde 2.2250738585072014E-308 a 1.7976931348623157E+308.
        p.fondo_azul.p-4.mb-4 <b>Decimal, Dec, Numeric:</b> número en coma flotante desempaquetado. El número se almacena como una cadena.
    .col-lg-7.mx-auto
      h6.mb-4.text-center Tipo de datos numéricos  
      img(src="@/assets/curso/tema1/t1-f9.svg")
    h5.my-5 Tipos fecha
    .row.justify-content-between.mb-5.align-items-center.mb-5
      .col-lg-2
        img(src="@/assets/curso/tema1/t1-f10.svg").pe-5.my-5
      .col-lg-10
        p A la hora de almacenar fechas, hay que tener en cuenta que MySQL no comprueba de una manera estricta si una fecha es válida o no. Simplemente comprueba que el mes está comprendido entre 0 y 12 y que el día está comprendido entre 0 y 31.
    .row.mb-5
      .col-lg-6
        p.fondo_azul.p-4.mb-4 <b>Date:</b> tipo fecha, almacena una fecha. El rango de valores va desde el 1 de enero del 1001 al 31 de diciembre de 9999. El formato de almacenamiento es de año-mes-día
        p.fondo_azul.p-4.mb-4 <b>DateTime:</b> combinación de fecha y hora. El rango de valores va desde el 1 de enero del 1001 a las 0 horas, 0 minutos y 0 segundos al 31 de diciembre del 9999 a las 23 horas, 59 minutos y 59 segundos. El formato de almacenamiento es de año-mes-dia horas-minutos-segundos.
        p.fondo_azul.p-4.mb-4 <b>TimeStamp:</b> combinación de fecha y hora. El rango va desde el 1 de enero de 1970 al año 2037. El formato de almacenamiento depende del tamaño del campo:
      .col-lg-6
        p.fondo_azul.p-4.mb-4 <b>Time:</b> almacena una hora. El rango de horas va desde - 838 horas, 59 minutos y 59 segundos a 838, 59 minutos y 59 segundos. El formato de almacenamiento es de 'HH:MM: SS'.
        p.fondo_azul.p-4.mb-4 <b>Year:</b> almacena un año. El rango de valores permitidos van desde el año 1901 al año 2155. El campo puede tener tamaño dos o tamaño 4 dependiendo de si se quiere almacenar el año con dos o cuatro dígitos.
    .col-lg-7.mx-auto
      h6.mb-4.text-center Tipo de datos fecha  
      img(src="@/assets/curso/tema1/t1-f11.svg")
    h5.my-5 Tipos cadena
    .row.mb-5.align-items-center.mb-5
      .col-lg-2
        img(src="@/assets/curso/tema1/t1-f12.svg").pe-5
    .row.mb-5
      .col-lg-6
        p.fondo_azul.p-4.mb-4 <b>Char(n):</b> almacena una cadena de longitud fija y podrá contener desde 0 a 255 caracteres.
        p.fondo_azul.p-4.mb-4 <b>VarChar(n):</b> almacena una cadena de longitud variable, podrá contener desde 0 a 255 caracteres.
        p.fondo_azul.p-4.mb-4 Dentro de los tipos de cadena se pueden distinguir otros dos subtipos, los <b>tipos Test</b> y los tipos <b>BLOB (Binary Large Object)</b>.
        p.fondo_azul.p-4.mb-4 La diferencia entre un tipo y otro es el tratamiento que reciben a la hora de realizar ordenamientos y comparaciones. Mientras que el tipo test se ordena sin tener en cuenta las mayúsculas y las minúsculas, el tipo BLOB se ordena teniéndolas en cuenta.
        p.fondo_azul.p-4.mb-4 Los tipos <b>BLOB</b> se utilizan para almacenar datos binarios como pueden ser ficheros.
      .col-lg-6
        p.fondo_azul.p-4.mb-4 <b>TinyText y TinyBlob:</b> columna con una longitud máxima de 255 caracteres.
        p.fondo_azul.p-4.mb-4 <b>Blob y Text:</b> un texto con un máximo de 65.535 caracteres.
        p.fondo_azul.p-4.mb-4 <b>MediumBlob y MediumText:</b> un texto con un máximo de 16.777.215 caracteres.
        p.fondo_azul.p-4.mb-4 <b>LongBlob y LongText:</b> un texto con un máximo de caracteres 4.294.967.295. Hay que tener en cuenta que debido a los protocolos de comunicación los paquetes pueden tener un máximo de 16 Mb.
        p.fondo_azul.p-4.mb-4 <b>Enum:</b> campo que puede tener un único valor de una lista que se especifica. El tipo Enum acepta hasta 65.535 valores distintos.
        p.fondo_azul.p-4.mb-4 <b>Set:</b> un campo que puede contener ninguno, uno o varios valores de una lista. Esta puede tener un máximo de 64 valores.
    .col-lg-9.mx-auto
      h6.mb-4.text-center Tipo de datos cadena  
      img(src="@/assets/curso/tema1/t1-f13.svg")
    h5.my-5 Restricciones y propiedades de los campos
    .row.fondo_azul.p-5.mb-5.tarjeta
      .col-lg-12
        p.mb-5 <b>Primary key.</b> Definiciones y reglas generales
      .col-lg-1
        img(src="@/assets/curso/tema1/t1-f14.svg").mb-5
      .col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-check.me-4.cyan
            p La clave primaria o Primary key, identifica de manera unívoca (única) a cada registro de una tabla.
          li 
            i.fas.fa-check.me-4.cyan
            p El valor que contiene la columna definida como Primary key, debe ser único.
          li 
            i.fas.fa-check.me-4.cyan
            p El valor debe ser Not Null (no permitirá valores nulos).
          li 
            i.fas.fa-check.me-4.cyan
            p Una tabla puede tener más de un campo PK, a la que se le llamará <b>clave compuesta</b>.
          li 
            i.fas.fa-check.me-4.cyan
            p Sea <b>simple o compuesta</b>, cada tabla solo podrá tener una clave primaria (Primary key).
          li
            i.fas.fa-check.me-4.cyan
            p Es decir que solo habrá una única clave primaria de ese tipo. No se podrá crear otra combinación.
    .col-lg-9.mx-auto.mb-5
      h6.mb-4.text-center Ejemplo llave primaria
      img(src="@/assets/curso/tema1/t1-f15.svg")
    .row.fondo_azul.p-5.mb-5.tarjeta
      .col-lg-12
        p.mb-5 <b><i>Foreing key.</i></b> Definiciones y reglas generales
      .col-lg-1
        img(src="@/assets/curso/tema1/t1-f14.svg").mb-5
      .col-lg-10
        ul.lista-ul
          li 
            i.fas.fa-check
            p La clave foránea o <i>Foreign key</i>, debe ser del mismo tipo de dato que su campo relacionado.
          li 
            i.fas.fa-check
            p El valor del campo definido como FK puede ser <i>Null</i>.
          li 
            i.fas.fa-check
            p Una tabla puede tener más de un campo FK.
    .col-lg-9.mx-auto.mb-5
      h6.mb-4.text-center Ejemplo <i>Foreign key</i>
      img(src="@/assets/curso/tema1/t1-f16.svg")
    h5.my-5 Conceptos del modelo entidad relación
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Registros").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Guardan una serie de características similares o que pueden ser agrupados o clasificados dadas sus características comunes en grupos bien delimitados, en términos de abstracción como la extensión de la base de datos. Por ejemplo, es la lista de usuarios de una biblioteca, la lista de productos con sus características, la lista de tipos de documentos y su definición.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/1.svg")
      .row(titulo="Entidad (tabla)").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p La entidad es cualquier clase de objeto o conjunto de elementos presentes o no, en un contexto determinado dado por el sistema de información o las funciones y procesos que se definen en un plan de automatización. Dicho de otra forma, las entidades que constituyen las tablas de la base de datos permiten el almacenamiento de los ejemplares o registros del sistema, quedando recogidos bajo la denominación o título de la tabla o entidad. Por ejemplo, <b>la entidad usuarios</b> guarda los datos personales de los usuarios de la biblioteca, <b>la entidad catálogo</b> registra todos los libros catalogados, <b>la entidad circulación</b> todos los libros prestados y devueltos y así, sucesivamente, con todos los casos.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/2.svg")
      .row(titulo="Atributos - intención").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Son las características, rasgos y propiedades de una entidad, que toman como valor una instancia particular. Es decir, los atributos de una tabla son en realidad sus campos descriptivos, es el predicado que permite definir lo que se dice de un determinado sujeto. Por ejemplo, de una entidad o tabla catálogo, se pueden determinar los atributos título, subtítulo, título paralelo, otras formas del título, autor principal, otras menciones de responsabilidad, edición, mención de edición, editorial, lugar de publicación, fecha de publicación.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/3.svg")
      .row(titulo="Relación").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Vínculo que permite definir una dependencia entre los conjuntos de dos o más entidades. Esta es la relación entre la información contenida en los registros de varias tablas. Por ejemplo, los usuarios suelen clasificarse según una lista de tipos de usuarios, ya sean profesores, alumnos o investigadores. De esta forma, es posible emitir la relación entre el usuario Jorge Martínez, como alumno, y Enrique Valtierra, como profesor. Las relaciones son definidas de forma natural en un diagrama relacional para expresar un modelo cognitivo que dará lugar posteriormente a las interrelaciones de las entidades.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/4.svg")
      .row(titulo="Interrelación").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Las interrelaciones las constituyen los vínculos entre entidades, de forma tal que representan las relaciones definidas en el esquema relacional de forma efectiva. Esto no es solo la relación de los registros, sino de sus tablas y de las características de la interrelación entre las entidades, a través de un campo clave que actúa como código de identificación y referencia para relacionar (es decir, como nexo de unión y articulación de la relación). Los tipos de interrelaciones entre entidades o tablas se realizan aplicando las reglas de cardinalidad y modalidad.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/5.svg")
      .row(titulo="Entidades fuertes").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Las constituyen las tablas principales de la base de datos que contienen los registros principales del sistema de información y que requieren de entidades o tablas auxiliares para completar su descripción o información. Por ejemplo, la tabla usuario es una entidad fuerte en relación a la tabla tipos de usuarios, que es una entidad débil dada su condición auxiliar para clasificar a los usuarios registrados en la biblioteca.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/6.svg")
      .row(titulo="Entidades débiles").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Son entidades débiles a las tablas auxiliares de una tabla principal a la que completan o complementan con la información de sus registros relacionados. Por ejemplo, también son consideradas entidades débiles las tablas intermedias que sirven para compartir información de varias tablas principales.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/7.svg")
      .row(titulo="Restricciones del MER").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          ul.lista-ul
            li 
              i.fas.fa-check
              | Un único constructor (la relación).
            li 
              i.fas.fa-check
              p La relación es un conjunto (en el sentido matemático) y, por lo tanto:
            li.pb-0
              ul
                li
                  | ●	No pueden existir tuplas duplicadas.
                li 
                  | ●	Toda relación debe tener una llave primaria 1.
                li 
                  | ●	No hay noción de orden entre las tuplas o entre los atributos.
                li 
                  | ●	Toda relación debe tener una llave primaria 1.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/8.svg")
      .row(titulo="Llaves primarias").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          ul.lista-ul
            li 
              i.fas.fa-check
              p <b>Llave:</b> atributo o conjunto de atributos cuyo valor es único y diferente para cada tupla, una tabla puede poseer más de una llave.
            li 
              i.fas.fa-check
              p <b>Llave candidata:</b> es una llave tal que:<br>Es única (i.e., es una llave).
            li 
              i.fas.fa-check
              p <b>Es irreducible:</b> no se pueden eliminar componentes de la llave sin destruir la unicidad. 
            li 
              i.fas.fa-check
              p Las llaves no se identifican dependiendo del estado o la instancia de la base de datos.
            li 
              i.fas.fa-check
              p <b>Llave compuesta:</b> es una llave conformada por más de un atributo.
            li 
              i.fas.fa-check
              p <b>Llave primaria:</b> llave candidata que se escoge en el modelo para identificar cada tupla.
            li 
              i.fas.fa-check
              p <b>Llaves alternas:</b> las llaves candidatas que no fueron escogidas como llave primaria.
            li 
              i.fas.fa-check
              p <b>Llave foránea:</b> atributo(s) de una relación r1 que hacen referencia a otra relación r2. Las FK permiten representar relaciones entre las entidades. r1 y r2 pueden ser la misma relación. Por ejemplo: personas (cc, nombre, apellido, teléfono, dirección, ciu_id) ciudades (id, nombre).
          p El atributo ciu_id en personas es una llave foránea que referencia al atributo id en la tabla ciudades.              
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/9.svg")
      .row(titulo="Integridad referencial").px-4.justify-content-between.align-items-center
        .col-lg-9.px-5.mb-5
          p Se denomina integridad referencial al tipo de interrelación que se produce entre tablas mediante un campo clave que deberá contener la cadena alfanumérica exacta al identificador de la tabla auxiliar para poder realizar la relación entre los registros. En caso contrario no se produce la relación. Además, se trata de un mecanismo que evita duplicidades e incorrecciones, pues la propiedad de integridad referencial conmina a que los datos de un usuario, además de su identificador ID, sean distintos al de los demás. Dicho de otra forma, no pueden existir dos registros iguales con los mismos datos.
        .col-lg-3.px-5.mb-5
          img(src="@/assets/curso/tema1/10.svg")
    #t_1_2.titulo-segundo.mt-5
      .h4 1.3 Creando el modelo entidad relación
    p.mb-5 Desde Workbeanch una vez creado el nuevo modelo se puede empezar a agregar los objetos que se necesiten.
    .col-lg-9.mx-auto.mb-5
      h6.mb-4.text-center Agregando un nuevo diagrama
      img(src="@/assets/curso/tema1/t1-i3.jpg")
    .col-lg-9.mx-auto.mb-5
      h6.mb-4.text-center Creación entidad o tabla
      img(src="@/assets/curso/tema1/t1-i4.jpg")
    p.mb-5 El siguiente paso es crear las relaciones tal como se muestra en la figura siguiente:
    .col-lg-9.mx-auto.mb-5
      h6.mb-4.text-center Creación de relaciones entre tablas
      img(src="@/assets/curso/tema1/t1-i5.jpg")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
