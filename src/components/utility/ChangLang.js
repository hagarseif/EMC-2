import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangLang() {
    const { t, i18n } = useTranslation();
    const language=i18n.language // Default is English (LTR)
    const [direction, setDirection] = useState('ltr'); // Default is LTR
  
    useEffect(() => {
      // Set the direction based on the selected language
      if (language === 'ar') { // Arabic, Hebrew, Persian, etc.
        setDirection('rtl');
      } else {
        setDirection('ltr');
      }
    }, [language]);
    return {t,i18n,direction}
}
