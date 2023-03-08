import * as path from "path";
import * as fs from "fs-extra";
import { execSync } from "child_process";
try {
  enum Target {
    Angular = "angular",
    React = "react",
    Svelte = "svelte",
    Vue3 = "vue3",
    Vue2 = "vue2",
    // Solid = "solid",
    Qwik = "qwik",
  }

  const docsDir = path.resolve(process.cwd(), "apps/docs");
  const coreDir = path.resolve(process.cwd(), "packages/core");
  const demoDir = path.resolve(process.cwd(), "packages/demo");

  console.log("Building Core");
  execSync("yarn build", {
    cwd: coreDir,
    stdio: "inherit",
  });

  console.log("Build Demo");
  execSync("yarn build", {
    cwd: demoDir,
    stdio: "inherit",
  });

  console.log("Building Docs");
  execSync("yarn build", {
    cwd: docsDir,
    stdio: "inherit",
  });

  Object.values(Target).forEach((target) => {
    try {
      const webDir = path.resolve(process.cwd(), `apps/web-${target}`);
      let webDistDir = path.resolve(webDir, "dist");

      console.log({ webDir });

      if (target === Target.React) {
        webDistDir = path.resolve(webDir, "out");
      } else if (target === Target.Angular) {
        webDistDir = path.resolve(webDir, "dist/web-angular");
      }
      const outputDir = path.resolve(process.cwd(), `apps/docs/dist/${target}`);

      console.log("Building Web:", target);
      execSync("yarn build", {
        cwd: webDir,
        stdio: "inherit",
      });

      if (fs.existsSync(outputDir)) {
        fs.removeSync(outputDir);
        fs.ensureDirSync(outputDir);
      }

      fs.copySync(webDistDir, outputDir);
    } catch (e: any) {
      console.log(`Error while building web: ${target}`);
    }
  });

  // Angular hack
  const angularIndexPath = path.resolve(
    process.cwd(),
    "apps/docs/dist/angular/index.html"
  );
  let angularIndex = fs.readFileSync(angularIndexPath, { encoding: "utf8" });

  angularIndex = angularIndex.replace(
    new RegExp(`<link rel="stylesheet" href="`, "gm"),
    `<link rel="stylesheet" href="/boringer-avatars/angular/`
  );

  angularIndex = angularIndex.replace(
    new RegExp(`<script src="`, "gm"),
    `<script src="/boringer-avatars/angular/`
  );

  fs.writeFileSync(angularIndexPath, angularIndex);
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
