
# Setup

Create "src/ConfigKeys.ts"

```
interface ConfigKeys {
    apiKey: string;
    secret: string;
}
  
const configKeys: ConfigKeys = {
    apiKey: "xxx",
    secret: "xxx"
};
  
export default configKeys;
```

# Build & Run

### Auto Compile
| tsc -w

### Auto Run
| nodemon dist/index.js --delay 2

