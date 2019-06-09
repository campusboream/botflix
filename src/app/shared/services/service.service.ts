import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  items: Array<any> = [
    {
    title: 'Sin salida',
    year: '2017',
    coincidence: '95 % de coincidencia',
    age: '99+',
    duration: '1h 12 min.',
    tags: {
      tag1: 'comedy',
      tag2: 'Acción contrarreloj',
      tag3: 'Ciencia ficción'
    },
    subtitle: 'Ver temporada 1 ahora',
    sinopsis: 'Peña planea otra operación encubierta para acabar con un miembro clave del cártel de Cali, pero el tiempo para encontrarlo se acaba.',
    cast: {
      cast1: 'Jesse Plemons',
      cast2: 'Crispin Klander',
      cast3: 'Jimmi Simpson'
    },
    genre: {
      genre1: 'Thriller',
      genre2: 'Drama TV',
      genre3: 'Policiaca'
    },
    logo: '../../../assets/images/logo-narcos.webp',
    thumb: '../../../../assets/images/thumb-narcos-1.webp',
    video: '../../../assets/video/trailer-narcos.mp4'
  },
  {
    title: 'Plata o Plomo',
    year: '2017',
    coincidence: '95 % de coincidencia',
    age: '99+',
    duration: '1h 23 min.',
    tags: {
      tag1: 'comedy',
      tag2: 'Acción contrarreloj',
      tag3: 'Ciencia ficción'
    },
    subtitle: 'Ver temporada 1 ahora',
    sinopsis: 'Con la situación política en su contra, Pablo se esconde, pero encuentra la forma de contraatacar. Murphy y Peña consiguen por fin que la CIA los ayude.',
    cast: {
      cast1: 'Jesse Plemons',
      cast2: 'Crispin Klander',
      cast3: 'Jimmi Simpson'
    },
    genre: {
      genre1: 'Thriller',
      genre2: 'Drama TV',
      genre3: 'Policiaca'
    },
    logo: '../../../assets/images/logo-narcos.webp',
    thumb: '../../../../assets/images/thumb-narcos-2.webp',
    video: '../../../assets/video/video_breaking-bad.mp4' 
  },
  {
    title: 'No hay plan',
    year: '2017',
    coincidence: '95 % de coincidencia',
    age: '99+',
    duration: '1h 10 min.',
    tags: {
      tag1: 'comedy',
      tag2: 'Acción contrarreloj',
      tag3: 'Ciencia ficción'
    },
    subtitle: 'Ver temporada 1 ahora',
    sinopsis: 'Preocupado por las filtraciones, Miguel se vuelve contra su personal de seguridad. Pacho toma una decisión sobre su nueva oferta. Peña trata de convencer a una testigo.',
    cast: {
      cast1: 'Jesse Plemons',
      cast2: 'Crispin Klander',
      cast3: 'Jimmi Simpson'
    },
    genre: {
      genre1: 'Thriller',
      genre2: 'Drama TV',
      genre3: 'Policiaca'
    },
    logo: '../../../assets/images/logo-narcos.webp',
    thumb: '../../../../assets/images/thumb-narcos-3.webp',
    video: '../../../assets/video/trailer-narcos.mp4'
  },
  {
    title: 'Guerrilla',
    year: '2016',
    coincidence: '91 % de coincidencia',
    age: '93+',
    duration: '1h 33 min.',
    tags: {
      tag1: 'trhiller',
      tag2: 'Acción policiaca',
      tag3: 'Drogas'
    },
    subtitle: 'Ver temporada 4 ahora',
    sinopsis: 'El presidente Gaviria tiene un trabajo para un antiguo compañero. Las nuevas tácticas del Bloque de Búsqueda preocupan a Pablo, pero también incomodan a Steve y Javier.',
    cast: {
      cast1: 'Keaneu Reaves',
      cast2: 'Joaquín Peñagrande',
      cast3: 'La prima de Joaquín'
    },
    genre: {
      genre1: 'Comedy',
      genre2: 'Drama',
      genre3: 'Fantasy'
    },
    logo: '../../../assets/images/logo-narcos.webp',
    thumb: '../../../../assets/images/thumb-narcos-4.webp',
    video: 'https://www.youtube.com/embed/eHdRMOAT-Lc?start=10'
  }
];


  constructor() { }

  getChapters() {
    return this.items;
}
}
