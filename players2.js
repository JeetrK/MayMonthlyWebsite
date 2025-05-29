const players = [
    {
        id: '19',
        firstName: 'TJ',
        lastName: 'James',
        position: 'Fish',
        placement: '1st',
        photo: '/imgs2/TJ.png',
        hiddenDetail: 'TJ, also known as Thomas, is a contestant who appeared on season 2 of Fishtank. The winner of season 2, he won in the finale against Shinji and Tayleigh.'
    },{
        id: '20',
        firstName: 'Shinji',
        lastName: 'K',
        position: 'Fish',
        placement: '2nd',
        photo: '/imgs2/SHINJI.png',
        hiddenDetail: 'Shinji Kawasaki is a contestant who appeared on season 2 of Fishtank. He finished as the runner-up in 2nd place despite barely knowing english. He is the second most endorsed fish in fishtank history despite losing in the finale to the winner, TJ.'
    },{
        id: '21',
        firstName: 'Tayleigh',
        lastName: 'P',
        position: 'Fish',
        placement: '3rd',
        photo: '/imgs2/TAYLEIGH.png',
        hiddenDetail: 'Tayleigh, also known as Tay, is a contestant who appeared on season 2 and season 2.5 of Fishtank. In season 2, she finished in 3rd place during the finale.'
    },{
        id: '22',
        firstName: 'Trisha',
        lastName: 'Brielle',
        position: 'Fish',
        placement: '4th',
        photo: '/imgs2/TRISHA.png',
        hiddenDetail: 'Trisha Brielle, also known as Trish, is a contestant who appeared on season 2 of Fishtank. She finished in 4th place. She is the only fish ever that was allowed to stay in the house after elimination.'
    },{
        id: '23',
        firstName: 'Jimmy',
        lastName: 'Downey',
        position: 'Fish',
        placement: '5th',
        photo: '/imgs2/JIMMY.png',
        hiddenDetail: 'Jimmy Downey was a contestant on fishtank known for his weird personality and anger issues. He was kickced off the show after throwing a mallot at Abi over a toy phone she took from him.'
    },{
        id: '24',
        firstName: 'Brian',
        lastName: 'Maloney',
        position: 'Fish',
        placement: '6th',
        photo: '/imgs2/BRIAN.png',
        hiddenDetail: 'Brian Maloney is a contestant who appeared on season 2 of Fishtank and finished in 6th place. He was kicked off for not trying hard enough'
    },{
        id: '25',
        firstName: 'Cole',
        lastName: 'Dennis',
        position: 'Fish',
        placement: '7th',
        photo: '/imgs2/COLE.png',
        hiddenDetail: 'Cole Dennis is a contestant who appeared on season 2 of Fishtank. He finished in 7th place. He was kicked off the show for reasons never really explained, some speculate he was kicked for talking about season 1 and not listening to production.'
    },{
        id: '26',
        firstName: 'Summer',
        lastName: 'P',
        position: 'Fish',
        placement: '9th',
        photo: '/imgs2/SUMMER.png',
        hiddenDetail: 'Summer Pelkey is a contestant who appeared on season 2 of Fishtank. She finished in 10th place. She was removed from the show by production because she was not mentally well enough to be on the show, after being eliminated she was sent to a mental hospital and continued to try and get back on the show. she sent production 40 minutes worth of voice memos that contained insane ramblings about nothing.'
    },{
        id: '27',
        firstName: 'JC',
        lastName: 'Chiang',
        position: 'Fish',
        placement: '10th',
        photo: '/imgs2/JC.png',
        hiddenDetail: 'JC Chiang is a contestant who appeared on season 2 of Fishtank. She finished in 9th place. She is the youngest contestant to ever be on fishtank and was the only fish in season 2 who didnt know anything about the show, she left after the first challenge.'
    },{
        id: '28',
        firstName: 'Taylor',
        lastName: 'Lewis',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/TAYLOR.png',
        hiddenDetail: 'Taylor is a freeloader who appeared on season 2 of Fishtank. She joined the house on day 11, and was removed on day 15.'
    },{
        id: '29',
        firstName: 'Nifty',
        lastName: '',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/NIFTY.png',
        hiddenDetail: 'Nifty is a freeloader who appeared in season 2 and season 3 of Fishtank. She was brought on the show purely because she was annoying.'
    },{
        id: '30',
        firstName: 'Abi',
        lastName: 'Britney',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/ABI.png',
        hiddenDetail: 'Abi made her debut on day 20 of season 2, entering the house under the pseudonym Britney. She quickly developed a complex relationship with Jimmy.'
    },{
        id: '15',
        firstName: 'Frank',
        lastName: 'Hassle',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/FRANKS2.png',
        hiddenDetail: 'Frank Hassle is a controversial internet personality and content creator known for his confrontational and provocative public videos. He was introduced to fishtank in season one and became a reocurring freeloader every season. He is put into the house usually twoards the end with the main goal of harrasing the fish and pushing everyone to their limit.'
    },{
        id: '31',
        firstName: 'Tai',
        lastName: 'Nguyen',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/TAI.png',
        hiddenDetail: 'Tai Nguyen, also known as Simon, is a freeloader who appeared on season 1 and season 2 of Fishtank. He also competed on season 2.5. he was kicked off season 2 because he was winning too much.'
    },{
        id: '32',
        firstName: 'Dunyay',
        lastName: 'E',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/DUNYAY.png',
        hiddenDetail: 'Duanye, also spelled Duanyay, is a freeloader who appeared on season 2 of Fishtank. He holds the record for the longest running freeloader on fishtank and stayed until the end.'
    },{
        id: '33',
        firstName: 'Oliver',
        lastName: '',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/OLIVER.png',
        hiddenDetail: 'Oliver is a freeloader who appeared on Season 2 of Fishtank. He entered the house on January 9 and remained there until the finale on January 28.'
    },{
        id: '34',
        firstName: 'Mr.Beast/Greg',
        lastName: '',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/GREG.png',
        hiddenDetail: 'Greg LeCates, also known as Fake Mr. Beast or Skitzy, is a YouTuber/Streamer who is well-known for portraying MrBeast in the Squid Game vs MrBeast rap battle. He was brought onto the show to do his mrbeast bit and was supposed to be there for one day only but production kept convincing him to stay despite him contantly wanting to leave, he ended up staying until the end of the show.'
    },{
        id: '35',
        firstName: 'Chris',
        lastName: '',
        position: 'Freeloader',
        placement: 'none',
        photo: '/imgs2/CHRIS.png',
        hiddenDetail: 'Chris, better known online as Airsoftfatty, is an American YouTube vlogger and comedian. He is a freeloader who comes back every season and is a fishtank staple for his tantrums and excentric personality.'
    },{
        id: "16",
        firstName: 'Judge Jedidiah',
        lastName: 'Goldstriker',
        position: 'Host',
        placement: 'none',
        photo: '/imgs2/JUDGE.png',
        hiddenDetail: 'Real name Sam Hyde, is an American comedian. He is a co-founder of the sketch comedy group Million Dollar Extreme (MDE), alongside Nick Rochefort and Charls Carroll. Hyde co-created produced the series World Peace, and was a host of the reality series Fishtank.'
    },{
        id: "17",
        firstName: 'Jet',
        lastName: 'Neptune',
        position: 'Producer',
        placement: 'none',
        photo: '/imgs2/JET2.png',
        hiddenDetail: 'Jet Neptune is the co-creator, director and an executive producer of Fishtank. He is also credited as an editor for the shows edited episodes'
    },{
        id: '18',
        firstName: 'Ben',
        lastName: 'Taylor',
        position: 'Producer',
        placement: 'none',
        photo: '/imgs2/BEN.png',
        hiddenDetail: 'Benjamin Taylor, also known as Ben Bush, is a producer for Fishtank'
    },
]