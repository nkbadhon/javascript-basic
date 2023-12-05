const lyrics = 'Amar shonar Bangla, ami tomay valobashi';

const doesExist = lyrics.includes('amar');
console.log(doesExist);

const lyricsLower = lyrics.toLowerCase();
const doesExist2 = lyricsLower.includes('amar')


console.log(doesExist2);
console.log(lyrics.indexOf('shonar'));