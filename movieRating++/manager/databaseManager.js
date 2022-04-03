import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("database.db");

export default class DatabaseManager {
    static initializeDatabase() {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists\
                    user (\
                        id integer primary key autoincrement not null,\
                        name text not null\
                        mail text not null\
                );"
            );
        }, (e) => { console.log("ERREUR + " + e) },
            () => { console.log("OK + ") }
        );
    }
  
}