import lokijs from 'lokijs'

console.log('Starting lockiDB')
const db = new lokijs('Db.db', {
    autoload: true,
    autoloadCallback: () => { },
    autosave: true,
    autosaveInterval: 4000
});

db.addCollection("collections")
const collections = db.getCollection("collections")
collections.insert(
    [
        {
            id: 1,
            name: 'Person1'
        },
        {
            id: 2,
            name: 'Person2'
        },
        {
            id: 3,
            name: 'Person3'
        },
    ]
)

export default db
