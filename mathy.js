function lerp(v0,v1,t) {
  return (1 - t) * v0 + t * v1;
}

function clamp(a,b,c) {
	if (a<b) a=b
	if (a>c) a=c
	return a
}