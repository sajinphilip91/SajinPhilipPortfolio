import type { Build } from "@/content/home";
import { trackBuildClick } from "@/lib/buildsTest";
import styles from "./BuildsBento.module.css";

/**
 * Slots on a 12-column, 6-row grid as [column, row, width, height]. Each tile has its own size, but all stay
 * landscape or close to square: the images are 16:9, and a tall crop cuts away half of what they show.
 */
const LAYOUTS: Record<number, [number, number, number, number][]> = {
  5: [
    [1, 1, 7, 4],
    [8, 1, 5, 2],
    [8, 3, 5, 4],
    [1, 5, 4, 2],
    [5, 5, 3, 2],
  ],
  6: [
    [1, 1, 6, 4],
    [7, 1, 6, 2],
    [7, 3, 6, 2],
    [1, 5, 3, 2],
    [4, 5, 3, 2],
    [7, 5, 6, 2],
  ],
};

/**
 * Built with AI, version 2: every build visible at once in tiles of different sizes.
 * `featured` takes the large slot and the rest follow in order, so every visit reshuffles the placement.
 */
export function BuildsBento({
  items,
  featured,
  phone = false,
}: {
  items: Build[];
  featured: number;
  /** Phones: a list of cards, one below another, picture on top and text underneath. */
  phone?: boolean;
}) {
  const order = items.map((_, i) => items[(featured + i) % items.length]);
  const slots = phone ? undefined : LAYOUTS[order.length];

  return (
    <div
      className={phone ? styles.phoneGrid : styles.grid}
      style={phone || slots ? undefined : { gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gridTemplateRows: "none" }}
      onClick={(e) => {
        const link = (e.target as HTMLElement).closest("a");
        const name = link?.closest("article")?.dataset.name;
        if (name) trackBuildClick(phone ? "phone" : "v2", name);
      }}
    >
      {order.map((b, i) => {
        const big = i === 0;
        const slot = slots?.[i];
        const area = slot ? `${slot[1]} / ${slot[0]} / span ${slot[3]} / span ${slot[2]}` : undefined;
        return (
          <article
            key={b.name}
            data-name={b.name}
            className={`${styles.tile} ${big ? styles.big : ""}`}
            style={{ background: phone ? undefined : b.tone, gridArea: area }}
          >
            {b.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={b.image}
                alt={`${b.name}: ${b.headline}`}
                className={styles.image}
                style={{ objectPosition: b.focus }}
                loading="lazy"
              />
            )}
            <div aria-hidden="true" className={styles.scrim} />
            <div className={styles.copy}>
              <p className={styles.meta}>{b.meta}</p>
              <h3 className={styles.name}>{b.name}</h3>
              <p className={styles.line}>{b.headline}</p>
              {big && <p className={styles.body}>{b.body}</p>}
              {b.primary && (
                <p className={styles.links}>
                  <a href={b.primary.href}>{b.primary.label}</a>
                  {b.secondary && <a href={b.secondary.href}>{b.secondary.label}</a>}
                </p>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
