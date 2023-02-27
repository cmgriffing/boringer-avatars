import * as path from "path";
import * as fs from "fs-extra";
import { spawnSync, execSync } from "child_process";
import * as mustache from "mustache";
import packageJson from "../package.json";
import { glob } from "glob";
try {
  const mitosisFiles = [
    "avatar",
    "avatars/avatar-bauhaus",
    "avatars/avatar-beam",
    "avatars/avatar-marble",
    "avatars/avatar-pixel",
    "avatars/avatar-sunset",
    "avatars/avatar-ring",
  ];

  enum Target {
    Angular = "angular",
    // React = "react",
    // Svelte = "svelte",
    // Vue3 = "vue3",
    // Solid = "solid",
  }

  const extensionMap: Record<Target, string> = {
    [Target.Angular]: "component.ts",
    // [Target.React]: "tsx",
    // [Target.Svelte]: "svelte",
    // [Target.Vue3]: "vue",
    // [Target.Solid]: "tsx",
  };

  const instructionsMap: Record<Target, string> = {
    [Target.Angular]: ``,
    // [Target.React]: ``,
    // [Target.Svelte]: ``,
    // [Target.Vue3]: ``,
    // [Target.Solid]: ``,
  };

  const usageMap: Record<Target, string> = {
    [Target.Angular]: `<avatar
  variant="beam"
  [title]="false"
  [size]="400"
  name="testing"
  [square]="false"
  [colors]="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
></avatar>`,
    //     [Target.React]: `import { Avatar } from "@boringer-avatars/react";

    // ...

    // <Avatar
    //   title={false}
    //   size={400}
    //   variant="beam"
    //   name="testing"
    //   square={false}
    //   colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
    // />`,
    //     [Target.Solid]: `import { Avatar } from "@boringer-avatars/solid";

    // ...

    // <Avatar
    //   title={false}
    //   size={400}
    //   variant="beam"
    //   name="testing"
    //   square={false}
    //   colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
    // />`,
    //     [Target.Svelte]: `<script lang="ts">
    //   import { Avatar } from "@boringer-avatars/svelte/package";
    // </script>

    // <Avatar
    //   title={false}
    //   size={400}
    //   variant="beam"
    //   name="testing"
    //   square={false}
    //   colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
    // />`,
    //     [Target.Vue3]: `<script setup lang="ts">
    //   import { Avatar } from "@boringer-avatars/vue3";
    // </script>

    // <template>
    //   <Avatar
    //     :title="false"
    //     :size="400"
    //     variant="beam"
    //     name="testing"
    //     :square="false"
    //     :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    //   />
    // </template>`,
  };

  const propsNameMap: Record<Target, string> = {
    [Target.Angular]: `Inputs`,
    // [Target.React]: `Props`,
    // [Target.Svelte]: `Props`,
    // [Target.Vue3]: `Props`,
    // [Target.Solid]: `Props`,
  };

  Object.values(Target).forEach((target) => {
    const outputDir = path.resolve(process.cwd(), "../", `lib-${target}`);
    let srcDir = path.resolve(outputDir, "src");
    // if (target === "svelte") {
    //   srcDir = path.resolve(outputDir, "src/lib");
    // } else
    if (target === "angular") {
      srcDir = path.resolve(outputDir, "projects/avatars/src/lib");
    }
    const componentExtension = extensionMap[target];
    const installationInstructions = instructionsMap[target];
    const propsName = propsNameMap[target];
    const usage = usageMap[target];

    const boilerplatePath = path.resolve(__dirname, `boilerplate/${target}`);

    fs.copySync(boilerplatePath, outputDir);

    mitosisFiles.forEach((filePrefix) => {
      const fileName = `${filePrefix}.${componentExtension}`;

      const outPath = path.resolve(srcDir, fileName);

      fs.ensureDirSync(path.resolve(srcDir, "avatars"));

      const inputFile = path.resolve(
        process.cwd(),
        `src/${filePrefix}.lite.tsx`
      );

      const execCommand = `pnpm mitosis compile -t=${target} --out=${outPath} ${inputFile} --force`;

      console.log({ execCommand });

      const result = execSync(execCommand, { cwd: process.cwd() });

      console.log("Result", result.toString());

      const utilsFileName = `${filePrefix}.utils.ts`;
      const utilsFilePath = path.resolve(process.cwd(), "src", utilsFileName);
      if (fs.existsSync(utilsFilePath)) {
        const outputUtilsFilePath = path.resolve(srcDir, utilsFileName);
        fs.copyFileSync(utilsFilePath, outputUtilsFilePath);
      }
    });

    const readmeTemplatePath = path.resolve(
      __dirname,
      "./templates/README.MD.mustache"
    );

    fs.copyFileSync(
      readmeTemplatePath,
      path.resolve(outputDir, "README.MD.mustache")
    );

    const templateFiles = glob.sync(path.resolve(outputDir, "**/*.mustache"));

    const context = {
      target,
      version: packageJson.version,
      installationInstructions,
      propsName,
      usage,
      isAngular: target === "angular",
    };

    templateFiles.forEach((templateFilePath) => {
      const template = fs.readFileSync(templateFilePath, { encoding: "utf8" });

      const rendered = mustache.render(template, context);

      const relativeTemplateFileName = templateFilePath
        .replace(outputDir, "")
        .slice(1);

      const relativeFileName = relativeTemplateFileName.replace(
        ".mustache",
        ""
      );

      fs.outputFileSync(path.resolve(outputDir, relativeFileName), rendered);

      fs.removeSync(templateFilePath);
    });

    execSync("yarn install", {
      cwd: outputDir,
    });

    execSync("pnpm build", {
      cwd: outputDir,
    });
  });
} catch (e: any) {
  if (e?.stdout) {
    console.log("Caught", e?.stdout?.toString());
  } else {
    console.log("Caught:raw", e);
  }
}

process.on("unhandledRejection", (e) => {
  console.log("unhandledRejection", e);
});

process.on("uncaughtException", (e) => {
  console.log("uncaughtException", e);
});
