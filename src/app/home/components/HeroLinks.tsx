'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export interface HeroLinkItem {
    label: string;
    value: string;
    href?: string;
    icon: any;
}

interface HeroLinksProps {
    links: HeroLinkItem[];
}

export default function HeroLinks({ links }: HeroLinksProps) {
    return (
        <div className="flex flex-col gap-3 mt-4 mb-6">
            {links.map((item, idx) => {
                const isLink = !!item.href;
                const Component = isLink ? 'a' : 'div';
                const props = isLink ? {
                    href: item.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-3 group transition-all duration-300 hover:translate-x-1"
                } : {
                    className: "flex items-center gap-3 group"
                };

                return (
                    <Component key={idx} {...props}>
                        <div className="w-8 h-8 border border-terminal-border flex items-center justify-center shrink-0 group-hover:border-phosphor/50 transition-colors">
                            <Icon name={item.icon} size={14} className="text-green-muted group-hover:text-phosphor transition-colors" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-green-muted/60 leading-none mb-0.5">
                                {item.label}
                            </span>
                            <span className={`font-mono text-xs ${isLink ? 'text-green-secondary group-hover:text-phosphor' : 'text-green-muted'} transition-colors`}>
                                {item.value}
                            </span>
                        </div>
                    </Component>
                );
            })}
        </div>
    );
}
