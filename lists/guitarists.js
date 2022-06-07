const topGuitarists = {
    "no name": {
        dob: "noBirthday", 
        death: "noDeath",
        bands: ['no', 'bands'],
        alias: ['no', 'aliases'],
        songs: ["no", "songs"],
        genres: ["no", "genres"],
        website: "https://www.google.com",
        solo: "https://www.youtube.com"
    }, 
    "jimi hendrix": {
        dob: "November 27, 1942", 
        death: "September 18, 1970",
        bands: ['Jimi Hendrix Experience', 'Curtis Knight and the Squires', 'the Isley Brothers', 'Little Richard'],
        alias: ["James Marshall Hendrix", "Johnny Allen Hendrix", "Buster", "Young Jimmy"],
        songs: ["Hey Joe", "Purple Haze", "The Wind Cries Mary"],
        genres: ["rock", "psychedelic rock", "hard rock", "blues", "r&b"],
        website: "https://www.jimihendrix.com/",
        solo: "https://www.youtube.com/watch?v=qFfnlYbFEiE"
    }, 
    "eric clapton": {
        dob: "March 30, 1945",
        death: null,
        bands: ['Yardbirds', 'Cream', 'Derek and the Dominos', 'John Mayall & The Bluesbreakers', 'Blind Faith', 'Delaney & Bonnie', 'Plastic Ono Band'],
        alias: ['Slowhand', 'God'],
        songs: ['Layla', 'Tears in Heaven', 'I Shot the Sheriff', 'Change the World', "My Father's Eyes", "Wonderful Tonight"],
        genres: ['rock', 'blues'],
        website: "https://www.ericclapton.com",
        solo: 'https://www.youtube.com/watch?v=fX5USg8_1gA'
    },
    "jimmy page": {
        dob: "January 9, 1944",
        death: null,
        bands: ['Led Zeppelin', 'Yardbirds', 'XYZ', 'Firm', 'Honeydrippers', 'Coverdale-Page', 'Page and Plant'],
        alias: ['Lord of the Riffs', 'Pagey', 'Magic Fingers'],
        songs: ['Stairway to Heaven', "Rock 'n Roll", ],
        genres: ['rock', 'blues', 'folk', 'hard rock', 'heavy metal'],
        website: "https://www.jimmypage.com",
        solo: 'https://www.youtube.com/watch?v=xbhCPt6PZIU'
    },
    "keith richards": {
        dob: "December 18, 1943",
        death: null,
        bands: ['The Rolling Stones'],
        alias: ['Keef', 'The Human Riff'],
        songs: ['Angie', "(I Can't Get No) Satisfaction", 'Paint it Black', "You Can't Always Get What You Want"],
        genres: ['rock', 'blues', 'blues rock', 'rock and roll', 'rhythm and blues', 'hard rock'],
        website: "https://www.keithrichards.com",
        solo: 'https://www.youtube.com/watch?v=nVrdXUHvsF0'
    },
    "jeff beck": {
        dob: "June 24, 1944",
        death: null,
        bands: ['Yardbirds', 'Jeff Beck Group', 'Beck, Bogert & Appice', 'Nightshift', 'Rumbles'],
        alias: ['oneoneone'],
        songs: ['Escape', 'Hound Dog', 'Hi-Heel Sneakers', ],
        genres: ['rock', 'instrumental rock', 'jazz fusion'],
        website: "https://www.jeffbeck.com",
        solo: ['https://www.youtube.com/watch?v=M0J_ffTcPv4', 'https://www.youtube.com/watch?v=DVc4RSjnb00']
    },
    "b.b. king": {
        dob: "September 16, 1925",
        death: "May 14, 2015",
        bands: ['one'],
        alias: ['The King of Blues'],
        songs: ['The Thrill is Gone', 'Lucille', ''],
        genres: ['electric blues', 'rhythm and blues', 'rock and roll', 'soul', 'gospel'],
        website: "https://www.bbking.com",
        solo: ['https://www.youtube.com/watch?v=SgXSomPE_FY', 'https://www.youtube.com/watch?v=FMEzFgCLv8c']
    },
    "chuck berry": {
        dob: "november231233",
        death: "october2314",
        bands: ['one'],
        alias: ["The Father of Rock 'n' Roll", "The Prime Minister of Rock 'n' Roll", "The King of Rock 'n' Roll"],
        songs: ['Johnny B Good', 'Memphis Tennessee', 'My Ding-A-Ling'],
        genres: ['rock and roll', 'rhythm and blues'],
        website: "https://www.chuckberry.com",
        solo: ['https://www.youtube.com/watch?v=T38v3-SSGcM', 'https://www.youtube.com/watch?v=KrbPlr4Wskc', 'https://www.youtube.com/watch?v=UaEC-lWSlmI']
    },
    "eddie van halen": {
        dob: "January 26, 1955",
        death: "October 6, 2020",
        bands: ['Van Halen'],
        alias: null,
        songs: ['Jump', 'Panama', 'Hot for Teacher'],
        genres: ['hard rock', 'heavy metal', 'glam metal'],
        website: "https://wwww.eddivanhalenstore.com",
        solo: ['https://www.youtube.com/watch?v=L9r-NxuYszg', 'https://www.youtube.com/watch?v=YbsYc3UNdZ4']
    },
    "duane allman": {
        dob: "November 20, 1946",
        death: "October 29, 1971",
        bands: ['The Allman Brothers Band', 'Hour Glass', 'The Allman Joys'],
        alias: ['Skydog'],
        songs: ['Whipping Post' ],
        genres: ['blues', 'rock', 'jazz', 'jam', 'soul', 'southern rock'],
        website: "https://www.allmanbrothersband.com",
        solo: ['https://www.youtube.com/watch?v=FUvxRjYqjEQ', 'https://www.youtube.com/watch?v=Fyhyor0yU3o']
    },
    "pete townshend": {
        dob: "May 19, 1945",
        death: null,
        bands: ['The Who', 'Deep End', 'the Detours'],
        alias: ['Bijou Drains'],
        songs: ["I Can See For Miles", 'My Generation', "Baba O'Riley", "Won't Get Fooled Again"],
        genres: ['rock', 'art rock', 'hard rock', 'power pop', 'jazz'],
        website: "https://www.thewho.com",
        solo: ['https://www.youtube.com/watch?v=UDfAdHBtK_Q', 'https://www.youtube.com/watch?v=5HTVMh7fur4', 'https://www.youtube.com/watch?v=qjN5uHRIcjM']
    },

}

module.exports = topGuitarists