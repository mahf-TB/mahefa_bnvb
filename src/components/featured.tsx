import React from "react"

interface FeatureItem {
  id?: string | number
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

interface FeaturedProps {
  title?: React.ReactNode
  items: FeatureItem[]
  columns?: number
  className?: string
}

export function Featured({ title, items, columns = 3, className = "" }: FeaturedProps) {
  const colsClass = columns === 1 ? "grid-cols-1" : columns === 2 ? "grid-cols-2" : "grid-cols-3"

  return (
    <section className={`py-12 ${className}`}>
      {title && <h3 className="text-2xl font-semibold mb-6">{title}</h3>}
      <div className={`grid gap-6 ${colsClass}`}>
        {items.map((it, idx) => (
          <div key={it.id ?? idx} className="rounded-lg border p-6 bg-card">
            {it.icon && <div className="mb-3 text-primary">{it.icon}</div>}
            <h4 className="font-medium">{it.title}</h4>
            {it.description && <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured
