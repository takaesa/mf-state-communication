export interface Film{
    id: number;
    name: string;
    type: string[];
    description: string;
    image: string;
    releaseDate: Date;
}

const films: Film[] = [
    {
        id: 1,
        name: 'La Palma',
        type: ['Drama'],
        description: 'A Norwegian family vacationing in La Palma faces chaos when a researcher discovers imminent volcanic eruption signs that could trigger a massive tsunami',
        image: "file:///C:/Users/Hii/Desktop/mf-state-communication/server/public/1992.webp",
        releaseDate: new Date('2010-07-16')
    },
    {
        id: 2,
        name: '1992',
        type: ['Drama', 'Action', 'Thriller'],
        description: 'After her husband dies in an explosion, a grieving widow and a haunted ex-cop investigate a series of murders with sinister ties to the Seville Expo',
        image: "file:///C:/Users/Hii/Desktop/mf-state-communication/server/public/1992.webp",
        releaseDate: new Date('2010-07-16')
    },
    {
        id: 3,
        name: 'One Hundred Years of Solitude',
        type: ['Epic', 'Fantasy Epic', 'Historical Epic', 'Drama'],
        description: 'In the timeless town of Macondo, seven generations of the Buendía family navigate love, oblivion and the inescapability of their past and their fate',
        image: "file:///C:/Users/Hii/Desktop/mf-state-communication/server/public/Solitude.webp",
        releaseDate: new Date('2021-11-1')
    },
    {
        id: 4,
        name: 'Senna',
        type: ['Drama', 'Sport', 'Biography', 'Motosport'],
        description: 'Fictional miniseries based on the life of Ayrton Senna da Silva, the Brazilian racing legend who won the Formula One World Drivers. Championship three times',
        image: "file:///C:/Users/Hii/Desktop/mf-state-communication/server/public/Senna.webp",
        releaseDate: new Date('2024-12-16')
    },
    {
        id: 5,
        name: '1992',
        type: ['Drama', 'Romantic', 'History', 'Political Drama'], 
        description: 'Two young people meet. A fateful encounter - the proverbial love at first sight. He is Emperor Franz Joseph of Austria-Hungary, she is Elisabeth von Wittelsbach, Princess of Bavaria and the sister of the woman Franz is to marry.',
        image: "file:///C:/Users/Hii/Desktop/mf-state-communication/server/public/TheEmpress.webp",
        releaseDate: new Date('2024-11-10')
    }

  ];

export default films;