import { algobg, archbg, cbg, droitbg, elbg, ethbg, inf1, inf2, inf3, inf4, inf5, inf6, inf7, mat1, mathbg, webg } from "../Images/images";

import { useState } from "react";

export const UE= [
    {
      title:'empty start'
  
    },
    {
      title: 'INF 111',
      text: 'Algorithmique',
      img: inf1,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#0cc7f7',
      num:1,
      backdrop:algobg,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
    },
    {
      title: 'INF 121',
      text: 'Architecture',
      img: inf2,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#8c9ba7',
      backdrop:archbg,
      num:2,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
  
  
    },
    {
      title: 'INF 131',
      text: 'Programmation C',
      img: inf3,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#44b7c3',
      backdrop:cbg,
      num:3,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
  
    },
    {
      title: 'INF 141',
      text: 'Ethique',
      img: inf4,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#f9bd32',
      backdrop:ethbg,
      num:4,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
    },
    {
      title: 'INF 151',
      text: 'Electrostatique',
      img: inf5,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#f4f4f4',
      backdrop:elbg,
      num:5,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
    },
    {
      title: 'INF 161',
      text: 'Droit',
      img: inf6,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#1BD575',
      backdrop:droitbg,
      num:6,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
  
    },
    {
      title: 'INF 171',
      text: 'Web Dev',
      img: inf7,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#0cc7f7',
      backdrop:webg,
      num:7,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
    },
    {
      title: 'MAT 121',
      text: 'Analyse I',
      img: mat1,
      obj:'Ici il est question de l\'objectif de cette unité d\'enseignement.',
      couleur:'#ff816e',
      backdrop:mathbg,
      num:8,
      cours:[{
        id:'2022-2023',
        title:'CC & EXAMEN',
        num:1,
      
      },
      {
        id:'2021-2022',
        title:'CC & EXAMEN',
        num:2,
      },
      {
        id:'2020-2021',
        title:'CC & EXAMEN',
        num:3,
      
      },
      {
        id:'2019-2020',
        title:'CC & EXAMEN',
        num:4,
      },
      {
        id:'2018-2019',
        title:'CC & EXAMEN',
        num:5,
      
      }
    
    ]
  
    },
    {
      title:'empty end'
  
    }
  ];

export const Notif_List={
  lu:[{
    message:'ok stores data ok bob u knw me ooooo i dnt knw wht to say ok lets try doing it this way i will just be entering text this way just to have a sample text',
    titre:'infos'
  },
  {
    message:'ok stores data',
    titre:'infos'
  }],
  nonlu:[{
    message:'ok stores data',
    titre:'infos'
  },
  {
    message:'ok stores data',
    titre:'infos'
  }],
}