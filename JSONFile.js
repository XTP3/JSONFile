const fs = require('fs').promises;

module.exports = class JSONFile {
    constructor(path, jsonData = null) {
        this.path = path;
        this.jsonData = jsonData;
    
        this.createFileIfNotExists().then(() => {
            console.log(`JSON file '${this.path}' is ready to use`);
        }).catch((err) => {
            console.error(`Error creating JSON file '${this.path}': ${err}`);
        });
    }
    
    async createFileIfNotExists() {
        try {
            await fs.access(this.path, fs.constants.F_OK);
        }catch(err) {
            await this.write(this.jsonData || {});
        }
    }

    read = async () => JSON.parse(await fs.readFile(this.path, 'utf8'));

    write = async data => fs.writeFile(this.path, JSON.stringify(data, null, 2));

    modify = async jsonData => this.write({ ...await this.read(), ...jsonData });
}
