/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var data = {
  scenes: [
    {
      id: "oriente-station",
      name: "Postaja Oriente",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 4096,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.12678386676067,
          pitch: -0.0076340532339251865,
          rotation: 0,
          target: "electricity-museum",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.00038049728702915786,
          pitch: 0.014985751462495145,
          title: "Postaja Oriente",
          text: "Postaja Oriente je ena najpomembnejših avtobusnih in železniških postaj v mestu. Zasnoval jo je španski arhitekt in inženir Santiago Calatrava, njen ogromni kovinski skelet pa pokriva osem železniških tirov in njihove perone. Dokončana je bila leta 1998 za potrebe Expo’98 in pozneje območja Parque das Nações. V njeni okolici se nahajajo podjetja, storitve, hoteli, bari, zabava ter dobro znani nakupovalni center Vasco da Gama.",
        },
      ],
    },
    {
      id: "electricity-museum",
      name: "Muzej elektrike",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 4096,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.3152585099587224,
          pitch: 0.045251205931975846,
          rotation: 5.497787143782138,
          target: "jeronimos",
        },
      ],
      infoHotspots: [
        {
          yaw: -0.1606464893205768,
          pitch: -0.17433292221669205,
          title: "Kotlovnica",
          text: "V impresivni Kotlovnici v Muzeju elektrike najdemo štiri velike kotle, visoke približno 100 čevljev, z njihovimi pripadajočimi nadzornimi ploščami, zračnimi in gorivnimi krogi, ventilatorji itd. Kotlovnica številka 15 je bila preurejena v muzejski eksponat, zato lahko obiskovalci vstopijo vanjo in odkrijejo njeno strukturo ter notranje komponente: transportni trak, Baileyjeve stene, gorilnike na nafto, cevi za segrevanje vode in podobno.",
        },
      ],
    },
    {
      id: "jeronimos",
      name: "Samostan Jerónimos",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 4096,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.775981148319735,
          pitch: 0.2661802812323746,
          rotation: 0,
          target: "oriente-station",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.5350080558065997,
          pitch: 0.24525106321929435,
          title: "Samostan Jerónimos",
          text: "Križni hodnik samostana Jerónimos je prijeten in umirjen prostor, namenjen spodbujanju molitve in meditacije menihov. Njegova manuelinska dekoracija vključuje verske, pomorske in kraljevske okrasne elemente ter rastlinske motive. Od leta 1985 v severnem traktu pritličja križnega hodnika počiva grob pesnika Fernanda Pesoe.",
        },
      ],
    },
  ],
  name: "Vodič",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: true,
  },
};
