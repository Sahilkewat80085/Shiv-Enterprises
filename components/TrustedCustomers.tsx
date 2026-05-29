import React from "react";
import fs from "fs";
import path from "path";

interface Category {
  title: string;
  icon: string;
  direction: "ltr" | "rtl";
  speed: string;
  iconColor: string;
  borderColor: string;
  items: string[];
}

const categoryMetaMap: Record<string, { icon: string; iconColor: string; borderColor: string }> = {
  "hospitals": {
    icon: "local_hospital",
    iconColor: "text-red-500 bg-red-500/10",
    borderColor: "hover:border-red-300 hover:shadow-red-500/5"
  },
  "jewellery": {
    icon: "diamond",
    iconColor: "text-amber-500 bg-amber-500/10",
    borderColor: "hover:border-amber-300 hover:shadow-amber-500/5"
  },
  "builders/architects": {
    icon: "architecture",
    iconColor: "text-blue-500 bg-blue-500/10",
    borderColor: "hover:border-blue-300 hover:shadow-blue-500/5"
  },
  "textile": {
    icon: "shopping_bag",
    iconColor: "text-emerald-500 bg-emerald-500/10",
    borderColor: "hover:border-emerald-300 hover:shadow-emerald-500/5"
  }
};

const getCategoryMeta = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("hospital") || t.includes("medical") || t.includes("clinic") || t.includes("diagnostic")) {
    return categoryMetaMap["hospitals"];
  }
  if (t.includes("jewel") || t.includes("soni")) {
    return categoryMetaMap["jewellery"];
  }
  if (t.includes("builder") || t.includes("architect")) {
    return categoryMetaMap["builders/architects"];
  }
  if (t.includes("textile") || t.includes("store") || t.includes("handloom") || t.includes("saree") || t.includes("apparel")) {
    return categoryMetaMap["textile"];
  }
  
  // Default fallback for any custom user category
  return {
    icon: "store",
    iconColor: "text-accent-gold bg-accent-gold/10",
    borderColor: "hover:border-accent-gold/30 hover:shadow-accent-gold/5"
  };
};

// Helper to duplicate array elements to ensure seamless, full-width scrolling marquee
const getRepeatedItems = (items: string[], minCount = 18): string[] => {
  if (!items || items.length === 0) return [];
  let result = [...items];
  while (result.length < minCount) {
    result = [...result, ...items];
  }
  return [...result, ...result];
};

function getParsedCustomers(): Category[] {
  try {
    const filePath = path.join(process.cwd(), "customers.txt");
    if (!fs.existsSync(filePath)) {
      console.warn(`customers.txt not found at: ${filePath}`);
      return [];
    }
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split(/\r?\n/);
    
    const categories: { title: string; items: string[] }[] = [];
    let currentCategory: { title: string; items: string[] } | null = null;
    
    for (let line of lines) {
      line = line.trim();
      if (!line) continue;
      
      // Header check: ends with colon or matches primary categories
      const isHeader = line.endsWith(":") || 
                       ["hospitals", "jewellery", "builders/architects", "textile"].includes(line.toLowerCase());
                       
      if (isHeader) {
        const title = line.replace(/:$/, "").trim();
        currentCategory = { title, items: [] };
        categories.push(currentCategory);
      } else if (currentCategory) {
        currentCategory.items.push(line);
      }
    }
    
    // Map parsed data into complete Category objects with dynamic alternating speeds and directions
    return categories.map((cat, rowIndex) => {
      const meta = getCategoryMeta(cat.title);
      const direction = rowIndex % 2 === 0 ? "ltr" : "rtl";
      
      // Select slightly different speeds so the rows scroll at organic, offset velocities
      const baseSpeed = 35 + (rowIndex * 8);
      const speed = `${baseSpeed}s`;
      
      return {
        title: cat.title,
        icon: meta.icon,
        iconColor: meta.iconColor,
        borderColor: meta.borderColor,
        direction,
        speed,
        items: cat.items
      };
    });
  } catch (error) {
    console.error("Error reading or parsing customers.txt:", error);
    return [];
  }
}

export default function TrustedCustomers() {
  const customerCategories = getParsedCustomers();

  if (customerCategories.length === 0) {
    return null;
  }

  return (
    <section className="bg-linear-to-b from-surface-container-low/30 to-surface-container-lowest py-16 md:py-24 border-b border-outline-variant/50 overflow-hidden">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-12">
        <div className="animate-fade-in-up">
          <span className="inline-block bg-accent-gold/10 text-accent-gold font-label-md px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Our Trusted Network
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4 font-bold">
            50+ Leading Establishments Trust Us
          </h2>
          <p className="font-body-md text-secondary max-w-3xl mx-auto">
            From critical healthcare units to luxury showrooms, prominent builders, and major retail hubs—we deliver high-performance security surveillance and power backup systems.
          </p>
        </div>
      </div>

      {/* Marquee Rows Container */}
      <div className="flex flex-col gap-6 relative w-full select-none">
        {customerCategories.map((cat, rowIndex) => {
          const marqueeClass = cat.direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl";
          const repeatedList = getRepeatedItems(cat.items);

          if (repeatedList.length === 0) return null;

          return (
            <div
              key={rowIndex}
              className="marquee-row relative w-full overflow-hidden mask-fade-edges py-1"
            >
              {/* Outer scrolling track */}
              <div
                className={`${marqueeClass} flex gap-4`}
                style={{
                  "--marquee-duration": cat.speed,
                } as React.CSSProperties}
              >
                {repeatedList.map((item, index) => (
                  <div
                    key={`${rowIndex}-${item}-${index}`}
                    className={`flex items-center gap-3 bg-surface-container-lowest/80 backdrop-blur-xs border border-outline-variant/20 px-5 py-3 rounded-full shadow-xs transition-all duration-300 hover:scale-105 hover:bg-surface-container-lowest hover:border-accent-gold/40 hover:shadow-md cursor-default shrink-0 ${cat.borderColor}`}
                  >
                    {/* Category Icon */}
                    <span className={`material-symbols-outlined text-lg p-1.5 rounded-full flex items-center justify-center ${cat.iconColor}`}>
                      {cat.icon}
                    </span>
                    {/* Customer Name */}
                    <span className="font-body-md text-primary font-medium pr-1">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
