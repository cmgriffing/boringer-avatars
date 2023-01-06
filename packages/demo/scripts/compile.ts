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
    Vue2 = "vue2",
    Solid = "solid",
    Qwik = "qwik",
  }

  Object.values(Target).forEach((target) => {
    let compiledDir = path.resolve(process.cwd(), `output/${target}/src`);
    if (target === Target.Vue2 || target === Target.Vue3) {
      compiledDir = path.resolve(process.cwd(), `output/vue/${target}/src`);
    }

    const outputDir = path.resolve(process.cwd(), "../", `demo-${target}`);

    if (fs.existsSync(outputDir)) {
      fs.removeSync(outputDir);
      fs.ensureDirSync(outputDir);
    }

    let srcDir = path.resolve(outputDir, "src");
    if (target === "svelte") {
      srcDir = path.resolve(outputDir, "src/lib");
    } else if (target === "angular") {
      srcDir = path.resolve(outputDir, "projects/demo/src/lib");
    }

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
