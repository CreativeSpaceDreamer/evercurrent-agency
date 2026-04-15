'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  EMAIL_PORTFOLIO_ITEMS,
  type EmailPortfolioCategory,
  type EmailPortfolioItem,
} from '@/data/emailPortfolio';

type GalleryTab = 'All' | EmailPortfolioCategory;

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      tabIndex={0}
      aria-label="Scrollable mobile email preview"
      className={cn(
        'mx-auto h-[720px] w-full max-w-[460px] rounded-[20px]',
        'border border-stroke bg-slate p-4 shadow-soft',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
      )}
    >
      <div className="h-full overflow-y-auto rounded-[18px] border border-stroke bg-paper">
        {children}
      </div>
    </div>
  );
}

export default function EmailGallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryTab>('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveElRef = useRef<HTMLElement | null>(null);

  const publishedItems = useMemo(
    () =>
      EMAIL_PORTFOLIO_ITEMS.filter((item) => item.status === 'published').sort(
        (a, b) => a.sort - b.sort
      ),
    []
  );

  const tabs = useMemo<GalleryTab[]>(() => {
    const categories = Array.from(new Set(publishedItems.map((item) => item.category)));
    return ['All', ...categories];
  }, [publishedItems]);

  const items = useMemo(() => {
    if (activeTab === 'All') return publishedItems;
    return publishedItems.filter((item) => item.category === activeTab);
  }, [activeTab, publishedItems]);

  const selected = useMemo<EmailPortfolioItem | null>(() => {
    if (!openId) return null;
    return publishedItems.find((item) => item.id === openId) ?? null;
  }, [openId, publishedItems]);

  const hasMobilePreview = Boolean(selected?.images.mobile);

  const openModal = (id: string) => {
    lastActiveElRef.current = document.activeElement as HTMLElement | null;
    setPreviewMode('desktop');
    setOpenId(id);
  };

  const closeModal = () => setOpenId(null);

  useEffect(() => {
    if (!openId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab') {
        const root = dialogRef.current;
        if (!root) return;

        const focusables = Array.from(
          root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastActiveElRef.current?.focus?.();
      lastActiveElRef.current = null;
    };
  }, [openId]);

  return (
    <section aria-labelledby="email-portfolio-title" className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-3xl">
          <h2
            id="email-portfolio-title"
            className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            Email portfolio examples
          </h2>
        </div>

        <div className="mt-8">
          <div
            role="tablist"
            aria-label="Email portfolio filters"
            className="inline-flex flex-wrap gap-2 rounded-2xl border border-stroke bg-slate p-2 shadow-soft"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="email-portfolio-grid"
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm font-medium transition',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
                    isActive
                      ? 'bg-ivory text-ink'
                      : 'bg-transparent text-ink-2 hover:bg-ivory/6 hover:text-ink'
                  )}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-sm text-ink-2">
            Showing <span className="font-medium text-ink">{items.length}</span> finished
            examples
          </p>
        </div>

        <div id="email-portfolio-grid" className="mt-8">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-stroke bg-slate p-6 text-sm text-ink-2 shadow-soft">
              No published examples in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-stroke bg-slate shadow-soft"
                >
                  <button
                    type="button"
                    onClick={() => openModal(item.id)}
                    className={cn(
                      'group block w-full text-left transition hover:-translate-y-0.5 hover:shadow-md',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
                    )}
                    aria-label={`Open preview: ${item.title}`}
                  >
                    <div className="aspect-[4/5] w-full bg-paper">
                      <div className="relative h-full w-full">
                        <Image
                          src={item.images.desktop}
                          alt={`${item.title} desktop preview`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </button>

                  <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full border border-stroke bg-paper px-2.5 py-1 text-xs font-medium text-ink-2">
                        {item.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => openModal(item.id)}
                        className={cn(
                          'rounded-full border border-stroke bg-slate px-3 py-1.5 text-xs font-medium text-ink-2 transition',
                          'hover:border-stone hover:text-ink',
                          'focus:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
                        )}
                      >
                        View
                      </button>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-xs font-medium text-ink-2">{item.subtitle}</p>
                    </div>
                    <p className="truncate text-sm text-ink-2">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {selected && (
          <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="email-portfolio-dialog-title"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="absolute inset-0 bg-paper/80 backdrop-blur-[2px]" />

            <div className="absolute inset-0 overflow-y-auto">
              <div className="mx-auto flex min-h-full max-w-5xl items-start justify-center px-4 py-10 sm:px-6 sm:py-14">
                <div
                  ref={dialogRef}
                  className={cn(
                    'relative w-full overflow-hidden rounded-3xl border border-stroke bg-slate shadow-lift',
                    'ring-1 ring-stroke'
                  )}
                >
                  <div className="flex items-start justify-between gap-4 border-b border-stroke px-5 py-4 sm:px-6">
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-ink-2">{selected.subtitle}</p>
                      <h3
                        id="email-portfolio-dialog-title"
                        className="mt-1 truncate text-base font-semibold text-ink sm:text-lg"
                      >
                        {selected.title}
                      </h3>
                    </div>

                    <button
                      ref={closeBtnRef}
                      type="button"
                      onClick={closeModal}
                      className={cn(
                        'inline-flex h-10 w-10 items-center justify-center rounded-full',
                        'text-ink-2 transition hover:bg-ivory/6 hover:text-ink',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
                      )}
                      aria-label="Close modal"
                    >
                      <span aria-hidden="true" className="text-xl leading-none">
                        x
                      </span>
                    </button>
                  </div>

                  <div className="grid gap-0 sm:grid-cols-5">
                    <div className="space-y-6 bg-paper px-5 py-5 sm:col-span-3 sm:px-6 sm:py-6">
                      {hasMobilePreview && (
                        <div
                          className="inline-flex rounded-xl border border-stroke bg-slate p-1"
                          role="tablist"
                          aria-label="Preview mode"
                        >
                          <button
                            type="button"
                            role="tab"
                            aria-selected={previewMode === 'desktop'}
                            className={cn(
                              'rounded-lg px-3 py-1.5 text-sm font-medium transition',
                              previewMode === 'desktop'
                                ? 'bg-ivory text-ink'
                                : 'text-ink-2 hover:bg-ivory/6 hover:text-ink'
                            )}
                            onClick={() => setPreviewMode('desktop')}
                          >
                            Desktop
                          </button>
                          <button
                            type="button"
                            role="tab"
                            aria-selected={previewMode === 'mobile'}
                            className={cn(
                              'rounded-lg px-3 py-1.5 text-sm font-medium transition',
                              previewMode === 'mobile'
                                ? 'bg-ivory text-ink'
                                : 'text-ink-2 hover:bg-ivory/6 hover:text-ink'
                            )}
                            onClick={() => setPreviewMode('mobile')}
                          >
                            Mobile
                          </button>
                        </div>
                      )}

                      {previewMode === 'desktop' || !hasMobilePreview ? (
                        <div className="overflow-hidden rounded-2xl border border-stroke bg-slate">
                          <Image
                            src={selected.images.desktop}
                            alt={`${selected.title} desktop preview`}
                            width={1200}
                            height={1800}
                            sizes="(max-width: 640px) 92vw, (max-width: 1200px) 60vw, 760px"
                            className="mx-auto h-auto w-full max-w-[1200px] object-contain"
                          />
                        </div>
                      ) : (
                        <PhoneFrame>
                          <Image
                            src={selected.images.mobile!}
                            alt={`${selected.title} mobile preview`}
                            width={900}
                            height={2200}
                            sizes="(max-width: 640px) 100vw, 460px"
                            className="block h-auto w-full object-contain"
                          />
                        </PhoneFrame>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <div className="space-y-6 px-5 py-5 sm:px-6 sm:py-6">
                        <div>
                          <p className="text-sm font-semibold text-ink">Category</p>
                          <p className="mt-2 text-sm leading-6 text-ink-2">{selected.category}</p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-ink">Description</p>
                          <p className="mt-2 text-sm leading-6 text-ink-2">
                            {selected.description}
                          </p>
                        </div>

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={closeModal}
                            className={cn(
                              'w-full rounded-2xl bg-ivory px-4 py-3 text-sm font-semibold text-ink',
                              'transition hover:bg-ivory-hover',
                              'focus:outline-none focus-visible:ring-2 focus-visible:ring-stone focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
                            )}
                          >
                            Back to gallery
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
