/**
 * RFC 4122–compliant UUID v4 generator
 * - Uses crypto.getRandomValues when available
 * - Falls back to Math.random if crypto is unavailable
 */
declare function uuidv4(): string;
export default uuidv4;
