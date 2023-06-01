#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

// cosine colors guide
// https://github.com/Erkaman/glsl-cos-palette
vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  float t = vTexCoord.x * vTexCoord.y * 4.0;
  vec3 uAColor = vec3(0.99, 0.35, 0.35);
  vec3 uBColor = vec3(0.12, 0.235, 0.55);
  vec3 uCColor =vec3(0.129, 0.95, 0.99);
  vec3 uDColor = vec3(0.23, 0.50, 0.25);

  vec3 tex = cosPalette(t, uAColor, uBColor, uCColor, uDColor );

  gl_FragColor = vec4(tex, 1.0);
}