import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const DIR = path.resolve('public/img');
const MAX_SIDE = 1600;

const files = (await fs.readdir(DIR)).filter((f) => /\.jpe?g$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;
const rows = [];
const failures = [];

for (const f of files) {
  const p = path.join(DIR, f);
  const tmp = p + '.tmp';
  try {
    const before = (await fs.stat(p)).size;
    const meta = await sharp(p).metadata();
    // After EXIF orientation, width/height may swap; use autoOrient metadata.
    const oriented = await sharp(p).rotate().metadata();
    const w = oriented.width || meta.width || 0;
    const h = oriented.height || meta.height || 0;
    const long = Math.max(w, h);
    const resize =
      long > MAX_SIDE
        ? w >= h
          ? { width: MAX_SIDE }
          : { height: MAX_SIDE }
        : null;
    let pipeline = sharp(p).rotate();
    if (resize) pipeline = pipeline.resize({ ...resize, withoutEnlargement: true });
    await pipeline
      .jpeg({ quality: 80, mozjpeg: true, progressive: true })
      .toFile(tmp);
    await fs.rename(tmp, p);
    const after = (await fs.stat(p)).size;
    totalBefore += before;
    totalAfter += after;
    rows.push({ f, before, after });
    console.log(
      `${f}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`
    );
  } catch (err) {
    failures.push({ f, err: err.message });
    console.error(`FAILED ${f}: ${err.message}`);
    try {
      await fs.unlink(tmp);
    } catch {}
  }
}

console.log('---');
console.log(
  `TOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB (${files.length} files, ${failures.length} failures)`
);
if (failures.length) {
  console.log('Failures:');
  for (const fail of failures) console.log(`  - ${fail.f}: ${fail.err}`);
}
