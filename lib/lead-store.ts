import { randomUUID } from "crypto";
import { ContactRequestInput } from "@/lib/validation";

type LeadRecord = ContactRequestInput & {
  id: string;
  status: "accepted" | "spam";
  createdAt: string;
  sourcePage: string;
  ipHash: string;
  userAgentHash: string;
};

const leads: LeadRecord[] = [];

export function saveLead(input: ContactRequestInput, metadata: { sourcePage: string; ipHash: string; userAgentHash: string }) {
  const lead: LeadRecord = {
    ...input,
    id: `crq_${randomUUID()}`,
    status: "accepted",
    createdAt: new Date().toISOString(),
    sourcePage: metadata.sourcePage,
    ipHash: metadata.ipHash,
    userAgentHash: metadata.userAgentHash
  };

  leads.push(lead);

  return lead;
}

export function getLeadCount() {
  return leads.length;
}
