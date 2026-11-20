/**
 * PHI guard: the website must never store patient information.
 * This is a deliberately cautious pattern check on free text; a match blocks the submission.
 */
const PHI_PATTERNS: RegExp[] = [
  /\b\d{3}-\d{2}-\d{4}\b/, // US Social Security number
  /\b(ssn|social security (number|no\.?|#))\b/i,
  /\b(dob|d\.o\.b\.?|date of birth)\b/i,
  /\b(mrn|medical record (number|no\.?|#))\b/i,
  /\b(member|subscriber|policy) (id|number|no\.?|#)\s*[:#]?\s*[a-z0-9-]{5,}/i,
];

export function containsLikelyPhi(...texts: Array<string | undefined>): boolean {
  return texts.some((text) => !!text && PHI_PATTERNS.some((re) => re.test(text)));
}

export const PHI_BLOCK_MESSAGE =
  "Your message looks like it contains patient information (for example an SSN, date of birth or record number). Please remove it and send again — patient details are never needed here and must not be shared outside a signed BAA.";
