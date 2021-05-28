export default {
  global: {
    componenteFormativo: 'Estudio de caso Import Tech S.A.S.',
    descripcionCurso:
      'Para el desarrollo práctico de trabajo con bases de datos relacionales MySQL nos apalancaremos en la utilización de un caso de estudio el cual se desarrollará y permitirá ir avanzando en la apropiación y uso del SGBB de MySQL.',
    imagenBannerPrincipal: require('@/assets/curso/img_banner.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner_principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Caso de estudio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diseño modelo entidad relación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelo físico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Creando el modelo entidad relación',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático - Instructor',
        centro: 'Centro de Teleinformática y Producción Industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Productora audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Carlos Julián Ramírez Benítez', 'Daniel Ricardo Mutis Gómez'],
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Daniela Muñoz Bedoya',
          'Gilberto Junior Rodríguez Rodríguez',
          'Oleg Litvin',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrión, J. (2017). Diferencia entre datos, información y conocimiento.',
      link:
        'http://iibi.unam.mx/voutssasmt/documentos/dato%20informacion%20conocimiento.pdf',
    },
    {
      referencia:
        'Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros.',
    },
    {
      referencia:
        'Piñeiro, G., J. (2013). Bases de datos relacionales y modelado de datos. Ediciones Paraninfo, S.A.',
    },
    {
      referencia:
        'MySQL AB. (2001). MySQL. Sun Microsystems Oracle Corporation.',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'son las características, rasgos y propiedades de una entidad que toman como valor una instancia particular.',
    },
    {
      termino: 'Datos',
      significado:
        'los datos son la mínima unidad semántica, y se corresponden con elementos primarios de información que por sí solos son irrelevantes como apoyo a la toma de decisiones.',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos procesados y que tienen un significado (relevancia, propósito y contexto) y que, por lo tanto, son de utilidad para quien debe tomar decisiones.',
    },
    {
      termino: 'MySQL',
      significado:
        '<span style="display:none">_</span>My Structured Query Language o Lenguaje de consulta estructurado.',
    },
    {
      termino: 'Registro',
      significado:
        'guardan una serie de características similares o que pueden ser agrupados o clasificados dadas sus características comunes en grupos bien delimitados.',
    },
    {
      termino: 'Relación',
      significado:
        'Vínculo que permite definir una dependencia entre los conjuntos de dos o más entidades.',
    },
    {
      termino: 'SGDB',
      significado: 'sistema de gestión de base de datos.',
    },
    {
      termino: 'Tabla - entidad',
      significado:
        'la entidad es cualquier clase de objeto o conjunto de elementos presentes o no, en un contexto determinado dado por el sistema de información.',
    },
  ],
  //complementario: [],
}
