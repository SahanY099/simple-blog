function findFirstParagraph(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    const item = blocks[i];

    if (item.type == "paragraph") {
      return item.data;
    }
  }
  return {};
}

export { findFirstParagraph };
