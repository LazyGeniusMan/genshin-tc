const db = require('genshin-db');

//Get data from genshin-db
function getData(type, query, level, ascended) {
    switch (type) {
        case 'character':
            return db.character(query, { matchCategories: true });
            break;
        case 'character-stats':
            return db.character(query).stats(level, ascended);
            break;    
        case 'weapon':
            return db.weapon(query, { matchCategories: true });
            break;
        case 'weapon-stats':
            return db.weapon(query).stats(level, ascended);
            break;
        default:
            break;
    }
}