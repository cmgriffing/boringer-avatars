import * as path from "path";
import * as fs from "fs-extra";
import { spawnSync, execSync } from "child_process";
import * as mustache from "mustache";
import packageJson from "../package.json";
import { glob } from "glob";
try {
  enum Target {
    Vue2 = "vue2",
  }

  const instructionsMap: Record<Target, string> = {
    [Target.Vue2]: ``,
  };

  const usageMap: Record<Target, string> = {
    [Target.Vue2]: `<script>
      import { Avatar } from "@boringer-avatars/vue2";
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
  };

  const propsNameMap: Record<Target, string> = {
    [Target.Vue2]: `Props`,
  };

  Object.values(Target).forEach((target) => {
    let compiledDir = path.resolve(process.cwd(), `output/vue/${target}/src`);

    const outputDir = path.resolve(process.cwd(), "../", `lib-${target}`);

    if (fs.existsSync(outputDir)) {
      fs.removeSync(outputDir);
      fs.ensureDirSync(outputDir);
    }

    let srcDir = path.resolve(outputDir, "src");

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
      isAngular: false,
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

    execSync("pnpm install --no-frozen-lockfile", {
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
