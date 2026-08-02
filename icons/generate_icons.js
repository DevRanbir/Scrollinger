// Pure Node High-Resolution PNG Generator - Big Bold Wide Mouse Icon (Matches Chrome Puzzle Icon Footprint)
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

function generateBigBoldMouseIconPng(size) {
  const width = size;
  const height = size;

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowSize);

  // Terracotta Theme Color (#d97757)
  const iconR = 0xd9, iconG = 0x77, iconB = 0x57;

  const scale = 4;
  const ssSize = size * scale;
  const ssCenter = ssSize / 2;

  const ssBuffer = new Float32Array(width * height);

  for (let ssy = 0; ssy < ssSize; ssy++) {
    const y = Math.floor(ssy / scale);
    const ny = (ssy - ssCenter + 0.5) / (ssSize * 0.46);

    for (let ssx = 0; ssx < ssSize; ssx++) {
      const x = Math.floor(ssx / scale);
      const nx = (ssx - ssCenter + 0.5) / (ssSize * 0.46);

      let isIconPixel = false;

      // Big Bold Proportioned Mouse Contour (Fills 92% of Canvas Footprint)
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

      const outerR = 0.65; // Wide body matching standard mouse proportion
      const strokeW = 0.22; // Bold thick stroke visible at 16x16

      // Bold Mouse Body Outer Stroke
      const isMouseStroke = distPill <= outerR && distPill >= outerR - strokeW && Math.abs(ny) <= 0.95;

      // Bold Top Scroll Wheel Pill (Filled)
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
      const isWheelPill = distWheel <= 0.22 && ny >= -0.68 && ny <= 0.05;

      if (isMouseStroke || isWheelPill) {
        isIconPixel = true;
      }

      if (isIconPixel) {
        ssBuffer[y * width + x] += 1.0 / (scale * scale);
      }
    }
  }

  // Write RGBA bytes with TRANSPARENT background
  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const alphaCoverage = ssBuffer[y * width + x];

      if (alphaCoverage > 0.01) {
        rawData[pxOffset] = iconR;
        rawData[pxOffset + 1] = iconG;
        rawData[pxOffset + 2] = iconB;
        rawData[pxOffset + 3] = Math.round(alphaCoverage * 255);
      } else {
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
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

const iconsDir = path.join(__dirname);
[16, 48, 128].forEach((size) => {
  const buf = generateBigBoldMouseIconPng(size);
  fs.writeFileSync(path.join(iconsDir, `icon${size}.png`), buf);
  console.log(`Successfully generated big bold mouse icon${size}.png`);
});
