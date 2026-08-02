// Pure Node PNG Generator for Opera Promotional Banner (300x188px)
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let c = 0xffffffff;
  const table = [];
  for (let n = 0; n < 256; n++) {
    let curr = n;
    for (let k = 0; k < 8; k++) {
      curr = (curr & 1) ? (0xedb88320 ^ (curr >>> 1)) : (curr >>> 1);
    }
    table[n] = curr;
  }
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const typeAndData = Buffer.concat([typeBuf, data]);

  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(typeAndData), 0);

  return Buffer.concat([len, typeAndData, crcBuf]);
}

function generateOperaPromo300x188() {
  const width = 300;
  const height = 188;

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  // Theme Colors
  const bgR = 0x26, bgG = 0x26, bgB = 0x24; // Charcoal #262624
  const borderR = 0x52, borderG = 0x51, borderB = 0x4a; // Border #52514a
  const terraR = 0xd9, terraG = 0x77, terraB = 0x57; // Terracotta #d97757
  const whiteR = 0xfa, whiteG = 0xf9, whiteB = 0xf5; // Soft white

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // 2px Outer Border
      const isBorder = x < 3 || x >= width - 3 || y < 3 || y >= height - 3;
      
      let r = bgR, g = bgG, b = bgB;

      if (isBorder) {
        r = borderR; g = borderG; b = borderB;
      } else {
        // Draw Terracotta Mouse Icon centered at X=70, Y=94 (radius=40)
        const mouseCenterX = 70;
        const mouseCenterY = 94;
        const dx = (x - mouseCenterX) / 32;
        const dy = (y - mouseCenterY) / 45;

        const absDx = Math.abs(dx);
        let distPill = 0;
        if (dy < -0.3) distPill = Math.sqrt(dx * dx + (dy + 0.3) * (dy + 0.3));
        else if (dy > 0.3) distPill = Math.sqrt(dx * dx + (dy - 0.3) * (dy - 0.3));
        else distPill = absDx;

        const isMouseOutline = distPill <= 0.75 && distPill >= 0.55 && Math.abs(dy) <= 0.95;
        
        let distWheel = 0;
        if (dy < -0.4) distWheel = Math.sqrt(dx * dx + (dy + 0.4) * (dy + 0.4));
        else if (dy > -0.1) distWheel = Math.sqrt(dx * dx + (dy + 0.1) * (dy + 0.1));
        else distWheel = absDx;
        const isWheel = distWheel <= 0.22 && dy >= -0.65 && dy <= 0.05;

        if (isMouseOutline || isWheel) {
          r = terraR; g = terraG; b = terraB;
        } else {
          // Decorative terracotta accent bar on right side
          if (x >= 135 && x <= 275 && y >= 65 && y <= 70) {
            r = terraR; g = terraG; b = terraB;
          }
          // Subtle secondary accent bar
          if (x >= 135 && x <= 245 && y >= 115 && y <= 118) {
            r = borderR; g = borderG; b = borderB;
          }
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = 255;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);

  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const outFile = path.join(__dirname, 'opera_promo_300x188.png');
const buf = generateOperaPromo300x188();
fs.writeFileSync(outFile, buf);
console.log(`Successfully generated ${outFile} (300x188px)`);
