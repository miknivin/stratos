type Step = { title: string; description: string };

export function DeliverySteps({ steps }: { steps: readonly Step[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative rounded-2xl border border-ink-900/8 bg-white p-6"
        >
          <span className="text-3xl font-semibold text-brand-500/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-ink-900">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-mist-500">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
