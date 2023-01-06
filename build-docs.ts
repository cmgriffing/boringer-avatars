import * as path from "path";
import * as fs from "fs-extra";
import { execSync } from "child_process";
try {
  enum Target {
    Angular = "angular",
    React = "react",
    Svelte = "svelte",
    // Vue3 = "vue3",
    Vue2 = "vue2",
    Solid = "solid",
    Qwik = "qwik",
  }

  const docsDir = path.resolve(process.cwd(), "apps/docs");
  const coreDir = path.resolve(process.cwd(), "packages/core");
  const demoDir = path.resolve(process.cwd(), "packages/demo");

  console.log("Building Core");
  execSync("pnpm build", {
    cwd: coreDir,
  });

  console.log("Build Demo");
  execSync("pnpm build", {
    cwd: demoDir,
  });

  console.log("Building Docs");
  execSync("pnpm build", {
    cwd: docsDir,
  });

  Object.values(Target).forEach((target) => {
    const webDir = path.resolve(process.cwd(), `apps/web-${target}`);
    let webDistDir = path.resolve(webDir, "dist");

    if (target === Target.React) {
      webDistDir = path.resolve(webDir, "out");
    } else if (target === Target.Angular) {
      webDistDir = path.resolve(webDir, "dist/web-angular");
    }
    const outputDir = path.resolve(process.cwd(), `apps/docs/dist/${target}`);

    console.log("Installing deps:", target);
    execSync("pnpm install", {
      cwd: webDir,
    });

    console.log("Building Web:", target);
    execSync("pnpm build", {
      cwd: webDir,
    });

    if (fs.existsSync(outputDir)) {
      fs.removeSync(outputDir);
      fs.ensureDirSync(outputDir);
    }

    fs.copySync(webDistDir, outputDir);
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
