function shout(string) { 
  return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) { 
  return string.toLowerCase();
}
"Hello!".toLowerCase();

function logShout(string){
  console.log (string.toUpperCase());
}

function logWhisper(string){
  console.log (string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
  const cantAnswer = "I can't hear you!";
  const yesAnswer = "YES INDEED!";
  const eatAnswer = "I would love to!";
  if (string.toLowerCase(string) === string) {
    return cantAnswer;
  }
  else if (string.toUpperCase(string) === string) {
    return yesAnswer;
  }
  else if ("Let's have dinner together!" === string) {
    return eatAnswer;
  }
}