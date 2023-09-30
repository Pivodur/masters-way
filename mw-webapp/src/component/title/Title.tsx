import React from "react";
import {Heading} from "@radix-ui/themes";
import clsx from "clsx";
import styles from "src/component/title/Title.module.scss";

/**
 * Enum representing HTML heading levels.
 */
export enum HeadingLevel {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

interface TitleProps {
  /**
   * Heading level
   */
  level: HeadingLevel;
  /**
   * Additional custom class name for the component
   */
  className: string;
  /**
   * Title
   */
  text: string;
}

/**
 * This component renders a title
 */
export const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <Heading
      as={props.level}
      className={clsx(styles.title, props.className)}
    >
      {props.text}
    </Heading>
  );
};