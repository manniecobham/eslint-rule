import doubleQuotesRule, {doubleQuoteName} from "./rules/double-quotes";
import noDeleteEslintPrettierRule, {noDeletePrettier} from "./rules/no-delete-prettier";

const rules = {
    [doubleQuoteName]: doubleQuotesRule,
    [noDeletePrettier]: noDeleteEslintPrettierRule,
  };

export default rules;
