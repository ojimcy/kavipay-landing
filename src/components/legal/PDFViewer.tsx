'use client';

import { Download } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  return (
    <div className="w-full bg-neutral-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-neutral-900">{title}</h1>
          <a
            href={pdfUrl}
            download
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-neutral-100 rounded-lg shadow-xl overflow-hidden border border-neutral-200">
          <div className="w-full bg-neutral-100" style={{ height: 'calc(100vh - 280px)', minHeight: '600px' }}>
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-0 bg-neutral-100"
              title={title}
              style={{ backgroundColor: '#f5f5f5' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
