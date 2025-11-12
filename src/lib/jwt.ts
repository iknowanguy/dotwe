import { SignJWT, jwtVerify, JWTPayload } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_DOWNLOAD_SECRET || "your-fallback-secret-key"
);

export interface DownloadTokenPayload extends JWTPayload {
  email: string;
  googleId: string;
  type: "download";
}

/**
 * Generate a short-lived download token (JWT)
 * @param email User's email address
 * @param googleId User's Google ID
 * @returns JWT token string
 */
export async function generateDownloadToken(
  email: string,
  googleId: string
): Promise<string> {
  const expirySeconds = parseInt(
    process.env.DOWNLOAD_TOKEN_EXPIRY || "3600",
    10
  );

  const token = await new SignJWT({
    email,
    googleId,
    type: "download",
  } as DownloadTokenPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${expirySeconds}s`)
    .setJti(crypto.randomUUID())
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify and decode a download token
 * @param token JWT token string
 * @returns Decoded payload or null if invalid
 */
export async function verifyDownloadToken(
  token: string
): Promise<DownloadTokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    if (payload.type !== "download") {
      return null;
    }

    return payload as unknown as DownloadTokenPayload;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
