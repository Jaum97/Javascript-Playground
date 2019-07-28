//https://hacks.mozilla.org/2019/07/firefox-68-bigints-contrast-checks-and-the-quantumbar/

» 2 ** 53
9007199254740992

» (2 ** 53) + 1
9007199254740992  // <- Shouldn't that end in 3?

» (2 ** 53) + 2
9007199254740994


» 2n ** 53n  // <-- the "n" means BigInt
9007199254740992n

» (2n ** 53n) + 1n
9007199254740993n  // <- It ends in 3!

» (2n ** 53n) + 2n
9007199254740994n
