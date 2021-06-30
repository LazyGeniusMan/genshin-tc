const db = require('genshin-db');
const csvFormat = require('@fast-csv/format');

module.exports ={
    //Get data from genshin-db
    getData : function (type, query, level, ascended) {
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
    },

    generateCSVData : function (type) {
        switch (type) {
            case 'character-stats':
                //List names that will be generated
                let nameList = module.exports.getData('character', 'names');
                module.exports.generateCharaStats(nameList);
                break;
            case 'character-talents':
                break;    
            case 'weapon-stats':
                break;
            case 'weapon-passive':
                break;
            default:
                break;
        }
    },

    generateCharaStats : function (nameList) {
        //Map for rename csv header
        let keyHeader = new Map();
        keyHeader.set('level', 'Level');
        keyHeader.set('ascension', 'Ascension');
        keyHeader.set('hp', 'HP');
        keyHeader.set('attack', 'ATK');
        keyHeader.set('defense', 'DEF');
        keyHeader.set('substat', 'Ascension Stat');
        keyHeader.set('specialized', 'Ascension Value');
        //WHEN FINISHED replace i with "nameList.length"
        for (let i = 0; i < 1; i++) {
            const charaName = nameList[i];
            console.log(charaName);
            //WHEN FINISHED replace level 1 with 90
            for (let level = 1; level <= 1; level++) {
                let charaStats = module.exports.getData('character-stats', charaName, level);
                let charaProfile = module.exports.getData('character', charaName);
                //Add character ascension stat to charaStats object
                Object.assign(charaStats, {'substat' : charaProfile['substat']});
                //Rename object keys for CSV header
                for (let [key, value] of keyHeader.entries()) {
                    module.exports.renameObjectKey(charaStats, key, value);
                    }
                function writeCSV() {
                
                }
            
            }
        }
    },

    renameObjectKey : function (objectName, oldKey, newKey) {
        delete Object.assign(objectName, {[newKey]: objectName[oldKey] })[oldKey];
    }
}