import { auth } from "express-oauth2-jwt-bearer";

const checkJwt = auth({
  audience: "http://localhost:8000",
  issuerBaseURL: "https://todo-0ktbc4ol4s0x7mfe.us.auth0.com/",
  tokenSigningAlg: "RS256",
});

export { checkJwt };
