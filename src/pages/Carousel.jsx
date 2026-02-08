import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Carousel.css';

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function RowCarousel({ title, items }) {
  const scrollerRef = useRef(null);
  const [stepPx, setStepPx] = useState(0);
  const [index, setIndex] = useState(0);

  // measure one-card step (card width + gap) so arrows move ONE card smoothly
  const measureStep = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const first = scroller.querySelector(".carousel-card");
    if (!first) return;

    const styles = getComputedStyle(scroller);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;

    // width of the actual rendered card
    const cardWidth = first.getBoundingClientRect().width;

    setStepPx(cardWidth + gap);
  };

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [items.length]);

  const maxIndex = useMemo(() => {
    // max scroll index depends on how many full steps fit in scrollWidth
    const scroller = scrollerRef.current;
    if (!scroller || stepPx <= 0) return Math.max(0, items.length - 1);

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    return Math.max(0, Math.round(maxScrollLeft / stepPx));
  }, [items.length, stepPx]);

  const syncIndexFromScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller || stepPx <= 0) return;

    const i = Math.round(scroller.scrollLeft / stepPx);
    setIndex(clamp(i, 0, maxIndex));
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // keep index correct when user swipes on mobile
    const onScroll = () => syncIndexFromScroll();

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [stepPx, maxIndex]);

  const scrollToIndex = (i) => {
    const scroller = scrollerRef.current;
    if (!scroller || stepPx <= 0) return;

    const next = clamp(i, 0, maxIndex);
    scroller.scrollTo({ left: next * stepPx, behavior: "smooth" });
    setIndex(next);
  };

  const prev = () => scrollToIndex(index - 1);
  const next = () => scrollToIndex(index + 1);

  return (
    <section className="row">
      <div className="row__top">
        <h2 className="row__title">{title}</h2>

        <div className="row__controls">
          <button
            type="button"
            className="row__btn"
            onClick={prev}
            disabled={index <= 0}
            aria-label={`Previous in ${title}`}
          >
            ‹
          </button>
          <button
            type="button"
            className="row__btn"
            onClick={next}
            disabled={index >= maxIndex}
            aria-label={`Next in ${title}`}
          >
            ›
          </button>
        </div>
      </div>

      <div className="row__viewport">
        <div ref={scrollerRef} className="row__scroller">
          {items.map((card) => (
            <article key={card.id} className="card carousel-card">
              <div className="card-img">
                {card.img ? (
                  <img src={card.img} alt={card.title} loading="lazy" />
                ) : (
                  <div className="card-img__placeholder" aria-hidden="true" />
                )}
              </div>

              <div className="card-body">
                <p className="label">{card.eyebrow}</p>
                <Link to={card.href} className="card-title">
                  {card.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogCarousel({ rows }) {
  if (!rows?.length) return null;

  return (
    <div className="rows">
      {rows.map((row) => (
        <RowCarousel key={row.id} title={row.title} items={row.items} />
      ))}
    </div>
  );
}