import { Box, BoxProps } from "@chakra-ui/react";
import Button from "../Button";
import styles from './styles.module.css'
import React from "react";

export default function MessageWrapper({
  title,
  message,
  children,
  ...props
}: {
  title: string
  message: string
  children: React.ReactNode
} & BoxProps) {
  return (
    <Box
    className={styles.wrapper}
    {...props}
    >
      <h1 className={styles.messageTitle}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <Button>
        {/* This is not the best way. I should use contexts for this */}
        {children}
      </Button>
    </Box>
  )
}