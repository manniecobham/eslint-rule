import { Rule } from 'eslint';

export const noDeletePrettier = "no-delete-eslint-prettier";
const noDeleteEslintPrettierRule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow deleting `eslintprettier/prettier` comment on save',
      category: 'Best Practices',
      recommended: true,
      url: 'https://github.com/prettier/eslint-plugin-prettier/blob/master/docs/rules/prettier.md#delete--eslintprettierprettier--on-save'
    }
  },
  create: function (context) {
    return {
      Program: function (node) {
        node.comments?.forEach(comment => {
          if (comment.type === 'Line' && /eslintprettier\/prettier/.test(comment.value)) {
            context.report({
              node: comment as unknown as Rule.Node,
              message: 'Do not delete `eslintprettier/prettier` comment on save'
            });
          }
        });
      }
    };
  }
};

export default noDeleteEslintPrettierRule;
