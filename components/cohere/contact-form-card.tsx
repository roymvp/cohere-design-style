import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ContactFormCardProps extends Omit<React.ComponentProps<'form'>, 'title'> {
  title: string
  description?: string
  submitLabel?: string
}

export function ContactFormCard({
  title,
  description,
  submitLabel = '提交需求',
  ...props
}: ContactFormCardProps) {
  return (
    <Card tone="plain" className="gap-8 rounded-[var(--radius-lg)] p-6 md:p-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <form {...props}>
        <FieldGroup>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="contact-name">姓名</FieldLabel>
              <Input id="contact-name" name="name" autoComplete="name" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="contact-email">工作邮箱</FieldLabel>
              <Input id="contact-email" name="email" type="email" autoComplete="email" required />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="contact-company">机构名称</FieldLabel>
            <Input id="contact-company" name="company" autoComplete="organization" />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-message">希望解决的问题</FieldLabel>
            <Textarea id="contact-message" name="message" rows={4} required />
          </Field>
          <Button type="submit" className="self-start">
            {submitLabel}
          </Button>
        </FieldGroup>
      </form>
    </Card>
  )
}

export type { ContactFormCardProps }
