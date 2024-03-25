import { FormField, FormFieldProps } from '@radix-ui/react-form'
import React from 'react'
import { cn } from '../utils/cn'

const Field = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <FormField {...props} ref={ref} className={cn('grid', className)} />
    )
  },
)
Field.displayName = 'Field'

export { Field } 
export type { FormFieldProps }

