"use client";

import React, { cloneElement, isValidElement, type ReactNode } from "react";
import { useLocale } from "@/lib/i18n";

type LocalizableProps = {
  children?: ReactNode;
  alt?: string;
  "aria-description"?: string;
  "aria-label"?: string;
  placeholder?: string;
  title?: string;
};

function localizeNode(node: ReactNode, translate: (text: string) => string): ReactNode {
  if (typeof node === "string") return translate(node);
  if (!isValidElement<LocalizableProps>(node)) return node;

  const { children, alt, title, placeholder } = node.props;
  const localizedProps: LocalizableProps = {
    children: localizeNode(children, translate),
  };

  if (alt !== undefined) localizedProps.alt = translate(alt);
  if (title !== undefined) localizedProps.title = translate(title);
  if (placeholder !== undefined) localizedProps.placeholder = translate(placeholder);
  if (node.props["aria-label"] !== undefined) {
    localizedProps["aria-label"] = translate(node.props["aria-label"]);
  }
  if (node.props["aria-description"] !== undefined) {
    localizedProps["aria-description"] = translate(node.props["aria-description"]);
  }

  return cloneElement(node, localizedProps);
}

export default function LocalizedContent({ children }: { children: ReactNode }) {
  const { translate } = useLocale();

  return <>{localizeNode(children, translate)}</>;
}
