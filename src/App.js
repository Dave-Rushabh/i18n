import "./styles.css";
import { FormattedMessage } from "react-intl";
import { I18NProvider, LOCALE } from "./i18n";
import { Lang } from "./LangContext";
import { useContext } from "react";

export default function App() {
  const { lang, changeLang } = useContext(Lang);

  return (
    <I18NProvider locale={lang}>
      <div className="App">
        <select
          onChange={(e) => changeLang(e.target.value)}
          defaultValue="change"
        >
          <option disabled value="change">
            Change Language
          </option>
          <option value={LOCALE.ARABIC}>ARABIC</option>
          <option value={LOCALE.ENGLISH}>ENGLISH</option>
          <option value={LOCALE.FRENCH}>FRENCH</option>
          <option value={LOCALE.HINDI}>HINDI</option>
          <option value={LOCALE.JAPANESE}>JAPANESE</option>
        </select>
        <h1>
          <FormattedMessage id="Hello" />
        </h1>
        <h2>
          <FormattedMessage id="Text" />
        </h2>
      </div>
    </I18NProvider>
  );
}
