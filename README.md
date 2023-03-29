# JSONFile
Asynchronous Node.js JSON file reader, writer, and modifier.

## Usage
Initialize: <br>
```const jsonFile = await new JSONFile(filePath, initialData);```

Read: <br>
```const data = await jsonFile.read();```

Write: <br>
```await jsonFile.write({foo: 'bar'});```

Modify: <br>
```await jsonFile.modify({foo: 'car'});```

Example: <br>

```
const jsonFile = await new JSONFile('./Data.json', {
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

await jsonFile.modify({name: "Alex", available: true});
console.log(await jsonFile.read());
```
