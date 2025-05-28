const players = [
    {
        id: "1",
        firstName: 'Burt',
        lastName: 'Obeng',
        position: 'Fish',
        placement: '1st',
        photo: '/imgs/BURT.jpg',
        hiddenDetail: 'An actor, firefighter, math professor, heavyweight boxer, gym coach, and personal fitness trainer. He claims to have an IQ of 160 and that he is recognized by mensa. He is the most endorsed fish ever and the Winner of season 3'
    },{
        id: "2",
        firstName: 'Binx',
        lastName: '',
        position: 'Fish',
        placement: '2nd',
        photo: '/imgs/BINX.jpg',
        hiddenDetail: 'Bianca "Binx" Garcia is a twitch streamer and content creator. She finished in 2nd place, as the runner-up behind season winner Burt in the finale'
    },{
        id: "3",
        firstName: 'Payton',
        lastName: 'B',
        position: 'Fish',
        placement: '3rd',
        photo: '/imgs/PAYTON.png',
        hiddenDetail: 'She is a model and a volleyball player from Texas. She used to work at Starbucks as a barista in 2021. Came in 3rd place on Fishtank Season 3.'
    },{
        id: "4",
        firstName: 'Simbal',
        lastName: 'Karma',
        position: 'Fish',
        placement: '4th',
        photo: '/imgs/SIMBAL.png',
        hiddenDetail: 'Simbal Karma is a contestant who competed on season 3 of Fishtank. He was eliminated on Day 30 and finished in 4th place among the original cast, and 17th among the Famous House 2.0 cast'
    },{
        id: "5",
        firstName: 'Mizzy',
        lastName: 'Gill',
        position: 'Fish',
        placement: '5th',
        photo: '/imgs/MIZZY.png',
        hiddenDetail: 'Marissa "Mizzy" Gill is a dynamic individual known for her artistic ambitions and bold personality. She is an aspiring actor, musician, painter who finished 5th on season 3 of Fishtank'
    },{
        id: "6",
        firstName: 'Alex',
        lastName: 'Bernard',
        position: 'Fish',
        placement: '6th',
        photo: '/imgs/ALEX.jpg',
        hiddenDetail: 'Alex B was an eccentric character known for constantly talking and often exaggerating or even fabricating stories. eliminated 6th place due to not understanding what the show was and leaving because he though he was being held hostage.'
    },{
        id: "7",
        firstName: 'LaRon',
        lastName: 'Sneed',
        position: 'Fish',
        placement: '7th',
        photo: '/imgs/LARON.png',
        hiddenDetail: 'LaRon Sneed is a contestant who competed on season 3 of Fishtank. He quit on Day 14 after the reveal of the true show they were on and finished in 7th place'
    },{
        id: "8",
        firstName: 'Alexis',
        lastName: 'Young',
        position: 'Fish',
        placement: '8th',
        photo: '/imgs/ALEXIS.png',
        hiddenDetail: 'Alexis is a contestant who competed on season 3 of Fishtank. She quit on Day 14 after the reveal of the true show they were on and finished in 8th place'
    },{
        id: "9",
        firstName: 'Smack',
        lastName: '',
        position: 'Fish',
        placement: '8th',
        photo: '/imgs/SMACK.png',
        hiddenDetail: 'Smaack is an Afro-Latina and former foster youth from Santa Cruz, California, currently residing in Seattle, Washington. She was removed from the show because production thought she was too nice of a person for the nature of the show and didnt deserve to go through the more intense parts.'
    },{
        id: "10",
        firstName: 'Ted',
        lastName: 'Mosby',
        position: 'Fish',
        placement: '9th',
        photo: '/imgs/TED.jpg',
        hiddenDetail: 'Ted is a contestant who competed on season 3 of Fishtank. He was ejected on Day 9 after being outted as a fishtank fan who snuck onto the show and finished in 10th place'
    },{
        id: "11",
        firstName: 'Ian',
        lastName: 'Chen',
        position: 'Fish',
        placement: '10th',
        photo: '/imgs/IAN.png',
        hiddenDetail: 'Ian is a contestant who competed on season 3 of Fishtank. He was voted out by the cast on Day 7 for being too boring and finished in 11th place'
    },{
        id: "12",
        firstName: 'Luke',
        lastName: 'Valentine',
        position: 'Contestant/Loader',
        placement: '11th/2nd',
        photo: '/imgs/LUKE.jpg',
        hiddenDetail: 'Luke Valentine is a contestant who competed on season 3 of Fishtank. Before Fishtank he was part of big brother but got kicked off the show because he said some things he shouldnt have said. He was initially eliminated on Day 5 and finished in 12th place but came back for the famous house reboot and stayed until the end of the show. '
    },{
        id: "13",
        firstName: 'Jobe',
        lastName: '',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs/JOBE.png',
        hiddenDetail: 'Jobe is a freeloader who appeared on season 3 of Fishtank. After his tenure as a freeloader, he became a crew member for the seasons third act'
    },{
        id: "14",
        firstName: 'Connor',
        lastName: 'Rush',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs/CONNOR.png',
        hiddenDetail: 'Connor is a wrestler and former cop. He arrived on day 12 and put on an alpha male persona, but eventually developed a close friendship with the fish. He left the show with alex during his big freak out.'
    },{
        id: "15",
        firstName: 'Frank',
        lastName: 'Hassle',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs/FRANK.png',
        hiddenDetail: 'Frank Hassle is a controversial internet personality and content creator known for his confrontational and provocative public videos. He was introduced to fishtank in season one and became a reocurring freeloader every season. He is put into the house usually twoards the end with the main goal of harrasing the fish and pushing everyone to their limit.'
    },{
        id: "16",
        firstName: 'Jeremy',
        lastName: 'Gold',
        position: 'Host',
        placement: 'none',
        photo: '/imgs/JEREMY.png',
        hiddenDetail: 'Real name Sam Hyde, is an American comedian. He is a co-founder of the sketch comedy group Million Dollar Extreme (MDE), alongside Nick Rochefort and Charls Carroll. Hyde co-created produced the series World Peace, and was a host of the reality series Fishtank.'
    },{
        id: "17",
        firstName: 'Jet',
        lastName: 'Neptune',
        position: 'Producer',
        placement: 'none',
        photo: '/imgs/JET.png',
        hiddenDetail: 'Jet Neptune is the co-creator, director and an executive producer of Fishtank. He is also credited as an editor for the shows edited episodes'
    },{
        id: "18",
        firstName: 'Ben',
        lastName: 'Taylor',
        position: 'Producer',
        placement: 'none',
        photo: '/imgs/BEN.png',
        hiddenDetail: 'Benjamin Taylor, also known as Ben Bush, is a producer for Fishtank'
    },
]