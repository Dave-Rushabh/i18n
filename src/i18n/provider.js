import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";

const INTL_PROVIDER = ({ children, locale }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default INTL_PROVIDER;
