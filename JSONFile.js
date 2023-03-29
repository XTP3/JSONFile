const fs = require('fs');

module.exports = class JSONFile {
    constructor(filePath, defaultData = {}) {
        this.filePath = filePath;
        if(!fs.existsSync(filePath)) {
            try {
                fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
            }catch(error) {
                console.error(`Error creating file: ${filePath}\n`, error);
            }
        }
    }

    read() {
        try {
            const data = fs.readFileSync(this.filePath);
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error reading file: ${this.filePath}\n`, error);
            return null;
        }
    }

    write(data) {
        try {
            const jsonData = JSON.stringify(data, null, 2);
            fs.writeFileSync(this.filePath, jsonData);
        } catch (error) {
            console.error(`Error writing file: ${this.filePath}\n`, error);
        }
    }

    modify(jsonData) {
        let existingData = this.read();
        if (!existingData) {
            existingData = {};
        }
        const combinedData = { ...existingData, ...jsonData };
        this.write(combinedData);
    }
}
