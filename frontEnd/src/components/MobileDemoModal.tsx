import { useEffect } from "react";

type MobileDemoModalProps = {
  demoUrl: string;
  demoQrImage: string;
  onClose: () => void;
  projectTitle?: string;
};

export function MobileDemoModal({ demoUrl, demoQrImage, onClose, projectTitle }: MobileDemoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-demo-modal-title"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="modal-card mobile-demo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close app demo">
          ×
        </button>
        <h3 id="mobile-demo-modal-title" className="mobile-demo-modal-title">
          {projectTitle ?? "App demo"}
        </h3>
        <p className="mobile-demo-modal-instruction">
          Please scan the QR code with your phone to visualize the app demo.
        </p>
        <div className="mobile-demo-modal-qr-wrap">
          <img src={demoQrImage} alt="QR code for app demo" className="mobile-demo-modal-qr" />
        </div>
        
        <div className="muted mobile-demo-modal-browser-hint">
        <p>You can also preview the mobile version in your browser. Click “Open in browser” and follow the steps below.</p>
          <ol>
            <li>
              <strong>Open Developer Tools</strong>
              <ul>
                <li>
                  Chrome / Edge / Brave / Opera: <kbd>Ctrl + Shift + I</kbd>
                </li>
                <li>
                  Firefox: <kbd>Ctrl + Shift + I</kbd>
                </li>
                <li>
                  Safari (Mac): <kbd>Cmd + Option + I</kbd>
                </li>
              </ul>
            </li>
            <li>
              <strong>Enable Device / Responsive Mode</strong>
              <ul>
                <li>
                  Chrome / Edge / Brave / Opera: <kbd>Ctrl + Shift + M</kbd>
                </li>
                <li>
                  Firefox: <kbd>Ctrl + Shift + M</kbd>
                </li>
                <li>
                  Safari (Mac): <kbd>Cmd + Shift + M</kbd>
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className="mobile-demo-modal-link-section">
          <a
            className="project-btn project-btn-link"
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in browser
          </a>
        </div>
      </div>
    </div>
  );
}
