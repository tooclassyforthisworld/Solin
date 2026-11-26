// src/plugins/remark-lead-in.js
//
// A remark plugin that wraps the opening words of the first paragraph
// of every Markdown/MDX document in a `<span class="lead-in">`, so the
// CSS can render them in small caps — the magazine opener.
//
// Behaviour:
//   - Only the FIRST paragraph that is a direct child of the document
//     root is touched. Paragraphs inside lists, blockquotes, admonitions
//     or any non-root container are left alone.
//   - If the first child of that paragraph is a text node, the first
//     `wordCount` words (default 3) are split off and wrapped.
//   - If the first child is already an inline element (em/strong/link),
//     the whole inline is wrapped, so the lead-in still applies.
//   - The plugin is wrapped in try/catch so a malformed tree never
//     breaks the build.

const DEFAULT_WORD_COUNT = 3;

/**
 * @param {{wordCount?: number}=} options
 * @returns {(tree: import('mdast').Root) => void}
 */
module.exports = function remarkLeadIn(options) {
  const wordCount =
    options && Number.isInteger(options.wordCount) && options.wordCount > 0
      ? options.wordCount
      : DEFAULT_WORD_COUNT;

  return function transformer(tree) {
    try {
      if (!tree || !Array.isArray(tree.children)) return;
      for (const node of tree.children) {
        if (node && node.type === 'paragraph') {
          applyLeadIn(node, wordCount);
          return;
        }
      }
    } catch (_err) {
      // Fail silently — typography must never break the build.
    }
  };
};

/**
 * @param {import('mdast').Paragraph} paragraph
 * @param {number} wordCount
 */
function applyLeadIn(paragraph, wordCount) {
  const children = paragraph.children;
  if (!children || !children.length) return;

  const wrap = (node) => ({
    type: 'mdxJsxTextElement',
    name: 'span',
    attributes: [
      {type: 'mdxJsxAttribute', name: 'class', value: 'lead-in'},
    ],
    children: [node],
  });

  const first = children[0];

  // If the paragraph starts with an inline element (em, strong, link…),
  // wrap the whole inline so the opener still gets the lead-in.
  if (first.type !== 'text') {
    children[0] = wrap(first);
    return;
  }

  // Split the text into word tokens, keeping the whitespace separators
  // so we can reassemble `before` and `after` without losing spacing.
  const tokens = first.value.split(/(\s+)/);
  let seen = 0;
  let cutIndex = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] && tokens[i].trim().length > 0) {
      seen += 1;
      if (seen >= wordCount) {
        cutIndex = i + 1;
        break;
      }
    }
  }
  if (cutIndex === 0) return;

  const before = tokens.slice(0, cutIndex).join('');
  const after = tokens.slice(cutIndex).join('');

  const newChildren = [wrap({type: 'text', value: before})];
  if (after) newChildren.push({type: 'text', value: after});
  newChildren.push(...children.slice(1));
  paragraph.children = newChildren;
}
