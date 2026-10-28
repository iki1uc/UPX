const ACHSEN = {
  bio: GATE,      // z.B. 81
  input: WLOCH,   // z.B. 27  
  output: NCLINK  // z.B. 9
};
// 2268 = (GATE + WLOCH + NCLINK) × (729 + 27) / x ?
// → braucht Normierung, sonst explodiert es
