export function logEvent(level: "info" | "warn" | "error", eventType: string, payload: Record<string, unknown>) {
  const body = {
    timestamp: new Date().toISOString(),
    level,
    eventType,
    ...payload
  };

  if (level === "error") {
    console.error(JSON.stringify(body));
    return;
  }

  console.log(JSON.stringify(body));
}
