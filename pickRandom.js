function pickRandom() {
    var wordsarray= [
        'Sandalia',
        'Salamin',
        'Pie',
        'General',
        'Meneo',
        'Mano',
        'Perreo',
        'Caracol',
        'Condon',
        'Canabaceas',
        'Bilirrubina',
        'Caramelo',
        //add from here:
        'Jamaiquino',
        'Pendorcho',
        'Media',
        'Escroto',
        'Sandía',
        'Panafresco',
        'Sardinas',
        'Color',
        'Paja',
        'Choripan',
        //to here.
        //update2
        'Pungueo',
        'Talco',
        //updated2
        'Internet',
        'Policia',
        'Camión',
        'Los ojos',
        'Los pelotudos',
        'Calcio',
        'Ventilación',
        'Parlamento',
        'Paperas',
        'Astronomia',
        'Cabernet',
        'Camello',
        'Tuco',
        'Pedagogia',
        'Evento',
        'Cultura',
        'Mangalga',
        'Porpocól',
    ];
            var wordsarray2= ['marginal',
            'burgues',
            'catodico',
            'boss',
            'sulfurico',
            'hipertensa',
            'medieval',
            'redoblante',
            'diabetico',
            'informativa',
            'sabor a miel',
            'Prolifericas',
            'alta',
            //add from here:
            'colimbera',
            'tumbera',
            'tumbero',
            'lunatico',
            'penetrante',
            'Asexual',
            'fundente',
            'audible',
            'inaudible',
            'pajero',
            'metaforico',
            'metaforica',
            //to here.
            //update2
            'Estable',
            'penetrado',
            //updated2
            'Fucsia',
            'Marron',
            'con dulce de leche',
            'Carmesi',
            'Mental',
            'Iberico',
            'subliminal',
            'Sovietico Nazi',
            'del perro sin ver anos',
            'del fondo',
            'Segregante',
            'acuática',
            'Porteño',
            'Astronautas',
            'Glacial',
            'vencido',
            'hueco',
            'recalcitrante',
            'Simulada',
            'Antihigienico',
            'Salamanca',
            'Transversal',
            'Sanitario',
            ];
    var randomnumber = Math.floor(Math.random() * wordsarray.length);
    var randomnumber2 = Math.floor(Math.random() * wordsarray2.length);
    //document.write(wordsarray[randomnumber]+" "+wordsarray2[randomnumber2]);
    var randomthing = (wordsarray[randomnumber]) + " " + (wordsarray2[randomnumber2])
    //alert(randomthing)
    document.getElementById('printing').innerHTML = randomthing
    console.log(randomthing)
    }
