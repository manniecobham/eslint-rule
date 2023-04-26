import { Rule } from 'eslint';

export const doubleQuoteName = "double-quote";
const doubleQuotesRule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce double quotes for strings',
      category: 'Stylistic Issues',
      recommended: true,
      url: 'https://eslint.org/docs/rules/quotes'
    }
  },
  create: function (context) {
    return {
      Literal: function (node) {
        if (typeof node.value === 'string' && node.raw?.[0] !== '"') {
          context.report({
            node,
            message: 'Strings must be enclosed in double quotes'
          });
        }
      }
    };
  }
};

export default doubleQuotesRule;
