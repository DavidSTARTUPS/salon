import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#1a1a1a";
  const colorDesignation = colors.designation ?? "#786559";
  const colorArrowBg = colors.arrowBackground ?? "#3b281f";
  const colorArrowFg = colors.arrowForeground ?? "#ffffff";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#1a1a1a";
  const fontSizeName = fontSizes.name ?? "2rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.95rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 7000);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, testimonialsLength, handleNext, handlePrev]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const tightGap = gap * 0.8; // Increased gap to make background images beautifully separated and visible
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;
    
    if (isActive) {
      return {
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotate(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 5,
        opacity: 0.65,
        pointerEvents: "auto",
        transform: `translateX(-${tightGap}px) translateY(12px) scale(0.9) rotate(-6deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 5,
        opacity: 0.65,
        pointerEvents: "auto",
        transform: `translateX(${tightGap}px) translateY(12px) scale(0.9) rotate(6deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: `translateX(0px) translateY(0px) scale(0.8) rotate(0deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="w-full max-w-5xl px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Images Wrapper with 3D perspective */}
        <div className="relative w-full h-[22rem] md:h-[26rem] [perspective:1000px] flex items-center justify-center" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <img
              key={testimonial.src}
              src={testimonial.src}
              alt={testimonial.name}
              style={getImageStyle(index)}
              className="absolute w-[75%] h-full object-cover rounded-3xl shadow-xl border-4 border-white/50 cursor-pointer"
              onClick={() => {
                if (index === (activeIndex - 1 + testimonialsLength) % testimonialsLength) {
                  handlePrev();
                } else if (index === (activeIndex + 1) % testimonialsLength) {
                  handleNext();
                }
              }}
            />
          ))}

          {/* Mobile Only Arrow overlaid on image edges */}
          <button
            onClick={handlePrev}
            style={{
              backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              color: colorArrowFg,
            }}
            onMouseEnter={() => setHoverPrev(true)}
            onMouseLeave={() => setHoverPrev(false)}
            className="absolute left-1 z-20 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md active:scale-95 border-none md:hidden"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Mobile Only Arrow overlaid on image edges */}
          <button
            onClick={handleNext}
            style={{
              backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              color: colorArrowFg,
            }}
            onMouseEnter={() => setHoverNext(true)}
            onMouseLeave={() => setHoverNext(false)}
            className="absolute right-1 z-20 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md active:scale-95 border-none md:hidden"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col justify-center min-h-[16rem] space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-4"
            >
              <div>
                <h3
                  className="font-bold tracking-wide uppercase"
                  style={{ color: colorName, fontSize: fontSizeName, fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {activeTestimonial.name}
                </h3>
                <p
                  className="tracking-widest uppercase font-semibold text-xs mt-1"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeTestimonial.designation}
                </p>
              </div>
              
              <p
                className="leading-relaxed text-[#1a1a1a] text-lg italic font-light pt-2"
                style={{ fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      filter: "blur(5px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.18,
                      ease: "easeInOut",
                      delay: 0.012 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Only Arrow Buttons (Positioned below the quote, left-aligned) */}
          <div className="hidden md:flex gap-4 pt-4">
            <button
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md active:scale-95 border-none"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md active:scale-95 border-none"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
