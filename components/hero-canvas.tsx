"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode, useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => null,
});

type DeviceNavigator = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

class CanvasErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {}

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function mediaMatches(query: string) {
  try {
    return window.matchMedia?.(query).matches ?? false;
  } catch {
    return false;
  }
}

function canRenderHeroCanvas() {
  if (typeof window === "undefined" || typeof document === "undefined") return false;

  const deviceNavigator = window.navigator as DeviceNavigator;
  const lowPower =
    (deviceNavigator.connection?.saveData ?? false) ||
    (deviceNavigator.hardwareConcurrency !== undefined &&
      deviceNavigator.hardwareConcurrency <= 4) ||
    (deviceNavigator.deviceMemory !== undefined && deviceNavigator.deviceMemory <= 4);

  if (mediaMatches("(prefers-reduced-motion: reduce)") || mediaMatches("(pointer: coarse)") || lowPower) {
    return false;
  }

  try {
    const testCanvas = document.createElement("canvas");
    return Boolean(testCanvas.getContext("webgl2") || testCanvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroCanvas() {
  const [eligible, setEligible] = useState(false);

  useEffect(() => {
    setEligible(canRenderHeroCanvas());
  }, []);

  if (!eligible) return null;

  return (
    <CanvasErrorBoundary>
      <HeroScene />
    </CanvasErrorBoundary>
  );
}
