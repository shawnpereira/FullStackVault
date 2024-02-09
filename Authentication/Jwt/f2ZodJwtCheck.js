const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPass = "12345"; // Servers Private key for encryption

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function validateInputAndGenerateJwt(email, password) {
  //safeParse returns success or fail if it matches the schema of zod
  const emailResponse = emailSchema.safeParse(email);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!emailResponse.success || !passwordResponse.success) {
    return null;
  } else {
    // if the input is valid, proceed further and create the token for email by fusion of jwtPass of server using the sign function
    const signature = jwt.sign({ emailResponse }, jwtPass);
    return signature;
  }
}

// decoding
function decodeJwt(token) {
  const decode = jwt.decode(token);
  if (decode) {
    console.log(decode);
    return true;
  } else {
    return false;
  }
}
// verifying
function verifyJwt(token) {
  let verification = true;
  try {
    jwt.verify(token, jwtPass);
  } catch (e) {
    verification = false;
  }
  return verification;
}

const ans1 = validateInputAndGenerateJwt(
  "shawn@gmail.com",
  "asjfbasjfbjasbfkj"
);
console.log(ans1);

const ans2 = decodeJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbFJlc3BvbnNlIjp7InN1Y2Nlc3MiOnRydWUsImRhdGEiOiJzaGF3bkBnbWFpbC5jb20ifSwiaWF0IjoxNzA2OTYzNTc5fQ.XaUOL5R7l6iTogalB-IzxtZ_WMUh0h0VPfOlj9VpoWw"
);
console.log(ans2);

const ans3 = verifyJwt(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbFJlc3BvbnNlIjp7InN1Y2Nlc3MiOnRydWUsImRhdGEiOiJzaGF3bkBnbWFpbC5jb20ifSwiaWF0IjoxNzA2OTYzNTc5fQ.XaUOL5R7l6iTogalB-IzxtZ_WMUh0h0VPfOlj9VpoWw"
);

console.log(ans3);
