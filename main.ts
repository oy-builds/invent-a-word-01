import * as fs from "node:fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "sendxiety: the panic after hitting send that makes you reread your own message, hunting for how it could be misread.\n", "utf-8");
