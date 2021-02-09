
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

# Run
npm run-script dev-run