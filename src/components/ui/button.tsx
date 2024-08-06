import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center box-border font-notoSansKr whitespace-nowrap text-base radius transition-colors disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white  -hover:bg-primary/50',
                outline:
                    'border border-primary-foreground bg-background text-black box-border hover:bg-accent hover:text-accent-foreground',
                checked: 'bg-primary-foreground text-black',
            },
            size: {
                default: 'w-default h-default',
                lg: 'w-lg h-24',
                md: 'w-40 h-default',
                sm: 'w-sm h-12',
            },
            radius: {
                default: 'rounded-default',
                lg: 'rounded-full',
                md: 'rounded-m',
                sm: 'rounded-3xl',
            },
            fontSize: {
                default: 'text-base',
                lg: 'text-[32px]',
                sm: 'text-sm',
            },
            fontWeight: {
                default: 'font-bold',
                sm: 'font-medium',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            radius: 'default',
            fontSize: 'default',
            fontWeight: 'default',
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            fontSize,
            fontWeight,
            radius,
            asChild = false,
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        fontSize,
                        fontWeight,
                        radius,
                        className,
                    }),
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
