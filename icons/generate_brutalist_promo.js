// Neo-Brutalist Pure Black 300x188px Opera Promotional Banner Generator
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

function generateBrutalistPromo300x188() {
  const width = 300;
  const height = 188;

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  // Exact Neo-Brutalist Color Palette (No Gradients, No Glows)
  const bgR = 0x18, bgG = 0x18, bgB = 0x16;       // Exact Solid Dark Charcoal / Black (#181816)
  const borderR = 0x3e, borderG = 0x3e, borderB = 0x38; // Sharp Border (#3e3e38)
  const terraR = 0xd9, terraG = 0x77, terraB = 0x57;   // Terracotta (#d97757)
  const whiteR = 0xfa, whiteG = 0xf9, whiteB = 0xf5;   // Crisp White (#faf9f5)
  const textMutedR = 0x8e, textMutedG = 0x8b, textMutedB = 0x82; // Muted Gray

  const scale = 4;
  const ssWidth = width * scale;
  const ssHeight = height * scale;

  // Bitmap array for anti-aliasing
  const ssCoverage = new Float32Array(width * height);
  const colorMap = new Uint8Array(width * height); // 0=bg, 1=border, 2=terra, 3=white, 4=gray

  // Render elements in supersampled space
  for (let ssy = 0; ssy < ssHeight; ssy++) {
    const y = Math.floor(ssy / scale);

    for (let ssx = 0; ssx < ssWidth; ssx++) {
      const x = Math.floor(ssx / scale);

      // 1. Mouse Icon centered at X=65, Y=94 (Radius=42)
      const iconCenterX = 65 * scale;
      const iconCenterY = 94 * scale;
      const iconRadiusX = 32 * scale;
      const iconRadiusY = 48 * scale;

      const nx = (ssx - iconCenterX) / iconRadiusX;
      const ny = (ssy - iconCenterY) / iconRadiusY;

      const absNx = Math.abs(nx);
      let distPill = 0;
      if (ny < -0.32) {
        const dy = ny - (-0.32);
        distPill = Math.sqrt(nx * nx + dy * dy);
      } else if (ny > 0.32) {
        const dy = ny - 0.32;
        distPill = Math.sqrt(nx * nx + dy * dy);
      } else {
        distPill = absNx;
      }

      const outerR = 0.68;
      const strokeW = 0.24;
      const isMouseBody = distPill <= outerR && distPill >= outerR - strokeW && Math.abs(ny) <= 0.95;

      let distWheel = 0;
      if (ny < -0.40) {
        const dy = ny - (-0.40);
        distWheel = Math.sqrt(nx * nx + dy * dy);
      } else if (ny > -0.10) {
        const dy = ny - (-0.10);
        distWheel = Math.sqrt(nx * nx + dy * dy);
      } else {
        distWheel = absNx;
      }
      const isWheel = distWheel <= 0.24 && ny >= -0.68 && ny <= 0.05;

      if (isMouseBody || isWheel) {
        colorMap[y * width + x] = 2; // Terracotta
      }
    }
  }

  // Draw crisp pixel-art letters for "SCROLLINGER" & Subtitle using crisp 5x7 / 3x5 font grids
  // Font definitions for title text: S C R O L L I N G E R
  const titleX = 125;
  const titleY = 72;
  
  // High contrast crisp rendering
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // 2px Solid Outer Border
      const isBorder = x < 2 || x >= width - 2 || y < 2 || y >= height - 2;

      let r = bgR, g = bgG, b = bgB;

      if (isBorder) {
        r = borderR; g = borderG; b = borderB;
      } else {
        const cType = colorMap[y * width + x];
        if (cType === 2) {
          r = terraR; g = terraG; b = terraB;
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
const buf = generateBrutalistPromo300x188();
fs.writeFileSync(outFile, buf);
console.log(`Successfully generated Neo-Brutalist ${outFile} (300x188px)`);
