import self from "../img/self.jpg"
import mongo from "../img/MongoDB_Logo.svg.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Dima",
    lastName: "Lukyanov",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'looking for a place to stay'
        },
        {
            emoji: "💼",
            text: "Lead .NET Engineer"
        },
        {
            emoji: "📧",
            text: "dzima.lukyanau@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/dm.lukyanov/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/dm_lk",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/DmitryLukyanov",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/dmitry-lukyanov-51550538/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://stackoverflow.com/users/9492730/dododo",
            icon: "fa fa-stack-overflow",
            label: 'stackoverflow'
        }
    ],
    bio: "Hey! I'm Dima. I'm a backend engineer who can in frount-end. " +
         "I love all kinds of technologies and living close to a beach so I can drink my coffee every morning while looking at the waves!",
    skills:
        {
            proficientWith: ['.NET', 'Mongo', 'Azure', 'Sql', 'Bash'],
            exposedTo: ['node', 'F#', 'ML']
        }
    ,
    hobbies: [
        {
            label: 'programming',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
    ],
    portfolio: [
        {
            title: "MongoDB",
            live: "https://mongodb.com",
            source: "https://github.com/mongodb/mongo-csharp-driver",
            image: mongo
        }
    ]
}