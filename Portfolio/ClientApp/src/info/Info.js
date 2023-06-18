import self from "../img/self.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

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
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}