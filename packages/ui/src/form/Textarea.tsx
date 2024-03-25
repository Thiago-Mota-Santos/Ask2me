import { FormControl } from '@radix-ui/react-form'
import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '../utils/cn'
import { Textarea } from '../textarea'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <FormControl asChild>
        <Textarea
          ref={ref}
          value={value}
          className={cn('resize-none', className)}
          name="description"
          placeholder="Insira uma descrição (opcional)"
          {...props}
        />
      </FormControl>
    )
  },
)

TextareaField.displayName = 'TextareaField'

export { TextareaField }
