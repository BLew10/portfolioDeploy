export const projectInfo = [
    {
        title: "Palette Genie",
        videos: [
            {
                id: 1,
                src: "https://www.youtube.com/watch?v=pp5UhcTrJyw",
                description: "Full Description"
            }
        ],
        youtube: "https://www.youtube.com/watch?v=pp5UhcTrJyw",
        github: "https://github.com/BLew10/ColorPalette",
        technologies: "React, C#,  OpenAI API, Tailwind, Material UI, Axios, MySQL, Chroma.js",
        description: "Palette Genie is a palette generator tool that enables users to create custom palettes, save other users' palettes, or generate palettes using AI  ",
        highlights: [
            "Frontend was built using React to optimize component rendering"
            ,
            "Backend was built wit C# due to its statically typed nature, limiting errors thus making the application easier to maintain"
            ,
            "Accelerated development by utilizing multiple prebuilt Material UI components",
            "Employed the OpenAI API to respond appropriately to user inputs regarding the desired number of colors and palette style",
            "Leveraged the functionality of Chroma.js to easily access, manipulate and use color characteristics"
        ],
        bgColor: "ffcae0",
  
        isWireFrame: false
    },
    {
        title: "Play Action Picks",
        videos: [
            {
                id: 1,
                src: "https://youtu.be/Ak27r2yO9rs",
                description: "Creating A League"
            },
            {
                id: 2,
                src: "https://youtu.be/nzHTNO5HpUY",
                description: "Validations"
            },
            {
                id: 3,
                src: "https://youtu.be/IixEAH6skBU",
                description: "Dashboard"
            },
            {
                id: 4,
                src: "https://youtu.be/JKzyc4Jdc9c",
                description: "Joining A League"
            },
            {
                id: 4,
                src: "https://youtu.be/1dK1QNWXJjI",
                description: "Displaying League Info and Editing Ability for League Commissioner"
            },
        ],
        youtube: "https://youtu.be/fOZ-j2fXxWI",
        github: "https://github.com/BLew10/confidence_pickem.git",
        technologies: "MongoDB, Express, React, Node.js, Tailwind, Axios AWS",
        description: "Play Action Picks gamified NFL pick’em platform where friends can compete to see who’s the best at selecting which teams will win each week.",
        highlights: [
            "Used Axios to make HTTP request to SportsRadarAPI to retrieve live NFL data and to handle client to server communication",
            "Prioritized security by implementing Bcrypt to encrypt sensitive user information and by leveraging the power of JSON Web tokens to securely transmit information between the client and server"
            ,
            "Powered by the React library to create a dynamic user experience and limit page redirects and refreshes"
            ,
            "Developed backend validations to verify information being submitted",
            "Architected a responsive design with Tailwind for a consistent user experience"
        ],
        bgColor: "3c68ff",
        deployed: "http://3.17.205.149/",
        isWireframe: false
    },
    {
        title: "Trade Champs",
        videos: [
            {
                id: 1,
                src: "https://youtu.be/t_kGaduQnpI",
                description: "Landing Page"
            },
            {
                id: 2,
                src:"https://youtu.be/eYirt8FGBUU",
                description: "Trade Calculator"
            },
            {
                id: 3,
                src: "https://youtu.be/qh8WKO5rtTM",
                description: "Pulling Sleeper Leagues via their API and displaying desired league"
            }
        ],
        youtube: "https://youtu.be/6mj-xygIpg4",
        github: "https://github.com/BLew10/trade_champs.git",
        technologies: "Python, Flask, MySQL, Jinja2,  Javascript,  Tailwind, AWS",
        description: "Trade Champs is an application designed for fantasy football players to help with their fantasy roster decisions",
        highlights: [
            " Integrated Sleeper App API data via Python requests to get users, players, rosters and leagues",
            "Stored relevant player information for over 15000 NFL players into MySQL via Sleeper API"
            ,
            "Leveraged Flask framework for routing and quick implementation of different features using Jinja2 syntax."
            ,
            "Employed Javascript to create a more dynamic UX"
        ],
        bgColor: "ffcae0",
        deployed: "http://3.144.154.242/",
        isWireFrame: false
    },
    
    {
        title: "WireFrames",
        isWireFrame: true,
        bgColor: "ff3535",
        projects: [
            {
                title: "Tesla Clone",
                description: "E-commerce site with product details, add-to-cart functionality and more!",
                videos: [{
                    id: 1,
                    src: "https://youtu.be/cD0Z4NTCnSk",
                    description: "Mobile Version"
                },
                {
                    id: 2,
                    src: "https://youtu.be/LxRrAGAs6M0",
                    description: "Desktop Version"
                }
                ],
                github: "https://github.com/BLew10/Tesla",
                technologies: "React, Tailwind"
            }

        ],

    }

];

//ff3535 27996b 3c68ff ffd438 fb3434

