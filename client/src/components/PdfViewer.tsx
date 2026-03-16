import { useCallback, useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const AUTO_INTERVAL = 2000;

export default function PdfViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // Measure container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
  }, []);

  // Auto-advance every 2 seconds, loop back to page 1
  useEffect(() => {
    if (numPages <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setCurrentPage((p) => (p >= numPages ? 1 : p + 1));
    }, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [numPages, paused]);

  const goTo = (page: number) => {
    setCurrentPage(page);
    // Pause auto-play on manual interaction, resume after 5s
    setPaused(true);
    setTimeout(() => setPaused(false), 5000);
  };

  const prev = () => goTo(Math.max(1, currentPage - 1));
  const next = () => goTo(currentPage >= numPages ? 1 : currentPage + 1);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* PDF page with crossfade */}
      <div className="overflow-hidden rounded-lg relative" style={{ background: "#EEEEEE" }}>
        <Document file={file} onLoadSuccess={onLoadSuccess} loading={null}>
          {containerWidth > 0 &&
            Array.from({ length: numPages }, (_, i) => (
              <div
                key={i + 1}
                style={{
                  opacity: currentPage === i + 1 ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                  position: i === 0 ? "relative" : "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                }}
              >
                <Page
                  pageNumber={i + 1}
                  width={containerWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={null}
                />
              </div>
            ))}
        </Document>
      </div>

      {/* Navigation */}
      {numPages > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-opacity hover:opacity-100 opacity-60"
            style={{ background: "rgba(255,255,255,0.85)", color: "#000" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-opacity hover:opacity-100 opacity-60"
            style={{ background: "rgba(255,255,255,0.85)", color: "#000" }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots + page number */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {Array.from({ length: numPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i + 1)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: currentPage === i + 1 ? "#2672E4" : "#D0D0CF",
                  transform: currentPage === i + 1 ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <p
            className="text-xs font-medium tracking-wide mt-2 text-center"
            style={{ color: "#999999" }}
          >
            {currentPage} / {numPages}
          </p>
        </>
      )}
    </div>
  );
}
