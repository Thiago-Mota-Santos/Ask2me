import { FormMessage, FormMessageProps } from '@radix-ui/react-form'
import React from 'react'
import { cn } from '../utils/cn'

const ErrorMessage = React.forwardRef<HTMLDivElement, FormMessageProps>(
  ({ className, ...props }, ref) => {
    return (
      <FormMessage
        {...props}
        ref={ref}
        className={cn('text-red-700', className)}
      />
    )
  },
)
ErrorMessage.displayName = 'ErrorMessage'

export { ErrorMessage }
