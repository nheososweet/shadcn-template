"use client";

import { toast } from "sonner";

export interface ToastingProps {
    message: string;
    type: 'success' | 'error' | 'warning';
    closeButton?: boolean;
    duration?: number;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export const Toasting = ({ message, type, closeButton = false, duration = 3000, position = 'bottom-right', icon, style, className }: ToastingProps) => {

    return toast(message, {
        action: {
            label: 'Close',
            onClick: () => toast.dismiss(),
        },
        duration,
        position,
        icon: icon || (type === 'success' ? '🟢' : type === 'error' ? '🔴' : '🟡'),
        style: style || {
            backgroundColor: type === 'success' ? '#ffffff' : type === 'error' ? '#FF0000' : 'rgba(255, 255, 255, 0.8)',
            color: type === 'success' ? '#008000' : type === 'error' ? '#ffffff' : '#ffffff',
        },
        className: className || 'rounded-md',
        closeButton,
    });
}