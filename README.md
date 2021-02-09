
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

# Dev
| npm run-script dev-run

# Run
| npm run-script run