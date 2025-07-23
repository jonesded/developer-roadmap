import { _ as __vite_glob_2_6, a as __vite_glob_2_5, b as __vite_glob_2_4, c as __vite_glob_2_3, d as __vite_glob_2_2, e as __vite_glob_2_1, f as __vite_glob_2_0 } from './william_CzEL3-Tg.mjs';

function authorPathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getAuthorIds() {
  const authorFiles = /* #__PURE__ */ Object.assign({"/src/data/authors/ebrahim-bharmal.md": __vite_glob_2_0,"/src/data/authors/ekene.md": __vite_glob_2_1,"/src/data/authors/fernando.md": __vite_glob_2_2,"/src/data/authors/jesse-li.md": __vite_glob_2_3,"/src/data/authors/kamran.md": __vite_glob_2_4,"/src/data/authors/peter-thaleikis.md": __vite_glob_2_5,"/src/data/authors/william.md": __vite_glob_2_6




});
  return Object.keys(authorFiles).map(authorPathToId);
}
async function getAllAuthors() {
  const authorFilesMap = /* #__PURE__ */ Object.assign({"/src/data/authors/ebrahim-bharmal.md": __vite_glob_2_0,"/src/data/authors/ekene.md": __vite_glob_2_1,"/src/data/authors/fernando.md": __vite_glob_2_2,"/src/data/authors/jesse-li.md": __vite_glob_2_3,"/src/data/authors/kamran.md": __vite_glob_2_4,"/src/data/authors/peter-thaleikis.md": __vite_glob_2_5,"/src/data/authors/william.md": __vite_glob_2_6

});
  const authorFiles = Object.values(authorFilesMap);
  return authorFiles.map((authorFile) => ({
    ...authorFile,
    id: authorPathToId(authorFile.file)
  }));
}
async function getAuthorById(id) {
  const authorFilesMap = /* #__PURE__ */ Object.assign({"/src/data/authors/ebrahim-bharmal.md": __vite_glob_2_0,"/src/data/authors/ekene.md": __vite_glob_2_1,"/src/data/authors/fernando.md": __vite_glob_2_2,"/src/data/authors/jesse-li.md": __vite_glob_2_3,"/src/data/authors/kamran.md": __vite_glob_2_4,"/src/data/authors/peter-thaleikis.md": __vite_glob_2_5,"/src/data/authors/william.md": __vite_glob_2_6

});
  const authorFile = Object.values(authorFilesMap).find((authorFile2) => {
    return authorPathToId(authorFile2.file) === id;
  });
  if (!authorFile) {
    throw new Error(`Author with ID ${id} not found`);
  }
  return {
    ...authorFile,
    id: authorPathToId(authorFile.file)
  };
}

export { getAuthorIds as a, getAuthorById as b, getAllAuthors as g };
