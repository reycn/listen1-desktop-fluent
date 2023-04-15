const { existsSync } = require("fs");
const { readFile } = require("fs/promises");
const { parseFile } = require("music-metadata");
const { basename, extname, parse, format } = require("path");
const { detect } = require("chardet");
module.exports = {
  async readAudioTags(filePath) {
    const fileName = basename(filePath, extname(filePath));
    try {
      const metaData = await parseFile(filePath);
      metaData.common.title ||= fileName;
      const lyric_url = format({
        ...parse(filePath),
        ext: ".lrc",
        base: undefined,
      });
      //if metadata doesn't include lyric, then try to read from local lyric file
      if (!metaData.common.lyrics && existsSync(lyric_url)) {
        metaData.common.lyrics = [];
        const fileBuffer = await readFile(lyric_url);
        const encoding = detect(fileBuffer);
        const decoder = new TextDecoder(encoding);
        metaData.common.lyrics[0] = decoder.decode(fileBuffer);
      }
      return metaData;
    } catch (error) {
      return {
        error,
        common: {
          title: fileName,
          album: "",
          artist: "",
        },
      };
    }
  },
};
