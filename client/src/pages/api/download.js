import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "src", "download", "CVMaruccoChristian.pdf");
  const stat = fs.statSync(filePath);

  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=CVMaruccoChristian.pdf");

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}