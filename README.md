# JSONFile
A Node.js JSON file reader, writer, and modifier.

## Usage
Initialize: <br>
```const jsonFile = new JSONFile(filePath, initialData);```

Read: <br>
```const data = jsonFile.read();```

Write: <br>
```jsonFile.write({foo: 'bar'});```

Modify: <br>
```jsonFile.modify({foo: 'car'});```

Example: <br>

```
const jsonFile = new JSONFile('./Data.json', {
  "name": "John",
  "age": 35,
  "email": "john@example.com",
  "phone": "+1-123-456-7890",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  }
});

jsonFile.modify({name: "Alex", available: true});
console.log(jsonFile.read());
```
