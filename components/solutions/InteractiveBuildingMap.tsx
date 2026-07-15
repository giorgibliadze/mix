"use client";

import {useCallback, useEffect, useRef, useState} from "react";
import type {Route} from "next";
import {usePathname, useRouter} from "next/navigation";
import {Building2, ChevronRight, Grid2X2, Maximize2, Minus, MousePointer2, Plus, Ruler} from "lucide-react";

type MapLabels = {
  available: string;
  apartments: string;
  floorArea: string;
  viewUnits: string;
  instructionTitle: string;
  instructionText: string;
  apartmentShort: string;
};

type FloorCopy = {
  demoTitle: string;
  floorLabel?: string;
  selectedFloor?: string;
  uiLabels: string[];
  mapLabels?: MapLabels;
};

const floorPaths = [
  {id: "path10", floor: 1, apartments: 6, area: "481.2"},
  {id: "path9", floor: 2, apartments: 8, area: "620.5"},
  {id: "path8", floor: 3, apartments: 8, area: "620.5"},
  {id: "path7", floor: 4, apartments: 8, area: "620.5"},
  {id: "path6", floor: 5, apartments: 8, area: "620.5"},
  {id: "path5", floor: 6, apartments: 8, area: "620.5"},
] as const;

const fallbackLabels: MapLabels = {
  available: "Available",
  apartments: "Apartments",
  floorArea: "Floor area",
  viewUnits: "View units",
  instructionTitle: "Choose a floor",
  instructionText: "Hover over or select a floor to view its apartments.",
  apartmentShort: "units",
};

export function InteractiveBuildingMap({copy}: {copy: FloorCopy}) {
  const objectRef = useRef<HTMLObjectElement>(null);
  const cleanupRef = useRef<(() => void)[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const [activeFloor, setActiveFloor] = useState(6);
  const [zoom, setZoom] = useState(1);
  const floorLabel = copy.floorLabel ?? "Floor";
  const labels = copy.mapLabels ?? fallbackLabels;
  const activeData = floorPaths.find((item) => item.floor === activeFloor) ?? floorPaths[5];

  useEffect(() => {
    const floor = Number(new URLSearchParams(window.location.search).get("floor"));
    if (!floorPaths.some((item) => item.floor === floor)) return;
    const frame = requestAnimationFrame(() => setActiveFloor(floor));
    return () => cancelAnimationFrame(frame);
  }, []);

  const selectFloor = useCallback((floor: number) => {
    setActiveFloor(floor);
    router.replace(`${pathname}?floor=${floor}#decision` as Route, {scroll: false});
  }, [pathname, router]);

  const prepareSvg = useCallback(() => {
    cleanupRef.current.forEach((cleanup) => cleanup());
    cleanupRef.current = [];
    const svgDocument = objectRef.current?.contentDocument;
    const svg = svgDocument?.querySelector("svg");
    if (!svgDocument || !svg) return;
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    const defs = svgDocument.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
      <linearGradient id="floor-idle-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#7482b5" stop-opacity=".12" />
        <stop offset="1" stop-color="#7482b5" stop-opacity=".2" />
      </linearGradient>
      <linearGradient id="floor-hover-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#a89cff" stop-opacity=".68" />
        <stop offset="1" stop-color="#a89cff" stop-opacity=".46" />
      </linearGradient>
      <linearGradient id="floor-active-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#d1ccff" stop-opacity=".82" />
        <stop offset="1" stop-color="#d1ccff" stop-opacity=".58" />
      </linearGradient>
    `;
    svg.prepend(defs);
    const style = svgDocument.createElementNS("http://www.w3.org/2000/svg", "style");
    style.textContent = `
      #path5,#path6,#path7,#path8,#path9,#path10{
        fill:url(#floor-idle-gradient)!important;
        stroke:#7482b5!important;
        stroke-width:.7!important;
        stroke-opacity:.2!important;
        vector-effect:non-scaling-stroke;
        paint-order:stroke fill;
        cursor:pointer;
        pointer-events:all;
        mix-blend-mode:screen;
        transition:fill 200ms ease,stroke 200ms ease,stroke-opacity 200ms ease,opacity 200ms ease;
        outline:none
      }
      #path5:hover,#path6:hover,#path7:hover,#path8:hover,#path9:hover,#path10:hover,
      #path5:focus,#path6:focus,#path7:focus,#path8:focus,#path9:focus,#path10:focus{
        fill:url(#floor-hover-gradient)!important;
        stroke:#a89cff!important;
        stroke-width:1.15!important;
        stroke-opacity:.78!important
      }
      #path5[data-active-floor="true"],#path6[data-active-floor="true"],#path7[data-active-floor="true"],
      #path8[data-active-floor="true"],#path9[data-active-floor="true"],#path10[data-active-floor="true"]{
        fill:url(#floor-active-gradient)!important;
        stroke:#d1ccff!important;
        stroke-width:1.5!important;
        stroke-opacity:.96!important
      }
    `;
    svg.prepend(style);
    floorPaths.forEach(({id, floor}) => {
      const path = svgDocument.getElementById(id);
      if (!path) return;
      path.setAttribute("role", "button");
      path.setAttribute("tabindex", "0");
      path.setAttribute("aria-label", `${floorLabel} ${floor}`);
      path.setAttribute("data-floor", String(floor));
      path.setAttribute("data-active-floor", String(activeFloor === floor));
      const activate = () => selectFloor(floor);
      const keydown = (event: Event) => {
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
          keyboardEvent.preventDefault();
          activate();
        }
      };
      path.addEventListener("click", activate);
      path.addEventListener("keydown", keydown);
      cleanupRef.current.push(() => {
        path.removeEventListener("click", activate);
        path.removeEventListener("keydown", keydown);
      });
    });
  }, [activeFloor, floorLabel, selectFloor]);

  useEffect(() => {
    const svgDocument = objectRef.current?.contentDocument;
    if (!svgDocument) return;
    floorPaths.forEach(({id, floor}) => {
      const path = svgDocument.getElementById(id);
      if (path) path.setAttribute("data-active-floor", String(activeFloor === floor));
    });
  }, [activeFloor]);

  useEffect(() => () => cleanupRef.current.forEach((cleanup) => cleanup()), []);

  return <div className="solution-demo solution-building-map">
    <div className="solution-demo-bar solution-building-map-bar">
      <b>{copy.demoTitle}</b>
      <span>{labels.instructionText}</span>
    </div>

    <div className="solution-building-map-stage">
      <div className="solution-floor-list" aria-label={copy.uiLabels[0]}>
        {[...floorPaths].reverse().map((item) => <button
          key={item.floor}
          type="button"
          className={activeFloor === item.floor ? "active" : ""}
          aria-pressed={activeFloor === item.floor}
          onClick={() => selectFloor(item.floor)}
        >
          <strong>{item.floor}</strong>
          <span><b>{floorLabel}</b><small>{item.apartments} {labels.apartmentShort}</small></span>
          <ChevronRight aria-hidden="true" />
        </button>)}
      </div>

      <div className="solution-building-canvas">
        <div className="solution-building-object" style={{transform: `scale(${zoom})`}}>
          <object
            ref={objectRef}
            data="/images/solutions/construction/interactive-building-floors.svg"
            type="image/svg+xml"
            aria-label={copy.demoTitle}
            onLoad={prepareSvg}
          />
        </div>
        <div className="solution-building-guide" aria-hidden="true"><i /><span /></div>
        <div className="solution-map-instruction">
          <MousePointer2 aria-hidden="true" />
          <span><b>{labels.instructionTitle}</b><small>{labels.instructionText}</small></span>
        </div>
      </div>

      <aside className="solution-floor-details" aria-live="polite">
        <strong className="solution-floor-badge">{activeFloor} {floorLabel}</strong>
        <div className="solution-floor-stat"><Building2 aria-hidden="true" /><span><small>{floorLabel}</small><b>{labels.available}</b></span></div>
        <div className="solution-floor-stat"><Grid2X2 aria-hidden="true" /><span><small>{labels.apartments}</small><b>{activeData.apartments} {labels.apartmentShort}</b></span></div>
        <div className="solution-floor-stat"><Ruler aria-hidden="true" /><span><small>{labels.floorArea}</small><b>{activeData.area} m²</b></span></div>
        <button type="button" onClick={() => selectFloor(activeFloor)}>{labels.viewUnits}</button>
      </aside>

      <div className="solution-map-zoom" aria-label="Zoom controls">
        <button type="button" aria-label="Zoom out" onClick={() => setZoom((value) => Math.max(.85, value - .05))}><Minus /></button>
        <b>{Math.round(zoom * 100)}%</b>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom((value) => Math.min(1.2, value + .05))}><Plus /></button>
        <Maximize2 aria-hidden="true" />
      </div>
    </div>
  </div>;
}
