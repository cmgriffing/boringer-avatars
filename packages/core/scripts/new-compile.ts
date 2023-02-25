import * as path from "path";
import * as fs from "fs-extra";
import { spawnSync, execSync } from "child_process";
import * as mustache from "mustache";
import packageJson from "../package.json";
import { glob } from "glob";
try {
  enum Target {
    Angular = "angular",
    React = "react",
    Svelte = "svelte",
    Vue3 = "vue3",
    Solid = "solid",
    Qwik = "qwik",
    // Stencil = "stencil",
  }

  const instructionsMap: Record<Target, string> = {
    [Target.Angular]: ``,
    [Target.React]: ``,
    [Target.Svelte]: ``,
    [Target.Vue3]: ``,
    [Target.Solid]: ``,
    [Target.Qwik]: ``,
    // [Target.Stencil]: ``,
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
    [Target.React]: `import { Avatar } from "@boringer-avatars/react";

        ...

        <Avatar
          title={false}
          size={400}
          variant="beam"
          name="testing"
          square={false}
          colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
        />`,
    [Target.Solid]: `import { Avatar } from "@boringer-avatars/solid";

        ...

        <Avatar
          title={false}
          size={400}
          variant="beam"
          name="testing"
          square={false}
          colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
        />`,
    [Target.Svelte]: `<script lang="ts">
          import { Avatar } from "@boringer-avatars/svelte/package";
        </script>

        <Avatar
          title={false}
          size={400}
          variant="beam"
          name="testing"
          square={false}
          colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
        />`,
    [Target.Vue3]: `<script setup>
          import { Avatar } from "@boringer-avatars/vue3";
        </script>

        <template>
          <Avatar
            :title="false"
            :size="400"
            variant="beam"
            name="testing"
            :square="false"
            :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
          />
        </template>`,
    [Target.Qwik]: `import { Avatar } from "@boringer-avatars/qwik";

        ...

        <Avatar
          title={false}
          size={400}
          variant="beam"
          name="testing"
          square={false}
          colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
        />`,
    // [Target.Stencil]: `import "@boringer-avatars/stencil";

    //   ...

    //   <boringer-avatar-beam
    //     title={false}
    //     size={400}
    //     name="testing"
    //     square={false}
    //     colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
    //   />

    //   <boringer-avatar-bauhaus
    //     title={false}
    //     size={400}
    //     name="testing"
    //     square={false}
    //     colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
    //   />

    // `,
  };

  const propsNameMap: Record<Target, string> = {
    [Target.Angular]: `Inputs`,
    [Target.React]: `Props`,
    [Target.Svelte]: `Props`,
    [Target.Vue3]: `Props`,
    [Target.Solid]: `Props`,
    [Target.Qwik]: `Props`,
    // [Target.Stencil]: `Props`,
  };

  Object.values(Target).forEach((target) => {
    let compiledDir = path.resolve(process.cwd(), `output/${target}/src`);
    if (target === Target.Vue3) {
      compiledDir = path.resolve(process.cwd(), `output/vue/${target}/src`);
    }

    // temporary until https://github.com/BuilderIO/mitosis/pull/1016 merges
    console.log({ target });
    // if (target === Target.Stencil) {
    //   const jsFilesPath = path.resolve(compiledDir, "**/*.js");
    //   const jsFiles = glob.sync(jsFilesPath);
    //   console.log({ jsFilesPath, jsFiles });
    //   jsFiles.forEach((jsFile) => {
    //     const tsFile = jsFile.replace(".js", ".tsx");
    //     console.log("Moving", { jsFile, tsFile });
    //     fs.moveSync(jsFile, tsFile);
    //   });
    // }

    const outputDir = path.resolve(process.cwd(), "../", `lib-${target}`);

    if (fs.existsSync(outputDir)) {
      fs.removeSync(outputDir);
      fs.ensureDirSync(outputDir);
    }

    let srcDir = path.resolve(outputDir, "src");
    if (target === "svelte") {
      srcDir = path.resolve(outputDir, "src/lib");
    } else if (target === "angular") {
      srcDir = path.resolve(outputDir, "projects/avatars/src/lib");
    }

    const installationInstructions = instructionsMap[target];
    const propsName = propsNameMap[target];
    const usage = usageMap[target];

    const boilerplatePath = path.resolve(__dirname, `boilerplate/${target}`);

    fs.copySync(boilerplatePath, outputDir);

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
      isStencil: false, // target === "stencil",
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

    fs.copySync(compiledDir, srcDir);

    execSync("pnpm install", {
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
