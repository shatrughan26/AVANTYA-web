import React from 'react';

const CloudData = () => {
  const highlights = [
    { title: "Advanced Analytics & Visualization", desc: "Complex data transformation engineered into actionable execution screens." },
    { title: "Data Governance & Security", desc: "Zero-trust verification parameters shielding enterprise intelligence silos." },
    { title: "Cloud Data Lake & Warehousing", desc: "Elastic scalability processing unstructured petabyte data pipelines effortlessly." },
    { title: "Data Ingestion & Integration", desc: "Real-time streaming layers capturing multi-origin transactions instantaneously." }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold tracking-tight text-white">Cloud & Data Systems</h3>
        <p className="text-zinc-400 font-light leading-relaxed">
          Cloud-native, infinitely scalable, and AI-powered frameworks calculated for real-time edge streaming metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <div key={index} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-blue-950/10 transition-all duration-300">
            <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
            <p className="text-zinc-500 text-xs font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudData;