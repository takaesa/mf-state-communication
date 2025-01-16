export interface Film{
    id: number;
    name: string;
    type: string[];
    description: string;
    image: string;
    releaseDate: Date;
    trailer: string;
}

const films: Film[] = [
    {
        id: 1,
        name: 'La Palma',
        type: ['Drama', 'Action', 'Thriller'],
        description: 'A Norwegian family vacationing in La Palma faces chaos when a researcher discovers imminent volcanic eruption signs that could trigger a massive tsunami',
        image: "http://192.168.137.1:8081/Palma.webp",
        releaseDate: new Date('2010-07-16'),
        trailer: "https://www.youtube.com/embed/2zFVoLQyWjc?si=pcZzCWGkYc56QLNK"
    },
    {
        id: 2,
        name: '1992',
        type: ['Drama', 'Action', 'Thriller'],
        description: 'After her husband dies in an explosion, a grieving widow and a haunted ex-cop investigate a series of murders with sinister ties to the Seville Expo',
        image: "http://192.168.137.1:8081/1992.webp",
        releaseDate: new Date('2010-07-16'),
        trailer: "https://www.youtube.com/embed/s9u7pR70-Lg?si=CucWJ0IoqoggVpna",
    },
    {
        id: 3,
        name: 'One Hundred Years of Solitude',
        type: ['Epic', 'Fantasy Epic', 'Historical Epic', 'Drama'],
        description: 'In the timeless town of Macondo, seven generations of the Buendía family navigate love, oblivion and the inescapability of their past and their fate',
        image: "http://192.168.137.1:8081/Solitude.webp",
        releaseDate: new Date('2021-11-1'),
        trailer: "https://www.youtube.com/embed/vG45GfgD2JU?si=sdFnsXCFXWnmJam4"
    },
    {
        id: 4,
        name: 'Senna',
        type: ['Drama', 'Sport', 'Biography', 'Motosport'],
        description: 'Fictional miniseries based on the life of Ayrton Senna da Silva, the Brazilian racing legend who won the Formula One World Drivers. Championship three times',
        image: "http://192.168.137.1:8081/Senna.webp",
        releaseDate: new Date('2024-12-16'),
        trailer: "https://www.youtube.com/embed/_jMIULxyT4w?si=rs4uDOKGiBp957KQ"
    },
    {
        id: 5,
        name: 'The Empress',
        type: ['Drama', 'Romantic', 'History', 'Political Drama'], 
        description: 'Two young people meet. A fateful encounter - the proverbial love at first sight. He is Emperor Franz Joseph of Austria-Hungary, she is Elisabeth von Wittelsbach, Princess of Bavaria and the sister of the woman Franz is to marry.',
        image: "http://192.168.137.1:8081/TheEmpress.webp",
        releaseDate: new Date('2024-11-10'),
        trailer: "https://www.youtube.com/embed/6KMmZc49lXE?si=LxM8QkZPKyHJEUAk"  
    }

  ];

export default films;