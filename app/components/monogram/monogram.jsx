import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 192 192"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <path fill="#FFF" d="M1 169.428c.953-.949 2.421-1.237 2.777-2.026 3.346-7.414 6.137-15.098 9.803-22.341 4.517-8.924 5.94-18.608 7.837-28.162.904-4.554 2.338-6.305 6.924-3.528 2.29-4.482 4.604-8.654 6.593-12.975 4.983-10.825 10.092-21.604 14.644-32.611C55.005 54.66 59.913 41.32 65.027 28.067c1.727-4.474 2.985-9.188 5.21-13.394 2.239-4.233 7.011-4.442 11.15-4.586 8.319-.288 16.656.022 24.982-.123 4.578-.08 7.52 2.23 9.116 6.074 5.021 12.091 9.507 24.411 14.757 36.399 5.227 11.935 11.108 23.585 16.744 35.341 1.935 4.038 4.131 7.957 5.946 12.046 1.221 2.752 3.185 3.323 5.901 3.219 3.992-.153 8.691-1.313 11.782.364 2.714 1.473 3.63 6.258 5.54 9.97l-4.346 4.12c.79 1.127 1.687 2.41 3.056 4.367h-11.851c7.544 16.746 14.778 32.72 21.918 48.735 1.284 2.88 5.06 5.367 2.056 9.136-1.268 1.591-2.956 4.058-4.458 4.062-11.224.024-22.48-.08-33.66-.975-5.058-.405-10.064-4.139-10.02-10.683.01-1.635-2.04-3.2-2.826-4.94-2.744-6.076-5.305-12.235-8.05-18.31-.467-1.035-1.5-1.813-1.464-2.64-.69-3.325-1.378-6.65-2.245-10.836-8.312.837-16.072 1.609-23.829 2.403-6.974.714-13.945 1.464-20.92 2.179-6.65.68-13.29 1.5-19.956 1.949-5.167.347-4.977 4.888-6.501 7.899-4.533 8.95-8.698 18.085-13.078 27.113-1.373 2.831-3.176 3.818-6.842 3.234-8.057-1.284-16.302-1.345-24.424-2.301-2.395-.282-4.634-1.887-7.33-2.887C1 173.286 1 171.572 1 169.428m75.871-60.425c8.717-1.007 17.457-1.847 26.139-3.093 4.32-.62 7.088-4.876 5.618-7.79-2.431-4.822-5.039-9.561-7.327-14.45-2.815-6.015-5.378-12.147-8.432-19.1l-21.595 45.606c2.324-.578 3.516-.875 5.597-1.173"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
