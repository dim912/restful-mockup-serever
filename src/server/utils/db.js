import lokijs from 'lokijs'


console.log('Starting lockiDB')
const db = new lokijs('Db.db', {
    autoload: true,
    autoloadCallback: () => { },
    autosave: true,
    autosaveInterval: 4000
});

export default db
