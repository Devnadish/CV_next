"use client";
import { appWithTranslation } from "../i18n";
import "../i18n.js"
import { useState, useEffect } from "react";
const LanguageProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <appWithTranslation>{children}</appWithTranslation>;
};

export default LanguageProvider;
