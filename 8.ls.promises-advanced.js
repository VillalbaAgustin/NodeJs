const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

console.log(process.argv);

const folder = process.argv[2] ?? ".";

const ls = async (folder) => {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;

    try {
      stats = await fs.stat(filePath); // Información del directorio
    } catch (error) {
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    // console.log(stats)
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();

    return `${pc.red(fileType)} ${pc.blue(file.padEnd(35))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`;
  });
  const filesInfo = await Promise.all(filePromises);

  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo);
  });
};

ls(folder);
