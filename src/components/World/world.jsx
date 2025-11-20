import  { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import "./world.css";

const WIDTH = 1000;
const HEIGHT = 520;

function useWorld() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    // world-atlas countries (public CDN)
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((topology) => {
        const feats = feature(topology, topology.objects.countries).features;
        setCountries(feats);
      })
      .catch((e) => console.error("Failed to load world data:", e));
  }, []);

  return countries;
}

export default function WorldMapDemo() {
  const countries = useWorld();

  // Natural Earth projection fits neatly in our viewBox
  const projection = useMemo(
    () => geoNaturalEarth1().fitSize([WIDTH, HEIGHT], { type: "Sphere" }),
    []
  );
  const path = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule10(), []);

  // helper to project (lat,lng) to svg coords
  const project = (lat, lng) => {
    const p = projection([lng, lat]);
    return { x: p[0], y: p[1] };
  };

  const arcPath = (p1, p2, lift = 0.18) => {
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx) - Math.PI / 2;
    const cx = mx + Math.cos(angle) * dist * lift;
    const cy = my + Math.sin(angle) * dist * lift;
    return `M ${p1.x} ${p1.y} Q ${cx} ${cy} ${p2.x} ${p2.y}`;
  };

  const routes = [
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Alaska → LA
    { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Alaska → Brasília
    { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },   // Brasília → Lisbon
    { start: { lat: 51.5074, lng: -0.1278 },   end: { lat: 28.6139, lng: 77.209 } },    // London → New Delhi
    { start: { lat: 28.6139, lng: 77.209 },    end: { lat: 43.1332, lng: 131.9113 } },  // New Delhi → Vladivostok
    { start: { lat: 28.6139, lng: 77.209 },    end: { lat: -1.9579, lng: 30.1127} },   // New Delhi → Kigali
  ].map((r) => {
    const p1 = project(r.start.lat, r.start.lng);
    const p2 = project(r.end.lat, r.end.lng);
    return { p1, p2, d: arcPath(p1, p2) };
  });

  return (
    <section className="world-section" data-reveal="up">
      <div className="world-header" data-reveal="up">
        <p className="world-title">
          Global{" "}
          <span className="world-title-accent">
            {"Connectivity".split("").map((ch, idx) => (
              <span key={idx} className="title-letter">{ch}</span>
            ))}
          </span>
        </p>
        <p className="world-subtitle">
          Break free from energy waste. Monitor and optimize your consumption from anywhere, 
          right from your home. Perfect for households and businesses aiming for smarter, sustainable energy use.
        </p>
      </div>

  <div className="world-map-wrapper" data-reveal="up" style={{"--reveal-delay":"120ms"}}>
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="world-map-svg"
          role="img"
          aria-label="World map with connection arcs"
        >
          <defs>
            <pattern id="dotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1.6" cy="1.6" r="1.2" fill="var(--dot)" />
            </pattern>
          </defs>

          {/* dotted background */}
          <rect width={WIDTH} height={HEIGHT} fill="url(#dotGrid)" rx="20" />

          {/* land & graticule */}
          <path d={path({ type: "Sphere" })} className="globe" />
          <path d={path(graticule)} className="graticule" />
          {countries &&
            countries.map((f, i) => (
              <path key={i} d={path(f)} className="land" />
            ))}

          {/* arcs */}
          {routes.map((r, i) => (
            <path
              key={`arc-${i}`}
              d={r.d}
              className="world-arc"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}

          {/* endpoints */}
          {routes.map((r, i) => (
            <g key={`end-${i}`}>
              <circle cx={r.p1.x} cy={r.p1.y} r="5.5" className="endpoint" />
              <circle cx={r.p2.x} cy={r.p2.y} r="5.5" className="endpoint endpoint--pulse" />
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
