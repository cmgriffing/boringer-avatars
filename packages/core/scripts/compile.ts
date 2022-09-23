import * as path from "path";
import * as fs from "fs-extra";
import { spawnSync } from "child_process";
import * as mustache from "mustache";
import packageJson from "../package.json";

const mitosisFiles = [
  "avatar",
  "avatars/avatar-bauhaus",
  "avatars/avatar-marble",
  "avatars/avatar-beam",
  "avatars/avatar-pixel",
  "avatars/avatar-sunset",
  "avatars/avatar-ring",
];

// const targets = ["angular", "react", "svelte", "vue3", "solid"];

enum Target {
  Angular = "angular",
  React = "react",
  Svelte = "svelte",
  Vue3 = "vue3",
  Solid = "solid",
}

const extensionMap: Record<Target, string> = {
  [Target.Angular]: "ts",
  [Target.React]: "tsx",
  [Target.Svelte]: "svelte",
  [Target.Vue3]: "vue",
  [Target.Solid]: "tsx",
};

Object.values(Target).forEach((target) => {
  const outputDir = path.resolve(process.cwd(), "../../", target);
  const componentExtension = extensionMap[target];

  fs.ensureDirSync(outputDir);

  mitosisFiles.forEach((filePrefix) => {
    const fileName = `${filePrefix}.${componentExtension}`;
    spawnSync(
      `pnpm mitosis compile  -t=${target} --out=${path.resolve(
        outputDir,
        fileName
      )} src/${filePrefix}.lite.tsx`
    );

    const utilsFileName = `${filePrefix}.utils.ts`;
    const utilsFilePath = path.resolve(process.cwd(), "src", utilsFileName);
    if (fs.existsSync(utilsFilePath)) {
      const outputUtilsFilePath = path.resolve(outputDir, utilsFileName);
      fs.copyFileSync(utilsFilePath, outputUtilsFilePath);
    }
  });

  outputPackageJson(target, outputDir);
});

interface Dependency {
  name: string;
  version: string;
}

interface PackageJsonContext {
  target: Target;
  version: string;
  dependencies: () => string;
  devDependencies: () => string;
}

const dependenciesMap: Record<Target, Dependency[]> = {
  [Target.Angular]: [],
  [Target.React]: [],
  [Target.Svelte]: [],
  [Target.Vue3]: [],
  [Target.Solid]: [],
};
const devDependenciesMap: Record<Target, Dependency[]> = {
  [Target.Angular]: [],
  [Target.React]: [],
  [Target.Svelte]: [],
  [Target.Vue3]: [],
  [Target.Solid]: [],
};

function outputPackageJson(target: Target, outputDirectory: string) {
  const packageJsonTemplate = fs.readFileSync(
    path.resolve(__dirname, "templates/package.json.mustache"),
    { encoding: "utf8" }
  );

  const dependencies = dependenciesMap[target];
  const devDependencies = devDependenciesMap[target];

  const context: PackageJsonContext = {
    target,
    version: packageJson.version,
    dependencies: () => {
      return renderDependencyList(dependencies);
    },
    devDependencies: () => {
      return renderDependencyList(devDependencies);
    },
  };

  const rendered = mustache.render(packageJsonTemplate, context);

  fs.outputFileSync(path.resolve(outputDirectory, "package.json"), rendered);
}

function renderDependencyList(dependencies: Dependency[]): string {
  return (
    dependencies
      .map(
        ({ name, version }) => `
    "${name}": "${version}"
  `
      )
      .join(",\n") + "\n"
  );
}
