import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

function FormWrapper({
  children,
  ...props
}: { children: React.ReactNode } & BoxProps) {
  return (
      <Box
        as='form'
        {...props}
      >
        {children}
      </Box>
  )
}

export default FormWrapper;
