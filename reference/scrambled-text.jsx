// ScrambledText — mouse-proximity character scramble effect
// Source: user provided React component using GSAP SplitText + ScrambleTextPlugin
// Note: SplitText and ScrambleTextPlugin are GSAP Club (paid) plugins.
// Vanilla JS equivalent is possible using character spans + setInterval randomization.

// Usage scenario: Apply to key headline/paragraph text where you want an interactive,
// techy, glitch-style reveal as the mouse approaches characters.
// Suitable for: Brand philosophy text, hero tagline, editorial headers.
// Expected visual: Characters randomly reassign glyphs within a radius of the cursor,
// reverting to original characters when cursor moves away.

// ===== React Version (GSAP Club) =====
/*
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  children
}) => {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const split = SplitText.create(rootRef.current.querySelector('p'), {
      type: 'chars',
      charsClass: 'char'
    });
    const chars = split.chars;

    chars.forEach(c => {
      gsap.set(c, {
        display: 'inline-block',
        attr: { 'data-content': c.innerHTML }
      });
    });

    const handleMove = e => {
      chars.forEach(c => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);
        if (dist < radius) {
          gsap.to(c, {
            overwrite: true,
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.content || '',
              chars: scrambleChars,
              speed
            },
            ease: 'none'
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove);
    return () => {
      el.removeEventListener('pointermove', handleMove);
      split.revert();
    };
  }, [radius, duration, speed, scrambleChars]);

  return <div ref={rootRef}><p>{children}</p></div>;
};
*/
