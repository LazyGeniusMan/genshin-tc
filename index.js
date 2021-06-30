const db = require('genshin-db');
const csvFormat = require('@fast-csv/format');

//Get data from genshin-db
function getData(type, query, level, ascended) {
    switch (type) {
        case 'character':
            return db.characters(query, { matchCategories: true });
            break;
        case 'character-stats':
            return db.characters(query).stats(level, ascended);
            break;
        case 'character-talents':
            return db.talents(query);
            break;    
        case 'weapon':
            return db.weapons(query, { matchCategories: true });
            break;
        case 'weapon-stats':
            return db.weapons(query).stats(level, ascended);
            break;
        default:
            break;
    }
}