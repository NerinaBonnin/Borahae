const albumCoverImages = {
  "2-cool-4-skool": "imagenes/albumnes/grupal/2-cool-4-skool.webp",
  "o-rul8-2": "imagenes/albumnes/grupal/o-rul8-2.webp",
  "skool-luv-affair": "imagenes/albumnes/grupal/skool-luv-affair.webp",
  "dark-wild": "imagenes/albumnes/grupal/dark-wild.webp",
  "hyyh-pt1": "imagenes/albumnes/grupal/hyyh-pt1.webp",
  "hyyh-pt2": "imagenes/albumnes/grupal/hyyh-pt2.webp",
  "young-forever": "imagenes/albumnes/grupal/young-forever.webp",
  "wings": "imagenes/albumnes/grupal/wings.webp",
  "you-never-walk-alone": "imagenes/albumnes/grupal/you-never-walk-alone.webp",
  "ly-her": "imagenes/albumnes/grupal/love-yourself-her.webp",
  "fake-love": "imagenes/albumnes/grupal/fake-loveairplane-pt.2.webp",
  "ly-tear": "imagenes/albumnes/grupal/love-yourself-tear.webp",
  "ly-answer": "imagenes/albumnes/grupal/love-yourself-answer.webp",
  "face-yourself": "imagenes/albumnes/grupal/face-yourself.webp",
  "mots-persona": "imagenes/albumnes/grupal/mots-persona.webp",
  "bts-world": "imagenes/albumnes/grupal/bts-world.webp",
  "lights-bwl": "imagenes/albumnes/grupal/lights-bwl.webp",
  "mots": "imagenes/albumnes/grupal/mots-7.webp",
  "dynamite": "imagenes/albumnes/grupal/dynamite.webp",
  "be": "imagenes/albumnes/grupal/be.webp",
  "butter": "imagenes/albumnes/grupal/butter.webp",
  "bts-the-best": "imagenes/albumnes/grupal/bts-the-best.webp",
  "proof": "imagenes/albumnes/grupal/proof.webp",
  "arirang": "imagenes/albumnes/grupal/arirang.webp",

};

const soloAlbumCovers = {
  "rm-mix": "imagenes/albumnes/solista/rm-mix.webp",
  "agust-d": "imagenes/albumnes/solista/agust-d.webp",
  "hope-world": "imagenes/albumnes/solista/hope-world.webp",
  "mono": "imagenes/albumnes/solista/mono.webp",
  "D-2": "imagenes/albumnes/solista/d-2.webp",
  "jack-in-the-box": "imagenes/albumnes/solista/jack-in-the-box.webp",
  "the-astronaut": "imagenes/albumnes/solista/the-astronaut.webp",
  "indigo": "imagenes/albumnes/solista/indigo.webp",
  "face": "imagenes/albumnes/solista/face.webp",
  "d-day": "imagenes/albumnes/solista/d-day.webp",
  "layover": "imagenes/albumnes/solista/layover.webp",
  "golden": "imagenes/albumnes/solista/golden.webp",
  "hope-on-street": "imagenes/albumnes/solista/hope-on-street.webp",
  "happy": "imagenes/albumnes/solista/Jin-Happy.webp",
  "right-place": "imagenes/albumnes/solista/right-place.webp",
  "Muse": "imagenes/albumnes/solista/Muse-Jimin.webp",
 
};

const memberCardPhotos = {
  "RM": "imagenes/miembros/Rm.webp",
  "Jin": "imagenes/miembros/Jin.webp",
  "Suga": "imagenes/miembros/Suga.webp",
  "J-Hope": "imagenes/miembros/J-Hope.webp",
  "Jimin": "imagenes/miembros/Jimin.webp",
  "V": "imagenes/miembros/V.webp",
  "Jungkook": "imagenes/miembros/Jungkook.webp",
};

const memberModalPhotos = {
  "RM": "imagenes/miembros/modal-miembros/rm-fav.webp",
  "Jin": "imagenes/miembros/modal-miembros/jin-fav.webp",
  "Suga": "imagenes/miembros/modal-miembros/suga-fav.webp",
  "J-Hope": "imagenes/miembros/modal-miembros/jhope-fav.webp",
  "Jimin": "imagenes/miembros/modal-miembros/jimin-fav.webp",
  "V": "imagenes/miembros/modal-miembros/v-fav.webp",
  "Jungkook": "imagenes/miembros/modal-miembros/jungkook-fav.webp",
};

// ─── DATA ───────────────────────────────────────────────────────────────────

const membersData = {
  'RM':{ 
    role:'Líder · Rapero Principal', 
    color:'linear-gradient(135deg,#C9B8B0,#9E8A82)', 
    bio:'Kim Namjoon, conocido como RM, es el líder y rapero principal de BTS. Aprendió inglés de forma autodidacta y es el principal comunicador del grupo en el exterior, además de ser reconocido como artista y poeta solista. Estudió arte y filosofía, lo que se refleja frecuentemente en sus letras.', 
    facts:{
      'Nombre real':'Kim Namjoon',
      'Nacimiento':'12 sep, 1994',
      'Origen':'Ilsan, Corea del Sur',
      'Solista':'Indigo (2022)'}},
  
  'Jin':{ 
    role:'Vocalista', 
    color:'linear-gradient(135deg,#B8CDD6,#8AADB8)', 
    bio:'Kim Seokjin, conocido como Jin, es el integrante mayor de BTS. Reconocido por su voz clara y distintiva, se hizo famoso mundialmente tanto por su canto como por su cálida y divertida personalidad. Lanzó su álbum solista "Happy" en 2024.', 
    facts:{
      'Nombre real':'Kim Seokjin',
      'Nacimiento':'4 dic, 1992',
      'Origen':'Gwacheon, Corea del Sur',
      'Solista':'Happy (2024)'}},
  
  'Suga':{ 
    role:'Rapero · Productor',
     color:'linear-gradient(135deg,#D4A5A0,#C07870)', 
     bio:'Min Yoongi, conocido como Suga (y Agust D como solista), es el rapero principal y uno de los productores clave de BTS. Profundamente introspectivo, habló abiertamente sobre sus luchas con la salud mental, resonando con millones en todo el mundo.', 
     facts:{
      'Nombre real':'Min Yoongi',
      'Nacimiento':'9 mar, 1993',
      'Origen':'Daegu, Corea del Sur',
      'Solista':'D-Day (2023)'}},
  
  'J-Hope':{ 
    role:'Rapero · Bailarín Principal',
    color:'linear-gradient(135deg,#C5C9B5,#9EA38A)', 
    bio:'Jung Hoseok, conocido como J-Hope, es el bailarín principal y rapero de BTS. Conocido por su energía brillante, fue el primer integrante en headlinear un gran festival en EE.UU., actuando en Lollapalooza 2022.', 
    facts:{
      'Nombre real':'Jung Hoseok',
      'Nacimiento':'18 feb, 1994',
      'Origen':'Gwangju, Corea del Sur',
      'Solista':'Jack In The Box (2022)'}},
  
  'Jimin':{ 
    role:'Vocalista Principal · Bailarín Principal', 
    color:'linear-gradient(135deg,#C4B8D4,#9A8AB0)', 
    bio:'Park Jimin es conocido por sus emotivas dotes vocales y su baile fluido. Se formó en danza contemporánea antes de unirse a BTS. Su "Like Crazy" fue el primer single solista coreano en alcanzar el #1 en el Billboard Hot 100.', 
    facts:{
      'Nombre real':'Park Jimin',
      'Nacimiento':'13 oct, 1995',
      'Origen':'Busan, Corea del Sur','Solista':'FACE (2023)'}},
  
  'V':{ 
    role:'Vocalista', 
    color:'linear-gradient(135deg,#D4C5A0,#B0A07A)', 
    bio:'Kim Taehyung, conocido como V, es admirado por su profunda voz de barítono y su pasión por el arte. Su álbum Layover fusionó jazz y R&B con una sensibilidad única, mostrando su visión artística independiente.', 
    facts:{
      'Nombre real':'Kim Taehyung',
      'Nacimiento':'30 dic, 1995',
      'Origen':'Daegu, Corea del Sur',
      'Solista':'Layover (2023)'}},
  
  'Jungkook':{ 
    role:'Vocalista Principal · Maknae', 
    color:'linear-gradient(135deg,#B8D4C8,#8AB0A0)', 
    bio:'Jeon Jungkook, el menor (maknae) de BTS, es el vocalista principal. Apodado el "Golden Maknae" por su versatilidad, su álbum Golden generó múltiples éxitos globales, incluyendo "Standing Next to You".', 
    facts:{
      'Nombre real':'Jeon Jungkook',
      'Nacimiento':'1 sep, 1997',
      'Origen':'Busan, Corea del Sur',
      'Solista':'Golden (2023)'}},
};

const groupAlbums = {
  '2-cool-4-skool':{ 
    title:'2 Cool 4 Skool', 
    type:'Single Álbum Debut', 
    gradient:'linear-gradient(135deg,#2a2a2a,#555)', 
    meta:{
      'Lanzamiento':'13 jun, 2013',
      'Sello':'Big Hit Ent.',
      'Canciones':'7',
      'Single':'No More Dream'}, 
    story:'El disco de debut de BTS. Con "No More Dream" el grupo desafió las expectativas de la sociedad coreana sobre los jóvenes. Un comienzo crudo y lleno de actitud que nadie olvidará.', 
    tracks:[
      {n:1,name:'Intro: 2 Cool 4 Skool',dur:'1:03',sp:'https://open.spotify.com/search/BTS Intro 2 Cool 4 Skool'},
      {n:2,name:'We Are Bulletproof Pt.2',dur:'3:27',sp:'https://open.spotify.com/search/BTS We Are Bulletproof Pt 2'},
      {n:3,name:'Skit: Circle Room Talk',dur:'2:01',sp:'https://open.spotify.com/search/BTS Skit Circle Room Talk'},
      {n:4,name:'No More Dream',dur:'3:42',sp:'https://open.spotify.com/search/BTS No More Dream'},
      {n:5,name:'Interlude',dur:'1:02',sp:'https://open.spotify.com/search/BTS Interlude 2013'},
      {n:6,name:'Like',dur:'3:24',sp:'https://open.spotify.com/search/BTS Like 2013'},
      {n:7,name:'Outro: Circle Room Cypher',dur:'2:12',sp:'https://open.spotify.com/search/BTS Outro Circle Room Cypher'}]},
  
  'o-rul8-2':{ 
    title:'O!RUL8,2?', 
    type:'1er Mini Álbum', 
    gradient:'linear-gradient(135deg,#8B0000,#cc0000)', 
    meta:{
      'Lanzamiento':'11 sep, 2013',
      'Sello':'Big Hit Ent.',
      'Canciones':'10',
      'Single':'N.O'}, 
    story:'El primer mini álbum de BTS. "N.O" desafía el sistema educativo coreano y la presión que sufren los jóvenes. Una declaración de intenciones brillante.', 
    tracks:[
      {n:1,name:'Intro: O!RUL8,2?',dur:'1:12',sp:'https://open.spotify.com/search/BTS Intro O RUL8 2'},
      {n:2,name:'N.O',dur:'3:37',sp:'https://open.spotify.com/intl-es/track/7JosxtkCqIQieNWXA2Dj3v?si=0759a21e58974435 NO'},
      {n:3,name:'We On',dur:'3:29',sp:'https://open.spotify.com/search/BTS We On'},
      {n:4,name:'Skit: R U Happy Now?',dur:'2:28',sp:'https://open.spotify.com/intl-es/track/53XrsilgguJmmsEtDsj0yY?si=2cffbf6e1f6649ce Skit: R U Happy Now?'},
      {n:5,name:'If I Ruled The World',dur:'4:07',sp:'https://open.spotify.com/intl-es/track/4bLtrrVDspeDNSaHGGMQkB?si=321c38e5e7ff4de3 If I Ruled The World'},
      {n:6,name:'Coffee',dur:'4:20',sp:'https://open.spotify.com/intl-es/track/4eqHEzFsCCiGALC1MHbqnU?si=8a89bad6ed414407 Coffee'},
      {n:7,name:'BTS Cypher Pt.1',dur:'2:11',sp:'https://open.spotify.com/intl-es/track/3KkbZok84es6JqI5aiLj1g?si=ecfdb3ef492540a4 BTS Cypher Pt.1'},
      {n:8,name:'Attack On Bangtan',dur:'4:06',sp:'https://open.spotify.com/intl-es/track/06PapYCtVDlprJPgGELabn?si=34d9b48e842d41fa Attack On Bangtan'},
      {n:9,name:'Paldogangsan',dur:'3:25',sp:'https://open.spotify.com/intl-es/track/3VlYMpSmYooLpzLiRBBfbX?si=b7ae22e6aaa54c21 Paldogangsan'},
      {n:10,name:'Outro: Luv In Skool',dur:'1:26',sp:'https://open.spotify.com/intl-es/track/2ZiVvIvwAwNRL4dUO3TaF6?si=0d3f923376ee4fff Outro: Luv In Skool'}]},
  
  'skool-luv-affair':{ 
    title:'Skool Luv Affair', 
    type:'2do Mini Álbum', 
    gradient:'linear-gradient(135deg,#2d4a2d,#4a7a4a)',
    meta:{
      'Lanzamiento':'12 feb, 2014',
      'Sello':'Big Hit Ent.',
      'Canciones':'10',
      'Single':'Boy in Luv'}, 
    story:'La era Skool concluye con este mini álbum. "Boy in Luv" y "Spine Breaker" muestran a BTS en su etapa más desenfadada, explorando el amor desde la perspectiva de jóvenes irreverentes.', 
    tracks:[
      {n:1,name:'Intro: Skool Luv Affair',dur:'1:12',sp:'https://open.spotify.com/search/BTS Intro Skool Luv Affair'},
      {n:2,name:'Boy In Luv',dur:'3:53',sp:'https://open.spotify.com/search/BTS Boy In Luv'},
      {n:3,name:'Skit: Soulmate',dur:'1:32',sp:'https://open.spotify.com/search/BTS Skit: Soulmate'},
      {n:4,name:'Where You From',dur:'4:00',sp:'https://open.spotify.com/intl-es/track/0nZaV8LwxHeg8TqFy193IL?si=f7295b9363d544a3 Where You From'},
      {n:5,name:'Just One Day',dur:'3:59',sp:'https://open.spotify.com/intl-es/track/6t7WriKgVszATnrdBKSUAf?si=a1a3be14b14f4fc7 Just One Day'},
      {n:6,name:'Tomorrow',dur:'4:21',sp:'https://open.spotify.com/intl-es/track/0JkTVcN5kilfMztDb3bKZk?si=aa4dbdf9997d44f6 Tomorrow'},
      {n:7,name:'BTS Cypher Pt.2: Triptych',dur:'4:48',sp:'https://open.spotify.com/intl-es/track/41eoHn3yTDYMV9hFn50ef4?si=74f3e1720ab44b5a BTS Cypher Pt.2: Triptych'},
      {n:8,name:'Spine Breaker',dur:'3:58',sp:'https://open.spotify.com/intl-es/track/0F3Dpp18yIxIm7XRmn0LBj?si=404c05c2a89e4cd5 Spine Breaker'},
      {n:9,name:'JUMP',dur:'3:56',sp:'https://open.spotify.com/intl-es/track/1jZZm43y7RPuwjJQ5LrGHe?si=73805a32f5ee4389 JUMP'},
      {n:10,name:'Outro: Prupose',dur:'2:02',sp:'https://open.spotify.com/intl-es/track/3x0SuB95K0XewiAKwNEiMZ?si=4b487f9081d94c40 Outro: Prupose'}]},
  
  'dark-wild':{ 
    title:'Dark & Wild', 
    type:'1er Álbum de Estudio', 
    gradient:'linear-gradient(135deg,#3C2F2A,#6B4E43)', 
    meta:{
      'Lanzamiento':'20 ago, 2014',
      'Sello':'Big Hit Ent.',
      'Canciones':'14',
      'Single':'Danger'}, 
    story:'Dark & Wild fue el primer álbum de estudio completo de BTS. Dividido entre la rabia y la pasión, estableció su identidad como artistas que no temían expresar vulnerabilidad y agresividad a la vez.', 
    tracks:[
      {n:1,name:'Intro: What Am I to You',dur:'2:45',sp:'https://open.spotify.com/intl-es/track/3HhgGvmDKx13uRTkXYfcDw?si=a502d71ee9254f01 Intro: What Am I to You'},
      {n:2,name:'Danger',dur:'4:05',sp:'https://open.spotify.com/intl-es/track/0zzRxtfO5FGxKdqq4OKmlw?si=35ff795fe67d4bf1 Danger'},
      {n:3,name:'War of Hormone',dur:'4:25',sp:'https://open.spotify.com/intl-es/track/29SjtKzBoJDgyIBusHylIS?si=29db1b94ebc94380 War of Hormone'},
      {n:4,name:'Hip Hop Phile',dur:'4:17',sp:'https://open.spotify.com/intl-es/track/4c9XojqJDu7KNCh8GmNbj5?si=7fce0e1f64294928 Hip Hop Phile'},
      {n:5,name:'Let Me Know',dur:'4:14',sp:'https://open.spotify.com/intl-es/track/2uqzfXB7NlBnhQd04W7HaH?si=57dcb401a11c45bd Let Me Know'},
      {n:6,name:'Rain',dur:'4:24',sp:'https://open.spotify.com/intl-es/track/6Jr2GutTFyfvAzGA36R2Uj?si=278fc62dc68347ba Rain'},
      {n:7,name:'BTS Cypher Pt.3: KILLER',feat: 'Supreme Boi',dur:'4:27',sp:'https://open.spotify.com/intl-es/track/5OlieB5VdsOMuBuCtllXGW?si=1bf635fafe624232 BTS Cypher Pt.3: KILLER'},
      {n:8,name:'Interlude: What Are You Doing Now',dur:'0:41',sp:'https://open.spotify.com/intl-es/track/6w5nte2isfv5QLImckFD8a?si=a7d06d4e3d3f4453 Interlude: What Are You Doing Now'},
      {n:9,name:'Could You Turn off Your Cell Phone',dur:'3:54',sp:'https://open.spotify.com/intl-es/track/022wInIMcMtWRqkcpy7WwO?si=a87cc9f185a545ba Could You Turn off Your Cell Phone'},
      {n:10,name:'Embarrassed',dur:'4:01',sp:'https://open.spotify.com/intl-es/track/3eSPLTR9JtKiT1X4sAkTg8?si=5b6fae3eb0d14348 Embarrassed'},
      {n:11,name:'24/7=Heaven',dur:'3:46',sp:'https://open.spotify.com/intl-es/track/17SBD4aDKo9ZeahcQJ6j72?si=8f43c67da78147f9 24/7=Heaven'},
      {n:12,name:'Look Here',dur:'3:38',sp:'https://open.spotify.com/intl-es/track/0x4cMbCLC6L7aJQs3EiPaZ?si=a0df150375bf454a Look Here'},
      {n:13,name:'So 4 more',dur:'3:55',sp:'https://open.spotify.com/intl-es/track/5EdwOTiD4Vz7xEoB7jt8En?si=2c897473f15d47e9 So 4 more'},
      {n:14,name:'Outro: Do You Think It Makes Sense',dur:'2:52',sp:'https://open.spotify.com/intl-es/track/0I4CicY6MftmDgdd76LXss?si=f0a1cf66c4994ae3 Outro: Do You Think It Makes Sense'}]},
  
  'hyyh-pt1':{ 
    title:'화양연화 Pt.1', 
    type:'3er Mini Álbum', 
    gradient:'linear-gradient(135deg,#e8c4c4,#c4a0a0)',
    meta:{
      'Lanzamiento':'29 abr, 2015',
      'Sello':'Big Hit Ent.',
      'Canciones':'9',
      'Single':'I Need U'}, 
    story:'"I Need U" marcó un antes y un después. Con este EP comienza el universo narrativo de BTS. Las flores de cerezo, el fuego y la juventud efímera se volvieron símbolos eternos.', 
    tracks:[
      {n:1,name:'Intro: The Most Beautiful Moment In Life',dur:'2:03',sp:'https://open.spotify.com/intl-es/track/7HhZAKSvFWz4bT5jsZLPeq?si=4a5572a61c66443d Intro: The Most Beautiful Moment In Life'},
      {n:2,name:'I Need U',dur:'3:30',sp:'https://open.spotify.com/intl-es/track/3wQnyXNFXNUEOBt1pb4urq?si=475f1d7a563f4baf I Need U'},
      {n:3,name:'Hold Me Tight',dur:'4:34',sp:'https://open.spotify.com/intl-es/track/2SKBwYW23iHoB7CrYSeyC9?si=7e432fe158634585 Hold Me Tight'},
      {n:4,name:'Skit: Expectation!',dur:'2:27',sp:'https://open.spotify.com/intl-es/track/2giNwwft9s8E5Or8N0olgc?si=6c87d03f3c4f41c2 Skit: Expectation!'},
      {n:5,name:'Dope',dur:'4:00',sp:'https://open.spotify.com/intl-es/track/7jPCPDYoiaKeK7cgNGpIzq?si=5361ef437a6e4199 Dope'},
      {n:6,name:'Boyz whit Fun',dur:'4:04',sp:'https://open.spotify.com/intl-es/track/1sz4drpDPpHVrPUgnXGaNn?si=c7bb50dca72f4731 Boyz whit Fun'},
      {n:7,name:'Converse High',dur:'3:29',sp:'https://open.spotify.com/intl-es/track/6ZITsss1URNOIKhniylpBP?si=c6f716192e0a49a0 Converse High'},
      {n:8,name:'Moving On',dur:'4:52',sp:'https://open.spotify.com/intl-es/track/0jo4304s0u51JHHCv7it9K?si=fa34ea33b247496d Moving On'},
      {n:9,name:'Outro: Love is Not Over',dur:'2:23',sp:'https://open.spotify.com/intl-es/track/0hwev90tfswBoZmgKnJ9F8?si=61e4035eeffd4785 Outro Love is Not Over'}]},
  
  'hyyh-pt2':{ 
    title:'화양연화 Pt.2', 
    type:'4to Mini Álbum', 
    gradient:'linear-gradient(135deg,#a8d8ea,#7ab8d0)', 
    meta:{
      'Lanzamiento':'30 nov, 2015',
      'Sello':'Big Hit Ent.',
      'Canciones':'9',
      'Single':'Run'}, 
    story:'"Run" profundizó el universo narrativo. Con un videoclip cinematográfico y letras sobre la fugacidad de la juventud, BTS consolidó una era que quedará en la historia del K-pop.', 
    tracks:[
      {n:1,name:'Intro: Never Mind',feat:'Suga',dur:'2:27',sp:'https://open.spotify.com/search/BTS Intro Never Mind'},
      {n:2,name:'Run',dur:'3:56',sp:'https://open.spotify.com/intl-es/track/3G1aAxWS2Nd17FQs4PWV6X?si=b2735e9daa744b34 Run'},
      {n:3,name:'Butterfly',dur:'5:02',sp:'https://open.spotify.com/search/BTS Butterfly'},
      {n:4,name:'Whalien 52',dur:'3:59',sp:'https://open.spotify.com/search/BTS Whalien 52'},
      {n:5,name:'Ma City',dur:'3:47',sp:'https://open.spotify.com/search/BTS Ma City'},
      {n:6,name:'Silver Spoon',dur:'3:24',sp:'https://open.spotify.com/search/BTS Silver Spoon'},
      {n:7,name:'Skit: One night in a strange city',dur:'4:23',sp:'https://open.spotify.com/intl-es/track/0DaHIESJEC4d0RRpwbgcau?si=4fc74802952a4f19 Skit: One night in a strange city'},
      {n:8,name:'Autumn Leaves',dur:'4:27',sp:'https://open.spotify.com/search/BTS Autumn Leaves'},
      {n:9,name:'Outro: House Of Cards',dur:'2:57',sp:'https://open.spotify.com/intl-es/track/2cy3eWaTBoOFJwtFMR6jKb?si=2427d33fcc504e9a Outro: House Of Cards'}]},
  
  'young-forever':{ 
    title:'화양연화 Young Forever', 
    type:'Álbum Especial', 
    gradient:'linear-gradient(135deg,#f5e642,#e8c830)', 
    meta:{
      'Lanzamiento':'2 may, 2016',
      'Sello':'Big Hit Ent.',
      'Canciones':'23',
      'Singles':'Young Forever / Fire'}, 
    story:'La compilación definitiva de la era HYYH con "Fire" y "Young Forever". Un himno generacional que cerró la era más emotiva de BTS.', 
    tracks:[
      {n:1,name:'Intro: The Most Beautiful Moment In Life',dur:'2:04',sp:'https://open.spotify.com/intl-es/track/2C4AmTAKoJQgfMDXFasXcY?si=84ee084ef48e441c Intro: The Most Beautiful Moment In Life'},
      {n:2,name:'I NEED U',dur:'3:30',sp:'https://open.spotify.com/intl-es/track/6EWoLZ6n26bF3Cl9Hq3pqv?si=9bdb220bad614251 I NEED U'},
      {n:3,name:'Hold Me Tight',dur:'4:33',sp:'https://open.spotify.com/intl-es/track/7gnIQ7K1TBbIvhVrR4c4gI?si=e3eafd7cd62c45c7 Hold Me Tight'},
      {n:4,name:'Autumn Leaves',dur:'4:27',sp:'https://open.spotify.com/intl-es/track/0S6rA2IKknGGsyZNEkwRJB?si=171cbaee34494fa0 Autumn Leaves'},
      {n:5,name:'Butterfly (Prologue Mix)',dur:'4:55',sp:'https://open.spotify.com/intl-es/track/0XwvxY5yMRI7vh55eBRe3B?si=ca8b056ca7ae4bd7 Butterfly (Prologue Mix)'},
      {n:6,name:'RUN',dur:'3:56',sp:'https://open.spotify.com/intl-es/track/0RElgFnZjIZ0hLlO4WY14R?si=551516adbbea4a91 RUN'},
      {n:7,name:'Ma City',dur:'4:16',sp:'https://open.spotify.com/intl-es/track/612T32kWgsXgsJ5gl8KXpN?si=f76fd006c0d54c0f Ma City'},
      {n:8,name:'Silver Spoon',dur:'3:53',sp:'https://open.spotify.com/intl-es/track/5PRJlVG1c2JNa85mFoGARM?si=ee7cb07a0ba545ed Silver Spoon'},
      {n:9,name:'Dope',dur:'4:00',sp:'https://open.spotify.com/intl-es/track/4o3Ao6wY5fbJR32fQKabfQ?si=f04ac13350484c98 Dope'},
      {n:10,name:'Burning Up (Fire)',dur:'3:23',sp:'https://open.spotify.com/intl-es/track/0aE3V0zgSD2YwkEHW42gxG?si=2a89580b69d94733 Burning Up (Fire)'},
      {n:11,name:'Save ME',dur:'3:16',sp:'https://open.spotify.com/intl-es/track/7bxGcILuAjkZzaveU28ZJS?si=2a61e339cdd34b6b Save ME'},
      {n:12,name:'EPILOGUE: Young Forever',dur:'2:51',sp:'https://open.spotify.com/intl-es/track/6BskTMfDjXVzeqQHOau5Vi?si=9115c0f9224944d2 EPILOGUE: Young Forever'},
      {n:13,name:'Converse High',dur:'3:30',sp:'https://open.spotify.com/intl-es/track/4XtvJ78i5yI5QigVHuxWZt?si=06ce1d48421343e4 Converse High'},
      {n:14,name:'Moving On',dur:'4:52',sp:'https://open.spotify.com/intl-es/track/7j8YcE2SKZoLkeLL0qMvkH?si=aae073eb039e442f Moving On'},
      {n:15,name:'Whalien 52',dur:'4:03',sp:'https://open.spotify.com/intl-es/track/2HMVg8AqrijDGKu0U5bVNH?si=709272ee81924e13 Whalien 52'},
      {n:16,name:'Butterfly',dur:'4:00',sp:'https://open.spotify.com/intl-es/track/2QP1vvLPtAVOVAFabpqypA?si=4ff5d87962ee4e0d Butterfly'},
      {n:17,name:'House Of Cards (Full Length Edition)',dur:'3:46',sp:'https://open.spotify.com/intl-es/track/6S2gYweMmT6xygVh5q3QLa?si=e929226d9a2340bc House Of Cards (Full Length Edition)'},
      {n:18,name:'Love Is Not Over (Full Length Edition)',dur:'3:41',sp:'https://open.spotify.com/intl-es/track/12MGUs7yIus6sU09ekZMjw?si=70e5466a3cef46f6 Love Is Not Over (Full Length Edition)'},
      {n:19,name:'I NEED U (Urban Mix)',dur:'3:35',sp:'https://open.spotify.com/intl-es/track/0avGJHXsqHQfFloHTCbcwb?si=a9803e90572147c0 I NEED U (Urban Mix)'},
      {n:20,name:'I NEED U (Remix)',dur:'3:43',sp:'https://open.spotify.com/intl-es/track/4pzjU0AnZa6Vfphk292e9Q?si=819edf38c72f426c I NEED U (Remix)'},
      {n:21,name:'RUN (Ballad Mix)',dur:'4:17',sp:'https://open.spotify.com/intl-es/track/4NNpKLaoOEeYi78vQDb3lB?si=d3dbc76b46bf4874 RUN (Ballad Mix)'},
      {n:22,name:'RUN (Alternative Mix)',dur:'3:56',sp:'https://open.spotify.com/intl-es/track/4ou8XX6AM0XFVjWFuzllWP?si=61e8a6b8fa9f4e38 RUN (Alternative Mix)'},
      {n:23,name:'Butterfly (Alternative Mix)',dur:'4:01',sp:'https://open.spotify.com/intl-es/track/0G0UoEFLum7ZPJxbmMbhPf?si=346ac991d6404471 Butterfly (Alternative Mix)'}]},
  
  'wings':{ 
    title:'Wings', 
    type:'2do Álbum de Estudio', 
    gradient:'linear-gradient(135deg,#1a2a3a,#2d4a6a)', 
    meta:{
      'Lanzamiento':'10 oct, 2016',
      'Sello':'Big Hit Ent.',
      'Canciones':'15',
      'Single':'Blood Sweat & Tears'}, 
    story:'Inspirado en "Demian" de Hesse, Wings fue un punto de inflexión artístico. "Blood Sweat & Tears" rompió récords en Asia y marcó el primer gran paso hacia el reconocimiento internacional.', 
    tracks:[
      {n:1,name:'Intro: Boy Meets Evil',dur:'2:01',sp:'https://open.spotify.com/search/BTS Intro Boy Meets Evil'},
      {n:2,name:'Blood Sweat & Tears',dur:'3:37',sp:'https://open.spotify.com/intl-es/track/2u54HNQamwFuOMLSuhSRom?si=2db5653431144457 Blood Sweat & Tears'},
      {n:3,name:'Begin',feat:'Jungkook',dur:'3:49',sp:'https://open.spotify.com/search/BTS Begin Wings'},
      {n:4,name:'Lie',feat:'Jimin',dur:'3:35',sp:'https://open.spotify.com/intl-es/track/1nWB8isqs2tviWk20G5pow?si=a2353e9569fc4f49 Lie Jimin'},
      {n:5,name:'Stigma',feat:'V',dur:'3:36',sp:'https://open.spotify.com/search/BTS Stigma V'},
      {n:6,name:'First Love',feat:'Suga',dur:'3:09',sp:'https://open.spotify.com/intl-es/track/1UeVC9gDeHxwlWOQyQJerj?si=6208c9fc36b54c6c First Love Suga'},
      {n:7,name:'Reflection',feat:'RM',dur:'3:53',sp:'https://open.spotify.com/intl-es/track/6O7358UPKsUumzjumFxVtp?si=8c55e2468ee34362 Reflection RM'},
      {n:8,name:'MAMA',feat:'J-Hope',dur:'3:32',sp:'https://open.spotify.com/intl-es/track/51hIGgLnT8s6gEzjVqKlEF?si=f942c30047794942 MAMA J-Hope'},
      {n:9,name:'Awake',feat:'Jin',dur:'3:46',sp:'https://open.spotify.com/intl-es/track/3gxNkvcP8scSzL6mGznTn3?si=e3572b1a96e64df5 Awake Jin'},
      {n:10,name:'Lost',dur:'4:01',sp:'https://open.spotify.com/search/BTS Lost Wings'},
      {n:11,name:'BTS Cypher 4',dur:'4:54',sp:'https://open.spotify.com/search/BTS Cypher 4'},
      {n:12,name:'Am I Wrong',dur:'3:33',sp:'https://open.spotify.com/search/BTS Am I Wrong'},
      {n:13,name:'21 Century Girls',dur:'3:12',sp:'https://open.spotify.com/search/BTS 21 Century Girls'},
      {n:14,name:'2!3!',dur:'4:32',sp:'https://open.spotify.com/intl-es/track/3KVOfGrYVjoP1w8T2HVltm?si=1e11410394944a81 2!3!'},
      {n:15,name:'Interlude: Wings',dur:'2:24',sp:'https://open.spotify.com/search/BTS Interlude: Wings'}]},
  
  'you-never-walk-alone':{ 
    title:'You Never Walk Alone', 
    type:'Mini Álbum Especial',
    gradient:'linear-gradient(135deg,#a8d8c8,#6ab0a0)', 
    meta:{
      'Lanzamiento':'13 feb, 2017',
      'Sello':'Big Hit Ent.',
      'Canciones':'18',
      'Singles':'Spring Day / Not Today'}, 
    story:'"Spring Day" se convirtió en un himno eterno. Años después sigue siendo una de las canciones más escuchadas de BTS.', 
    tracks:[
      {n:1,name:'Intro: Boy Meets Evil',dur:'2:01',sp:'https://open.spotify.com/intl-es/track/2j9ipQhjMruvvqN2azJgtF?si=0d8c714bd25a44ed Intro: Boy Meets Evil'},
      {n:2,name:'Blood Sweat & Tears',dur:'3:37',sp:'https://open.spotify.com/intl-es/track/0Yqr9qtmhjYPUtsFB04g9R?si=fd64d3c9b89e479b Blood Sweat & Tears'},
      {n:3,name:'Begin',dur:'3:49',sp:'https://open.spotify.com/intl-es/track/0Q2rXWKozTyewEaVUkFhmA?si=ce687f1bfbda4917 Begin'},
      {n:4,name:'Lie',dur:'3:35',sp:'https://open.spotify.com/intl-es/track/66N38jZOApS3dGhy8ijBVV?si=d043331b25f4488a Lie'},
      {n:5,name:'Stigma',dur:'3:36',sp:'https://open.spotify.com/intl-es/track/5grRCOfgYUpsGHsDHl4K1Y?si=69d29811374446cc Stigma'},
      {n:6,name:'First Love',dur:'3:09',sp:'https://open.spotify.com/intl-es/track/474dlSQ6pirpzcSf58cZOF?si=ec79e8bbbbed4918 First Love'},
      {n:7,name:'Reflection',dur:'3:53',sp:'https://open.spotify.com/intl-es/track/7MtCKC1shCaN0eaZoEd8yF?si=dce59d5d51e64f8d Reflection'},
      {n:8,name:'MAMA',dur:'3:32',sp:'https://open.spotify.com/intl-es/track/25TIeoVFG1QKdMppHdjNq0?si=e6a242191864409f MAMA'},
      {n:9,name:'Awake',dur:'3:46',sp:'https://open.spotify.com/intl-es/track/1GZ4rjIbktlYy1n7zmyCmq?si=e5bae5520928474b Awake'},
      {n:10,name:'Lost',dur:'4:01',sp:'https://open.spotify.com/intl-es/track/6aDhj6RxOvQ4GFo9U7lZYi?si=95bba79be92549b1 Lost'},
      {n:11,name:'BTS Cypher 4',dur:'4:54',sp:'https://open.spotify.com/intl-es/track/5tLC6mhPAWJ2s2Wr4A6qHX?si=5dc3c6ea006e483b BTS Cypher 4'},
      {n:12,name:'Am I Wrong',dur:'3:33',sp:'https://open.spotify.com/intl-es/track/6u6d06X2GzZ9AjPrh14MJH?si=578a0c2d594a4e4d Am I Wrong'},
      {n:13,name:'21 Century Girls',dur:'3:12',sp:'https://open.spotify.com/intl-es/track/6GxNA9J3P70amAXKUPghid?si=225160a926fd48e4 21 Century Girls'},
      {n:14,name:'2!3!',dur:'4:32',sp:'https://open.spotify.com/intl-es/track/0G1Y5QG8wULxMzm45vqPIZ?si=f2b556409a284ea6 2!3!'},
      {n:15,name:'Spring Day',dur:'4:34',sp:'https://open.spotify.com/intl-es/track/2j1fFjWHCI9KJSwcuYAOyF?si=a9ee5d1a02b24c10 Spring Day'},
      {n:16,name:'Not Today',dur:'3:51',sp:'https://open.spotify.com/intl-es/track/3wyrhwPpV8uhMMEms4vG3X?si=41834407f56d4f8e Not Today'},
      {n:17,name:'Outro: Wings',dur:'3:45',sp:'https://open.spotify.com/intl-es/track/7kyUapJyppdjzoAWB6XS14?si=af9d9b6bce7a486b Outro: Wings'},
      {n:18,name:'A Supplementary Story: You Never Walk Alone',dur:'2:36',sp:'https://open.spotify.com/intl-es/track/2ZbYyDM0pacTwP2odNsdlo?si=8e953a6b9e1d41ce You Never Walk Alone'}]},
  
  'ly-her':{ 
    title:'Love Yourself: Her', 
    type:'5to Mini Álbum', 
    gradient:'linear-gradient(135deg,#b8d4f0,#8ab0e0)', 
    meta:{
      'Lanzamiento':'18 sep, 2017',
      'Sello':'Big Hit Ent.',
      'Canciones':'9',
      'Single':'DNA'}, 
    story:'"DNA" fue el primer K-pop en el top 10 del Billboard Hot 100. La serie Love Yourself comenzó aquí, explorando la euforia del enamoramiento.', tracks:[
      {n:1,name:'Intro: Serendipity',feat:'Jimin',dur:'2:19',sp:'https://open.spotify.com/search/BTS Intro Serendipity'},
      {n:2,name:'DNA',dur:'3:43',sp:'https://open.spotify.com/intl-es/track/3uRLwBjI2TahxslcMTvpFs?si=fc81858233254140 DNA'},
      {n:3,name:'Best of Me',dur:'3:47',sp:'https://open.spotify.com/intl-es/track/5C6A1WXVfKvBBQmaFFnBgs?si=38f22df0ae7543b0 Best of Me'},
      {n:4,name:'Dimple',dur:'3:16',sp:'https://open.spotify.com/intl-es/track/6pp6xf9zS55GD4nr318XUH?si=a4631f6ed14f4ffa Dimple'},
      {n:5,name:'Pied Piper',dur:'4:05',sp:'https://open.spotify.com/search/BTS Pied Piper'},
      {n:6,name:'Skit: Bilboard Music Awards Speech',dur:'1:47',sp:'https://open.spotify.com/search/BTS Skit: Bilboard Music Awards Speech'},
      {n:7,name:'MIC Drop',dur:'3:58',sp:'https://open.spotify.com/intl-es/track/4gZGAVECoiutzp64KSHNjE?si=d12d8b2b2c3f4947 MIC Drop'},
      {n:8,name:'Go Go',dur:'3:55',sp:'https://open.spotify.com/intl-es/track/5vOT8VO87TAnUjh0oADwb1?si=17ee54e20da84906 Go Go'},
      {n:9,name:'Outro: Her',feat:'J-Hope',dur:'2:56',sp:'https://open.spotify.com/search/BTS Outro Her'}]},
  
  'fake-love':{ 
    title:'Fake Love / Airplane Pt.2', 
    type:'Single Japonés', 
    gradient:'linear-gradient(135deg,#c8d8e8,#a0b8cc)', 
    meta:{
      'Lanzamiento':'16 jul, 2018',
      'Sello':'Universal Music Japan',
      'Canciones':'3',
      'Single':'Fake Love'}, 
    story:'"Fake Love" en japonés. Explora el dolor de una relación donde perdiste tu identidad por amor.', 
    tracks:[
      {n:1,name:'FAKE LOVE (Japanese Ver.)',dur:'4:04',sp:'https://open.spotify.com/intl-es/track/7Eiwn5pyUzVmj2UJnQSsuE?si=60310d3f1bd5496b Fake Love Japanese'},
      {n:2,name:'Airplane pt.2 (Japanese Ver.)',dur:'3:40',sp:'https://open.spotify.com/intl-es/track/56C1UvPHIRtuLKV3qLtEJ6?si=7174b10ea33047ea Airplane Pt 2 Japanese'},
      {n:3,name:'FAKE LOVE -japanese ver- (remix)',feat:'PDOOG',dur:'4:06',sp:'https://open.spotify.com/intl-es/track/6Tai2owBuWHcNXD00mQZi5?si=1d1da33774524144 FAKE LOVE -japanese ver- (remix)'}]},
  
  'ly-tear':{ 
    title:'Love Yourself: Tear', 
    type:'3er Álbum de Estudio', 
    gradient:'linear-gradient(135deg,#1a1a3a,#3a3a6a)', 
    meta:{
      'Lanzamiento':'18 may, 2018',
      'Sello':'Big Hit Ent.',
      'Canciones':'11',
      'Single':'Fake Love'}, 
    story:'El primer álbum de BTS en debutar #1 en Billboard 200. Enfrenta el lado oscuro del amor: la ruptura y la angustia de perder la identidad por otro.', 
    tracks:[
      {n:1,name:'Intro: Singularity',feat:'V',dur:'3:16',sp:'https://open.spotify.com/search/BTS Intro Singularity'},
      {n:2,name:'Fake Love',dur:'4:02',sp:'https://open.spotify.com/intl-es/track/6m1TWFMeon7ai9XLOzdbiR?si=b8d2758d00dc4289 Fake Love'},
      {n:3,name:'The Truth Untold',dur:'4:02',sp:'https://open.spotify.com/intl-es/track/7DEKa5Z7Cl8s3Y7imb88OM?si=e9d371ec537b417c The Truth Untold'},
      {n:4,name:'134340',dur:'3:50',sp:'https://open.spotify.com/search/BTS 134340'},
      {n:5,name:'Paradise',dur:'3:31',sp:'https://open.spotify.com/search/BTS Paradise'},
      {n:6,name:'Love Maze',dur:'3:41',sp:'https://open.spotify.com/search/BTS Love Maze'},
      {n:7,name:'Magic Shop',dur:'4:35',sp:'https://open.spotify.com/intl-es/track/5MTGPkmiUuud9NkA0sl2nI?si=714dd5d438ab48c7 Magic Shop'},
      {n:8,name:'Airplane Pt.2',dur:'3:38',sp:'https://open.spotify.com/search/BTS Airplane Pt.2'},
      {n:9,name:'Anpanman',dur:'3:52',sp:'https://open.spotify.com/intl-es/track/34OSqW5ULWxmCEMjJ1ZgVW?si=6c2ae5abeb294f30 Anpanman'},
      {n:10,name:'So What',dur:'4:41',sp:'https://open.spotify.com/search/BTS So What'},
      {n:11,name:'Outro: Tear',feat:'RM, Suga, J-Hope',dur:'4:44',sp:'https://open.spotify.com/search/BTS Outro Tear'}]},
  
  'ly-answer':{ 
    title:'Love Yourself: Answer', 
    type:'Repackage', 
    gradient:'linear-gradient(135deg,#f0a8c8,#d878a8)', 
    meta:{
      'Lanzamiento':'24 ago, 2018',
      'Sello':'Big Hit Ent.',
      'Canciones':'26',
      'Singles':'IDOL / Im Fine'}, 
    story:'El cierre de la trilogía Love Yourself. "IDOL" celebra la identidad sin disculpas. El discurso de RM en la ONU acompañó este lanzamiento.', tracks:[
      {n:1,name:'Euphoria',feat:'Jungkook',dur:'3:48',sp:'https://open.spotify.com/search/BTS Euphoria'},
      {n:2,name:'Trivia: Just Dance',feat:'J-Hope',dur:'3:45',sp:'https://open.spotify.com/intl-es/track/4YDHRtzm0OGuieCTVQjVuk?si=e5c728926fcb4a0d Trivia: Just Dance'},
      {n:3,name:'Serendipity (Full Lenght Edition)',feat:'jimin',dur:'4:36',sp:'https://open.spotify.com/search/BTS Serendipity (Full Lenght Edition)'},
      {n:4,name:'DNA',dur:'3:43',sp:'https://open.spotify.com/search/BTS DNA'},
      {n:5,name:'Dimple',dur:'3:16',sp:'https://open.spotify.com/search/BTS Dimple'},
      {n:6,name:'Trivia: Love',feat:'Rm',dur:'3:45',sp:'https://open.spotify.com/search/BTS Trivia: Love'},
      {n:7,name:'Her',feat:'Rm, Suga y J Hope',dur:'3:48',sp:'https://open.spotify.com/search/BTS Her'},
      {n:8,name:'Singularity',feat:'V',dur:'3:16',sp:'https://open.spotify.com/search/BTS Singularity'},
      {n:9,name:'Fake Love',dur:'4:02',sp:'https://open.spotify.com/search/BTS Fake Love'},
      {n:10,name:'The Truth Untold ',feat:'Steve Aoki',dur:'4:02',sp:'https://open.spotify.com/search/BTS The Truth Untold '},
      {n:11,name:'Trivia: Seesaw',feat:'Suga',dur:'4:06',sp:'https://open.spotify.com/search/BTS Trivia: Seesaw'},
      {n:12,name:'Tear',feat:'Rm, Suga y J Hope',dur:'4:44',sp:'https://open.spotify.com/search/BTS Tear'},
      {n:13,name:'Epiphany',feat:'Jin',dur:'4:00',sp:'https://open.spotify.com/search/BTS Epiphany'},
      {n:14,name:'I´m Fine',dur:'4:00',sp:'https://open.spotify.com/search/BTS I´m Fine'},
      {n:15,name:'IDOL',dur:'3:42',sp:'https://open.spotify.com/search/BTS IDOL'},
      {n:16,name:'Answer: Love Myself',dur:'3:57',sp:'https://open.spotify.com/search/BTS Answer Love Myself'},
      {n:17,name:'Magic Shop',dur:'4:35',sp:'https://open.spotify.com/search/BTS Magic Shop'},
      {n:18,name:'Best Of Me',dur:'3:47',sp:'https://open.spotify.com/search/BTS Best Of Me'},
      {n:19,name:'Airplane Pt.2',dur:'3:38',sp:'https://open.spotify.com/search/BTS Airplane Pt.2'},
      {n:20,name:'Go Go',dur:'3:55',sp:'https://open.spotify.com/intl-es/track/4kZoZfj7IBg8eo1JZ2vsGO?si=e6a20d4f6fb347e8 Go Go'},
      {n:21,name:'Anpanman',dur:'3:52',sp:'https://open.spotify.com/search/BTS Anpanman'},
      {n:22,name:'MIC Drop',feat:'Steve Aoki',dur:'3:58',sp:'https://open.spotify.com/search/BTS MIC Drop'},
      {n:23,name:'DNA (Pedal 2 LA remix)',dur:'4:07',sp:'https://open.spotify.com/search/BTS DNA (Pedal 2 LA remix)'},
      {n:24,name:'FAKE LOVE (Rocking Vibe Mix)',dur:'3:58',sp:'https://open.spotify.com/search/BTS FAKE LOVE (Rocking Vibe Mix)'},
      {n:25,name:'MIC Drop (Steve Aoki remix) [Full Lenght Edition]',feat:'Steve Aoki',dur:'5:07',sp:'https://open.spotify.com/search/BTS MIC Drop (Steve Aoki remix) [Full Lenght Edition]'},
      {n:26,name:'IDOL',feat:'Nicki Minaj',dur:'4:20',sp:'https://open.spotify.com/intl-es/track/54azQnjuDYDFfImXimGFsA?si=610569dc03444896 IDOL'}]},
  
  'face-yourself':{ 
    title:'Face Yourself', 
    type:'Álbum Japonés', 
    gradient:'linear-gradient(135deg,#d0a8d8,#a878b8)',
    meta:{
      'Lanzamiento':'4 abr, 2018',
      'Sello':'Universal Music Japan',
      'Canciones':'12',
      'Single':'Dont Leave Me'},
    story:'El cuarto álbum japonés de BTS. Explora la autoaceptación con un sonido más maduro.', 
    tracks:[
      {n:1,name:'INTRO: Ringwaderung',dur:'1:26',sp:'https://open.spotify.com/search/BTS INTRO: Ringwaderung'},
      {n:2,name:'Best Of Me -japanese ver-',dur:'3:47',sp:'https://open.spotify.com/search/BTS Best Of Me -japanese ver-'},
      {n:3,name:'Blood, Sweat, Tears -japanese ver-',dur:'3:36',sp:'https://open.spotify.com/intl-es/track/6u1ILVDFXcmQGQGCA3h849?si=91da3f04f464421c Blood, Sweat, Tears -japanese ver-'},
      {n:4,name:'DNA -japanese ver-',dur:'3:43',sp:'https://open.spotify.com/search/BTS DNA -japanese ver-'},
      {n:5,name:'Not Today -japanese ver-',dur:'3:53',sp:'https://open.spotify.com/search/BTS Not Today -japanese ver-'},
      {n:6,name:'MIC Drop -japanese ver-',dur:'3:58',sp:'https://open.spotify.com/search/BTS MIC Drop -japanese ver-'},
      {n:7,name:'Don´t Leave Me',dur:'3:47',sp:'https://open.spotify.com/search/BTS Don´t Leave Me'},
      {n:8,name:'Go Go (Japanese Ver.)',dur:'3:57',sp:'https://open.spotify.com/intl-es/track/0YguyyCOTyujhSDXWyB4W3?si=51e188839c744447 Go Go (Japanese Ver.)'},
      {n:9,name:'Crystal Snow',dur:'5:23',sp:'https://open.spotify.com/search/BTS Crystal Snow'},
      {n:10,name:'Spring Day -japanese ver-',dur:'4:36',sp:'https://open.spotify.com/search/BTS Spring Day -japanese ver-'},
      {n:11,name:'Let Go',dur:'4:59',sp:'https://open.spotify.com/search/BTS Let Go'},
      {n:12,name:'OUTRO: Crack',dur:'1:14',sp:'https://open.spotify.com/search/BTS OUTRO: Crack'}]},
  
  'mots-persona':{ 
    title:'Map of the Soul: Persona', 
    type:'6to Mini Álbum', 
    gradient:'linear-gradient(135deg,#ff6fa8,#ff3d7a)', 
    meta:{
      'Lanzamiento':'12 abr, 2019',
      'Sello':'Big Hit Ent.',
      'Canciones':'7',
      'Single':'Boy With Luv'}, 
    story:'"Boy With Luv" con Halsey batió el récord de YouTube en 24 horas. Una exploración del concepto jungiano de la Persona.', 
    tracks:[
      {n:1,name:'Intro: Persona',feat:'RM',dur:'2:51',sp:'https://open.spotify.com/search/BTS Intro Persona'},
      {n:2,name:'Boy With Luv',feat:'feat. Halsey',dur:'3:49',sp:'https://open.spotify.com/search/BTS Boy With Luv'},
      {n:3,name:'Mikrokosmos',dur:'3:44',sp:'https://open.spotify.com/search/BTS Mikrokosmos'},
      {n:4,name:'Make It Right',dur:'3:46',sp:'https://open.spotify.com/search/BTS Make It Right'},
      {n:5,name:'HOME',dur:'3:54',sp:'https://open.spotify.com/search/BTS HOME'},
      {n:6,name:'Jamais Vu',feat:'Jin, J-Hope, Jungkook',dur:'3:47',sp:'https://open.spotify.com/search/BTS Jamais Vu'},
      {n:7,name:'Dionysus',dur:'4:09',sp:'https://open.spotify.com/search/BTS Dionysus'}]},
  
  'bts-world':{ 
    title:'BTS World OST', 
    type:'Banda Sonora', 
    gradient:'linear-gradient(135deg,#e8a0c8,#c870a8)',
    meta:{
      'Lanzamiento':'2 jun, 2019',
      'Sello':'Big Hit Ent.',
      'Canciones':'14',
      'Single':'Dream Glow'}, 
    story:'La banda sonora del juego móvil oficial "BTS World" con colaboraciones de artistas internacionales.', 
    tracks:[
      {n:1,name:'Heartbeat',dur:'4:13',sp:'https://open.spotify.com/search/BTS Heartbeat'},
      {n:2,name:'Dream Glow',feat:'Charlie XCX',dur:'3:07',sp:'https://open.spotify.com/search/BTS Dream Glow'},
      {n:3,name:'A Brand New Day',feat:'Zara Larsson',dur:'3:25',sp:'https://open.spotify.com/search/BTS A Brand New Day'},
      {n:4,name:'All Night',feat:'Juice WRLD',dur:'3:37',sp:'https://open.spotify.com/search/BTS All Night Juice WRLD'},
      {n:5,name:'Captain (Namjoon´s Theme)',dur:'3:19',sp:'https://open.spotify.com/search/BTS Captain (Namjoon´s Theme)'},
      {n:6,name:'Cake Waltz (Jimin´s Theme)',dur:'3:44',sp:'https://open.spotify.com/search/BTS Cake Waltz (Jimin´s Theme)'},
      {n:7,name:'Shine (Yoongi´s Theme)',dur:'3:52',sp:'https://open.spotify.com/intl-es/track/2rPgeEQ88KV1qJAjM35Yxk?si=dcc01ca937274773 Shine (Yoongi´s Theme)'},
      {n:8,name:'Not Alone (Jung Kook´s Theme)',dur:'3:45',sp:'https://open.spotify.com/intl-es/track/58ccJn6Ky422kzNVvf5SA2?si=ae9eb2d4b5354c18 Not Alone (Jung Kook´s Theme)'},
      {n:9,name:'Friends (OST) (Hoseok´s Theme)',dur:'3:30',sp:'https://open.spotify.com/intl-es/track/2pfmAzI4l8hyh9Y5mMWJY6?si=6bfc4de4d5274c18 Friends (OST) (Hoseok´s Theme)'},
      {n:10,name:'Wish (Seokjin´s Theme)',dur:'3:57',sp:'https://open.spotify.com/intl-es/track/0QoYZ9jnvARUs3ACQKvR0J?si=d79d71be1cf24614 Wish (Seokjin´s Theme)'},
      {n:11,name:'Flying (Taehyung´s Theme)',dur:'3:36',sp:'https://open.spotify.com/search/BTS Flying (Taehyung´s Theme)'},
      {n:12,name:'LaLaLa',feat:'Okdal',dur:'3:11',sp:'https://open.spotify.com/intl-es/track/5YddboEOwmFGfhL524QE4M?si=6de5765858d64690 LaLaLa'},
      {n:13,name:'You Are Here',feat:'Lee Hyun',dur:'3:36',sp:'https://open.spotify.com/intl-es/track/36zZvvRoRUgDiqwbaH84BB?si=12088d151d594a0b You Are Here'},
      {n:14,name:'You Are Here (Orchestra ver.)',feat:'Lee Hyun',dur:'3:36',sp:'https://open.spotify.com/intl-es/track/18XYNWjG0BQctJOar6jmkf?si=74992bfa7fc84efb You Are Here (Orchestra ver.)'}]},
  
  'lights-bwl':{ 
    title:'Lights / Boy With Luv', 
    type:'Single Japonés',
    gradient:'linear-gradient(135deg,#a8e0f0,#78c0d8)', 
    meta:{
      'Lanzamiento':'3 jul, 2019',
      'Sello':'Universal Music Japan',
      'Canciones':'3',
      'Single':'Lights'}, 
    story:'"Lights" habla de la luz que los fans representan para BTS — una declaración de amor mutuo envuelta en una melodía irresistible.', 
    tracks:[
      {n:1,name:'Lights',dur:'4:52',sp:'https://open.spotify.com/search/BTS Lights'},
      {n:2,name:'Boy With Luv (Japanese Ver.)',dur:'3:51',sp:'https://open.spotify.com/intl-es/track/2Ya8bityItATB8WNxaaed1?si=fa29de4f836449ec Boy With Luv Japanese'},
      {n:3,name:'IDOL -japanese ver-',dur:'3:42',sp:'https://open.spotify.com/intl-es/track/7IeoEVVNdCXHeILYk2Yxsr?si=65ffe72e0ef34756 IDOL -japanese ver-'}]},
  
  'mots':{ 
    title:'Map of the Soul: 7', 
    type:'4to Álbum de Estudio', 
    gradient:'linear-gradient(135deg,#1a3a2a,#2d6a4a)', 
    meta:{
      'Lanzamiento':'21 feb, 2020',
      'Sello':'Big Hit Ent.',
      'Canciones':'20',
      'Singles':'ON / Black Swan'}, 
    story:'El álbum más ambicioso de BTS. "ON" llegó con un MV épico. Debutó #1 en 20 países. Consolidó a BTS como el acto más grande del planeta.', 
    tracks:[
      {n:1,name:'Intro: Persona',feat:'RM',dur:'2:51',sp:'https://open.spotify.com/intl-es/track/7incJHhOl108CJBxylqc1z?si=498dcda06da644cf Intro: Persona'},
      {n:2,name:'Boy With Luv',feat:'Halsey',dur:'3:49',sp:'https://open.spotify.com/intl-es/track/7lrqvdivAYRGEiO8JFP31G?si=3513415892f1463a Boy With Luv'},
      {n:3,name:'Make It Right',dur:'3:46',sp:'https://open.spotify.com/intl-es/track/30YLyzfEjMQsXj4ZFslAmT?si=00b22f4841bf455f Make It Right'},
      {n:4,name:'Jamais Vu',feat:'Jin, J Hope, Jungkook',dur:'3:47',sp:'https://open.spotify.com/intl-es/track/0PpNBEXkjalflGCMMsBV5B?si=b9fc36e336554cc3 Jamais Vu'},
      {n:5,name:'Dionysus',dur:'4:09',sp:'https://open.spotify.com/intl-es/track/5LvqzuJCNpi2pNkJAX8mBT?si=07ac175769bc4ec2 Dionysus'},
      {n:6,name:'Interlude: Shadow',feat:'Suga',dur:'4:19',sp:'https://open.spotify.com/search/BTS Interlude: Shadow'},
      {n:7,name:'Black Swan',dur:'3:18',sp:'https://open.spotify.com/search/BTS Black Swan'},
      {n:8,name:'Filter',feat:'Jimin',dur:'3:00',sp:'https://open.spotify.com/search/BTS Filter'},
      {n:9,name:'My Time',feat:'Jungkook',dur:'3:54',sp:'https://open.spotify.com/search/BTS My Time'},
      {n:10,name:'Louder Than Bombs',dur:'3:37',sp:'https://open.spotify.com/search/BTS Louder Than Bombs'},
      {n:11,name:'ON',dur:'4:06',sp:'https://open.spotify.com/search/BTS ON'},
      {n:12,name:'UGH!',feat:'RM, Suga y J Hope',dur:'3:45',sp:'https://open.spotify.com/search/BTS UGH!'},
      {n:13,name:'00:00 (Zero O´Clock)',feat:'Jin, V, Jimin y Jungkook',dur:'4:10',sp:'https://open.spotify.com/search/BTS 00:00 (Zero O´Clock)'},
      {n:14,name:'Inner Child',feat:'V',dur:'3:53',sp:'https://open.spotify.com/search/BTS Inner Child'},
      {n:15,name:'Friends',feat:'Jimin & V',dur:'3:19',sp:'https://open.spotify.com/search/BTS Friends'},
      {n:16,name:'Moon',feat:'Jin',dur:'3:28',sp:'https://open.spotify.com/search/BTS Moon'},
      {n:17,name:'Respect',feat:'RM & Suga',dur:'3:57',sp:'https://open.spotify.com/search/BTS Respect'},
      {n:18,name:'We Are Bulletproof: The Eternal',dur:'4:21',sp:'https://open.spotify.com/search/BTS We Are Bulletproof: The Eternal'},
      {n:19,name:'Outro: Ego',feat:'J-Hope',dur:'3:16',sp:'https://open.spotify.com/search/BTS Outro Ego'},
      {n:20,name:'ON',feat:'Sia',dur:'4:06',sp:'https://open.spotify.com/search/BTS ON Sia'}]},
  
  'dynamite':{ 
    title:'Dynamite', 
    type:'Single Digital', 
    gradient:'linear-gradient(135deg,#f8f8f8,#e0e0e0)', 
    meta:{
      'Lanzamiento':'21 ago, 2020',
      'Sello':'Big Hit Ent.',
      'Canciones':'2',
      'Single':'Dynamite'}, 
    story:'El primer single en inglés de BTS. Debutó #1 en el Billboard Hot 100, el primer grupo coreano en lograrlo.', 
    tracks:[
      {n:1,name:'Dynamite',dur:'3:19',sp:'https://open.spotify.com/search/BTS Dynamite'},
      {n:2,name:'Dynamite (Instrumental)',dur:'3:18',sp:'https://open.spotify.com/intl-es/track/0V2wvC5MkDjMZyFttv8sZF?si=75575b070c074d6c Dynamite Instrumental'}]},
  
  'be':{ 
    title:'BE',
    type:'5to Álbum de Estudio', 
    gradient:'linear-gradient(135deg,#3a2a1a,#6a4a2d)', 
    meta:{
      'Lanzamiento':'20 nov, 2020',
      'Sello':'Big Hit Ent.',
      'Canciones':'8',
      'Single':'Life Goes On'}, 
    story:'Nacido de la pandemia. Cada integrante tuvo control creativo. "Life Goes On" fue una promesa de que la vida continuaría.', 
    tracks:[
      {n:1,name:'Life Goes On',dur:'3:31',sp:'https://open.spotify.com/search/BTS Life Goes On'},
      {n:2,name:'Fly To My Room',dur:'3:43',sp:'https://open.spotify.com/search/BTS Fly To My Room'},
      {n:3,name:'Blue & Grey',dur:'4:43',sp:'https://open.spotify.com/search/BTS Blue Grey'},
      {n:4,name:'Skit',dur:'2:59',sp:'https://open.spotify.com/search/BTS Skit'},
      {n:5,name:'Telepathy',dur:'3:22',sp:'https://open.spotify.com/search/BTS Telepathy'},
      {n:6,name:'Dis-Ease',dur:'3:59',sp:'https://open.spotify.com/search/BTS Dis-Ease'},
      {n:7,name:'Stay',dur:'3:24',sp:'https://open.spotify.com/intl-es/track/0TdWVbcerMAcvljXrl9gpG?si=f96a3937d5fb4e67 Stay'},
      {n:7,name:'Dynamite',dur:'3:19',sp:'https://open.spotify.com/search/BTS Dynamite'}]},
  
  'butter':{ 
    title:'Butter', 
    type:'Single Digital', 
    gradient:'linear-gradient(135deg,#f5c842,#e0a820)',
    meta:{
      'Lanzamiento':'21 may, 2021',
      'Sello':'Big Hit Ent.',
      'Canciones':'5',
      'Single':'Butter'}, 
    story:'"Butter" pasó 10 semanas en el #1 del Billboard Hot 100. Con "Permission to Dance" como cara B, fue imparable en el verano de 2021.', 
    tracks:[
      {n:1,name:'Butter',dur:'2:44',sp:'https://open.spotify.com/search/BTS Butter'},
      {n:2,name:'Permission to Dance',dur:'3:07',sp:'https://open.spotify.com/search/BTS Permission to Dance'}]},
  
  'bts-the-best':{ 
    title:'BTS, The Best', 
    type:'Compilación Japonesa', 
    gradient:'linear-gradient(135deg,#9a70d8,#7848c0)', 
    meta:{
      'Lanzamiento':'16 jun, 2021',
      'Sello':'Universal Music Japan',
      'Canciones':'22',
      'Single':'Film Out'}, 
    story:'La compilación más completa del catálogo japonés de BTS con "Film Out" y "Stay Gold".', 
    tracks:[
      {n:1,name:'Film out',dur:'3:36',sp:'https://open.spotify.com/search/BTS Film out'},
      {n:2,name:'DNA - Japanese ver.',dur:'3:43',sp:'https://open.spotify.com/search/BTS DNA-Japanese ver.'},
      {n:3,name:'Best Of Me - Japanese ver.',dur:'3:48',sp:'https://open.spotify.com/search/BTS Best Of Me-Japanese ver.'},
      {n:4,name:'Lights',dur:'4:50',sp:'https://open.spotify.com/search/BTS Lights'},
      {n:5,name:'Blood Sweat & Tears - Japanese ver.',dur:'3:36',sp:'https://open.spotify.com/intl-es/track/6hHfi5X0al0dtly9A5W0GG?si=83835fbb06a04c57 Blood Sweat & Tears - Japanese ver.'},
      {n:6,name:'Fake Love - Japanese ver.',dur:'4:02',sp:'https://open.spotify.com/search/BTS Fake Love - Japanese ver.'},
      {n:7,name:'Black Swan - Japanese ver.',dur:'3:19',sp:'https://open.spotify.com/search/BTS Black Swan - Japanese ver.'},
      {n:8,name:'Airplane pt.2 - Japanese ver.',dur:'3:39',sp:'https://open.spotify.com/search/BTS Airplane pt.2 - Japanese ver.'},
      {n:9,name:'Go Go - Japanese ver.',dur:'3:56',sp:'https://open.spotify.com/search/BTS Go Go - Japanese ver.'},
      {n:10,name:'IDOL - Japanese ver.',dur:'3:43',sp:'https://open.spotify.com/search/BTS IDOL - Japanese ver.'},
      {n:11,name:'Dionysus - Japanese ver.',dur:'4:09',sp:'https://open.spotify.com/search/BTS Dionysus - Japanese ver.'},
      {n:12,name:'MIC Drop - Japanese ver.',dur:'3:59',sp:'https://open.spotify.com/search/BTS MIC Drop - Japanese ver.'},
      {n:13,name:'Boy With Luv - Japanese ver.',dur:'3:50',sp:'https://open.spotify.com/search/BTS Boy With Luv - Japanese ver.'},
      {n:14,name:'Stay Gold',dur:'4:03',sp:'https://open.spotify.com/search/BTS Stay Gold'},
      {n:15,name:'Let Go',dur:'4:57',sp:'https://open.spotify.com/search/BTS Let Go'},
      {n:16,name:'Spring Day - Japanese ver.',dur:'4:36',sp:'https://open.spotify.com/search/BTS Spring Day - Japanese ver.'},
      {n:17,name:'ON - Japanese ver.',dur:'4:07',sp:'https://open.spotify.com/search/BTS ON - Japanese ver.'},
      {n:18,name:'Don´t Leave Me - Japanese ver.',dur:'3:46',sp:'https://open.spotify.com/search/BTS Don´t Leave Me - Japanese ver.'},
      {n:19,name:'Not Today - Japanese ver.',dur:'3:54',sp:'https://open.spotify.com/search/BTS Not Today - Japanese ver.'},
      {n:20,name:'Make It Right - Japanese ver.',dur:'3:45',sp:'https://open.spotify.com/search/BTS Make It Right - Japanese ver.'},
      {n:21,name:'Your eyes tell',dur:'4:05',sp:'https://open.spotify.com/search/BTS Your eyes tell'},
      {n:22,name:'Crystal Snow',dur:'5:22',sp:'https://open.spotify.com/search/BTS Crystal Snow'}]},
  
  'proof':{ 
    title:'Proof', 
    type:'Álbum Antología', 
    gradient:'linear-gradient(135deg,#1a1a3a,#2d2d6a)',
    meta:{
      'Lanzamiento':'10 jun, 2022',
      'Sello':'HYBE',
      'Canciones':'35',
      'Single':'Yet To Come'}, 
    story:'Celebración del camino recorrido y carta de amor al ARMY antes del servicio militar. "Yet To Come" declaró que lo mejor estaba por venir.', 
    tracks:[
      {n:1,name:'Born Singer',dur:'3:58',sp:'https://open.spotify.com/search/BTS Born Singer'},
      {n:2,name:'No More Dream',dur:'3:42',sp:'https://open.spotify.com/search/BTS No More Dream'},
      {n:3,name:'N.O',dur:'3:29',sp:'https://open.spotify.com/search/BTS N.O'},
      {n:4,name:'Boy in Luv',dur:'3:51',sp:'https://open.spotify.com/search/BTS Boy in Luv'},
      {n:5,name:'Danger',dur:'4:05',sp:'https://open.spotify.com/search/BTS Danger'},
      {n:6,name:'I Need U',dur:'3:31',sp:'https://open.spotify.com/search/BTS I Need U'},
      {n:7,name:'Run',dur:'3:56',sp:'https://open.spotify.com/intl-es/track/3G1aAxWS2Nd17FQs4PWV6X?si=0d402764635c4447 Run'},
      {n:8,name:'Fire',dur:'3:23',sp:'https://open.spotify.com/search/BTS Fire'},
      {n:9,name:'Blood Sweat & Tears',dur:'3:37',sp:'https://open.spotify.com/search/BTS Blood Sweat & Tears'},
      {n:10,name:'Spring Day',dur:'3:34',sp:'https://open.spotify.com/search/BTS Spring Day'},
      {n:11,name:'DNA',dur:'3:43',sp:'https://open.spotify.com/search/BTS DNA'},
      {n:12,name:'Fake Love',dur:'4:02',sp:'https://open.spotify.com/search/BTS Fake Love'},
      {n:13,name:'IDOL',dur:'3:42',sp:'https://open.spotify.com/search/BTS IDOL'},
      {n:14,name:'Boy with Luv',feat:'Halsey',dur:'3:49',sp:'https://open.spotify.com/search/BTS Boy with Luv'},
      {n:15,name:'ON',dur:'4:06',sp:'https://open.spotify.com/search/BTS ON'},
      {n:16,name:'Dynamite',dur:'3:19',sp:'https://open.spotify.com/search/BTS Dynamite'},
      {n:17,name:'Life Goes On',dur:'3:28',sp:'https://open.spotify.com/search/BTS Life Goes On'},
      {n:18,name:'Butter',dur:'2:44',sp:'https://open.spotify.com/search/BTS Butter'},
      {n:19,name:'Yet to Come',dur:'3:13',sp:'https://open.spotify.com/search/BTS Yet to Come'},
      {n:20,name:'Run BTS',dur:'3:24',sp:'https://open.spotify.com/search/BTS Run BTS'},
      {n:21,name:'Intro: Persona',dur:'2:51',sp:'https://open.spotify.com/search/BTS Intro: Persona'},
      {n:22,name:'Stay',dur:'3:26',sp:'https://open.spotify.com/search/BTS Stay'},
      {n:23,name:'Moon',dur:'3:28',sp:'https://open.spotify.com/search/BTS Moon'},
      {n:24,name:'Jamais Vu',dur:'3:47',sp:'https://open.spotify.com/search/BTS Jamais Vu'},
      {n:25,name:'Trivia 轉: Seesaw',dur:'4:06',sp:'https://open.spotify.com/search/BTS Trivia 轉: Seesaw'},
      {n:26,name:'BTS Cypher Pt. 3: Killer',dur:'4:28',sp:'https://open.spotify.com/search/BTS BTS Cypher Pt. 3: Killer'},
      {n:27,name:'Outro: Ego',dur:'3:16',sp:'https://open.spotify.com/search/BTS Outro: Ego'},
      {n:28,name:'Her',dur:'3:48',sp:'https://open.spotify.com/search/BTS Her'},
      {n:29,name:'Filter',dur:'3:00',sp:'https://open.spotify.com/search/BTS Filter'},
      {n:30,name:'Friends',dur:'3:19',sp:'https://open.spotify.com/search/BTS Friends'},
      {n:31,name:'Singularity',dur:'3:16',sp:'https://open.spotify.com/search/BTS Singularity'},
      {n:32,name:'00:00 (Zero O´Clock)',dur:'4:10',sp:'https://open.spotify.com/search/BTS 00:00 (Zero O´Clock)'},
      {n:33,name:'Euphoria',dur:'3:48',sp:'https://open.spotify.com/search/BTS Euphoria'},
      {n:34,name:'Dimple',dur:'3:16',sp:'https://open.spotify.com/search/BTS Dimple'},
      {n:35,name:'For Youth',dur:'4:24',sp:'https://open.spotify.com/search/BTS For Youth'}]},
  
  'arirang':{
    title:'Arirang', 
    type:'Álbum de regreso de BTS', 
    gradient:'linear-gradient(135deg,#1a1a3a,#2d2d6a)',
    meta:{
      'Lanzamiento':'20 marzo, 2026',
      'Sello':'HYBE',
      'Canciones':'14',
      'Single':'SWIM'},
    story:'“Arirang” es el álbum del regreso de BTS, donde combinan su identidad coreana con un sonido global y más maduro.',
    tracks:[
      {n:1,name:'Body to Body',dur:'3:09',sp:'https://open.spotify.com/search/BTS Body to Body'},
      {n:2,name:'Hooligan',dur:'3:02',sp:'https://open.spotify.com/search/BTS Hooligan'},
      {n:3,name:'Aliens',dur:'2:47',sp:'https://open.spotify.com/search/BTS Aliens'},
      {n:4,name:'FYA',dur:'3:00',sp:'https://open.spotify.com/search/BTS FYA'},
      {n:5,name:'2.0',dur:'2:49',sp:'https://open.spotify.com/search/BTS 2.0'},
      {n:6,name:'No.29',dur:'1:38',sp:'https://open.spotify.com/search/BTS No.29'},
      {n:7,name:'SWIM',dur:'2:39',sp:'https://open.spotify.com/search/BTS SWIM'},
      {n:8,name:'Merry Go Round',dur:'3:49',sp:'https://open.spotify.com/search/BTS Merry Go Round'},
      {n:9,name:'NORMAL',dur:'3:01',sp:'https://open.spotify.com/search/BTS NORMAL'},
      {n:10,name:'Like Animals',dur:'3:09',sp:'https://open.spotify.com/search/BTS Like Animals'},
      {n:11,name:'they don´t know ´bout us',dur:'2:44',sp:'https://open.spotify.com/search/BTS they don´t know ´bout us'},
      {n:12,name:'One More Night',dur:'2:47',sp:'https://open.spotify.com/search/BTS One More Night'},
      {n:13,name:'Please',dur:'2:52',sp:'https://open.spotify.com/search/BTS Please'},
      {n:14,name:'Into the Sun',dur:'3:47',sp:'https://open.spotify.com/search/BTS Into the Sun'}]},
};

const soloAlbumsData = {
  'rm-mix':{ 
    title:'RM', 
    member:'RM', 
    type:'Mixtape', 
    gradient:'linear-gradient(135deg,#1a1a1a,#444)', 
    meta:{'Lanzamiento':'2015',
      'Artista':'RM',
      'Tipo':'Mixtape gratuito',
      'Canciones':'11',
      'Single':'Do You'}, 
    story:'El primer mixtape de RM fue una carta de presentación al mundo. Con letras crudas sobre presión y soledad, exploró su identidad más allá de BTS. Fue el primer integrante en lanzar material solista.', 
    tracks:[
      {n:1,name:'Voice',dur:'2:47',sp:'https://soundcloud.com/bangtan/01-1?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F01-1'},
      {n:2,name:'Do You',dur:'3:01',sp:'https://soundcloud.com/bangtan/02-do-you?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F02-do-you'},
      {n:3,name:'Awakening',dur:'2:31',sp:'https://soundcloud.com/bangtan/03-1?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F03-1'},
      {n:4,name:'Monster',dur:'3:44',sp:'https://soundcloud.com/bangtan/04-monster?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F04-monster'},
      {n:5,name:'Throw Away',dur:'3:15',sp:'https://soundcloud.com/bangtan/05-1?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F05-1'},
      {n:6,name:'Joke',dur:'3:19',sp:'https://soundcloud.com/bangtan/06-1?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F06-1'},
      {n:7,name:'God Rap',dur:'4:10',sp:''},
      {n:8,name:'Rush',feat:'Krizz Kaliko',dur:'4:12',sp:'https://soundcloud.com/bangtan/08-rush-feat-krizz-kaliko?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F08-rush-feat-krizz-kaliko'},
      {n:9,name:'Life',dur:'4:18',sp:'https://soundcloud.com/bangtan/09-life?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F09-life'},
      {n:10,name:'Adrift',dur:'3:19',sp:'https://soundcloud.com/bangtan/10-1?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F10-1'},
      {n:11,name:'I Believe',dur:'3:42',sp:'https://soundcloud.com/bangtan/11-i-believe?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fbangtan%252F11-i-believe'}]},
  
  'agust-d':{ 
    title:'Agust D', 
    member:'Suga', 
    type:'Mixtape', 
    gradient:'linear-gradient(135deg,#1a1a1a,#555)', 
    meta:{
      'Lanzamiento':'15 ago, 2016',
      'Artista':'Agust D (Suga)',
      'Tipo':'Mixtape gratuito',
      'Canciones':'10',
      'Single':'Agust D'}, 
    story:'Bajo el alias Agust D, Yoongi habló con brutal honestidad sobre su trastorno disociativo, depresión y ansiedad. "The Last" se convirtió en un himno para quienes luchan en silencio.', 
    tracks:[
      {n:1,name:'Intro : DT sugA',feat:'DJ Friz',dur:'1:04',sp:'https://open.spotify.com/search/Agust D Intro : DT sugA'},
      {n:2,name:'Agust D',dur:'3:54',sp:'https://open.spotify.com/intl-es/track/6AknCCsxOsrJ2mkSdCtET1?si=1b2e45c060ab4896'},
      {n:3,name:'give it to me',dur:'2:29',sp:'https://open.spotify.com/search/Agust D give it to me'},
      {n:4,name:'skit',dur:'1:14',sp:'https://open.spotify.com/search/Agust D skit'},
      {n:5,name:'724148',dur:'3:05',sp:'https://open.spotify.com/search/Agust D 724148'},
      {n:6,name:'140503 at dawn',dur:'1:24',sp:'https://open.spotify.com/search/Agust D 140503 at dawn'},
      {n:7,name:'The Last',dur:'4:05',sp:'https://open.spotify.com/search/Agust D The Last'},
      {n:8,name:'Tony Montana',feat:'Yankie',dur:'3:27',sp:'https://open.spotify.com/search/Agust D Tony Montana'},
      {n:9,name:'Interlude : Dream, Reality',dur:'1:32',sp:'https://open.spotify.com/search/Agust D Interlude : Dream, Reality'},
      {n:10,name:'so far away',feat:'SURAN',dur:'5:58',sp:'https://open.spotify.com/search/Agust D so far away'}]},
  
  'hope-world':{ 
    title:'Hope World', 
    member:'J-Hope', 
    type:'Mixtape', 
    gradient:'linear-gradient(135deg,#ff4040,#ff8000)', 
    meta:{
      'Lanzamiento':'2 mar, 2018',
      'Artista':'j-hope',
      'Canciones':'7',
      'Single':'Daydream'}, 
    story:'Colorido y lleno de optimismo, Hope World debutó en el top 40 del Billboard 200. Su estética inspirada en manga japonés lo convirtió en un álbum icónico.', 
    tracks:[
      {n:1,name:'Hope World',dur:'3:24',sp:'https://open.spotify.com/search/j-hope Hope World'},
      {n:2,name:'P.O.P (Piece Of Peace) Pt.1',dur:'3:01',sp:'https://open.spotify.com/search/j-hope P.O.P (Piece Of Peace) Pt.1'},
      {n:3,name:'Daydream',dur:'3:48',sp:'https://open.spotify.com/search/j-hope Daydream'},
      {n:4,name:'Base Line',dur:'1:29',sp:'https://open.spotify.com/search/j-hope Base Line'},
      {n:5,name:'Hangsang',feat:'Supreme Boi',dur:'3:49',sp:'https://open.spotify.com/search/j-hope Hangsang'},
      {n:6,name:'Airplane',dur:'3:17',sp:'https://open.spotify.com/search/j-hope Airplane'},
      {n:7,name:'Blue Side (Outro)',dur:'1:30',sp:'https://open.spotify.com/search/j-hope Blue Side (Outro)'}]},
  
  'mono':{ 
    title:'mono.', 
    member:'RM', 
    type:'Playlist / Mixtape', 
    gradient:'linear-gradient(135deg,#f0ede0,#c0bdb0)', 
    meta:{
      'Lanzamiento':'23 oct, 2018',
      'Artista':'RM',
      'Canciones':'7',
      'Single':'forever rain'}, 
    story:'mono. es el segundo mixtape de RM, una obra minimalista y melancólica. "forever rain" es un favorito del ARMY por su honestidad poética. RM describió el disco como musica para estar solo.', 
    tracks:[
      {n:1,name:'tokyo',dur:'3:28',sp:'https://open.spotify.com/search/RM tokyo mono'},
      {n:2,name:'seoul',feat:'prod. HONNE',dur:'4:35',sp:'https://open.spotify.com/search/RM seoul'},
      {n:3,name:'moonchild',dur:'3:25',sp:'https://open.spotify.com/search/RM moonchild'},
      {n:4,name:'Badbye',feat:'eAeon',dur:'1:52',sp:'https://open.spotify.com/search/RM Badbye'},
      {n:5,name:'uh good',dur:'3:14',sp:'https://open.spotify.com/search/RM uhgood'},
      {n:7,name:'everything goes',feat:'NELL',dur:'3:42',sp:'https://open.spotify.com/search/RM everything goes'},
      {n:6,name:'forever rain',dur:'4:31',sp:'https://open.spotify.com/search/RM forever rain'}]},

  'D-2':{ 
    title:'D-2', 
    member:'Suga', 
    type:'Mixtape', 
    gradient:'linear-gradient(135deg,#f0ede0,#c0bdb0)', 
    meta:{
      'Lanzamiento':'22 may, 2020',
      'Artista':'Agust D (Suga)',
      'Canciones':'10',
      'Single':'Daechwita'}, 
    story:'D-2 muestra una versión más madura, intensa y reflexiva de Agust D. El mixtape mezcla rap agresivo, sonidos tradicionales coreanos y letras profundas sobre fama, identidad, presión y crecimiento personal. Canciones como Daechwita destacan por su energía poderosa y su estética inspirada en la cultura coreana, mientras que otras exploran emociones más introspectivas y vulnerables.', 
    tracks:[
      {n:1,name:'Moonlight',dur:'2:43',sp:'https://open.spotify.com/search/agustD Moonlight'},
      {n:2,name:'Daechwita',dur:'3:45',sp:'https://open.spotify.com/search/agustD Daechwita'},
      {n:3,name:'What do you think?',dur:'3:02',sp:'https://open.spotify.com/search/agustD What do you think?'},
      {n:4,name:'Strange',feat:'RM',dur:'3:16',sp:'https://open.spotify.com/search/agustD Strange'},
      {n:5,name:'28',feat:'NiiHWA',dur:'2:13',sp:'https://open.spotify.com/search/agustD 28'},
      {n:6,name:'Burn It',feat:'MAX',dur:'3:12',sp:'https://open.spotify.com/search/agustD Burn It'},
      {n:7,name:'People',dur:'3:17',sp:'https://open.spotify.com/search/agustD People'},
      {n:8,name:'Honsool',dur:'3:39',sp:'https://open.spotify.com/search/agustD Honsool'},
      {n:9,name:'Interlude: Set me free',dur:'2:20',sp:'https://open.spotify.com/search/agustD Interlude: Set me free'},
      {n:10,name:'Dear my friend',feat:'Kim Jong-wan of NELL',dur:'4:52',sp:'https://open.spotify.com/search/agustD Dear my friend'}]},
  
  'jack-in-the-box':{ 
    title:'Jack In The Box', 
    member:'J-Hope', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#2a2a1a,#5a5f48)', 
    meta:{
      'Lanzamiento':'15 jul, 2022',
      'Artista':'j-hope',
      'Canciones':'10',
      'Singles':'MORE / Arson'}, 
    story:'Una transformación radical. J-Hope abandonó su imagen alegre para explorar sonidos oscuros. Con este disco headlineó Lollapalooza 2022, primer artista coreano en lograrlo.', 
    tracks:[
      {n:1,name:'Intro',dur:'0:58',sp:'https://open.spotify.com/search/j-hope Intro Jack in the Box'},
      {n:2,name:'Pandora´s Box',dur:'2:36',sp:'https://open.spotify.com/search/j-hope Pandora´s Box'},
      {n:3,name:'MORE',dur:'3:00',sp:'https://open.spotify.com/search/j-hope MORE'},
      {n:4,name:'STOP',dur:'2:02',sp:'https://open.spotify.com/search/j-hope STOP'},
      {n:5,name:'= (Equal Sign)',dur:'1:54',sp:'https://open.spotify.com/search/j-hope = (Equal Sign)'},
      {n:6,name:'Music Box : Reflection',dur:'1:10',sp:'https://open.spotify.com/search/j-hope Music Box : Reflection'},
      {n:7,name:'What if...',dur:'2:16',sp:'https://open.spotify.com/search/j-hope What if...'},
      {n:8,name:'Safety Zone',dur:'2:45',sp:'https://open.spotify.com/search/j-hope Safety Zone'},
      {n:9,name:'Future',dur:'2:19',sp:'https://open.spotify.com/search/j-hope Future'},
      {n:10,name:'Arson',dur:'2:39',sp:'https://open.spotify.com/search/j-hope Arson'}]},
  
  'the-astronaut':{ 
    title:'The Astronaut', 
    member:'Jin', type:'Single', 
    gradient:'linear-gradient(135deg,#0a0a2a,#1a2a5a)', 
    meta:{
      'Lanzamiento':'28 oct, 2022',
      'Artista':'Jin',
      'Canciones':'1',
      'Single':'The Astronaut'}, 
    story:'Lanzado con Coldplay, fue el single de despedida de Jin antes del servicio militar. Presentado en vivo en el concierto de Coldplay en Buenos Aires.', 
    tracks:[
      {n:1,name:'The Astronaut',dur:'4:42',sp:'https://open.spotify.com/search/Jin The Astronaut'}]},
  
  'indigo':{ 
    title:'Indigo', 
    member:'RM', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#3C2F2A,#7a5c50)', 
    meta:{
      'Lanzamiento':'2 dic, 2022',
      'Artista':'RM','Canciones':'10',
      'Canciones':'10',
      'Single':'Wild Flower'}, 
    story:'Un archivo de los 20s de RM antes del servicio militar. Con colaboraciones de Anderson .Paak y Erykah Badu, fusiona hip-hop, jazz y soul.', tracks:[
      {n:1,name:'Yun',feat:'Erykah Badu',dur:'3:53',sp:'https://open.spotify.com/search/RM Yun Indigo'},
      {n:2,name:'Still Life',feat:'feat. Anderson .Paak',dur:'2:55',sp:'https://open.spotify.com/search/RM Still Life'},
      {n:3,name:'All Day',feat:'Tablo',dur:'3:06',sp:'https://open.spotify.com/search/RM All Day'},
      {n:4,name:'Forg_tful',feat:'Kim Sawol',dur:'2:42',sp:'https://open.spotify.com/search/RM Forg_tful'},
      {n:5,name:'Closer',feat:'Paul Blanco, Mahalia',dur:'3:16',sp:'https://open.spotify.com/search/RM Closer'},
      {n:6,name:'Change pt.2',dur:'1:54',sp:'https://open.spotify.com/search/RM Change pt.2'},
      {n:7,name:'Lonely',dur:'2:46',sp:'https://open.spotify.com/search/RM Lonely'},
      {n:8,name:'Hectic',feat:'Colde',dur:'3:46',sp:'https://open.spotify.com/search/RM Hectic'},
      {n:9,name:'Wild Flower',feat:'youjeen',dur:'4:33',sp:'https://open.spotify.com/search/RM Wild Flower'},
      {n:10,name:'No.2',feat:'parkjiyoon',dur:'3:13',sp:'https://open.spotify.com/search/RM No.2'}]},
  
  'face':{ 
    title:'FACE', 
    member:'Jimin', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#b0b0b8,#808090)', 
    meta:{
      'Lanzamiento':'24 mar, 2023',
      'Artista':'Jimin',
      'Canciones':'6',
      'Single':'Like Crazy'}, 
    story:'"Like Crazy" fue el primer single solista coreano en alcanzar el #1 en el Billboard Hot 100. FACE explora la identidad y el miedo a enfrentar las propias emociones.', 
    tracks:[
      {n:1,name:'Face-off',dur:'3:49',sp:'https://open.spotify.com/search/Jimin Face-off'},
      {n:2,name:'Interlude: Dive',dur:'2:10',sp:'https://open.spotify.com/search/Jimin Interlude: Dive'},
      {n:3,name:'Like Crazy',dur:'3:32',sp:'https://open.spotify.com/search/Jimin Like Crazy'},
      {n:4,name:'Alone',dur:'3:31',sp:'https://open.spotify.com/search/Jimin Alone FACE'},
      {n:5,name:'Set Me Free Pt. 2',dur:'3:20',sp:'https://open.spotify.com/search/Jimin Set Me Free Pt 2'},
      {n:6,name:'Like Crazy (English Version)',dur:'3:32',sp:'https://open.spotify.com/search/Jimin Like Crazy (English Version)'}]},
  
  'd-day':{ 
    title:'D-DAY', 
    member:'Suga', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#2a2a2a,#4a4a4a)', 
    meta:{
      'Lanzamiento':'21 abr, 2023',
      'Artista':'Agust D (Suga)',
      'Canciones':'10',
      'Singles':'Haiku / People Pt. 2'}, 
    story:'El cierre de la trilogía Agust D. La gira "Agust D Tour" fue la primera gira solista de BTS con shows sold out en todo el mundo.', 
    tracks:[
      {n:1,name:'D-DAY',dur:'3:31',sp:'https://open.spotify.com/search/Agust D D-DAY'},
      {n:2,name:'Haegeum',dur:'2:48',sp:'https://open.spotify.com/search/Agust D Haegeum'},
      {n:3,name:'HUH?!',feat:'J Hope',dur:'3:03',sp:'https://open.spotify.com/search/Agust D HUH?!'},
      {n:4,name:'AMYGDALA',dur:'4:11',sp:'https://open.spotify.com/search/Agust D AMYGDALA'},
      {n:5,name:'SDL',dur:'2:51',sp:'https://open.spotify.com/search/Agust D SDL'},
      {n:6,name:'People Pt.2',feat:'IU',dur:'3:33',sp:'https://open.spotify.com/search/Agust D People Pt.2'},
      {n:7,name:'Polar Night',dur:'2:45',sp:'https://open.spotify.com/search/Agust D Polar Night'},
      {n:8,name:'Interlude: Dawn',dur:'1:45',sp:'https://open.spotify.com/search/Agust D Interlude: Dawn'},
      {n:9,name:'Snooze',feat:'Ryuichi Sakamoto, WOOSUNG',dur:'4:24',sp:'https://open.spotify.com/search/Agust D Snooze'},
      {n:10,name:'Life Goes On',dur:'4:24',sp:'https://open.spotify.com/search/Agust D Life Goes On'}]},
  
  'layover':{ 
    title:'Layover', 
    member:'V', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#c8b890,#8a7550)', 
    meta:{
      'Lanzamiento':'8 sep, 2023',
      'Artista':'V',
      'Canciones':'6',
      'Singles':'Rainy Days / Love Me Again'}, 
    story:'Un disco cálido y jazzístico con influencias del soul de los 70s. "Love Me Again" capturó la melancolía elegante que siempre caracterizó la voz de V.', 
    tracks:[
      {n:1,name:'Rainy Days',dur:'2:59',sp:'https://open.spotify.com/search/V Rainy Days'},
      {n:2,name:'Blue',dur:'2:29',sp:'https://open.spotify.com/search/V Blue Layover'},
      {n:3,name:'Love Me Again',dur:'3:02',sp:'https://open.spotify.com/search/V Love Me Again'},
      {n:4,name:'Slow Dancing',dur:'3:07',sp:'https://open.spotify.com/search/V Slow Dancing'},
      {n:5,name:'For Us',dur:'2:51',sp:'https://open.spotify.com/search/V For Us'},
      {n:6,name:'Slow Dancing (Piano Ver.)',dur:'3:08',sp:'https://open.spotify.com/search/V Slow Dancing (Piano Ver.)'}]},
  
  'golden':{ 
    title:'GOLDEN', 
    member:'Jungkook', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#1a3a1a,#2d6a2d)', 
    meta:{
      'Lanzamiento':'3 nov, 2023',
      'Artista':'Jungkook',
      'Canciones':'11',
      'Singles':'Standing Next to You / 3D'}, 
    story:'"Standing Next to You" y "3D" dominaron listas globales. GOLDEN muestra la versatilidad vocal que siempre distinguió al Golden Maknae.', tracks:[
      {n:1,name:'3D',feat:'Jack Harlow',dur:'3:21',sp:'https://open.spotify.com/search/Jungkook 3D'},
      {n:2,name:'Closer to You',feat:'Major Lazer',dur:'2:50',sp:'https://open.spotify.com/search/Jungkook Closer to You'},
      {n:3,name:'Seven (Explicit Ver.)',dur:'3:03',sp:'https://open.spotify.com/search/Jungkook Seven (Explicit Ver.)'},
      {n:4,name:'Standing Next To You',dur:'3:26',sp:'https://open.spotify.com/search/Jungkook Standing Next to You'},
      {n:5,name:'Yes or No',dur:'2:27',sp:'https://open.spotify.com/search/Jungkook Yes or No'},
      {n:6,name:'Please Don´t Change',feat:'DJ Snake',dur:'2:26',sp:'https://open.spotify.com/search/Jungkook Please Don´t Change'},
      {n:7,name:'Hate You',dur:'2:34',sp:'https://open.spotify.com/search/Jungkook Hate You'},
      {n:8,name:'Somebody',dur:'2:48',sp:'https://open.spotify.com/search/Jungkook Somebody'},
      {n:9,name:'Too Sad to Dance',dur:'2:55',sp:'https://open.spotify.com/search/Jungkook Too Sad to Dance'},
      {n:10,name:'Shot Glass of Tears',dur:'2:47',sp:'https://open.spotify.com/search/Jungkook Shot Glass of Tears'},
      {n:11,name:'Seven (Clean Ver.)',feat:'Latto',dur:'3:03',sp:'https://open.spotify.com/search/Jungkook Seven (Clean Ver.)'}]},
  
  'hope-on-street':{ 
    title:'Hope on the Street Vol.1', 
    member:'J-Hope', 
    type:'EP', 
    gradient:'linear-gradient(135deg,#1a1a2a,#3a3a5a)', 
    meta:{
      'Lanzamiento':'29 mar, 2024',
      'Artista':'j-hope',
      'Canciones':'6',
      'Single':'on the street'}, 
    story:'Un homenaje a los orígenes de J-Hope como bailarín callejero. Captura su amor por la danza antes de BTS y celebra el baile como lenguaje universal.', 
    tracks:[
      {n:1,name:'on the street (solo version)',dur:'3:11',sp:'https://open.spotify.com/search/j-hope on the street (solo version)'},
      {n:2,name:'i wonder...',feat:'Jung Kook',dur:'2:43',sp:'https://open.spotify.com/search/j-hope i wonder...'},
      {n:3,name:'lock / unlock',feat:'benny blanco, Nile Rodgers',dur:'3:01',sp:'https://open.spotify.com/search/j-hope lock unlock'},
      {n:4,name:'i don´t know',feat:'HUH YUNJIN',dur:'3:03',sp:'https://open.spotify.com/search/j-hope i don´t know'},
      {n:5,name:'what if... ',feat:'JINBO',dur:'3:16',sp:'https://open.spotify.com/search/j-hope what if... '},
      {n:6,name:'NEURON',feat:'Gaeko, yoonmirae',dur:'4:33',sp:'https://open.spotify.com/search/j-hope NEURON'}]},
  
  'happy':{ 
    title:'Happy', 
    member:'Jin', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#1a50d8,#3a70f8)', 
    meta:{
      'Lanzamiento':'2 ago, 2024',
      'Artista':'Jin',
      'Canciones':'6',
      'Single':'Running Wild'}, 
    story:'El regreso de Jin tras ser el primero en licenciarse del servicio militar. Un álbum de celebración pura. "Running Wild" se convirtió en himno de libertad.', 
    tracks:[
      {n:1,name:'Running Wild',dur:'2:31',sp:'https://open.spotify.com/search/Jin Running Wild'},
      {n:2,name:'I´ll Be There',dur:'3:01',sp:'https://open.spotify.com/search/Jin I´ll Be There'},
      {n:3,name:'Another Level',dur:'2:42',sp:'https://open.spotify.com/search/Jin Another Level'},
      {n:4,name:'Falling',dur:'2:58',sp:'https://open.spotify.com/search/Jin Falling'},
      {n:5,name:'Heart on the Window',feat:'WENDY',dur:'2:57',sp:'https://open.spotify.com/search/Jin Heart on the Window'},
      {n:6,name:'I will come to you',dur:'2:36',sp:'https://open.spotify.com/search/Jin I will come to you'}]},
  
  'right-place':{ 
    title:'Right Place, Wrong Person', 
    member:'RM', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#f0ede0,#c8c4b0)', 
    meta:{
      'Lanzamiento':'24 may, 2024',
      'Artista':'RM',
      'Canciones':'11',
      'Single':'Come back to me'}, 
      story:'El segundo álbum de RM explora la disonancia. Con un sonido experimental que mezcla pop alternativo y ambient, demuestra su evolución como artista sin fronteras.', 
      tracks:[
        {n:1,name:'Right People, Wrong Place',dur:'1:57',sp:'https://open.spotify.com/search/RM Right People, Wrong Place'},
        {n:2,name:'Nuts',dur:'3:14',sp:'https://open.spotify.com/search/RM Nuts'},
        {n:3,name:'out of love',dur:'2:07',sp:'https://open.spotify.com/search/RM out of love'},
        {n:4,name:'Domodachi',feat:'Little Simz',dur:'3:00',sp:'https://open.spotify.com/search/RM Domodachi'},
        {n:5,name:'? (Interlude)',dur:'1:53',sp:'https://open.spotify.com/search/RM  Interlude'},
        {n:6,name:'Groin',dur:'3:10',sp:'https://open.spotify.com/search/RM Groin'},
        {n:7,name:'Heaven',dur:'3:14',sp:'https://open.spotify.com/search/RM Heaven'},
        {n:8,name:'LOST!',dur:'3:53',sp:'https://open.spotify.com/search/RM LOST!'},
        {n:9,name:'Around the world in a day',feat:'Moses Sumney',dur:'4:17',sp:'https://open.spotify.com/search/RM Around the world in a day'},
        {n:10,name:'ㅠㅠ (Credit Roll)',dur:'1:14',sp:'https://open.spotify.com/search/RM ㅠㅠ (Credit Roll)'},
        {n:11,name:'Come back to me',dur:'6:28',sp:'https://open.spotify.com/search/RM Come back to me'}]},
    
  'Muse':{ 
    title:'Muse', 
    member:'Jimin', 
    type:'Álbum de estudio', 
    gradient:'linear-gradient(135deg,#f0ede0,#c8c4b0)', 
    meta:{
      'Lanzamiento':'19 jul, 2024',
      'Artista':'Jimin',
      'Canciones':'7',
      'Single':'Who'}, 
      story:'Muse muestra el lado más emocional y artístico de Jimin. El álbum combina sonidos suaves, elegantes y modernos mientras explora temas como el amor, la inspiración, la soledad y la conexión humana. Con una atmósfera delicada y sentimental, Muse refleja la sensibilidad vocal y la identidad artística única de Jimin, creando una experiencia íntima y emotiva para quienes lo escuchan.', 
      tracks:[
        {n:1,name:'Rebirth',dur:'2:24',sp:'https://open.spotify.com/search/Jimin Rebirth'},
        {n:2,name:'Interlude: Showtime',dur:'1:18',sp:'https://open.spotify.com/search/Jimin Interlude: Showtime'},
        {n:3,name:'Smeraldo Garden Marching Band',feat:'Loco',dur:'3:02',sp:'https://open.spotify.com/search/Jimin Smeraldo Garden Marching Band'},
        {n:4,name:'Slow Dance',feat:'Sofia Carson',dur:'3:08',sp:'https://open.spotify.com/search/Jimin Slow Dance'},
        {n:5,name:'Be Mine',dur:'3:27',sp:'https://open.spotify.com/search/Jimin  Be Mine'},
        {n:6,name:'Who',dur:'2:50',sp:'https://open.spotify.com/search/Jimin Who'},
        {n:7,name:'Closer Than This',dur:'3:43',sp:'https://open.spotify.com/search/Jimin Closer Than This'}]},
};

const calEvents = [
  { month:'Feb', day:'18', name:'J-Hope cumpleaños', desc:'Jung Hoseok', upcoming:false },
  { month:'Mar', day:'9', name:'Suga cumpleaños', desc:'Min Yoongi — 1993', upcoming:false },
  { month:'Jun', day:'13', name:'Aniversario de debut', desc:'BTS debuta en 2013', upcoming:true },
  { month:'Jul', day:'9', name:'Aniversario de Army', desc:'Army como fandom', upcoming:false },
  { month:'Sep', day:'1', name:'Jungkook cumpleaños', desc:'Jeon Jungkook — 1997', upcoming:false },
  { month:'Sep', day:'12', name:'RM cumpleaños', desc:'Kim Namjoon — 1994', upcoming:false },
  { month:'Oct', day:'13', name:'Jimin cumpleaños', desc:'Park Jimin — 1995', upcoming:false },
  { month:'Dic', day:'4', name:'Jin cumpleaños', desc:'Kim Seokjin — 1992', upcoming:false },
  { month:'Dic', day:'30', name:'V cumpleaños', desc:'Kim Taehyung — 1995', upcoming:false },
];

const allSongs = ['Dynamite','Butter','Permission to Dance','Life Goes On','Spring Day','DNA','Fake Love','IDOL','Boy With Luv','Black Swan','ON','Blood Sweat & Tears','Fire','Save Me','I Need U','Run','Go Go','MIC Drop','Not Today','War of Hormone','Danger','Dope','N.O','No More Dream','Born Singer','Am I Wrong','21st Century Girl','Yet To Come','For Youth','Zero O\'Clock','Magic Shop','The Truth Untold','Epiphany','Euphoria','Serendipity','Singularity','Like Crazy','Seven','Standing Next to You','3D','Rainy Days','Love Me Again','Haiku','Wild Flower','Running Wild','Daydream','Agust D','the last'];

// ─── PLAYER ─────────────────────────────────────────────────────────────────
const playlist = [
  {title:'Dynamite', artist:'BTS'},
  {title:'Butter', artist:'BTS'},
  {title:'Permission to Dance', artist:'BTS'},
  {title:'Spring Day', artist:'BTS'},
  {title:'Blood Sweat & Tears', artist:'BTS'},
  {title:'Boy With Luv', artist:'BTS'},
  {title:'Life Goes On', artist:'BTS'},
  {title:'Yet To Come', artist:'BTS'},
  {title:'DNA', artist:'BTS'},
];
let currentTrack=0, playing=false, progress=0, playerInterval=null;

function showPlayer(){
  document.getElementById('mini-player').classList.remove('hidden');
  document.getElementById('player-toggle').classList.remove('visible');
  loadTrack(currentTrack);
}

function hidePlayer(){
  document.getElementById('mini-player').classList.add('hidden');
  document.getElementById('player-toggle').classList.add('visible');
  if(playerInterval)clearInterval(playerInterval);
  playing=false;
}

function loadTrack(i){
  const t=playlist[i];
  document.getElementById('player-track').textContent=t.title;
  document.getElementById('player-artist').textContent=t.artist;
  progress=0;document.getElementById('player-bar').style.width='0%';
}

function togglePlay(){
  playing=!playing;
  document.getElementById('play-btn').textContent=playing?'⏸':'▶';
  if(playing){
    playerInterval=setInterval(()=>{progress+=0.5;if(progress>=100){nextTrack();
    return;
  }
  document.getElementById('player-bar').style.width=progress+'%';},150);
  
  }else{
    clearInterval(playerInterval);
  }
}

function nextTrack(){
  clearInterval(playerInterval);
  progress=0;
  currentTrack=(currentTrack+1)%playlist.length;
  loadTrack(currentTrack);
  if(playing)togglePlay();
}

function prevTrack(){
  clearInterval(playerInterval);
  progress=0;
  currentTrack=(currentTrack-1+playlist.length)%playlist.length;
  loadTrack(currentTrack);
  if(playing)togglePlay();
}

function seekPlayer(e){
  const rect=e.currentTarget.getBoundingClientRect();
  progress=(e.clientX-rect.left)/rect.width*100;
  document.getElementById('player-bar').style.width=progress+'%';
}

// ─── THEME ──────────────────────────────────────────────────────────────────
function initTheme(){
  const t=localStorage.getItem('bts-theme')||'light';
  document.documentElement.setAttribute('data-theme',t);
  document.getElementById('theme-btn').textContent=t==='dark'?'☀️ Modo':'🌙 Modo';
}

document.getElementById('theme-btn').addEventListener('click',()=>{const cur=document.documentElement.getAttribute('data-theme');
  const next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('bts-theme',next);
  document.getElementById('theme-btn').textContent=next==='dark'?'☀️ Modo':'🌙 Modo';}
);

// ─── SEARCH ─────────────────────────────────────────────────────────────────
document.getElementById('search-btn').addEventListener(
  'click',()=>{document.getElementById('search-overlay').classList.add('open');
  setTimeout(()=>document.getElementById('search-input').focus(),100);}
);

function closeSearchBox(){
  document.getElementById('search-overlay').classList.remove('open');document.getElementById('search-input').value='';
  document.getElementById('search-results').innerHTML='<div class="search-empty">Escribí para buscar...</div>';
}

function closeSearch(e){
  if(e.target===document.getElementById('search-overlay'))closeSearchBox();
}

document.getElementById('search-input').addEventListener('input',function(){
  const q=this.value.toLowerCase().trim();
  if(!q){document.getElementById('search-results').innerHTML='<div class="search-empty">Escribí para buscar...</div>';return;}
  const results=[];
  Object.keys(membersData).forEach(m=>{if(m.toLowerCase().includes(q))results.push({tag:'Integrante',name:m,action:`closeSearchBox();openMemberModal('${m}')`});});
  Object.values(groupAlbums).forEach((a,i)=>{if(a.title.toLowerCase().includes(q))results.push({tag:'Álbum',name:a.title,action:`closeSearchBox();openAlbum('${Object.keys(groupAlbums)[i]}','group')`});});
  Object.values(soloAlbumsData).forEach((a,i)=>{if(a.title.toLowerCase().includes(q)||a.member.toLowerCase().includes(q))results.push({tag:'Solista',name:`${a.member} — ${a.title}`,action:`closeSearchBox();openAlbum('${Object.keys(soloAlbumsData)[i]}','solo')`});});
  allSongs.forEach(s=>{if(s.toLowerCase().includes(q))results.push({tag:'Canción',name:s,action:`closeSearchBox()`});});
  const html=results.length?results.slice(0,8).map(r=>`<div class="search-result-item" onclick="${r.action}"><span class="search-result-tag">${r.tag}</span><span class="search-result-name">${r.name}</span></div>`).join(''):'<div class="search-empty">Sin resultados para "'+q+'"</div>';
  document.getElementById('search-results').innerHTML=html;
});

// ─── MOBILE MENU ────────────────────────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobile-menu').classList.toggle('open'));
function closeMobile(){document.getElementById('mobile-menu').classList.remove('open');}

// ─── FAVORITES ──────────────────────────────────────────────────────────────
let favs=JSON.parse(localStorage.getItem('bts-favs')||'[]');
function toggleFav(name){
  if(favs.includes(name)){favs=favs.filter(f=>f!==name);

  }else{
    favs.push(name);}localStorage.setItem('bts-favs',JSON.stringify(favs));
    updateFavUI();
}

function updateFavUI(){
  document.querySelectorAll('.fav-heart').forEach(btn=>{const name=btn.id.replace('fav-','');
    btn.textContent=favs.includes(name)?'♥':'♡';
    btn.classList.toggle('active',favs.includes(name));});
}

const memberPhotos = {
  "RM": "imagenes/miembros/modal-miembros/rm-fav.webp",
  "Jin": "imagenes/miembros/modal-miembros/jin-fav.webp",
  "Suga": "imagenes/miembros/modal-miembros/suga-fav.webp",
  "J-Hope": "imagenes/miembros/modal-miembros/jhope-fav.webp",
  "Jimin": "imagenes/miembros/modal-miembros/jimin-fav.webp",
  "V": "imagenes/miembros/modal-miembros/v-fav.webp",
  "Jungkook": "imagenes/miembros/modal-miembros/jungkook-fav.webp",
};

// ─── MODALS ─────────────────────────────────────────────────────────────────
function openMemberModal(name){
  const m=membersData[name];
  const photo = memberPhotos[name];
  const av = document.getElementById('mm-avatar');
  if(photo){
    av.style.background = 'none';
    av.style.backgroundImage = 'url(' + photo + ')';
    av.style.backgroundSize = 'cover';
    av.style.backgroundPosition = 'center top';
    av.textContent = '';
  } else {
    av.style.background = m.color;
    av.style.backgroundImage = 'none';
    av.textContent = name[0];
    av.style.color = 'white';
  }
  document.getElementById('mm-name').textContent=name;
  document.getElementById('mm-role').textContent=m.role;
  document.getElementById('mm-bio').textContent=m.bio;
  document.getElementById('mm-facts').innerHTML=Object.entries(m.facts).map(([k,v])=>`<div><div class="modal-fact-label">${k}</div><div class="modal-fact-value">${v}</div></div>`).join('');
  openModal('member-modal');
}

function openAlbum(id,source){
  const a=source==='solo'?soloAlbumsData[id]:groupAlbums[id];
  if(!a)return;
  const coverEl=document.getElementById('am-cover');
  const ci=source==='solo'?soloAlbumCovers[id]:albumCoverImages[id];
  coverEl.removeAttribute('style');
  coverEl.className='album-modal-cover';
  if(ci){coverEl.style.backgroundImage='url('+ci+')';
    coverEl.style.backgroundSize='cover';
    coverEl.style.backgroundPosition='center';
    coverEl.style.minHeight='240px';}
  else{coverEl.style.background=a.gradient;coverEl.style.minHeight='240px';coverEl.innerHTML='<span style="font-family:Cormorant Garamond,serif;font-size:1.8rem;font-weight:300;color:rgba(255,255,255,.85);text-align:center;line-height:1.2;padding:1rem;">'+a.title+'</span>';}
  document.getElementById('am-type').textContent=source==='solo'?`Solista · ${a.member}`:a.type;
  document.getElementById('am-title').textContent=a.title;
  document.getElementById('am-meta').innerHTML=Object.entries(a.meta).map(([k,v])=>`<div class="album-modal-meta-item"><span class="album-modal-meta-label">${k}</span><span class="album-modal-meta-value">${v}</span></div>`).join('');
  document.getElementById('am-story').textContent=a.story;
  const spIcon=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M17 10.2c-2.7-1.6-7.2-1.7-9.8-1-.3.1-.5.4-.4.7.1.3.4.5.7.4 2.3-.7 6.4-.5 8.8.9.3.2.6.1.8-.2.1-.3 0-.6-.1-.8zm-.2 2.3c-.2.3-.6.4-.9.2-2.3-1.4-5.7-1.8-8.4-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 3.1-.9 6.9-.5 9.5 1.1.3.2.4.6.2.9zm-1 2.3c-.2.2-.5.3-.8.1-2-1.2-4.5-1.5-7.4-.8-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.2-.7 6-.4 8.2 1 .3.2.4.5.3.8z" fill="white"/></svg>`;
  document.getElementById('am-tracklist').innerHTML=a.tracks.map(t=>`<li><a class="track-item" href="${t.sp}" target="_blank" rel="noopener"><span class="track-num">${t.n}</span><span class="track-name">${t.name}${t.feat?`<span class="track-feat">${t.feat}</span>`:''}</span><span class="track-duration">${t.dur}</span><span class="track-spotify">${spIcon}</span></a></li>`).join('');
  openModal('album-modal');
}

function openModal(id){
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
}

function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}

function closeOnBackdrop(e,id){
  if(e.target===document.getElementById(id))closeModal(id);
}

// ─── DISC TABS ───────────────────────────────────────────────────────────────
function switchTab(tab,btn){
  document.querySelectorAll('.album-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.disc-panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-'+tab).classList.add('active');
}

// ─── BUILD GRIDS ────────────────────────────────────────────────────────────
function buildGroupGrid(){
  const grid=document.getElementById('group-grid');
  const keys=['2-cool-4-skool','o-rul8-2','skool-luv-affair','dark-wild','hyyh-pt1','hyyh-pt2','young-forever','wings','you-never-walk-alone','ly-her','fake-love','ly-tear','ly-answer','face-yourself','mots-persona','bts-world','lights-bwl','mots','dynamite','be','butter','bts-the-best','proof','arirang'];
  const fallback=['a1','a2','a3','a4','a5','a6','a1','a2','a3','a4','a5','a6','a1','a2','a3','a4','a5','a6','a1','a2','a3','a4','a5','a6'];
  keys.forEach((k,i)=>{
    const a=groupAlbums[k];
    if(!a){console.warn('Album no encontrado:',k);return;}
    const card=document.createElement('div');
    card.className='album-card';
    
    
    const coverDiv=document.createElement('div');
    coverDiv.className='album-cover';

    const ci=albumCoverImages[k];

    if(ci){
      const img=document.createElement('img');
      img.src=ci;
      img.alt=a.title;
      img.loading='lazy';

      coverDiv.appendChild(img);
    }
    else{
      coverDiv.classList.add(fallback[i]||'a1');
    }

    
    const info=document.createElement('div');
    info.innerHTML='<div class="album-year-tag">'+(a.meta['Lanzamiento']||'')+'</div><div class="album-name">'+a.title+'</div><div class="album-type-tag">'+a.type+'</div>';
    card.appendChild(coverDiv);card.appendChild(info);
    card.addEventListener('click',()=>openAlbum(k,'group'));
    grid.appendChild(card);
  });
}

function buildSoloGrid(){
  const grid=document.getElementById('solo-grid');
  const list=[
    {id:'rm-mix',member:'RM',title:'RM',year:'2015',type:'Mixtape'},
    {id:'agust-d',member:'Suga',title:'Agust D',year:'2016',type:'Mixtape'},
    {id:'hope-world',member:'J-Hope',title:'Hope World',year:'2018',type:'Mixtape'},
    {id:'mono',member:'RM',title:'mono.',year:'2018',type:'Playlist'},
    {id:'D-2',member:'Suga',title:'D-2',year:'2020',type:'Mixtape'},
    {id:'jack-in-the-box',member:'J-Hope',title:'Jack In The Box',year:'2022',type:'Álbum'},
    {id:'the-astronaut',member:'Jin',title:'The Astronaut',year:'2022',type:'Single'},
    {id:'indigo',member:'RM',title:'Indigo',year:'2022',type:'Álbum'},
    {id:'face',member:'Jimin',title:'FACE',year:'2023',type:'Álbum'},
    {id:'d-day',member:'Suga',title:'D-DAY',year:'2023',type:'Álbum'},
    {id:'layover',member:'V',title:'Layover',year:'2023',type:'Álbum'},
    {id:'golden',member:'Jungkook',title:'GOLDEN',year:'2023',type:'Álbum'},
    {id:'hope-on-street',member:'J-Hope',title:'Hope on the Street Vol.1',year:'2024',type:'EP'},
    {id:'happy',member:'Jin',title:'Happy',year:'2024',type:'Álbum'},
    {id:'right-place',member:'RM',title:'Right Place, Wrong Person',year:'2024',type:'Álbum'},
    {id:'Muse',member:'Jimin',title:'Muse',year:'2024',type:'Álbum'},
  ];
  
  list.forEach(a=>{
    const card=document.createElement('div');
    card.className='solo-card';
    const coverDiv=document.createElement('div');
    coverDiv.className='solo-cover';
    const ci=soloAlbumCovers[a.id];
    const sd=soloAlbumsData[a.id];
    if(ci){
      const img=document.createElement('img');

      img.src=ci;
      img.alt=a.title;
      img.loading='lazy';

      coverDiv.appendChild(img);
    }
    else if(sd){
      coverDiv.style.background=sd.gradient;
    }
    const info=document.createElement('div');
    info.innerHTML='<div class="solo-member-tag">'+a.member+'</div><div class="solo-title">'+a.title+'</div><div class="solo-year">'+a.year+' · '+a.type+'</div>';
    card.appendChild(coverDiv);card.appendChild(info);
    card.addEventListener('click',()=>openAlbum(a.id,'solo'));
    grid.appendChild(card);
  });
}

function buildCalendar(){
  const grid=document.getElementById('cal-grid');
  calEvents.forEach(e=>{
    const card=document.createElement('div');
    card.className='cal-card';
    card.innerHTML=`<div class="cal-date-box"><div class="cal-month">${e.month}</div><div class="cal-day">${e.day}</div></div><div class="cal-info"><div class="cal-event-name">${e.name}</div><div class="cal-event-desc">${e.desc}</div>${e.upcoming?'<span class="cal-upcoming">Próximo</span>':''}</div>`;
    grid.appendChild(card);
  });
}

// ─── SONG OPTIONS ────────────────────────────────────────────────────────────
function buildSongOptions(filter=''){
  const container=document.getElementById('song-options');
  const journey=JSON.parse(localStorage.getItem('bts-journey')||'{}');
  const favSongs=journey.songs||[];
  const filtered=filter?allSongs.filter(s=>s.toLowerCase().includes(filter.toLowerCase())):allSongs;
  container.innerHTML=filtered.slice(0,24).map(s=>`<button class="song-pick-btn ${favSongs.includes(s)?'selected':''}" onclick="toggleSong('${s}',this)">${s}</button>`).join('');
}
function filterSongs(v){buildSongOptions(v);}
function toggleSong(name,btn){
  const journey=JSON.parse(localStorage.getItem('bts-journey')||'{}');
  let songs=journey.songs||[];
  if(songs.includes(name)){songs=songs.filter(s=>s!==name);btn.classList.remove('selected');}
  else{if(songs.length>=8){alert('Máximo 8 canciones favoritas');return;}songs.push(name);btn.classList.add('selected');}
  journey.songs=songs;
  localStorage.setItem('bts-journey',JSON.stringify(journey));
}

// ─── MEMBER PICK ─────────────────────────────────────────────────────────────
let pickedMember=null;
function pickMember(name){
  pickedMember=name;
  document.querySelectorAll('.member-pick-btn').forEach(b=>{b.classList.toggle('selected',b.textContent===name);});
}

// ─── SAVE JOURNEY ────────────────────────────────────────────────────────────
function saveJourney(){
  if(!pickedMember){alert('Elegí tu integrante favorito primero 💜');return;}
  const journey=JSON.parse(localStorage.getItem('bts-journey')||'{}');
  journey.member=pickedMember;
  localStorage.setItem('bts-journey',JSON.stringify(journey));
  showJourneyResult(journey);
}

function showJourneyResult(journey){
  const m=membersData[journey.member];
  const songs=journey.songs||[];
  const colors={RM:'#C9B8B0',Jin:'#B8CDD6',Suga:'#D4A5A0','J-Hope':'#C5C9B5',Jimin:'#C4B8D4',V:'#D4C5A0',Jungkook:'#B8D4C8'};
  document.getElementById('journey-result').innerHTML=`
    <div class="journey-result-title">Tu perfil BTS</div>
    <div class="journey-result-sub">Guardado localmente 💾</div>
    <div class="journey-fav-member">
      <div class="journey-member-avatar" style="background:${colors[journey.member]||'#C9B8B0'}">${journey.member[0]}</div>
      <div><div style="font-weight:500;font-size:.95rem;color:var(--text)">${journey.member}</div><div style="font-size:.78rem;color:var(--muted)">${m.role}</div></div>
    </div>
    ${songs.length?`<div class="journey-label" style="margin-top:1rem">Tus canciones favoritas</div><div class="journey-fav-songs">${songs.map(s=>`<span class="journey-song-tag">${s}</span>`).join('')}</div>`:'<p style="font-size:.85rem;color:var(--muted);margin-top:1rem">Agregá canciones favoritas arriba ☝️</p>'}
  `;
}

// ─── EXPERIENCIA SONORA ────────────────────────────────────────────────────────────

const sounds = {
  live: {
    text: "BTS en vivo: energía pura en el escenario",
    video: "https://www.youtube.com/embed/x7MJMidLjcA"
  },
  
  onu: {
    text: "Discurso en la ONU: Love Yourself",
    video: "https://www.youtube.com/embed/XgiNOgBPs3k"
  },
  
  army: {
    text: "ARMY cantando junto a BTS",
    video: "https://www.youtube.com/embed/c6bwzBTQ0hY"
  },
  
  award: {
    text: "Momento en que BTS gana un premio",
    video: "https://www.youtube.com/embed/Woi9wTq9_EU"
  },

  Vocal: {
    text: "La mejor Vocal line de la industria",
    video: "https://www.youtube.com/embed/KXvwqtinibk"
  },

  Rap: {
    text: "El Rap fulminante",
    video: "https://www.youtube.com/embed/Mpwe4nXCIFc"
  },

  backstage: {
    text: "Los backstage mas divertidos",
    video: "https://www.youtube.com/embed/4EUyOMwPcQ0"
  },
};

function playSound(type){
  const data = sounds[type];

  document.getElementById("sound-text").textContent = data.text;
  document.getElementById("sound-video").src = data.video;
}

// ─── INIT ────────────────────────────────────────────────────────────────────
initTheme();
buildGroupGrid();
buildSoloGrid();
buildCalendar();
buildSongOptions();
updateFavUI();


// Restore journey
const savedJourney=JSON.parse(localStorage.getItem('bts-journey')||'{}');
if(savedJourney.member){pickMember(savedJourney.member);showJourneyResult(savedJourney);}

// Scroll animations
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:.08});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// ─── LYRICS ────────────────────────────────────────────────────────────────────

const lyricsData = [
  {
    id: 'Answer: Love Myself - BTS',
    quote: 'Amarse a uno mismo no requiere el permiso de alguien mas',
    song: 'Answer: Love Myself',
    artist: 'BTS',
    album: 'Love Yourself: Answer',
    spotify: 'https://open.spotify.com/search/BTS Answer: Love Myself',
    img: 'imagenes/frases de canciones/1.webp',
    color: '#040404 '
  },
  
  {
    id: 'jump-bts',
    quote: 'No importa quién intente detenerme, seguiré mi camino',
    song: 'Jump',
    artist: 'BTS',
    album: 'Skool Luv Affair',
    spotify: 'https://open.spotify.com/search/BTS Jump',
    img: 'imagenes/frases de canciones/2.webp',
    color: '#2d4a2d'
  },

  {
    id: '21st Century Girl - BTS',
    quote: 'Nunca bajes la cabeza. Nunca cambies por el resto',
    song: '21st Century Girl',
    artist: 'BTS',
    album: 'Wings',
    spotify: 'https://open.spotify.com/search/BTS 21st Century Girl',
    img: 'imagenes/frases de canciones/3.webp',
    color: '#e1e1e1'
  },

  {
    id: 'Lost - BTS',
    quote: 'Incluso si voy lento, caminaré por mi propia cuenta',
    song: 'Lost',
    artist: 'BTS',
    album: 'You Never Walk Alone',
    spotify: 'https://open.spotify.com/search/BTS lost',
    img: 'imagenes/frases de canciones/4.webp',
    color: '#6b8d8a'
  },

  {
    id: 'On the street - J Hope',
    quote: 'Avanza con esperanza, a donde sea que camines',
    song: 'On the street',
    artist: 'J Hope',
    album: 'Hope on the Street Vol.1',
    spotify: 'https://open.spotify.com/search/JHope on the street',
    img: 'imagenes/frases de canciones/5.webp',
    color: '#c1c0bf'
  },

  {
    id: 'Wishing On A Star - BTS',
    quote: 'Continúa soñando en grande sin tener miedo',
    song: 'Wishing On A Star',
    artist: 'BTS',
    album: 'Youth',
    spotify: 'https://open.spotify.com/search/BTS Wishing On A Star',
    img: 'imagenes/frases de canciones/6.webp',
    color: '#b4c3bc'
  },

  {
    id: 'Life Goes On - Agust D',
    quote: 'Incluso si sentimos que nada nos esta saliendo como esperamos, todo estará bien',
    song: 'Life Goes On',
    artist: 'Agust D',
    album: 'D-Day',
    spotify: 'https://open.spotify.com/search/AgustD Life Goes On',
    img: 'imagenes/frases de canciones/7.webp',
    color: '#1a1b18'
  },

  {
    id: 'Mikrokosmos - BTS',
    quote: 'No desaparezcas porque tu sola existencia es algo inmenso',
    song: 'Mikrokosmos',
    artist: 'BTS',
    album: 'Map of the Soul: Persona',
    spotify: 'https://open.spotify.com/search/BTS Mikrokosmos',
    img: 'imagenes/frases de canciones/8.webp',
    color: '#eb7c9c'
  },

  {
    id: 'Dope - BTS',
    quote: 'Nunca te rindas, sabes que no estás solo',
    song: 'Dope',
    artist: 'BTS',
    album: '화양연화 Pt.1',
    spotify: 'https://open.spotify.com/search/BTS Dope',
    img: 'imagenes/frases de canciones/9.webp',
    color: '#885b5d'
  },

  {
    id: 'Life goes on - BTS',
    quote: 'No te escondas en la oscuridad porque tu luz volverá a brillar',
    song: 'Life goes on',
    artist: 'BTS',
    album: 'BE',
    spotify: 'https://open.spotify.com/search/BTS Life goes on',
    img: 'imagenes/frases de canciones/10.webp',
    color: '#533c3c'
  },

  {
    id: 'So Far Away - Suga, Jin, Jungkook',
    quote: 'Tus humildes inicios te traerán un futuro próspero',
    song: 'So Far Away',
    artist: 'Suga, Jin, Jungkook',
    album: 'Agust D',
    spotify: 'https://open.spotify.com/search/AgustD So Far Away',
    img: 'imagenes/frases de canciones/11.webp',
    color: '#4c6b83'
  },

  {
    id: 'We are bulletproof - BTS',
    quote: 'Soy una persona fuerte, si quieres tirar mierda, deberías empezar contigo mismo',
    song: 'We are bulletproof',
    artist: 'BTS',
    album: '2 Cool 4 Skool',
    spotify: 'https://open.spotify.com/search/BTS We are bulletproof',
    img: 'imagenes/frases de canciones/12.webp',
    color: '#bb8c4c'
  },

  {
    id: 'N.O - BTS',
    quote: 'No vivas en el sueño de alguien más',
    song: 'N.O',
    artist: 'BTS',
    album: 'O!RUL8,2?',
    spotify: 'https://open.spotify.com/search/BTS N.O',
    img: 'imagenes/frases de canciones/13.webp',
    color: '#d22b23'
  },

  {
    id: 'Epilogue: Young Forever - BTS',
    quote: 'Pero me siento feliz de poder ser quien soy yo. De poder hacer que alguien grite de felicidad',
    song: 'Epilogue: Young Forever',
    artist: 'BTS',
    album: '화양연화 Young Forever',
    spotify: 'https://open.spotify.com/search/BTS Epilogue: Young Forever',
    img: 'imagenes/frases de canciones/14.webp',
    color: '#4ea8b2'
  },

  {
    id: 'For you - BTS',
    quote: 'Siempre estaré aquí. Bajo el mismo cielo que tú',
    song: 'For you',
    artist: 'BTS',
    album: 'Youth',
    spotify: 'https://open.spotify.com/search/BTS For you',
    img: 'imagenes/frases de canciones/15.webp',
    color: '#dedfdf'
  },
];

function buildLyricsGrid() {
  const grid = document.getElementById('lyrics-grid');
  if (!grid) return;

  // Load custom lyrics from localStorage (added via admin)
  const custom = JSON.parse(localStorage.getItem('bts_crud_lyrics') || '[]');
  const all = [...lyricsData, ...custom];

  if (!all.length) {
    grid.innerHTML = '<p style="color:var(--muted);font-style:italic">No hay letras todavía.</p>';
    return;
  }

  all.forEach(l => {
    const card = document.createElement('div');
    card.className = 'lyric-card';
    card.style.setProperty('--lyric-color', l.color || '#3C2F2A');
    card.innerHTML = `
      <div class="lyric-card-inner">
        <div class="lyric-card-quote">${l.quote}</div>
        <div class="lyric-card-song-row">
          <div class="lyric-card-song-info">
            <span class="lyric-card-song">${l.song}</span>
            <span class="lyric-card-artist">${l.artist}</span>
          </div>
          <div class="lyric-spotify-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M17 10.2c-2.7-1.6-7.2-1.7-9.8-1-.3.1-.5.4-.4.7.1.3.4.5.7.4 2.3-.7 6.4-.5 8.8.9.3.2.6.1.8-.2.1-.3 0-.6-.1-.8zm-.2 2.3c-.2.3-.6.4-.9.2-2.3-1.4-5.7-1.8-8.4-1-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 3.1-.9 6.9-.5 9.5 1.1.3.2.4.6.2.9zm-1 2.3c-.2.2-.5.3-.8.1-2-1.2-4.5-1.5-7.4-.8-.3.1-.6-.1-.7-.4-.1-.3.1-.6.4-.7 3.2-.7 6-.4 8.2 1 .3.2.4.5.3.8z" fill="white"/></svg>
          </div>
        </div>
        ${l.img ? `<img class="lyric-card-img" src="${l.img}" alt="${l.song}" loading="lazy">` : ''}
      </div>
    `;
    card.addEventListener('click', () => openLyricModal(l));
    grid.appendChild(card);
  });
}

function openLyricModal(l) {
  const img = document.getElementById('lm-img');
  if (l.img) { img.src = l.img; img.style.display = 'block'; }
  else { img.style.display = 'none'; }
  document.getElementById('lm-quote').textContent = l.quote;
  document.getElementById('lm-song').textContent = l.song;
  document.getElementById('lm-artist').textContent = l.artist;
  document.getElementById('lm-album').textContent = l.album ? '💿 ' + l.album : '';
  document.getElementById('lm-spotify').href = l.spotify || '#';
  document.getElementById('lyric-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLyricModal(e) {
  const overlay = document.getElementById('lyric-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}


buildLyricsGrid();

document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('lyric-overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeLyricModal();
      }
    });
  }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLyricModal();
  }
});

/* ─── ARMY INTERACTIVE ─── */

// Acrónimo interactivo
(function initArmyAcronym() {
  const letters = document.querySelectorAll('.army-letter');
  const panels = document.querySelectorAll('.army-acronym-panel');

  if (!letters.length) return;

  // Activar la primera letra por defecto
  letters[0].classList.add('active');

  letters.forEach(letter => {
    letter.addEventListener('click', () => {
      const info = letter.dataset.info;
      letters.forEach(l => l.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      letter.classList.add('active');
      const target = document.getElementById('ai-' + info);
      if (target) target.classList.add('active');
    });
  });
})();

// Counter animado para stats
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(ease * target);
    el.textContent = prefix + value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Observar stats para animarlos al entrar en pantalla
(function initArmyStats() {
  const statNums = document.querySelectorAll('.army-stat-num');
  if (!statNums.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = '1';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.4 });

  statNums.forEach(n => observer.observe(n));
})();

// Quiz de tipo de ARMY
const armyTypes = {
  creator: {
    type: 'El ARMY Creativo',
    desc: 'Sos el motor visual del fandom. Tus edits, fan arts y videos capturan momentos que los demás solo sueñan expresar. El arte que creás conecta a personas que nunca se van a conocer — eso es magia real.'
  },
  analyst: {
    type: 'El ARMY Intelectual',
    desc: 'Para vos, cada canción es un laberinto lleno de significados. Encontrás referencias a Jung, a Hesse, a mitología que otros pasan por alto. Sos la persona a la que todos le preguntan "¿qué quiso decir BTS con esto?"'
  },
  streamer: {
    type: 'El ARMY Estratega',
    desc: 'Conocés los horarios de los charts, las reglas del Billboard, las ventanas de streaming. Mientras otros duermen, vos sumás plays con método y dedicación. Los #1 de BTS tienen tu nombre invisible en los créditos.'
  },
  activist: {
    type: 'El ARMY con Corazón',
    desc: 'Tomás el mensaje de BTS — amor, aceptación, impacto — y lo llevás al mundo real. Donaciones, campañas, voluntariado. Para vos ser ARMY no es solo escuchar música: es actuar en consecuencia.'
  },
  collector: {
    type: 'El ARMY Coleccionista',
    desc: 'Tu habitación es un altar cuidadosamente curado. Cada photocard tiene historia, cada álbum tiene lugar asignado. Sos el guardián de la memoria física del grupo — y lo hacés con un amor que pocas personas entienden.'
  },
  silent: {
    type: 'El ARMY del Alma',
    desc: 'No necesitás demostrarlo. Sentís todo con una intensidad que pocas palabras pueden describir. La música de BTS vive en tus playlists más íntimas, en los momentos difíciles, en los recuerdos que atesorás. Eso es más que suficiente.'
  }
};

function armyQuiz(type) {
  const btns = document.querySelectorAll('.aq-btn');
  btns.forEach(b => b.classList.remove('selected'));
  event.target.classList.add('selected');

  const result = document.getElementById('army-quiz-result');
  const data = armyTypes[type];
  if (!result || !data) return;

  result.innerHTML = `<div class="aqr-type">💜 ${data.type}</div><p>${data.desc}</p>`;
  result.classList.add('visible');
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* ─── BU UNIVERSE EXPLORER ─── */

const buEras = {
  origin: {
    tag: '2013 · El comienzo',
    title: 'El Origen del BU',
    subtitle: '"No More Dream" — siete chicos, un sueño',
    narrative: 'El BTS Universe no nació con un plan maestro, sino con siete jóvenes y sus historias reales. Desde el debut, las letras hablaban de presión social, sueños y juventud. Con el tiempo, BTS y Big Hit comenzaron a tejer una narrativa ficticia paralela que conectaría cada videoclip como piezas de un rompecabezas. El punto de partida: siete amigos, cada uno cargando un trauma diferente, en el umbral de la adultez.',
    mvs: [
      { name: 'No More Dream', year: '2013', icon: '🎬', ytId: 'rBG5L7UsUxA' },
      { name: 'N.O', year: '2013', icon: '🎬', ytId: 'r5GaAEHvHj0' },
      { name: 'Boy In Luv', year: '2014', icon: '🎬', ytId: 'm8MfJg68oCs' },
    ],
    media: [
      { type: 'Contexto', name: 'The Notes — Vol. 0', desc: 'Primeras entradas del diario de los 7. Fragmentos del pasado antes de que todo se rompa.' },
    ],
    symbols: ['Siete amigos', 'Presión social', 'Sueños vs. expectativas', 'Escuela', 'Rebeldía']
  },
  
  hyyh: {
    tag: '2015 · The Most Beautiful Moment in Life',
    title: 'HYYH · 화양연화',
    subtitle: 'La belleza y la destrucción coexisten',
    narrative: 'La era HYYH (Hwayangnyeonhwa — "el momento más hermoso de la vida") establece el núcleo emocional del BU. Siete jóvenes atrapados entre la belleza y el dolor de la adolescencia. Flores de cerezo y fuego. Jin descubre que puede viajar en el tiempo y entra en un loop intentando salvar a sus amigos de sus propios destinos. Cada videoclip es una ventana a ese instante frágil antes de que todo se rompa.',
    mvs: [
      { name: 'I Need U', year: '2015', icon: '🎬', ytId: 'jjskoRh8GTE' },
      { name: 'Run', year: '2015', icon: '🎬', ytId: 'wKysONrSmew' },
      { name: 'Prologue (short film)', year: '2015', icon: '🎞️', ytId: 'Bt8648TNX1M' },
    ],
    media: [
      { type: 'Webtoon', name: 'Save Me', desc: 'La historia del loop temporal de Seokjin narrada en formato cómic. El punto de partida visual del BU.' },
      { type: 'Novela', name: 'The Notes — Pt. 1', desc: 'Diarios de cada integrante. Fragmentos que llenan los espacios entre los videoclips.' },
    ],
    symbols: ['Flores de cerezo', 'Loop temporal', 'Fuego', 'Espejo', 'El número 7', 'Mariposas']
  },
  
  wings: {
    tag: '2016 · Wings',
    title: 'Wings · La tentación',
    subtitle: '"El pájaro lucha por salir del huevo" — Hermann Hesse',
    narrative: 'Inspirada en "Demian" de Hermann Hesse, Wings muestra a cada joven enfrentando su sombra interior. El mundo del BU se vuelve más oscuro y simbólico: espejos que reflejan alter egos, tentación, caída y posible redención. Cada integrante tiene su propio short film donde enfrenta su trauma de forma única. Para volar, primero hay que romper el cascarón — aunque duela.',
    mvs: [
      { name: 'Blood Sweat & Tears', year: '2016', icon: '🎬', ytId: 'hmE9f-TEutc' },
      { name: 'Short Film: Begin (Jungkook)', year: '2016', icon: '🎞️', ytId: 'yR73I0z5ms0' },
      { name: 'Short Film: Lie (Jimin)', year: '2016', icon: '🎞️', ytId: '_y8-HD5O69g' },
      { name: 'Short Film: Stigma (V)', year: '2016', icon: '🎞️', ytId: '3i34dFsjRY4' },
    ],
    media: [
      { type: 'Referencia literaria', name: 'Demian — Hermann Hesse', desc: 'El libro que inspira toda la era. La dualidad entre la luz y la sombra, el yo y el alter ego.' },
      { type: 'Novela', name: 'The Notes — Wings', desc: 'Entradas cruzadas donde los traumas se revelan con más detalle.' },
    ],
    symbols: ['Demian · Hesse', 'Alter ego', 'Espejo partido', 'Alas', 'Caída', 'Manzana', 'Tentación']
  },
  
  ly: {
    tag: '2017–2018 · Love Yourself',
    title: 'Love Yourself',
    subtitle: 'Her → Tear → Answer: el ciclo del amor propio',
    narrative: '"Her" es el enamoramiento — ese momento en que otro parece completarte. "Tear" es la ruptura: el dolor cuando esa ilusión se desmorona. "Answer" es la resolución: la comprensión de que solo cuando te amás a vos mismo podés amar verdaderamente a otro. En el BU, la narrativa de Jin y el loop se profundiza. El discurso de RM en la ONU — "Speak Yourself" — lleva el mensaje del álbum al mundo real.',
    mvs: [
      { name: 'DNA', year: '2017', icon: '🎬', ytId: 'MBdVXkSdhwU' },
      { name: 'Fake Love', year: '2018', icon: '🎬', ytId: '7C2z4GqqS5E' },
      { name: 'IDOL', year: '2018', icon: '🎬', ytId: 'pBuZEGYXA6E' },
      { name: 'Euphoria (short film)', year: '2018', icon: '🎞️', ytId: 'kX0vO4vlJuU' },
    ],
    media: [
      { type: 'Discurso ONU', name: 'Speak Yourself — RM', desc: 'RM habla ante la Asamblea General de la ONU sobre amor propio e identidad. El BU trasciende la ficción.' },
      { type: 'Novela', name: 'The Notes — LY', desc: 'La historia de cada integrante avanza hacia el punto de quiebre y la posible sanación.' },
    ],
    symbols: ['Amor propio', 'Espejo', 'Euforia', 'Pétalos', 'Unicornio', 'Speak Yourself']
  },
  
  mots: {
    tag: '2019–2020 · Map of the Soul',
    title: 'Map of the Soul',
    subtitle: 'Persona · Sombra · Ego — Jung en la música',
    narrative: 'Incorpora la psicología analítica de Carl Jung: la Persona (la máscara que mostramos al mundo), la Sombra (lo reprimido que negamos), y el Ego (el yo consciente que debe integrarlos). Cada integrante representa un arquetipo jungiano. La pregunta central: ¿quién sos cuando nadie te mira? "Persona" pregunta, "Shadow" confronta, "7" celebra la integración. El BU alcanza su mayor profundidad filosófica.',
    mvs: [
      { name: 'Boy With Luv (feat. Halsey)', year: '2019', icon: '🎬', ytId: 'XsX3ATc3FbA' },
      { name: 'Black Swan', year: '2020', icon: '🎬', ytId: '0lapF4DQPKQ' },
      { name: 'ON', year: '2020', icon: '🎬', ytId: 'mPVDGOVjRQ0' },
    ],
    media: [
      { type: 'Referencia', name: 'Carl Jung — Psicología analítica', desc: 'La Persona, la Sombra y el Self como estructura de todo el álbum. BTS llevó la filosofía al pop global.' },
      { type: 'Novela', name: 'The Notes — MOTS', desc: 'El loop de Jin llega a su momento más complejo. Las líneas temporales se cruzan.' },
    ],
    symbols: ['Persona · Sombra · Ego', '7 arquetipos', 'Máscara', 'Carl Jung', 'Integración', 'Cisne negro']
  },
  
  expanded: {
    tag: 'Medios expandidos',
    title: 'El Universo Más Allá',
    subtitle: 'Webtoon, novelas, juego — el BU en todos los formatos',
    narrative: 'El BTS Universe no vive solo en los videoclips. Big Hit construyó un ecosistema narrativo completo que expande, profundiza y a veces contradice lo que vemos en pantalla. El webtoon "Save Me", las novelas "The Notes", el juego "BTS Universe Story" y los Concept Books son piezas de un puzzle que los fans llevan años armando. Cada medio agrega capas que los demás no revelan.',
    mvs: [],
    media: [
      { type: 'Webtoon', name: 'Save Me (Lezhin)', desc: 'La historia del loop temporal de Jin en formato manhwa. Dibujado y publicado oficialmente por Big Hit.' },
      { type: 'Novela', name: 'The Notes 1 & 2', desc: 'Diarios de los 7 integrantes con entradas cruzadas. La fuente más completa del lore del BU.' },
      { type: 'Juego', name: 'BTS Universe Story', desc: 'Juego mobile de aventura donde los fans podían crear y jugar historias dentro del universo narrativo del BU.' },
      { type: 'Libro', name: 'Concept Book — HYYH', desc: 'Libro oficial con imágenes y texto que expande la narrativa visual de la era más emblemática.' },
    ],
    symbols: ['Webtoon', 'The Notes', 'Lore expandido', 'Fan theories', 'Manhwa', 'BU Story']
  },
  
  saveme: {
    tag: '∞ · El loop eterno',
    title: 'Save Me · El Loop',
    subtitle: 'Todo vuelve al principio — y eso es lo hermoso',
    narrative: 'Seokjin descubre que puede viajar en el tiempo. Ve morir a sus amigos. Vuelve atrás. Intenta salvarlos. Falla de otra manera. Vuelve atrás otra vez. El loop no tiene salida — o quizás la tiene, pero requiere que todos elijan sanar al mismo tiempo. "Save Me" es el título del webtoon, de una canción, y del concepto central del BU: el tiempo no es lineal, la memoria es un campo de batalla, y el amor puede doblar la realidad. El universo termina donde empieza — y siempre está comenzando.',
    mvs: [
      { name: 'Save Me', year: '2016', icon: '🎬', ytId: 'GZjt_sA2eso' },
      { name: 'Spring Day', year: '2017', icon: '🎬', ytId: 'xEeFrLSkMm8' },
      { name: "Zero O'Clock", year: '2020', icon: '🎵', ytId: 'sBWesVezIrc' },
    ],
    media: [
      { type: 'Concepto central', name: 'El loop de Jin', desc: 'Jin es el único que recuerda los loops. Cada intento de salvar a sus amigos genera una nueva línea temporal.' },
      { type: 'Símbolo', name: 'La flor de loto invertida', desc: 'Símbolo recurrente del BU: belleza que emerge del lodo, ciclos, muerte y renacimiento.' },
    ],
    symbols: ['Loop temporal', 'Líneas temporales', 'Memoria', 'Seokjin', 'Paradoja', 'Flor de loto', '∞']
  }
};

function renderBuConnections() {
  const map = document.getElementById('bu-map');
  const svg = document.getElementById('bu-svg');
  if (!map || !svg) return;

  const connections = [
    ['origin', 'hyyh'],
    ['origin', 'wings'],
    ['origin', 'ly'],
    ['hyyh', 'mots'],
    ['wings', 'mots'],
    ['ly', 'expanded'],
    ['mots', 'saveme'],
    ['expanded', 'saveme'],
  ];

  const mapRect = map.getBoundingClientRect();

  function getNodeCenter(era) {
    const node = map.querySelector(`[data-era="${era}"]`);
    if (!node) return null;
    const style = node.getAttribute('style');
    const leftMatch = style.match(/left:([\d.]+)%/);
    const topMatch = style.match(/top:([\d.]+)%/);
    if (!leftMatch || !topMatch) return null;
    return {
      x: (parseFloat(leftMatch[1]) / 100) * map.offsetWidth,
      y: (parseFloat(topMatch[1]) / 100) * map.offsetHeight
    };
  }

  svg.innerHTML = '';
  svg.setAttribute('viewBox', `0 0 ${map.offsetWidth} ${map.offsetHeight}`);

  connections.forEach(([a, b]) => {
    const from = getNodeCenter(a);
    const to = getNodeCenter(b);
    if (!from || !to) return;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', from.x);
    line.setAttribute('y1', from.y);
    line.setAttribute('x2', to.x);
    line.setAttribute('y2', to.y);
    line.setAttribute('stroke', 'var(--border)');
    line.setAttribute('stroke-width', '1.5');
    line.setAttribute('stroke-dasharray', b === 'saveme' ? '4 4' : 'none');
    svg.appendChild(line);
  });
}

function openBuEra(era) {
  const data = buEras[era];
  if (!data) return;

  document.querySelectorAll('.bu-node').forEach(n => n.classList.remove('active'));
  const activeNode = document.querySelector(`[data-era="${era}"]`);
  if (activeNode) activeNode.classList.add('active');

  const hasMvs = data.mvs && data.mvs.length > 0;
  const hasMedia = data.media && data.media.length > 0;

  const mvsHtml = hasMvs ? data.mvs.map(mv =>
    `<li class="bu-mv-item" ${mv.ytId ? `onclick="openYtModal('${mv.ytId}','${mv.name}','${data.tag}')"` : ''} style="${mv.ytId ? 'cursor:pointer' : 'cursor:default'}">
      <span class="bu-mv-icon">${mv.icon}</span>
      <span class="bu-mv-name">${mv.name}</span>
      <span class="bu-mv-year">${mv.year}</span>
      ${mv.ytId ? '<span style="font-size:.65rem;color:var(--accent);letter-spacing:.1em;text-transform:uppercase;flex-shrink:0">▶ Ver</span>' : ''}
    </li>`
  ).join('') : '<li style="font-size:.82rem;color:var(--muted);padding:.5rem 0">No hay videoclips específicos en esta categoría.</li>';

  const mediaHtml = hasMedia ? `<div class="bu-media-grid">${data.media.map(m =>
    `<div class="bu-media-card"><div class="bu-media-type">${m.type}</div><div class="bu-media-name">${m.name}</div><p class="bu-media-desc">${m.desc}</p></div>`
  ).join('')}</div>` : '<p style="font-size:.82rem;color:var(--muted)">Sin medios específicos.</p>';

  const symbolsHtml = data.symbols.map(s => `<span class="bu-symbol-tag">${s}</span>`).join('');

  const detail = document.getElementById('bu-detail');
  detail.innerHTML = `
    <div class="bu-era-panel">
      <div class="bu-era-header">
        <span class="bu-era-tag">${data.tag}</span>
        <div class="bu-era-title">${data.title}</div>
        <div class="bu-era-subtitle">${data.subtitle}</div>
      </div>
      <div class="bu-tabs">
        <button class="bu-tab active" onclick="switchBuTab(event,'narrative')">Narrativa</button>
        <button class="bu-tab" onclick="switchBuTab(event,'mvs')">Videoclips</button>
        <button class="bu-tab" onclick="switchBuTab(event,'media')">Medios</button>
        <button class="bu-tab" onclick="switchBuTab(event,'symbols')">Símbolos</button>
      </div>
      <div class="bu-tab-content active" id="bu-tab-narrative">
        <p class="bu-narrative-text">${data.narrative}</p>
      </div>
      <div class="bu-tab-content" id="bu-tab-mvs">
        <ul class="bu-mv-list">${mvsHtml}</ul>
      </div>
      <div class="bu-tab-content" id="bu-tab-media">${mediaHtml}</div>
      <div class="bu-tab-content" id="bu-tab-symbols">
        <div class="bu-symbols">${symbolsHtml}</div>
      </div>
    </div>`;
}

function switchBuTab(e, tab) {
  const panel = document.getElementById('bu-detail');
  panel.querySelectorAll('.bu-tab').forEach(t => t.classList.remove('active'));
  panel.querySelectorAll('.bu-tab-content').forEach(c => c.classList.remove('active'));
  e.target.classList.add('active');
  const target = panel.querySelector(`#bu-tab-${tab}`);
  if (target) target.classList.add('active');
}

(function initBuExplorer() {
  const nodes = document.querySelectorAll('.bu-node');
  if (!nodes.length) return;

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      openBuEra(node.dataset.era);
    });
  });

  // Dibujar conexiones al cargar y al redimensionar
  setTimeout(renderBuConnections, 100);
  window.addEventListener('resize', renderBuConnections);
})();

/* ─── YT MODAL ─── */
function openYtModal(ytId, title, eraLabel) {
  const overlay = document.getElementById('yt-overlay');
  const iframe = document.getElementById('yt-iframe');
  const titleEl = document.getElementById('yt-title');
  const eraEl = document.getElementById('yt-era-label');
  if (!overlay || !iframe) return;

  titleEl.textContent = title;
  eraEl.textContent = eraLabel;
  iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeYtModal() {
  const overlay = document.getElementById('yt-overlay');
  const iframe = document.getElementById('yt-iframe');
  if (!overlay) return;
  overlay.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('yt-overlay');
  const closeBtn = document.getElementById('yt-close');
  if (closeBtn) closeBtn.addEventListener('click', closeYtModal);
  if (overlay) overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeYtModal();
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeYtModal();
});

