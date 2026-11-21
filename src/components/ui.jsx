import { images } from '../assets/images.js';

/** An image from src/assets/images, referenced by its key. */
export function Picture({ image, alt, fit, position, className = '', eager = false }) {
  const style = {};
  if (fit) style.objectFit = fit;
  if (position) style.objectPosition = position;
  return (
    <img
      className={`picture ${className}`.trim()}
      src={images[image]}
      alt={alt}
      style={style}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

export function Tags({ items, label = 'Technologies and topics' }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function Bullets({ items }) {
  return (
    <ul className="bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const isExternal = (href) => /^https?:\/\//.test(href);

/** A link styled as a button. External links open in a new tab and say so. */
export function ButtonLink({ href, variant = 'primary', children }) {
  const external = isExternal(href);
  return (
    <a
      className={`button button--${variant}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
