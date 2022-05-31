const fs = require("fs");
const { exit, argv } = require("process");
const {
  errmsg,
  startmsg,
  infomsg,
  successmsg,
  endmsg,
  warnmsg,
} = require("./tools.config.js");

function usage() {
  console.log(
    infomsg(
      "Creates a new react component to the components folder with the given name"
    )
  );
  console.log(infomsg("usage: npm run cc -- [componentName]"));
  console.log(infomsg("    eg.: npm run cc -- MyComponent"));
}

function createComponent() {
  console.log(startmsg("tools/createComponent.js"));

  if (argv.length <= 2) {
    usage();
    console.log(errmsg("missing argument [componentName]"));
    console.log(endmsg("tools/createComponent.js"));
    exit(1);
  }

  const componentName = argv[2];
  const componentPath = `./src/components/${componentName}.tsx`;
  const indexPath = "./src/components/index.tsx";

  if (fs.existsSync(componentPath)) {
    console.log(errmsg("Component with this name already exists"));
    console.log(endmsg("tools/createComponent.js"));
    exit(1);
  }

  if (componentName.charAt(0) !== componentName.charAt(0).toUpperCase()) {
    console.log(warnmsg("Component name starts with lowercase letter!"));
  }

  console.log(infomsg(`Creating component "${componentName}"...`));
  fs.writeFileSync(
    componentPath,
    `import React, { FC } from "react";\n\nexport const ${componentName}: FC = () => {\n  return <>${componentName}</>;\n};`
  );
  console.log(successmsg(`Component "${componentName}" is created!`));

  console.log(infomsg(`Adding component "${componentName}" to index...`));
  fs.appendFileSync(indexPath, `export * from "./${componentName}";`);
  console.log(successmsg(`Component "${componentName}" is added to index!`));

  console.log(endmsg("tools/createComponent.js"));
}

createComponent();
